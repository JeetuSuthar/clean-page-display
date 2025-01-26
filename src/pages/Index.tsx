const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-[#1A1F2C] to-[#2C3E50]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-down space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Experience Next-Gen Technology
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Discover our premium collection of cutting-edge electronics, from powerful laptops to innovative smartphones and smart home devices.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-gray-300">Products</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <p className="text-2xl font-bold text-white">50K+</p>
                  <p className="text-gray-300">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-up relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="Premium Laptop"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-to-b from-[#F3F4F6] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Laptops & PCs",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                description: "High-performance computing solutions"
              },
              {
                title: "Smartphones",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                description: "Latest mobile technology"
              },
              {
                title: "Accessories",
                image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
                description: "Premium gadgets and add-ons"
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Latest Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                    alt={`Latest Product ${item}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-primary font-semibold">New</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Premium Device {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Experience next-level technology with our latest innovation
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">
                Innovation Meets Excellence
              </h2>
              <p className="text-gray-200 leading-relaxed">
                We combine cutting-edge technology with elegant design to create products
                that transform the way you live and work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
                  <p className="text-gray-300">Tech Awards</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Innovation"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Premium Quality",
              "24/7 Support",
              "Lifetime Warranty",
              "Free Shipping"
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600">
                  We ensure the highest standards in everything we do
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about new products,
            special offers, and exclusive discounts.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;