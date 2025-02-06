export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-8 bg-gradient-to-r from-blue-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-black mb-16">
        How & Why Us
      </h2>
      <div className="flex flex-wrap max-w-screen mx-auto justify-around">
                {/* <ol className="list-decimal list-inside space-y-8"> */}
          <li className="flex items-center justify-start space-x-6 text-lg text-gray-700">
            <span className="text-4xl text-blue-500">📞</span>
            <span>Schedule a consultation</span>
          </li>
          <li className="flex items-center justify-start space-x-6 text-lg text-gray-700">
            <span className="text-4xl text-blue-500">🔍</span>
            <span>Identify business needs</span>
          </li>
          <li className="flex items-center justify-start space-x-6 text-lg text-gray-700">
            <span className="text-4xl text-blue-500">⚙️</span>
            <span>Implement solutions</span>
          </li>
          <li className="flex items-center justify-start space-x-6 text-lg text-gray-700">
            <span className="text-4xl text-blue-500">📈</span>
            <span>Continuous support</span>
          </li>
        {/* </ol> */}
      </div>
    </section>
  );
}
