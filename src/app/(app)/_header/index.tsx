/** @format */
import theme from "@/src/utils/constants/theme";
import clsx from "clsx";
import HeaderMenu from "./HeaderMenu";
import SignInOut from "./SignInOut";
import MobileOnly from "@/src/components/utils/MobileOnly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const headerContainerStyle = clsx(
  "absolute",
  "w-full",
  theme.palette.text.primary,
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
      <HeaderMenu className="" />
      <SignInOut />
    </header>
  );
};
export default Header;
