import { cn } from "@/lib/utils";
import logo from "@/public/logo-full.svg";
import Image from "next/image";
import Link from "next/link";
import { Cart, Menu, Search, User } from "../icons";

const NAV_ITEMS = ["Shop", "find your food", "About", "Blog"];

export default function Header() {
  return (
    <header className="border-b border-minimal py-4 md:py-5">
      <div className="container grid grid-cols-[1fr_auto_1fr] items-center">
        <nav>
          <ul className="hidden items-center md:flex">
            {NAV_ITEMS.map((item) => (
              // Note: 10px is not included in the design system spacing (py-[0.625rem])
              <li key={item} className="px-5 py-[0.625rem]">
                <Link
                  href="/"
                  className="transition-colors hover:text-secondary"
                >
                  {item}
                </Link>
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
          <HeaderButton title="search">
            <Search />
          </HeaderButton>
          <HeaderButton title="user">
            <User />
          </HeaderButton>
          <HeaderButton title="cart">
            <Cart />
          </HeaderButton>
        </div>
      </div>
    </header>
  );
}

function HeaderButton({
  children,
  className,
  ...rest
}: React.PropsWithChildren<React.ComponentProps<"button">>) {
  return (
    <button
      className={cn(
        "hidden h-[2.75rem] w-[2.75rem] items-center justify-center transition-colors hover:text-secondary md:flex",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
