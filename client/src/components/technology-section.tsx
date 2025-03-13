import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { 
  Thermometer, Droplets, Sun, Sprout, Fan, 
  Wifi, Server, Radio, Database, ShieldCheck, 
  Smartphone, Monitor, Brain, LineChart, 
  Microchip, Satellite, Cog, HardDrive, Globe 
} from "lucide-react";

const hardwareComponents = [
  {
    icon: <Microchip className="text-white" />,
    title: "ESP32 Microcontrollers",
    description: "Dual-core processors with built-in Wi-Fi and Bluetooth connectivity."
  },
  {
    icon: <Satellite className="text-white" />,
    title: "Sensor Arrays",
    description: "Precision environmental monitors for temperature, humidity, soil conditions, and more."
  },
  {
    icon: <Cog className="text-white" />,
    title: "Actuator Systems",
    description: "Motors, pumps, and relays to control irrigation, ventilation, and other greenhouse systems."
  },
  {
    icon: <HardDrive className="text-white" />,
    title: "Edge Computing",
    description: "Raspberry Pi gateway for local data processing and system management."
  }
];

const softwareFramework = [
  {
    icon: <Smartphone className="text-white" />,
    title: "Mobile Application",
    description: "React Native cross-platform app for Android and iOS with real-time monitoring and control."
  },
  {
    icon: <Globe className="text-white" />,
    title: "Web Dashboard",
    description: "Next.js web application with advanced analytics and administration features."
  },
  {
    icon: <Database className="text-white" />,
    title: "Cloud Infrastructure",
    description: "Scalable MongoDB database and Docker containerization for reliability and performance."
  },
  {
    icon: <Brain className="text-white" />,
    title: "AI Engine",
    description: "Machine learning models for predictive analytics and optimization algorithms."
  }
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-4">Our Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge IoT architecture designed for reliability and performance.</p>
        </div>
        
        {/* System Architecture Diagram */}
        <motion.div 
          className="bg-lightBlue rounded-xl p-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-primary font-inter mb-6 text-center">System Architecture</h3>
          <div className="relative h-96">
            <div className="grid grid-cols-5 grid-rows-3 gap-4 h-full">
              {/* Perception Layer */}
              <div className="col-span-5 bg-white rounded-lg p-4 border border-coolBlue shadow-md">
                <h4 className="text-lg font-bold text-primary mb-2">Perception Layer</h4>
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-coolBlue rounded-full flex items-center justify-center mx-auto">
                      <Thermometer className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">Temperature</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-coolBlue rounded-full flex items-center justify-center mx-auto">
                      <Droplets className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">Humidity</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-coolBlue rounded-full flex items-center justify-center mx-auto">
                      <Sun className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">Light</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-coolBlue rounded-full flex items-center justify-center mx-auto">
                      <Sprout className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">Soil Moisture</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-coolBlue rounded-full flex items-center justify-center mx-auto">
                      <Fan className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">Actuators</p>
                  </div>
                </div>
              </div>
              
              {/* Network Layer */}
              <div className="col-span-5 bg-white rounded-lg p-4 border border-primary shadow-md">
                <h4 className="text-lg font-bold text-primary mb-2">Network Layer</h4>
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Wifi className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">Wi-Fi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Server className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">MQTT</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Radio className="text-white h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm">GSM</p>
                  </div>
                </div>
              </div>
              
              {/* Application Layer */}
              <div className="col-span-5 grid grid-cols-3 gap-4">
                {/* Middleware Layer */}
                <div className="bg-white rounded-lg p-4 border border-accent shadow-md">
                  <h4 className="text-lg font-bold text-primary mb-2">Middleware</h4>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <Database className="text-primary h-5 w-5" />
                      </div>
                      <p className="mt-2 text-sm">Data Processing</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <ShieldCheck className="text-primary h-5 w-5" />
                      </div>
                      <p className="mt-2 text-sm">Security</p>
                    </div>
                  </div>
                </div>
                
                {/* Application Layer */}
                <div className="bg-white rounded-lg p-4 border border-accent shadow-md">
                  <h4 className="text-lg font-bold text-primary mb-2">Application</h4>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <Smartphone className="text-primary h-5 w-5" />
                      </div>
                      <p className="mt-2 text-sm">Mobile App</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <Monitor className="text-primary h-5 w-5" />
                      </div>
                      <p className="mt-2 text-sm">Web Dashboard</p>
                    </div>
                  </div>
                </div>
                
                {/* Business Layer */}
                <div className="bg-white rounded-lg p-4 border border-accent shadow-md">
                  <h4 className="text-lg font-bold text-primary mb-2">Business</h4>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <Brain className="text-primary h-5 w-5" />
                      </div>
                      <p className="mt-2 text-sm">AI Analytics</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <LineChart className="text-primary h-5 w-5" />
                      </div>
                      <p className="mt-2 text-sm">Reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Hardware & Software Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary font-inter mb-6">Hardware Components</h3>
              <ul className="space-y-4">
                {hardwareComponents.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary font-inter mb-6">Software Framework</h3>
              <ul className="space-y-4">
                {softwareFramework.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-coolBlue rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
