import { HEADER_LINKS } from "@/consts/header-links";
import MobileMenu from "../ui/mobile-menu";

export default function Header() {
  return (
    <header className=" bg-primary p-4">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <h1 className="text-white text-xl font-semibold font-cormorant">Maria Luiza & Matheus</h1>

        <nav>
          <ul className="lg:flex hidden items-center gap-4">
            {HEADER_LINKS.map((link) => (
              <li className=" text-sm  text-white transition-colors" key={link.href}>
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
