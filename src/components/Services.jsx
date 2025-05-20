import { FaHome, FaBuilding, FaTree, FaWater, FaTools, FaClipboardCheck } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      
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
              Comprehensive water solutions for every need
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">Services</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaWater className="w-8 h-8 text-[#0ef]" />,
                title: "Water Quality Assessment",
                description: "Comprehensive testing of your water supply to recommend perfect solution"
              },
              {
                icon: <FaTools className="w-8 h-8 text-[#0ef]" />,
                title: "Installation & Maintenance",
                description: "Professional installation and regular maintenance services"
              },
              {
                icon: <FaClipboardCheck className="w-8 h-8 text-[#0ef]" />,
                title: "AMC Plans",
                description: "Annual Maintenance Contracts for worry-free operation"
              },
              {
                icon: <FaTools className="w-8 h-8 text-[#0ef]" />,
                title: "Filter Replacements",
                description: "Genuine replacement filters and membranes"
              },
              {
                icon: <FaWater className="w-8 h-8 text-[#0ef]" />,
                title: "Custom Solutions",
                description: "Tailored water treatment for special requirements"
              },
              {
                icon: <FaClipboardCheck className="w-8 h-8 text-[#0ef]" />,
                title: "Consultation",
                description: "Expert advice on water treatment and conservation"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-[#0ef]/20 to-blue-500/20 p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-center text-gray-900">{service.title}</h3>
                <p className="mt-2 text-center text-gray-600">{service.description}</p>
                <div className="mt-6 text-center">
                  <a
                    href="contact"
                    className="inline-block text-sm font-medium text-[#0ef] hover:text-blue-700"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">Process</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-[#0ef] to-blue-500"></div>
            <div className="space-y-12">
              {[
                {
                  title: "Assessment",
                  description: "We test your water quality and understand your requirements"
                },
                {
                  title: "Recommendation",
                  description: "Our experts suggest the perfect solution for your needs"
                },
                {
                  title: "Installation",
                  description: "Professional installation by certified technicians"
                },
                {
                  title: "Maintenance",
                  description: "Regular servicing to ensure optimal performance"
                }
              ].map((step, index) => (
                <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'} mb-8 md:mb-0`}>
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:col-start-2' : ''} flex items-center justify-center`}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#0ef] to-blue-500 text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Solutions Overview */}
            <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Water Purification</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                Solutions
              </span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaHome className="w-8 h-8 text-white" />,
                title: "Home RO Systems",
                description: "Clean water for every glass, every day",
                features: ["5-10 LPH capacity", "6-stage purification", "Compact design"],
                bg: "bg-gradient-to-r from-[#0ef] to-blue-500"
              },
              {
                icon: <FaBuilding className="w-8 h-8 text-white" />,
                title: "Commercial RO Units",
                description: "For offices, schools, hospitals, and industries",
                features: ["50-1000 LPH capacity", "Heavy-duty construction", "Auto-flush system"],
                bg: "bg-gradient-to-r from-blue-500 to-blue-700"
              },
              {
                icon: <FaTree className="w-8 h-8 text-white" />,
                title: "EcoSmart Series",
                description: "Smart, sustainable water purification",
                features: ["80% water recovery", "Energy efficient", "IoT monitoring"],
                bg: "bg-gradient-to-r from-[#0ef] to-green-500"
              }
            ].map((solution, index) => (
              <div key={index} className={`${solution.bg} text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex justify-center">
                  <div className="bg-white/20 p-4 rounded-full">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-center">{solution.title}</h3>
                <p className="mt-2 text-center opacity-90">{solution.description}</p>
                <ul className="mt-6 space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a
                    href="contact"
                    className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0ef] to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready for Pure Water Solutions?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Contact us today for a free consultation
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="contact"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </a>
            {/* <a
              href="tel:+1234567890"
              className="px-8 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Services;