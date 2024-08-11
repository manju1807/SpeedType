import reactSVG from '@/public/icons/react.svg';
import nextjsSVG from '@/public/icons/nextjs.svg';
import typescriptSVG from '@/public/icons/typescript.svg';
import framerSVG from '@/public/icons/framer.svg';
import tailwindCssSVG from '@/public/icons/tailwind-css.svg';
import visualStudioSVG from '@/public/icons/visual-studio.svg';

interface TechIcon {
  name: string;
  src: string;
}

export const techIcons: TechIcon[] = [
  { name: 'React', src: reactSVG },
  { name: 'Next.js', src: nextjsSVG },
  { name: 'TypeScript', src: typescriptSVG },
  { name: 'Framer', src: framerSVG },
  { name: 'Tailwind CSS', src: tailwindCssSVG },
  { name: 'Visual Studio', src: visualStudioSVG }
];