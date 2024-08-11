'use client';

import IconsList from '@/components/icons';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import React, { useState } from 'react'

const Alert = () => {

  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
        <AlertDialogContent className='flex flex-col items-center text-center'>
          <AlertDialogHeader className='flex flex-col items-center'>
            <AlertDialogTitle className='antialiased pointer-events-none text-xl/6'>Hey folks!👋</AlertDialogTitle>
            <AlertDialogDescription className='pointer-events-none antialiased text-md flex flex-col items-center space-y-6'>
              <span className='text-sm'>SpeedType is Built using the following:</span>
              <IconsList />
              <p className="text-center">Click below or start typing for focus.</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col items-center">
            <AlertDialogAction onClick={handleClose} className='border relative bg-black/90 text-muted-foreground hover:text-muted'>
              <BorderBeam />
              Start Game 🚀
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </div>
    </AlertDialog>
  )
}

export default Alert
