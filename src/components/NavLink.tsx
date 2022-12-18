const NavLink = ({ link, href }: { link: string; href: string }) => {
  return (
    <li className="relative block group text-sm font-bold md:font-normal text-black  md:text-DarkGrayishBlue md:hover:text-black  hover:text-DarkGrayishBlue transition-colors">
      <a className="" href={href}>
        {link}
      </a>
      <span className="hidden md:inline md:opacity-0  transition md:group-hover:opacity-100  md:absolute md:-bottom-10 md:left-0 md:right-0 md:bg-Orange md:h-1"></span>
    </li>
  );
};

export default NavLink;
