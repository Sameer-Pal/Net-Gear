// ✅ About Us Component

import { IoCheckmarkDone } from "react-icons/io5"; // If you haven't installed react-icons, run `npm install react-icons`
import banner_img from "../assets/banner_img.jpg";

const expertisePoints = [
  "We are a professional IT consulting firm helping businesses grow with innovative solutions.",
  "We prioritize client success and offer tailored strategies to achieve business goals.",
  "Our solutions are built with the latest technologies and industry standards.",
  "We provide continuous support to ensure your business thrives in the digital age.",
  "Our team is committed to delivering measurable results and long-term growth."
];

export default function AboutUs() {
  return (
    <section
    id="about"
    className="w-screen lg:auto flex flex-col justify-center items-center  bg-gradient-to-b from-gray-100 to-white mt-4 pt-24 pb-2  "
  >
<div className="w-full max-w-screen-xl glass flex flex-col lg:flex-row shadow-none lg:shadow-lg items-center lg:justify-between mx-6 lg:mx-12 py-16 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-2xl">
<div className="w-full max-w-md  lg:mb-0">
        {/* Uncomment this and provide the correct image source */}
        <img src={banner_img} alt="Logo" className="rounded-lg shadow-lg"/>

      </div>
      <div className="g:pl-8 pt-8 lg:pt-0 text-center lg:text-left">
        <h1
          data-aos="fade-right"
          data-aos-offset="350"
          data-aos-duration="4000"
          data-aos-easing="ease-out"
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          Why Choose Us?
        </h1>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="4000"
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-500 w-16 mb-6 mx-auto lg:mx-0"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="4000"
          data-aos-easing="ease-out"
        >
          <ul className="space-y-4 text-gray-700">
            {expertisePoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start transition hover:scale-110 hover:text-blue-500 duration-300"
              >
                <IoCheckmarkDone className="text-blue-500 mr-2 mt-1 text-2xl" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  
    );
}
