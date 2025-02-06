
import React from 'react'

import AboutUs from "../components/AboutUs"; // ✅ Correct for default export
import HowItWorks from "../components/HowItWorks"
import  Services  from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import ContactUs from "../components/ContactUs"
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
    <AboutUs />
    <Testimonials />
    <Services />
    <WhyChooseUs />
    <HowItWorks />
    <ContactUs />

    
  </div>
  )
}
