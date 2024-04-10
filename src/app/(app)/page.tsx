/** @format */

import Image from 'next/image';
import { type ReactNode } from 'react';
import clsx from 'clsx';
import theme from '@/src/utils/constants/theme';
import AnimatedText from '@/src/components/AnimatedText';
import ownerData from '@/src/app.owner.json';
import PopoutTransition from '@/src/components/PopoutTransition';
import SocialIcon from '@/src/components/icons/SocialIcon';
import MailIcon from '../../components/icons/MailIcon';

const Home = () => {
  return (
    <HomeContainer>
      <div className='mt-8'>
        <TextSection />
        <SocialIcons />
      </div>
      <PortraitImage />
    </HomeContainer>
  );
};
const mappableLength = Object.keys(ownerData.social).length;
const textAnimationDuartion = 3;
const socialIconAnimationsDuration = 0.4;
const SocialIcons = () => {
  const { social } = ownerData;

  return (
    <div className='flex space-x-8 pt-20'>
      {Object.entries(social).map(([key, value], index) => (
        <PopoutTransition
          key={index}
          delay={textAnimationDuartion + socialIconAnimationsDuration * index}
          duration={socialIconAnimationsDuration}
        >
          <SocialIcon name={key} id={value} key={`social-${key}`} />
        </PopoutTransition>
      ))}
      <PopoutTransition
        delay={
          mappableLength * socialIconAnimationsDuration + textAnimationDuartion
        }
      >
        <MailIcon />
      </PopoutTransition>
    </div>
  );
};

const TextSection = () => {
  const greetingStyle = clsx(
    theme.palette.text.primary,
    'text-2xl',
    'md:text-4xl',
    'sm:text-3xl',
    'whitespace-pre',
    'leading-[2rem]',
    'md:leading-[3.5rem]',
    'pb-4'
  );
  return (
    <div className='text-center md:text-left'>
      <AnimatedText
        className={greetingStyle}
        text={"G'day I'm Alex.\nA fullstack developer"}
        duration={3}
        hideCursorAfterAnimation={true}
      />
    </div>
  );
};
const PortraitImage = () => {
  return (
    <div>
      <Image
        src={'/images/profile-min.png'}
        alt='My Profile Image'
        width={350}
        height={350}
        priority={false}
        className='rounded-full mx-auto w-[200px] h-[200px] lg:w-auto lg:h-auto'
      />
    </div>
  );
};

const HomeContainer = ({ children }: { children: ReactNode }) => {
  const mobileStyle = clsx('justify-center', 'flex-col-reverse', 'mx-8');
  const desktopStyle = clsx('sm:justify-between sm:flex-row');
  return (
    <div className='max-w-screen-lg mx-auto'>
      <div
        className={`flex h-screen items-center ${mobileStyle} ${desktopStyle} `}
      >
        {children}
      </div>
    </div>
  );
};
export default Home;
