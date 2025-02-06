import { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert("Message sent successfully!");
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gradient-to-b from-gray-900 to-black text-center text-white">
    <h2 className="text-6xl font-extrabold text-blue-600 mb-8">Contact Us</h2>
    
    <a href="mailto:contact@itconsulting.com" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
      contact@itconsulting.com
    </a>
  
    <p className="text-lg mb-8">
      <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700">
        +123 456 7890
      </a>
    </p>
  
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows="4"
      />
      <button
        type="submit"
        className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Send Message
      </button>
    </form>
  </section>
  

  );
}
