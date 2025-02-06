import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = async () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFC7No48upd_2BzzZOfvvsTJyq_UO5J8vU6MNFIxtqwrFWvEXEv56E_muFxyMWZk8vCfLvChuxwoP-/pub?output=csv';

        try {
            const response = await axios.get(csvUrl);
            const parsedData = parseCSV(response.data);
            console.log("Parsed Data:", parsedData); // ✅ Check column names

            setTestimonials(parsedData);
        } catch (error) {
            console.error('Error fetching CSV data:', error);
        }
    };

    function parseCSV(csvText) {
        const rows = csvText.split('\n');
        const headers = rows[0].split(',');
        return rows.slice(1).map(row => {
            const values = row.split(',');
            return headers.reduce((acc, header, index) => {
                acc[header.trim()] = values[index]?.trim(); // Trim spaces to avoid inconsistencies
                return acc;
            }, {});
        });
    }

    return (
        <section id="testimonials" className="w-screen lg:h-screen flex flex-col justify-center items-center bg-white text-gray-900 pt-8 pb-0">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:delay-200">
What Our Clients Say</h2>
        <div className="overflow-x-hidden w-[95%] rounded-lg p-4">
          <motion.div
            className="flex space-x-6"
            initial={{ x: '100%' }} // Start from the right
            animate={{ x: '-100%' }} // Move to the left
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30, // Adjust this for speed
            }}
          >
            <div className="flex flex-nowrap justify-center space-x-6 gap-8 mb-4 ">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="feature-card p-6 rounded-lg shadow-2xl bg-gradient-to-b from-white to-[#f3f4f6] transform transition-transform hover:scale-105 hover:shadow-lg w-64 h-64 sm:w-48 sm:h-48 md:w-56 md:h-56 flex flex-col justify-center items-center"
                  >
                  <h3 className="text-xl font-medium mb-4">{testimonial.Name}</h3>
                  <p className="italic text-gray-600 mb-4">"{testimonial.Review}"</p>
                  <p className="text-gray-500 text-sm">
                    <span className="font-semibold">{testimonial.Feedback}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    );
}
