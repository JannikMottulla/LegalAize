import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "SpendDesk has transformed how we manage our company spending. The platform is intuitive and saves us hours every week. We can't imagine running our finance operations without it.",
    author: "Sarah Johnson",
    role: "TechCorp",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
  },
  {
    quote:
      "By using SpendDesk, I save both time and money managing company expenses. The automated workflows have eliminated manual processes, making everything smoother for our team.",
    author: "Michael Chen",
    role: "GrowthCo",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop",
  },
  {
    quote:
      "SpendDesk is one of my favorite tools for financial management. I love having access to real-time data and being able to make informed decisions quickly.",
    author: "Emma Rodriguez",
    role: "ScaleUp",
    image:
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <div className="text-white container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
          Loved by users worldwide
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Join thousands of companies transforming their spending processes
        </p>
      </motion.div>

      <div className="relative w-full flex flex-col gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              y: [0, 10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className="bg-gray-900/90 rounded-lg shadow-lg flex-col gap-4"
          >
            <div className="p-6">
              <p className="font-medium text-white text-md">
                {testimonial.author}
              </p>
              <div className="flex items-center">
                <span className="text-xs text-white/50">
                  {testimonial.role}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed text-sm mt-2">
                {testimonial.quote}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
