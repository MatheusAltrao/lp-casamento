import Header from "@/components/sections/header";
import CopyButton from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";
import SectionHeader from "@/components/ui/section-header";
import { GIFTS } from "@/consts/gifts";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/gifts")({
  component: Gifts,
});

function Gifts() {
  const [searchTerm, setSearchTerm] = useState("");

  const randomGifts = GIFTS.sort(() => 0.5 - Math.random());

  const filteredGifts = randomGifts.filter(
    (gift) =>
      gift.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gift.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gift.price.toString().includes(searchTerm)
  );

  return (
    <>
      <Header />
      <div className="py-20  bg-background max-w-[1200px] mx-auto text-center px-4 space-y-8">
        <SectionHeader
          title="Lista de Presentes"
          description="Qualquer contribuição será recebida com muito carinho. O gesto já significa muito e tornará esse momento ainda mais especial."
        />

        <div className="space-y-4">
          <div>
            <Input className="w-full bg-muted" placeholder="Pesquisar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
            {filteredGifts.map((gift) => (
              <div key={gift.id} className="border bg-white rounded-md overflow-hidden min-h-[365px] flex flex-col justify-between">
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-muted">
                    <img src={gift.image} alt={gift.title} className="w-full h-full object-cover " />
                  </div>
                  <div className="text-left p-2 space-y-2">
                    <p className="font-semibold text-primary text-xl">{gift.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                    <div className="space-y-1">
                      <h3 className=" font-medium leading-5  ">{gift.title}</h3>
                      <p className="text-muted-foreground text-sm  ">{gift.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <CopyButton text={gift.code} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
