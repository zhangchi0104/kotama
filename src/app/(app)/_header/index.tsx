/** @format */
import clsx from "clsx";
import HeaderMenu from "./HeaderMenu";
import SignInOut from "./SignInOut";
import ModeToggle from "./DarkModeButton";
import MobileHeaderMenu from "./MobileHeaderMenu";
const headerContainerStyle = clsx(
  "absolute",
  "w-full",
  "foreground",
  "px-4",
  "pt-2",
  "flex",
  "items-center",
  "justify-between",
);
const Header = () => {
  return (
    <header id="header" className={headerContainerStyle}>
      <div className="md:hidden">
        <MobileHeaderMenu className="md:hidden" />
      </div>
      <HeaderMenu className="items-center justify-start flex-row hidden md:flex" />
      <div className="flex items-center">
        <ModeToggle className="mr-4" />
        <SignInOut className="w-5" />
      </div>
    </header>
  );
};
export default Header;
