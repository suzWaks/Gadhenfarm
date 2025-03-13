import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Leaf, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#", isActive: true },
  { name: "About", href: "#about", isActive: false },
  { name: "Services", href: "#services", isActive: false },
  { name: "Technology", href: "#technology", isActive: false },
  { name: "Case Studies", href: "#case-studies", isActive: false },
  { name: "Blog", href: "#blog", isActive: false }
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="text-accent h-5 w-5" />
              </div>
              <span className="ml-3 text-xl font-bold text-primary font-inter">GreenSense</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                className={`${link.isActive ? 'text-primary' : 'text-gray-600'} hover:text-accent font-medium transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <a 
              href="#booking" 
              className="hidden md:block bg-accent hover:bg-accent-dark text-primary font-bold py-2 px-6 rounded-lg shadow-md transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              type="button" 
              className="md:hidden text-gray-600 hover:text-primary focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.href} 
                    className={`block px-3 py-2 rounded-md text-base font-medium ${link.isActive ? 'text-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#booking" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
