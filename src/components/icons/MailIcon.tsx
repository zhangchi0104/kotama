/** @format */

'use client';

import { BaseProps } from '@/src/utils/typings';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';
import { socialIconColor, socialIconSize } from './common';

const MailIcon: FC<BaseProps> = () => {
  const iconStyle = clsx(
    socialIconSize,
    socialIconColor,
    'p-2'
    // 'rounded-full'
  );
  return (
    <button className='w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center'>
      <FontAwesomeIcon icon={faEnvelope} className={iconStyle} />
    </button>
  );
};
export default MailIcon;
