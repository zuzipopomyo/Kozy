import React from 'react'
import Image from 'next/image'
import headCoffee from "/Users/yati/Kozy/public/head-coffee.png"
import CoffeeCup from "/Users/yati/Kozy/public/coffee-cup.png"

const HomeHeadSection = () => {
  return (
    <div className='mt-14 flex flex-col items-center justify-center'>
        <div className=''>
           <h1 className='border-t border-b py-2 text-2xl'>Kozy Cafe</h1>
           <p className="text-center">hello world</p>
        </div>
        <div className="flex jucstify-between gap-x-4 mt-10">
          <Image src={headCoffee} alt='head-coffee' width={300} height={300} className='hidden md:block'/>
          <Image src={CoffeeCup} alt='head-coffee' width={300} height={300}/>
          <Image src={headCoffee} alt='head-coffee' width={300} height={300} className='hidden md:block'/>
        </div>
        
    </div>
  )
} 

export default HomeHeadSection