/** @format */

import { PropsWithChildren } from 'react';
import Headers from './_header';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='safe-h-screen'>
      <div className='w-screen'>
        <Headers />
      </div>
      {children}
    </div>
  );
};
export default Layout;
