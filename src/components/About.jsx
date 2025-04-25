// import Navbar from './Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#0ef]/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                About VOLEM
              </span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Our journey to bring you the purest water on earth
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900">
                <span className="block">Our Story</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                  Since 2010
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in the pristine mountains where water flows purest, VOLEM WATER LTD. began with a simple mission: to deliver nature's perfect hydration to everyone.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                What started as a small local operation has grown into a nationally recognized brand, but we've never compromised on our core values of purity, sustainability, and quality.
              </p>
              <div className="mt-8">
                <a
                  href="contact"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#0ef] to-blue-500 hover:from-[#0df] hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
                >
                  Connect With Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-auto"
                  src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Mountain spring water source"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0ef] opacity-20 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Purity",
                description: "We source only from protected springs with rigorous testing at every stage.",
                icon: "🔍"
              },
              {
                title: "Sustainability",
                description: "Eco-friendly packaging and responsible water sourcing practices.",
                icon: "🌱"
              },
              {
                title: "Community",
                description: "Supporting local communities near our water sources.",
                icon: "🤝"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-[#0ef]/20 to-blue-500/20 text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet The Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              The passionate people behind VOLEM WATER
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Maria Garcia",
                role: "Head of Sustainability",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "James Wilson",
                role: "Operations Director",
                image: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-64 object-cover" src={person.image} alt={person.name} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-blue-500 mt-1">{person.role}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-[#0ef]">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#0ef]">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (same as homepage) */}
    </div>
  );
};

export default About;