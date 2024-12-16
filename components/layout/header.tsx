import logo from "@/public/logo-full.svg";
import Image from "next/image";
import { Cart, Menu, Search, User } from "../icons";

const NAV_ITEMS = ["Shop", "find your food", "About", "Blog"];

export default function Header() {
  return (
    <header className="border-b border-minimal py-5">
      <div className="container grid grid-cols-[1fr_auto_1fr] items-center">
        <nav>
          <ul className="hidden items-center md:flex">
            {NAV_ITEMS.map((item) => (
              // Note: 10px is not included in the spacing design system
              <li key={item} className="px-5 py-[0.625rem]">
                {item}
              </li>
            ))}
          </ul>
          <button
            className="flex h-[2.75rem] w-[2.75rem] items-center justify-center md:hidden"
            title="menu"
          >
            <Menu />
          </button>
        </nav>

        <div className="">
          <Image src={logo} className="max-h-10" alt="Pooch & Mutt logo" />
        </div>

        <div className="flex justify-end">
          <button
            title="search"
            className="hidden h-[2.75rem] w-[2.75rem] items-center justify-center md:flex"
          >
            <Search />
          </button>
          <button
            title="search"
            className="hidden h-[2.75rem] w-[2.75rem] items-center justify-center md:flex"
          >
            <User />
          </button>
          <button
            title="search"
            className="flex h-[2.75rem] w-[2.75rem] items-center justify-center"
          >
            <Cart />
          </button>
        </div>
      </div>
    </header>
  );
}
