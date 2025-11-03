import { HEADER_LINKS } from "@/consts/header-links";
import MobileMenu from "../ui/mobile-menu";

export default function Header() {
  return (
    <header className=" bg-primary p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <a href="#home">
          <h1 className="text-white text-xl font-semibold font-cormorant">Maria Luiza & Matheus</h1>
        </a>

        <nav>
          <ul className="lg:flex hidden items-center gap-4">
            {HEADER_LINKS.map((link, index) => (
              <li className="text-sm  text-white transition-colors" key={index}>
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
