import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Clock, Facebook, Instagram, Leaf, Linkedin, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate email
      newsletterSchema.parse({ email });
      
      setIsSubmitting(true);
      
      // Submit to API
      await apiRequest("POST", "/api/newsletter", { email });
      
      toast({
        title: "Successfully subscribed",
        description: "You'll now receive our newsletter updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Subscription failed",
          description: "There was an error subscribing to the newsletter. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Leaf className="text-primary h-5 w-5" />
              </div>
              <span className="ml-3 text-xl font-bold font-inter">Gaden Farm</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering Bhutanese farmers with smart greenhouse automation technology to increase yields and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-inter">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#technology" className="text-gray-300 hover:text-accent transition-colors">Technology</a></li>
              <li><a href="#case-studies" className="text-gray-300 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-accent transition-colors">Get Started</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-inter">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-accent flex-shrink-0" />
                <span className="text-gray-300">Agriculture Technology Park, Thimphu 11001, Bhutan</span>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mt-1 mr-3 text-accent flex-shrink-0" />
                <span className="text-gray-300">+975 2 333 4444</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 text-accent flex-shrink-0" />
                <span className="text-gray-300">info@greensense.bt</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3 text-accent flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-inter">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates on smart farming technology.</p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-accent focus:border-accent bg-primary-light border border-gray-600 text-white"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-dark text-primary font-bold py-2 px-4 rounded-md shadow-md transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">{isSubmitting ? "Subscribing..." : "Subscribe"}</span>
                <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} GreenSense. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
