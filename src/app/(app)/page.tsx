/** @format */

import Image from 'next/image';
import { type ReactNode } from 'react';
import clsx from 'clsx';
import theme from '@/src/theme';
import AnimatedText from '@/src/components/AnimatedText';
import ownerData from '@/src/app.owner.json';
import PopoutTransition from '@/src/components/PopoutTransition';
import SocialIcon from '@/src/components/icons/SocialIcon';
import MailIcon from '../../components/icons/MailIcon';

const Home = () => {
  return (
    <HomeContainer>
      <div>
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
    <div className='flex space-x-8 mt-20'>
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
    'text-4xl',
    'whitespace-pre',
    'leading-[1.75]',
    'mb-4'
  );
  return (
    <div className='text-left'>
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
    <Image
      src={'/images/profile-min.png'}
      alt='My Profile Image'
      width={350}
      height={350}
      priority={false}
      className='rounded-full'
    />
  );
};

const HomeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='h-screen flex items-center justify-between'>
        {children}
      </div>
    </div>
  );
};
export default Home;
