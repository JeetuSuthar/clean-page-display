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
            <h1 className="text-4xl font-bold text-primary mb-6">Visit Our Store</h1>
            <p className="text-gray-600">
              Experience our premium electronics in person at our flagship store
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-accent rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Store Location</h3>
                <p className="text-gray-600">
                  123 Tech Street
                  <br />
                  Silicon Valley
                  <br />
                  California, 94025
                </p>
              </div>
              
              <div className="bg-accent rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-secondary">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-secondary">11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-secondary">12:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                  <p className="text-gray-600">Email: info@techhub.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[600px] rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282711668897!2d-122.08374688439792!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1530544018565"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;