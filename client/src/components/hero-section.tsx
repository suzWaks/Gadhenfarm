import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Video/Image Background with overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/90 to-coolBlue/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1627730433351-346ef51592a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Smart greenhouse with technology overlays" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="md:max-w-3xl lg:max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.3}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-inter mb-4 tracking-tight">
            Revolutionizing Agriculture with Smart Greenhouse Automation
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Empowering Bhutanese Farmers with IoT, AI, and Automation for Optimal Crop Yields.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#about" 
              className="bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-8 rounded-lg shadow-lg text-center transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
            <a 
              href="#booking" 
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg shadow-lg text-center transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
