import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-6">Our Location</h1>
            <p className="text-gray-600">
              Visit our flagship store and experience our products in person
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Tech Street
                  <br />
                  Silicon Valley
                  <br />
                  California, 94025
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 8:00 PM
                  <br />
                  Saturday: 10:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567
                  <br />
                  Email: info@techelite.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Store Location"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;