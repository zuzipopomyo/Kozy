import { ShoppingCart } from 'lucide-react';
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface DataProps{
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData;
}
const CoffeeCarouseList = ({ data }: { data: DataProps }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <Image src={data.image} alt={data.name} width={200} height={200} className=""/>
      </div>

      <div className="flex items-center justify-center gap-x-4 mt-2">
      <div className="flex flex-col justify-around gap-x-4">
      <p className=''>{data.description}</p>
      <p className='text-amber-900'>{data.price} $</p>
      </div>

      <div className="flex flex-col justify-arouned gap-y-5">
  
        <ShoppingCart/>
        <h1 className='text-amber-900'>{data.name}</h1>
      </div>
      </div>
      

  </div>
  )
}

export default CoffeeCarouseList