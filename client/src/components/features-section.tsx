import { motion, useAnimation } from "framer-motion";
import { staggerContainer, fadeInUp, slideIn } from "@/lib/animations";
import { ArrowRight, Droplets, Thermometer, Wind, Activity, LineChart, Lightbulb, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const features = [
  {
    title: "Multi-Parameter Sensing",
    description: "Comprehensive monitoring of temperature, humidity, soil moisture, CO2 levels, and light intensity to ensure optimal growing conditions.",
    icon: Thermometer,
    color: "bg-[#083932]",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30"
  },
  {
    title: "Automated Actuation",
    description: "Smart control systems for irrigation, ventilation, shading, and climate control that respond automatically to changing conditions.",
    icon: Wind,
    color: "bg-[#0A4B42]",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30"
  },
  {
    title: "AI Predictive Analytics",
    description: "Advanced algorithms analyze patterns to predict crop needs, optimize resource usage, and prevent potential issues before they occur.",
    icon: LineChart,
    color: "bg-[#083932]",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30"
  },
  {
    title: "Water Conservation",
    description: "Optimize water usage through precise drip irrigation scheduling based on real-time soil moisture data and weather forecasts.",
    icon: Droplets,
    color: "bg-[#0A4B42]",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30"
  },
  {
    title: "Energy Optimization",
    description: "Smart power management reduces energy consumption through efficient climate control and lighting systems with renewable energy integration.",
    icon: Lightbulb,
    color: "bg-[#083932]",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30"
  },
  {
    title: "Yield Monitoring",
    description: "Track plant growth, health, and production through advanced imaging systems and data analytics to maximize crop yield.",
    icon: Activity,
    color: "bg-[#0A4B42]",
    iconColor: "#B1D931",
    border: "border-[#B1D931]/30"
  }
];

export function FeaturesSection() {
  const controls = useAnimation();
  
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
    <section className="py-20 relative" id="features">
      {/* Background with gradient color */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-bl from-[#0A4B42] to-[#083932]"></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 w-full h-full -z-5 opacity-20">
        {/* Hexagonal pattern */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#B1D931]/30 transform rotate-45 rotate-slow"></div>
        <div className="absolute top-40 left-40 w-40 h-40 border border-[#B1D931]/20 transform rotate-45 rotate-medium"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-[#B1D931]/30 transform rotate-45 rotate-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-[#B1D931]/5 rounded-full float-slow hidden md:block"></div>
        <div className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-[#B1D931]/5 rounded-full float-medium hidden md:block"></div>
        
        {/* Animated dots */}
        <div className="hidden lg:block">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-[#B1D931] rounded-full pulse" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Data lines - more responsive */}
        <div className="absolute top-1/4 w-full h-px bg-[#B1D931]/10"></div>
        <div className="absolute top-1/2 w-full h-px bg-[#B1D931]/10"></div>
        <div className="absolute top-3/4 w-full h-px bg-[#B1D931]/10"></div>
        
        <div className="absolute left-1/4 h-full w-px bg-[#B1D931]/10"></div>
        <div className="absolute left-1/2 h-full w-px bg-[#B1D931]/10"></div>
        <div className="absolute left-3/4 h-full w-px bg-[#B1D931]/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-[#083932] bg-[#B1D931] rounded-full uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Advanced Technology
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white font-inter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Smart Greenhouse Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our comprehensive solution integrates hardware and software for complete greenhouse management, optimized for Bhutanese agriculture.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card rounded-lg"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="p-8 rounded-lg border border-[#B1D931]/10 hover:border-[#B1D931]/30 bg-[#0A4B42]/30 hover:bg-[#0A4B42]/50 transition-all duration-300 h-full relative overflow-hidden group">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#B1D931]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#B1D931]/40 group-hover:w-full transition-all duration-700 ease-out"></div>
                
                {/* Icon with animation */}
                <div className="mb-5 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-[#B1D931]/20 transition-all duration-300 relative overflow-hidden">
                  <feature.icon 
                    size={28} 
                    className="text-[#B1D931] group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </div>
                
                <h3 className="text-xl font-bold font-inter text-white mb-3 group-hover:text-[#B1D931] transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 mb-5 group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                <div className="mt-4">
                  <a href="#" className="text-[#B1D931] font-medium hover:text-white transition-colors inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
