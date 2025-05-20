// import Navbar from './Navbar';

const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* <Navbar /> */}
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0ef]/10 to-blue-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                  VOLEM WATER LTD.
                </span>
                <span className="block text-blue-800 text-xl md:text-2xl mt-4">Just Water</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-lg text-gray-600">
                Pure, refreshing water sourced from nature's finest springs. Experience the difference today.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <a
                  href="/services"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#0ef] to-blue-500 hover:from-[#0df] hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Our Products
                </a>
                <a
                  href="contact"
                  className="px-8 py-3 border border-blue-500 text-base font-medium rounded-full text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0ef] opacity-10 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 opacity-10 rounded-full filter blur-3xl"></div>
          </div>
        </section>
  
        {/* Welcome Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                  Welcome to Volem Water
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Volem Water Ltd, we believe in simplicity, purity, and trust. Our mission is to provide clean, safe, and refreshing water using advanced RO technology - nothing added, nothing taken for granted. It's just water, the way it should be.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Why Volem?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Cutting-Edge RO, UV, and UF Technology</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Eco-Conscious Water Recovery Systems</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Hassle-Free Installation & Servicing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Free On-Site Water Testing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Dedicated Customer Support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="bg-gradient-to-br from-[#0ef]/10 to-blue-500/10 rounded-xl p-8 h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Volem Water Purification System"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="products" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Our Premium Water Products</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                  Pure Hydration
                </span>
              </h2>
            </div>
            <div className="mt-18 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Spring Water",
                  description: "Sourced from untouched mountain springs, naturally filtered through rock formations.",
                  icon: "💧"
                },
                {
                  name: "Mineral Water",
                  description: "Rich in essential minerals for optimal hydration and health benefits.",
                  icon: "🪨"
                },
                {
                  name: "Alkaline Water",
                  description: "Perfect pH balanced water for those seeking premium hydration.",
                  icon: "⚖️"
                }
              ].map((feature, index) => (
                <div key={index} className="pt-6 pb-8 px-6 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "Volem's system gave our family peace of mind. Pure water and excellent support!",
                  author: "Grace .N.",
                  location: "Nairobi"
                },
                {
                  quote: "The EcoSmart RO saved us water and money. Perfect for our school.",
                  author: "Principal Oketch",
                  location: "Kisumu"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <div className="text-blue-500 text-2xl mb-4">"</div>
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-blue-500 text-sm">{testimonial.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;