import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animations";
import { ParticlesBackground } from "./ui/particles-background";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-[#083932] via-[#072f29] to-[#0a443b] overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Futuristic Graphics */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#083932] to-transparent z-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-[#B1D931]/20 opacity-30"></div>
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full border border-[#B1D931]/10 opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-[#B1D931]/30 opacity-25"></div>
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
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-[#083932] bg-[#B1D931] rounded-full uppercase"
            variants={fadeInUp}
            custom={0.1}
          >
            Smart Greenhouse Technology
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-inter mb-6 tracking-tight"
            variants={fadeInUp}
            custom={0.2}
          >
            The Future of Farming <br />
            <span className="text-[#B1D931]">For Bhutanese Agriculture</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
            variants={fadeInUp}
            custom={0.3}
          >
            Advanced IoT and AI technology delivering precise climate control, 
            real-time data analytics, and optimal growth conditions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            variants={fadeInUp}
            custom={0.4}
          >
            <a 
              href="#features" 
              className="group relative overflow-hidden bg-[#B1D931] hover:bg-[#c5ec3c] text-[#083932] font-bold py-4 px-8 rounded-md shadow-lg text-center transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Solutions 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
            <a 
              href="#booking" 
              className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-4 px-8 rounded-md shadow-lg text-center transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Tech Accents */}
      <div className="absolute bottom-10 right-10 flex gap-3 opacity-60">
        <div className="w-20 h-1 bg-[#B1D931] rounded-full"></div>
        <div className="w-10 h-1 bg-white rounded-full"></div>
        <div className="w-5 h-1 bg-[#B1D931] rounded-full"></div>
      </div>
    </section>
  );
}
