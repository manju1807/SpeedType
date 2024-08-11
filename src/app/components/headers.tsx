import { BorderBeam } from '@/components/magicui/border-beam'
import { AlarmClock, ArrowBigUpDash, ChevronsUp, CircleX } from 'lucide-react'
import React from 'react'


interface HeadersProps {
  timer: number;
  mistakes: number;
  points: number;
  capslock: boolean;
}

const Headers: React.FC<HeadersProps> = ({ timer, mistakes, points, capslock }) => {
  return (
    <div className='relative flex px-2 sm:px-4 py-4 sm:py-6 w-full sm:w-fit mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <BorderBeam size={250} duration={12} delay={9} />
      <div className='flex flex-col sm:flex-row items-center sm:items-center justify-center gap-2 sm:gap-4 w-full text-sm sm:text-base'>
        <div className='flex items-center'>
          <AlarmClock className='size-4 sm:size-6 mr-1 sm:mr-2' />
          <span>Timer: {timer} secs</span>
        </div>
        <div className='flex items-center'>
          <CircleX className='size-4 sm:size-6 mr-1 sm:mr-2' />
          <span>Mistakes: {mistakes}</span>
        </div>
        <div className='flex items-center'>
          <ChevronsUp className='size-4 sm:size-6 mr-1 sm:mr-2' />
          <span>Points: {points}</span>
        </div>
        <div className='flex items-center'>
          <ArrowBigUpDash className='size-4 sm:size-6 mr-1 sm:mr-2' />
          <span>CapsLock: {capslock ? 'ON' : 'OFF'} </span>
        </div>
      </div>
    </div>
  )
}

export default Headers