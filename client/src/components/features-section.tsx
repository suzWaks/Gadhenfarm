import { motion, useAnimation, Variants } from "framer-motion";
import { staggerContainer, fadeInUp, slideIn, zoomIn } from "@/lib/animations";
import { ArrowRight, Droplets, Thermometer, Wind, Activity, LineChart, Lightbulb, ChevronRight, Cpu, CloudRain, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Multi-Parameter Sensing",
    description: "Comprehensive monitoring of temperature, humidity, soil moisture, CO2 levels, and light intensity to ensure optimal growing conditions.",
    icon: Thermometer,
    color: "#083932",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30",
    bgPattern: "radial"
  },
  {
    title: "Automated Actuation",
    description: "Smart control systems for irrigation, ventilation, shading, and climate control that respond automatically to changing conditions.",
    icon: Wind,
    color: "#0A4B42",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30",
    bgPattern: "linear"
  },
  {
    title: "AI Predictive Analytics",
    description: "Advanced algorithms analyze patterns to predict crop needs, optimize resource usage, and prevent potential issues before they occur.",
    icon: Cpu,
    color: "#083932",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30",
    bgPattern: "grid"
  },
  {
    title: "Water Conservation",
    description: "Optimize water usage through precise drip irrigation scheduling based on real-time soil moisture data and weather forecasts.",
    icon: CloudRain,
    color: "#0A4B42",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30",
    bgPattern: "dots"
  },
  {
    title: "Energy Optimization",
    description: "Smart power management reduces energy consumption through efficient climate control and lighting systems with renewable energy integration.",
    icon: Lightbulb,
    color: "#083932",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30",
    bgPattern: "circuit"
  },
  {
    title: "Yield Monitoring",
    description: "Track plant growth, health, and production through advanced imaging systems and data analytics to maximize crop yield.",
    icon: Activity,
    color: "#0A4B42",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30",
    bgPattern: "hexagonal"
  }
];

// Animation variants for feature cards
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }),
  hover: { 
    y: -10,
    boxShadow: "0 15px 30px rgba(11, 57, 50, 0.15), 0 5px 15px rgba(177, 217, 49, 0.08)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Animation for the icon container
const iconContainerVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: 0
    }
  }
};

export function FeaturesSection() {
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    });
  }, [controls]);
  
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="features">
      {/* Background with gradient color */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-bl from-[#0A4B42] to-[#083932]"></div>
      
      {/* Animated scanning effect */}
      <div className="absolute inset-0 w-full h-full -z-5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#B1D931]/30 to-transparent scan-y"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-[#B1D931]/30 to-transparent scan-x"></div>
      </div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 w-full h-full -z-5 opacity-20">
        {/* Hexagonal pattern */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#B1D931]/30 transform rotate-45 rotate-slow"></div>
        <div className="absolute top-40 left-40 w-40 h-40 border border-[#B1D931]/20 transform rotate-45 rotate-medium"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-[#B1D931]/30 transform rotate-45 rotate-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-[#B1D931]/5 rounded-full float-slow hidden md:block"></div>
        <div className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-[#B1D931]/5 rounded-full float-medium hidden md:block"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-[#B1D931]/5 rounded-full float-fast hidden lg:block"></div>
        
        {/* Animated dots */}
        <div className="hidden lg:block">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1.5 h-1.5 bg-[#B1D931] rounded-full pulse" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Data lines */}
        <div className="absolute top-1/4 w-full h-px bg-[#B1D931]/10 data-line-x"></div>
        <div className="absolute top-1/2 w-full h-px bg-[#B1D931]/10 data-line-x-delay"></div>
        <div className="absolute top-3/4 w-full h-px bg-[#B1D931]/10 data-line-x"></div>
        
        <div className="absolute left-1/4 h-full w-px bg-[#B1D931]/10 data-line-y-delay"></div>
        <div className="absolute left-1/2 h-full w-px bg-[#B1D931]/10 data-line-y"></div>
        <div className="absolute left-3/4 h-full w-px bg-[#B1D931]/10 data-line-y-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="inline-block relative mb-2"
          >
            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-[#083932] bg-[#B1D931] rounded-full uppercase relative z-10">
              Advanced Technology
            </span>
            <div className="absolute inset-0 bg-[#B1D931]/30 rounded-full blur-md -z-10 animate-pulse-slow"></div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white font-inter mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.2, 
              duration: 0.7,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            Smart Greenhouse Features
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20, width: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Our comprehensive solution integrates hardware and software for complete greenhouse management, optimized for Bhutanese agriculture.
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B1D931] to-transparent mx-auto"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="feature-card h-full"
            >
              <div 
                className={`p-8 rounded-xl border border-[#B1D931]/10 hover:border-[#B1D931]/50 bg-[${feature.color}]/50 hover:bg-[${feature.color}]/80 transition-all duration-500 h-full relative overflow-hidden group`}
                style={{
                  boxShadow: hoveredCard === index ? 
                    "0 10px 30px rgba(8, 57, 50, 0.3), 0 0 15px rgba(177, 217, 49, 0.15)" : 
                    "0 4px 6px rgba(8, 57, 50, 0.1)"
                }}
              >
                {/* Feature card background patterns - different for each card */}
                <div className={`absolute inset-0 opacity-5 ${feature.bgPattern === 'circuit' ? 'circuit-pattern' : 
                  feature.bgPattern === 'grid' ? 'bg-grid-pattern' : 
                  feature.bgPattern === 'dots' ? 'dots-pattern' : 
                  feature.bgPattern === 'radial' ? 'radial-pattern' : 
                  feature.bgPattern === 'hexagonal' ? 'hex-pattern' : 
                  'linear-pattern'}`}></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#B1D931]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                
                {/* Accent lines */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#B1D931] group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-[#B1D931]/40 group-hover:w-full transition-all duration-700 ease-out delay-100"></div>
                <div className="absolute top-0 right-0 h-0 w-1 bg-[#B1D931]/40 group-hover:h-full transition-all duration-700 ease-out delay-200"></div>
                <div className="absolute bottom-0 left-0 h-0 w-1 bg-[#B1D931] group-hover:h-full transition-all duration-700 ease-out delay-300"></div>
                
                {/* Icon with advanced animation */}
                <motion.div 
                  className="mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-[#0A4B42]/80 group-hover:bg-[#0A4B42] border border-[#B1D931]/30 group-hover:border-[#B1D931] transition-all duration-500 relative overflow-hidden"
                  variants={iconContainerVariants}
                >
                  <feature.icon 
                    size={28} 
                    className="text-[#B1D931] z-10 transition-all duration-500 group-hover:text-[#B1D931]" 
                  />
                  
                  {/* Animated ring around icon */}
                  <div className="absolute inset-0 w-full h-full border-2 border-[#B1D931]/0 group-hover:border-[#B1D931]/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  
                  {/* Radial gradient behind icon */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#B1D931]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Shimmer over icon */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </motion.div>
                
                {/* Content with hover animations */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold font-inter text-white mb-3 group-hover:text-[#B1D931] transition-colors duration-300">{feature.title}</h3>
                  <div className="w-10 h-0.5 bg-[#B1D931]/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#B1D931]"></div>
                  <p className="text-gray-300 mb-5 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                  
                  <div className="mt-6 group/button relative">
                    <a 
                      href="#" 
                      className="text-[#B1D931] font-medium hover:text-white transition-colors inline-flex items-center relative overflow-hidden group-hover/button:translate-x-1 transition-transform duration-300"
                    >
                      Learn more 
                      <ChevronRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover/button:ml-2 group-hover/button:transform group-hover/button:translate-x-1" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B1D931] group-hover/button:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                </div>
                
                {/* Corner accent for visual interest */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-x-4 -translate-y-4 bg-[#B1D931]/20 group-hover:bg-[#B1D931]/30 transition-colors duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Action button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="#technology" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#B1D931] to-[#B1D931]/90 text-[#083932] font-bold text-lg transition-all duration-300 hover:shadow-glow hover:scale-105 group relative overflow-hidden"
          >
            <span className="z-10 relative">Explore Our Technology</span>
            <ChevronRight className="ml-1 h-5 w-5 z-10 relative transition-transform duration-300 group-hover:translate-x-1" />
            
            {/* Animation effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
