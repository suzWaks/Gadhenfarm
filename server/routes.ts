import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking/Contact form endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const savedContact = await storage.createContact(validatedData);
      res.status(201).json({ success: true, data: savedContact });
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid form data" });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const savedEmail = await storage.createNewsletter(validatedData);
      res.status(201).json({ success: true, data: savedEmail });
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid email" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
