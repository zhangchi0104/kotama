/** @format */
import Image from 'next/image';
const PortraitImage = () => {
  return (
    <Image
      src={'/images/profile-min.png'}
      alt='My Profile Image'
      width={350}
      height={350}
      priority={false}
      className='rounded-full mx-auto w-[240px] h-[240px] md:w-auto md:h-auto'
    />
  );
};

export default PortraitImage;
