import Link from "next/link";
import { IoMdContact } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center py-4 px-6 md:px-16">
      {/* Logo */}
      <div>
        <span className="font-extrabold text-xl md:text-2xl text-black cursor-pointer">
          SYEDA
        </span>
      </div>

      {/* Nav-Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 md:gap-11 text-black font-medium cursor-pointer">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/furnitures">FURNITURES</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>

      {/* Button and Icons */}
      <div className="flex items-center gap-4 md:gap-8 cursor-pointer text-black mt-4 md:mt-0">
        <button className="flex font-medium items-center gap-2 text-sm md:text-base">
          LOGIN <IoMdContact />
        </button>
        <IoSearchSharp className="text-lg md:text-xl font-extrabold" />
      </div>
    </header>
  );
};

export default Header;

