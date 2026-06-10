import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Typography } from '@material-tailwind/react'

const About = () => {
  return (
    <>
      <Header/>
      <div className='pl-14 py-14'>
        <Typography className='text-[#7C7892] text-3xl text-center font-semibold fontquicksand'>About Us</Typography>
        <div className='pt-5'>
          <Typography className=' text-[#7C7892] text-md text-center font-medium fontquicksand'>Handmade Aesthetics is where creativity becomes connection — through handmade gifts,
             thoughtful journals, and <br/>keepsakes that speak from the heart. Built on a love for meaningful 
              storytelling, we believe art isn't <br/>just meant to be seen — it's meant to be felt, cherished, and 
             gifted with love.</Typography>
        </div>
      </div>

      <div className='bg-[#7C7892]'>
        <div className='py-5'>
        <div className='flex gap-6 m-10'>
          <div className='w-2/6'>
          <img src='./src/assets/ab.png'/>
          </div>
          <div >
            <Typography className='text-[#ffffff] text-3xl font-semibold fontquicksand'>Our Story</Typography>
            <div className='pt-5'>
              <Typography className=' text-[#ffffff] text-md font-normal fontquicksand'>Handmade Aesthetics began in 2025 as a quiet corner of creativity — a way to slow down, make something by hand, and pour love into the little things. What started as a personal passion 
                soon grew into a heartfelt brand, where gifts carry stories, and details speak louder than words.
              <br/><br/>Founded by Srishti in Ranchi, Handmade Aesthetics was born from a love for handwritten letters, pressed florals, and the joy of meaningful gifting. 
              With every journal spread, phone case, and carefully wrapped package, the goal has always been the same — to help people feel seen, celebrated, and deeply connected.
              <br/><br/>This journey has been shaped by community, creativity, and a whole lot of glue, ribbons, and late-night inspiration. 💌</Typography>
            </div>
          </div>
          </div>
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default About