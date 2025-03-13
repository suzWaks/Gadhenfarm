import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowRight, Droplets, Thermometer, Wind, Activity, LineChart, Lightbulb } from "lucide-react";

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
  return (
    <section className="py-20 relative" id="features">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img 
          src="/images/features-bg.svg" 
          alt="Technology background" 
          className="w-full h-full object-cover"
        />
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
              className={`${feature.color} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${feature.border} backdrop-blur-sm bg-opacity-80`}
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="p-8">
                <div className="mb-5 w-14 h-14 rounded-full flex items-center justify-center bg-white/10">
                  <feature.icon size={28} style={{ color: feature.iconColor }} />
                </div>
                <h3 className="text-xl font-bold font-inter text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-5">{feature.description}</p>
                <div className="mt-4">
                  <a href="#" className="text-[#B1D931] font-medium hover:text-white transition-colors inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
