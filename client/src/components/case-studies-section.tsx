import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Star } from "lucide-react";

const caseStudies = [
  {
    name: "Paro Valley Farms",
    type: "Vegetable Production",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    quote: "GreenSense has revolutionized our greenhouse operations. We've seen a 40% increase in tomato yields and reduced our water usage by 30%. The system alerts us to potential issues before they affect our crops.",
    author: {
      name: "Jigme Dorji",
      title: "Farm Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    metrics: [
      { value: "40%", label: "Yield Increase" },
      { value: "30%", label: "Water Saved" }
    ]
  },
  {
    name: "Thimphu Cooperative",
    type: "Seedling Nursery",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    quote: "The predictive analytics have been game-changing for our seedling nursery. We've reduced labor costs by 25% and achieved a 90% success rate in germination. The remote monitoring allows us to manage our operation efficiently.",
    author: {
      name: "Sonam Wangmo",
      title: "Cooperative Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    metrics: [
      { value: "25%", label: "Labor Reduction" },
      { value: "90%", label: "Germination Rate" }
    ]
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how our smart greenhouse solutions are transforming agriculture across Bhutan.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="relative h-64">
                <img 
                  src={study.image}
                  alt={study.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold font-inter">{study.name}</h3>
                  <p>{study.type}</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {Array(Math.floor(study.rating)).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                    {study.rating % 1 > 0 && (
                      <div className="relative">
                        <Star className="h-5 w-5 text-accent" />
                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(study.rating % 1) * 100}%` }}>
                          <Star className="h-5 w-5 text-accent fill-accent" />
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="ml-2 text-gray-600">{study.rating.toFixed(1)} rating</p>
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "{study.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={study.author.image}
                    alt={study.author.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-primary">{study.author.name}</p>
                    <p className="text-gray-600 text-sm">{study.author.title}</p>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-lightBlue rounded-lg p-4 text-center">
                      <h4 className="text-3xl font-bold text-primary">{metric.value}</h4>
                      <p className="text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
