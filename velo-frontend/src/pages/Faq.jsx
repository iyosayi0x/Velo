import React from 'react'
import Navbar from '../components/Navbar'
import FaqComponent from '../components/FaqComponent'
import Footer from '../components/Footer'

const Faq = () => {
     
  return (
    <div className=''>
        <Navbar/>
        <div className='mb-20'>
          <div className='my-10 md:my-14 text-center'>
              <h1 className='font-bold text-xl md:text-2xl'>Frequently Asked Questions</h1>
              <p>We have answered some common questions below, have more? <a href='mailto:velosocial1@gmail.com'>email us!</a></p>
          </div>
          <div className='w-[90%] mx-auto space-y-7'>
              <FaqComponent question="What is Velo?" answer="Velo is a social media platform where students in Africa can come and learn together by asking and answering questions from each other." />
              <FaqComponent question="Is Velo free?" answer="Of course,
              I mean, Twitter, Facebook and Instagram is free, why will Velo be different? 😂😂" />
              <FaqComponent question="How do I use Velo?" answer="You might try clicking the menu at the top and sign up 🙂" />
              <FaqComponent question="How was Velo formed?" answer="Velo was formed by a group of four teenagers during the Genz Techies hackathon ✨" />
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Faq