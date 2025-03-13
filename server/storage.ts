import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  newsletters, type Newsletter, type InsertNewsletter
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter methods
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private userId: number;
  private contactId: number;
  private newsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.userId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    
    // Ensure null values for optional fields if they're undefined
    const contact: Contact = { 
      ...insertContact,
      message: insertContact.message || null,
      farmSize: insertContact.farmSize || null,
      package: insertContact.package || null, 
      id, 
      createdAt: new Date()
    };
    
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Newsletter methods
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterId++;
    
    // Check if email already exists
    const existingNewsletter = Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === insertNewsletter.email
    );
    
    if (existingNewsletter) {
      return existingNewsletter;
    }
    
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
