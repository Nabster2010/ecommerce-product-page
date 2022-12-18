import { useState } from "react";
import classnames from "classnames";
import logo from "../assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import CloseMenuButton from "./CloseMenuButton";
import NavLink from "./NavLink";
import CartBtn from "./CartBtn";
import UserAvatar from "./UserAvatar";
import ShoppingCart from "./ShoppingCart";

const LINKS = [
  {
    link: "Collection",
    href: "#",
  },
  {
    link: "Men",
    href: "#",
  },
  {
    link: "Women",
    href: "#",
  },
  {
    link: "About",
    href: "#",
  },
  {
    link: "Contact",
    href: "#",
  },
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen((prev) => !prev);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="w-full flex justify-center relative">
      <div className=" flex mx-4 md:mx-24 border-b w-full py-4 md:py-6  justify-between items-center ">
        <nav className="flex justify-start items-center gap-4 md:gap-8">
          <HamburgerMenu handler={openMenu} />
          <a href="/">
            <img src={logo} className="" alt="logo" />
          </a>
          <div
            className={
              (classnames(" "),
              menuOpen
                ? "fixed  z-30 inset-0  bg-black/75 md:static md:bg-transparent"
                : "")
            }
          >
            <ul
              className={classnames(
                "flex flex-col gap-4 md:gap-6 md:flex-row",
                menuOpen
                  ? "w-52 md:w-auto items-start px-4 md:px-0 md:pt-0 bg-white md:bg-transparent h-full pt-8"
                  : "hidden md:flex"
              )}
            >
              <CloseMenuButton handler={closeMenu} className="mb-8" />
              {LINKS.map(({ link, href }) => (
                <NavLink key={link} link={link} href={href} />
              ))}
            </ul>
          </div>
        </nav>
        <div className="flex justify-start items-center gap-6">
          <CartBtn toggleCart={toggleCart} />
          <UserAvatar img="/images/image-avatar.png" />
        </div>
      </div>
      <ShoppingCart open={cartOpen} />
    </header>
  );
};
export default Header;
