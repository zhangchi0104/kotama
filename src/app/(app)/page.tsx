/** @format */

import Image from "next/image";
import { type ReactNode } from "react";
import clsx from "clsx";
import AnimatedText from "@/src/components/AnimatedText";
import ownerData from "@/src/app.owner.json";
import PopoutTransition from "@/src/components/PopoutTransition";
import SocialIcon from "@/src/components/icons/SocialIcon";

const Home = () => {
  return (
    <HomeContainer>
      <div className="mt-8">
        <TextSection />
        <SocialIcons />
      </div>
      <PortraitImage />
    </HomeContainer>
  );
};
const textAnimationDuartion = 3;
const socialIconAnimationsDuration = 0.4;
const SocialIcons = () => {
  const { social } = ownerData;

  return (
    <div className="flex space-x-8 pt-20 items-center justify-center sm:justify-start">
      {Object.entries(social).map(([key, value], index) => (
        <PopoutTransition
          key={index}
          delay={textAnimationDuartion + socialIconAnimationsDuration * index}
          duration={socialIconAnimationsDuration}
        >
          <SocialIcon name={key} id={value} key={`social-${key}`} />
        </PopoutTransition>
      ))}
    </div>
  );
};

const TextSection = () => {
  const greetingStyle = clsx(
    "text-2xl",
    "md:text-4xl",
    "sm:text-3xl",
    "whitespace-pre",
    "leading-[2rem]",
    "md:leading-[3.5rem]",
    "pb-4",
  );
  return (
    <div className="text-center sm:text-left">
      <AnimatedText
        className={greetingStyle}
        text={"G'day I'm Alex.\nA fullstack developer"}
        duration={3}
        hideCursorAfterAnimation
      />
    </div>
  );
};
const PortraitImage = () => {
  return (
    <div>
      <Image
        src={"/images/profile-min.png"}
        alt="My Profile Image"
        width={350}
        height={350}
        priority={false}
        className="rounded-full mx-auto w-[240px] h-[240px] md:w-auto md:h-auto"
      />
    </div>
  );
};

const HomeContainer = ({ children }: { children: ReactNode }) => {
  const mobileStyle = clsx("justify-center", "flex-col-reverse", "mx-8");
  const desktopStyle = clsx("sm:justify-between sm:flex-row");
  return (
    <div className="max-w-screen-lg mx-auto">
      <div
        className={`flex safe-h-screen items-center ${mobileStyle} ${desktopStyle} `}
      >
        {children}
      </div>
    </div>
  );
};
export default Home;
