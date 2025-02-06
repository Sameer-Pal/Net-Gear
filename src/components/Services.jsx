import { IoLaptop, IoBarChart, IoLockClosed, IoCloud } from "react-icons/io5";  // Import the necessary icons for the services

export default function Services() {
  return (
    <section id="services" className="py-16 px-8 text-center bg-gray-900">
    <h2 className="text-3xl font-semibold text-blue-600 mb-10">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Software Development Service */}
      <div className="feature-card p-6 rounded-lg bg-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
        <div className="flex items-center justify-center mb-4 text-blue-500">
          <IoLaptop className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Software Development</h3>
        <p className="text-gray-600">Custom software solutions to meet your business needs.</p>
      </div>
  
      {/* Business Intelligence Service */}
      <div className="feature-card p-6 rounded-lg bg-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
        <div className="flex items-center justify-center mb-4 text-blue-500">
          <IoBarChart className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Business Intelligence</h3>
        <p className="text-gray-600">Turn data into actionable insights for better decision-making.</p>
      </div>
  
      {/* Cybersecurity Service */}
      <div className="feature-card p-6 rounded-lg bg-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
        <div className="flex items-center justify-center mb-4 text-blue-500">
          <IoLockClosed className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Cybersecurity</h3>
        <p className="text-gray-600">Secure your business with advanced cybersecurity measures.</p>
      </div>
  
      {/* Cloud Solutions Service */}
      <div className="feature-card p-6 rounded-lg bg-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
        <div className="flex items-center justify-center mb-4 text-blue-500">
          <IoCloud className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud Solutions</h3>
        <p className="text-gray-600">Flexible cloud solutions to support your business growth.</p>
      </div>
    </div>
  </section>
  
  );
}
