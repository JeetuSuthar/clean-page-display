import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
            <p className="text-gray-600 mb-12">
              Leading the way in electronic innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to provide cutting-edge electronic products that enhance people's
                lives while maintaining the highest standards of quality and innovation.
                Our commitment to excellence drives everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Our Mission"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Innovation First",
              "Quality Assured",
              "Customer Focused",
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-accent rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{value}</h3>
                <p className="text-gray-600">
                  Our core values define who we are and how we operate
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;