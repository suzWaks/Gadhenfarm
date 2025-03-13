import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Multi-Parameter Sensing",
    description: "Comprehensive monitoring of temperature, humidity, soil moisture, CO2 levels, and light intensity to ensure optimal growing conditions.",
    image: "https://images.unsplash.com/photo-1595212483126-2379269e5ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-primary"
  },
  {
    title: "Automated Actuation",
    description: "Smart control systems for irrigation, ventilation, shading, and climate control that respond automatically to changing conditions.",
    image: "https://images.unsplash.com/photo-1626397318708-6a19b366930b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-coolBlue"
  },
  {
    title: "AI Predictive Analytics",
    description: "Advanced algorithms analyze patterns to predict crop needs, optimize resource usage, and prevent potential issues before they occur.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-accent"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-4">Smart Greenhouse Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our comprehensive solution integrates hardware and software for complete greenhouse management.</p>
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
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="h-48 bg-primary relative">
                <img 
                  src={feature.image}
                  alt={feature.title} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} to-transparent opacity-70`}></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-inter">{feature.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4">
                  <a href="#" className="text-accent font-medium hover:text-accent-dark transition-colors inline-flex items-center">
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
