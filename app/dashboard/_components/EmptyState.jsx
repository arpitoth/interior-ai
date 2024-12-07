import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function EmptyState() {
  return (
    <div className='flex items-center justify-center flex-col mt-10'>
        <Image src={'/placeholder.jpg'} alt='placeholder' width={400} height={400}/>
        <h2 className='font-medium text-xl text-gray-500 text-center'>Create new AI Interior Design for your room</h2>
        <Button className='mt-5'>+ Redesign Room</Button>
    </div>
  )
}

export default EmptyState