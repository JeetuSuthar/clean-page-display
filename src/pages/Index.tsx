const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-primary to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-down">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Future of Technology
              </h1>
              <p className="text-gray-200 text-lg mb-6">
                Discover our premium collection of cutting-edge electronics
              </p>
            </div>
            <div className="animate-fade-up relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Featured Product"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
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
              <div
                key={item}
                className="group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                Innovation at Its Finest
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We combine cutting-edge technology with elegant design to create products
                that transform the way you live and work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">5+ Years</h3>
                  <p className="text-sm text-gray-600">Industry Experience</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">50K+</h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Innovation"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Premium Quality",
              "24/7 Support",
              "Lifetime Warranty",
              "Free Shipping",
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 hover:bg-accent rounded-xl transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{item}</h3>
                <p className="text-gray-600">
                  We ensure the highest standards in everything we do
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 bg-gradient-to-r from-accent to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Latest Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                    alt={`Latest Product ${item}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Smart Device {item}</h3>
                <p className="text-sm text-gray-600">
                  Next-generation technology at your fingertips
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;