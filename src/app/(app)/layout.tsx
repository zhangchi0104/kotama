/** @format */

import { PropsWithChildren } from "react";
import Headers from "./_header";
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Headers />
      {children}
    </div>
  );
};
export default Layout;
