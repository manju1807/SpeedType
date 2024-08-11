import localFont from 'next/font/local';

const manrope = localFont({
  src: [
    {
      path: '../../../public/fonts/Manrope/Manrope-VariableFont_wght.ttf',
      style: 'normal'
    }
  ],
  variable: '--font-manrope'
});

export default manrope;