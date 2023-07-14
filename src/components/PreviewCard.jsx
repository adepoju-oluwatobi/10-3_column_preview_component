import React from 'react'
import SadanIcon from '../assets/images/icon-sedans.svg'
import SuvIcon from '../assets/images/icon-suvs.svg'
import LuxuryIcon from '../assets/images/icon-luxury.svg'

function PreviewCard() {
  return (
    <div className='w-[280px] h-{3265px]'>
        <div className='card-one h-[380px]'>
            <img src={SadanIcon} alt="" />
            <p className='font-bold text-2xl my-6'>SADANS</p>
            <p className='text-xs font-thin w-[28ch] leading-6'>Choose a sadan for it affordability and excellent fuel economy. Ideal for crusing in the city or for your next road trip.</p>
            <button className='bg-white text-[#e38826] p-3 my-6 rounded-3xl px-6'>Learn More</button>
        </div>
        <div className='card-two h-[420px]'>
            <img src={SuvIcon} alt="" />
            <p>SUVS</p>
            <p>Take an SUV for its spacious interior, power and versatitlity. Perfect for your family vacation and off-road adventures. </p>
            <button>Learn More</button>
        </div>
        <div className='card-three h-[420px]'>
            <img src={LuxuryIcon} alt="" />
            <p>Luxury</p>
            <p>Cruise in the best car brands without bloated price. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default PreviewCard