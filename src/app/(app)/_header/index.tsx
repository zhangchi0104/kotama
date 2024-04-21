/** @format */
import clsx from "clsx";
import HeaderMenu from "./HeaderMenu";
import SignInOut from "./SignInOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
      <button className="md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <HeaderMenu />
      <SignInOut />
    </header>
  );
};
export default Header;
