/** @format */
import Image from 'next/image';
import config from './config';
const HeaderImage = () => (
  <Image
    src={config.headerImage}
    alt='profile image in header bar'
    width={32}
    height={32}
    className='rounded-full'
  />
);
export default HeaderImage;
