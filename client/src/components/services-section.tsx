import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from "@/lib/animations";
import { Cpu, Smartphone, CheckCircle, Brain } from "lucide-react";

const hardwareItems = [
  {
    title: "ESP32 Microcontrollers",
    description: "Powerful, energy-efficient controllers that manage your greenhouse automation system."
  },
  {
    title: "Multi-Parameter Sensors",
    description: "High-precision sensors for temperature, humidity, soil moisture, CO2, and light levels."
  },
  {
    title: "Smart Actuators",
    description: "Automated control for irrigation valves, ventilation fans, shade screens, and lighting."
  },
  {
    title: "Energy Management",
    description: "Solar power integration and energy monitoring for sustainable operation."
  }
];

const softwareItems = [
  {
    title: "Mobile Application",
    description: "User-friendly app for farmers to monitor and control their greenhouse from anywhere."
  },
  {
    title: "Web Dashboard",
    description: "Comprehensive analytics and management system for detailed monitoring and control."
  },
  {
    title: "AI-Powered Insights",
    description: "Machine learning algorithms that optimize growing conditions and provide recommendations."
  },
  {
    title: "Notification System",
    description: "Real-time alerts for critical conditions, maintenance needs, and system updates."
  }
];

const aiItems = [
  {
    title: "Crop Growth Modeling",
    description: "AI-driven models predict crop development and yield based on environmental conditions."
  },
  {
    title: "Resource Optimization",
    description: "Intelligent scheduling of water, fertilizer, and energy usage to minimize waste."
  },
  {
    title: "Early Detection",
    description: "Identify potential issues like disease, pest infestations, or equipment failures before they become problems."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive automation solutions tailored for Bhutanese greenhouse farming.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={fadeInLeft}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Cpu className="text-white h-6 w-6" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-primary font-inter">Hardware Integration</h3>
              </div>
              <ul className="space-y-4">
                {hardwareItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={fadeInRight}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-coolBlue rounded-full flex items-center justify-center">
                  <Smartphone className="text-white h-6 w-6" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-primary font-inter">Software Applications</h3>
              </div>
              <ul className="space-y-4">
                {softwareItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        {/* AI & Predictive Analytics Section */}
        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              className="p-8"
              variants={fadeInLeft}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Brain className="text-primary h-6 w-6" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-primary font-inter">AI & Predictive Analytics</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our advanced AI system transforms raw sensor data into actionable insights, helping farmers make informed decisions and optimize their operations.
              </p>
              <ul className="space-y-4">
                {aiItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="bg-primary relative"
              variants={fadeInRight}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b9d07eb25b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Analytics Dashboard" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h4 className="text-xl font-bold mb-4">Intelligent Decision-Making</h4>
                  <p className="mb-6">Our AI processes millions of data points to generate precise recommendations for your specific crops and conditions.</p>
                  <a href="#" className="inline-block py-3 px-6 bg-accent text-primary font-bold rounded-lg shadow-md hover:bg-accent-light transition-all">
                    See the Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
