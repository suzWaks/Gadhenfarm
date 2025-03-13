import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { LineChart, Bot, Wrench, Smartphone } from "lucide-react";

const valueProps = [
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Real-Time Monitoring",
    description: "Monitor your greenhouse conditions 24/7 with precision sensors and real-time alerts.",
    borderColor: "border-primary"
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "AI-Driven Decision Support",
    description: "Optimize your crop yield with predictive analytics and AI-powered recommendations.",
    borderColor: "border-accent"
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Predictive Maintenance",
    description: "Reduce downtime with proactive alerts and maintenance scheduling before issues occur.",
    borderColor: "border-coolBlue"
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Remote Control",
    description: "Control your greenhouse environment from anywhere using our secure mobile application.",
    borderColor: "border-primary"
  }
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-4">Transforming Greenhouse Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our smart system brings cutting-edge technology to traditional farming practices.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl shadow-md p-8 border-t-4 ${prop.borderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className={`text-${prop.borderColor.split('-')[1]} text-4xl mb-4`}>
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-primary font-inter mb-3">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
