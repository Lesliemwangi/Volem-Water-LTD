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
                href="#products"
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

      {/* Features Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Premium Water Products</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                Pure Hydration
              </span>
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
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
                quote: "The purest water I've ever tasted. VOLEM has transformed my daily hydration.",
                author: "Sarah Johnson",
                role: "Health Coach"
              },
              {
                quote: "Our office switched to VOLEM and the difference in water quality is remarkable.",
                author: "Michael Chen",
                role: "CEO, TechStart"
              },
              {
                quote: "I can actually taste the difference. My family won't drink anything else now.",
                author: "Emma Rodriguez",
                role: "Mother of Three"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-blue-500 text-2xl mb-4">"</div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-blue-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                  VOLEM WATER LTD.
                </span>
              </a>
              <p className="mt-2 text-blue-300">Just Water</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Navigation</h3>
                <div className="mt-4 space-y-2">
                  <a href="/" className="text-blue-300 hover:text-white block">Home</a>
                  <a href="about" className="text-blue-300 hover:text-white block">About</a>
                  <a href="services" className="text-blue-300 hover:text-white block">Services</a>
                  <a href="contact" className="text-blue-300 hover:text-white block">Contact</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Legal</h3>
                <div className="mt-4 space-y-2">
                  <a href="#" className="text-blue-300 hover:text-white block">Privacy</a>
                  <a href="#" className="text-blue-300 hover:text-white block">Terms</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Connect</h3>
                <div className="mt-4 space-y-2">
                  <a href="#" className="text-blue-300 hover:text-white block">Instagram</a>
                  <a href="#" className="text-blue-300 hover:text-white block">Twitter</a>
                  <a href="#" className="text-blue-300 hover:text-white block">Facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} VOLEM WATER LTD. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;