import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'
import Image from 'next/image'
import NavImg from '../../../public/icons/icon.png';

const Navbar = () => {
  return (
    <div className='container p-6 flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center justify-center'>
        <Image src={NavImg.src} alt='speedType' height={30} width={30} className='size-8 mr-2' />
        <h1 className='text-2xl font-bold antialiased align-middle tracking-tight'>SpeedType</h1>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Navbar
