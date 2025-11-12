import { HEADER_LINKS } from "@/consts/header-links";
import MobileMenu from "../ui/mobile-menu";

export default function Header() {
  return (
    <header className=" bg-background border-b fixed top-0 left-0 w-full z-20">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto p-4 ">
        <a href="#home">
          <h1 className=" text-xl font-semibold font-cormorant">Maria Luiza & Matheus</h1>
        </a>

        <nav>
          <ul className="lg:flex hidden items-center gap-4">
            {HEADER_LINKS.map((link, index) => (
              <li className="text-sm   transition-colors hover:underline underline-offset-4" key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
