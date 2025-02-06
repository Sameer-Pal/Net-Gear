
import React from 'react'

import AboutUs from "../components/AboutUs";
import HowItWorks from "../components/HowItWorks"
import  Services  from "../components/Services"
import ContactUs from "../components/ContactUs"
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
    <AboutUs />
    <Testimonials />
    <Services />
    <HowItWorks />
    <ContactUs />

    
  </div>
  )
}
