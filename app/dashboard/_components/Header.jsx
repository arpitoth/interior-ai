"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { useContext } from 'react'
import { Button } from '@/components/ui/button'

function Header() {
    const {userDetail, setUserDetail} = useContext(UserDetailContext)
  return (
    <div className='p-5 shadow-md flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
            <h2 className='text-xl font-bold'>Interior AI</h2>
        </div>

        <Button variant="ghost" className='rounded-full text-primary'>Buy More Credits</Button>

        <div className='flex items-center gap-7'>
            <div className='flex items-center gap-2 p-1 bg-slate-200 px-3 rounded-full'>
                <Image src={'/credit.png'} alt='credit' width={20} height={20}/>
                <h2>{userDetail?.credits}</h2>
            </div>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header