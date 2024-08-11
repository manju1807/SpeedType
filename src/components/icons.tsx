import { techIcons } from '@/data/icons';
import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';

interface TechIcon {
  name: string;
  src: string;
}

const IconsList: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-row items-center justify-center w-full'>
      {techIcons.map((icon: TechIcon, index: number) => (
        <div
          key={`${icon.name}-${index}`}
          className='px-2'
        >
          <div
            className={`rounded-full p-2 ${theme === 'dark' ? 'bg-gray-800/100' : 'bg-gray-100/90'
              } transition-colors duration-200`}
          >
            <Image src={icon.src} alt={icon.name} width={40} height={40} className="size-6 md:size-8" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconsList;