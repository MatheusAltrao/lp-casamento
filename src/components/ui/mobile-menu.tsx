import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HEADER_LINKS } from "@/consts/header-links";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon-sm"} className="lg:hidden" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navegue pelo site utilizando os links</SheetDescription>
        </SheetHeader>

        <nav>
          <ul className="flex  flex-col  items-center gap-2 text-sm px-4 ">
            {HEADER_LINKS.map((link, index) => (
              <a href={link.href} className="w-full">
                <Button variant={"link"} className="w-full " key={index}>
                  {link.label}
                </Button>
              </a>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
