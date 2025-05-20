import { FaLeaf, FaShieldAlt, FaFlask } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#0ef]/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                About VOLEM WATER
              </span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Pure water. Pure trust. Nothing else.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#0ef]/10 to-blue-500/10 p-8 rounded-xl">
            <p className="text-2xl font-medium text-gray-800 italic">
              "At Volem Water Ltd, we believe in simplicity, purity, and trust. Our mission is to provide clean, safe, and refreshing water using advanced RO technology - nothing added, nothing taken for granted. It's just water, the way it should be."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">VOLEM</span>?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaFlask className="w-8 h-8 text-[#0ef]" />,
                title: "Cutting-Edge Technology",
                description: "RO, UV, and UF purification for complete water safety"
              },
              {
                icon: <FaLeaf className="w-8 h-8 text-[#0ef]" />,
                title: "Eco-Conscious Systems",
                description: "Water recovery technology that respects the environment"
              },
              {
                icon: <FaShieldAlt className="w-8 h-8 text-[#0ef]" />,
                title: "Quality Guaranteed",
                description: "Free on-site water testing for your peace of mind"
              },
              {
                icon: <FaShieldAlt className="w-8 h-8 text-[#0ef]" />,
                title: "Dedicated Support",
                description: "Expert assistance whenever you need it"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-[#0ef]/20 to-blue-500/20 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-center text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-center text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900">
                <span className="block">Our Technology</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                  Advanced Purification
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We combine Reverse Osmosis (RO), Ultraviolet (UV), and Ultrafiltration (UF) technologies to deliver water that exceeds purity standards.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Removes 99.9% of contaminants</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Eco-friendly water recovery system</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-[#0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Smart monitoring technology</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Water purification technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0ef] to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Experience Pure Water Today
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href="contact"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Your Free Water Test
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default About;