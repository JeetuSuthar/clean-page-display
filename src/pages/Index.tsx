import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-r from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                Future of Technology
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Discover our premium collection of cutting-edge electronics
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Featured Product"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt={`Product ${item}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">Premium Device {item}</h3>
                <p className="text-gray-600 mt-2">
                  Experience next-generation technology
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Premium Quality",
              "Expert Support",
              "Lifetime Warranty",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{item}</h3>
                <p className="text-gray-600">
                  We ensure the highest standards in everything we do
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                For over a decade, we've been at the forefront of technological innovation,
                bringing you the most advanced and reliable electronic products.
                Our commitment to excellence and customer satisfaction drives everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Our Story"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;