import React from 'react'
import SadanIcon from '../assets/images/icon-sedans.svg'
import SuvIcon from '../assets/images/icon-suvs.svg'
import LuxuryIcon from '../assets/images/icon-luxury.svg'

function PreviewCard() {
  return (
    <div className='w-[280px] h-[620px] md:flex md:justify-center md:h-[400px] md:w-[480px]'>
        <div className='card-one'>
            <img src={SadanIcon} alt="" />
            <p className='font-bold text-2xl my-6'>SADANS</p>
            <p className='text-xs font-thin w-[28ch] leading-6'>Choose a sadan for it affordability and excellent fuel economy. Ideal for crusing in the city or for your next road trip.</p>
            <button className='bg-white text-[#e38826] p-3 mt-4 rounded-3xl px-6 text-xs md:mt-20'>Learn More</button>
        </div>
        <div className='card-two'>
            <img src={SuvIcon} alt="" />
            <p className='font-bold text-2xl my-6'>SUVS</p>
            <p className='text-xs font-thin w-[28ch] leading-6'>Take an SUV for its spacious interior, power and versatitlity. Perfect for your family vacation and off-road adventures. </p>
            <button className='bg-white text-[#006970] p-3 mt-4 rounded-3xl px-6 text-xs md:mt-20'>Learn More</button>
        </div>
        <div className='card-three'>
            <img src={LuxuryIcon} alt="" />
            <p className='font-bold text-2xl my-6'>Luxury</p>
            <p className='text-xs font-thin w-[28ch] leading-6'>Cruise in the best car brands without bloated price. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            <button className='bg-white text-[#004241] p-3 mt-4 rounded-3xl px-6 text-xs md:mt-20'>Learn More</button>
        </div>
    </div>
  )
}

export default PreviewCard