/** @format */

import { FC } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBilibili,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { socialIconColor, socialIconSize } from "./common";
type SocialIconMappings = {
  [key: string]: {
    url: (id: string) => string;
    icon: FC<{ className?: string }>;
    bgColor: string;
  };
};
const socialIconMappings: SocialIconMappings = {
  github: {
    url: (id: string) => `https://github.com/${id}`,
    icon: ({ className }) => (
      <FontAwesomeIcon icon={faGithub} className={className} />
    ),
    bgColor: "bg-github",
  },
  linkedin: {
    url: (id: string) => `https://linkedin.com/in/${id}`,
    icon: ({ className }) => (
      <FontAwesomeIcon icon={faLinkedinIn} className={className} />
    ),
    bgColor: "bg-linkedin",
  },
  bilibili: {
    url: (id: string) => `https://space.bilibili.com/${id}`,
    icon: ({ className }) => (
      <FontAwesomeIcon icon={faBilibili} className={className} />
    ),
    bgColor: "bg-bilibili",
  },
};

type SocialIconProps = {
  name: string;
  className?: string;
  id: string;
};

const SocialIcon: FC<SocialIconProps> = ({ name, className, id }) => {
  const userStlyes = className?.split(" ") ?? [];
  if (!(name in socialIconMappings)) {
    throw new Error("Invalid social icon name");
  }
  const { icon: Icon, url, bgColor } = socialIconMappings[name];
  const iconContainerStyle = clsx(
    [...userStlyes],
    bgColor,
    "rounded-full",
    "flex items-center justify-center",
    "p-2 w-10 h-10",
  );
  const iconStyle = clsx(socialIconColor, socialIconSize);
  return (
    <div className={iconContainerStyle}>
      <a
        href={url(id)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <Icon className={iconStyle} />
      </a>
    </div>
  );
};

export default SocialIcon;
