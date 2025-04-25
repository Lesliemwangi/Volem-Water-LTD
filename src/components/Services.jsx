// import Navbar from './Navbar';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#0ef]/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                Our Services
              </span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Premium water solutions for every need
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Home Delivery",
                description: "Regular deliveries of our premium water straight to your home.",
                features: ["Weekly/Monthly plans", "Flexible scheduling", "Various bottle sizes"],
                price: "From $29/month"
              },
              {
                title: "Office Solutions",
                description: "Keep your team hydrated with our office water solutions.",
                features: ["Water coolers", "Bottle delivery", "Monthly maintenance"],
                price: "Custom pricing"
              },
              {
                title: "Event Water",
                description: "Premium water service for your special events.",
                features: ["Large volume delivery", "Branded bottles", "Staffed water stations"],
                price: "From $199/event"
              },
              {
                title: "Bulk Water",
                description: "Large quantities for businesses and institutions.",
                features: ["Industrial-grade purity", "Custom packaging", "Regular shipments"],
                price: "Volume discounts"
              },
              {
                title: "Water Filtration",
                description: "Installation of premium water filtration systems.",
                features: ["Whole-house systems", "Under-sink units", "Maintenance included"],
                price: "From $499"
              },
              {
                title: "Custom Branding",
                description: "Private label water for your brand.",
                features: ["Custom bottle design", "Branded labels", "Minimum orders apply"],
                price: "Request quote"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0ef]/20 to-blue-500/20 mb-4">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Features</h4>
                    <ul className="mt-2 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-2 text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="text-lg font-medium text-blue-500">{service.price}</div>
                    <a
                      href="contact"
                      className="mt-4 block w-full px-4 py-2 text-center text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#0ef] to-blue-500 hover:from-[#0df] hover:to-blue-600 shadow hover:shadow-md transition-all duration-300"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (same as homepage) */}
      {/* Footer (same as homepage) */}
    </div>
  );
};

export default Services;