const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-[#1A1F2C] to-[#2C3E50]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-down space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                TechHub Electronics
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Your premier destination for premium electronics. Explore our curated collection of laptops, smartphones, and cutting-edge gadgets.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <p className="text-2xl font-bold text-white">15+</p>
                  <p className="text-gray-300">Brands</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <p className="text-2xl font-bold text-white">1000+</p>
                  <p className="text-gray-300">Products</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-up relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
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
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Laptops",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                description: "MacBooks, Gaming Laptops, Ultrabooks"
              },
              {
                title: "Smartphones",
                image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
                description: "Latest iPhones, Samsung, Google Pixel"
              },
              {
                title: "Audio Devices",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                description: "Premium Headphones & Earbuds"
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
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "MacBook Pro M2",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
                description: "Latest Apple Silicon, 14-inch Liquid Retina XDR display"
              },
              {
                name: "iPhone 15 Pro",
                image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
                description: "A17 Pro chip, Titanium design, 48MP camera"
              },
              {
                name: "Sony WH-1000XM5",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                description: "Industry-leading noise cancellation"
              },
              {
                name: "iPad Pro",
                image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
                description: "M2 chip, 12.9-inch Liquid Retina XDR display"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-primary font-semibold">Featured</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
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
                Visit Our Store
              </h2>
              <p className="text-gray-200 leading-relaxed">
                Experience our products in person at our flagship store. Our expert staff
                is ready to help you find the perfect device for your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">20+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">5</h3>
                  <p className="text-gray-300">Store Locations</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
                alt="Our Store"
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
              "Expert Staff",
              "Premium Products",
              "Multiple Locations",
              "After-Sales Support"
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

      {/* Store Hours Section */}
      <section className="py-20 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Store Hours
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit us at our stores during business hours to experience our products firsthand.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span>10:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span>11:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>12:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;