import CopyButton from "@/components/ui/copy-button";
import { GIFTS } from "@/consts/gifts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gifts")({
  component: Gifts,
});

function Gifts() {
  return (
    <div className="py-20  bg-background max-w-[1200px] mx-auto text-center px-4">
      <header>
        <h2 className="font-cormorant text-5xl  mb-8 text-balance text-primary ">Lista de Presentes</h2>
        <p className=" text-lg leading-relaxed mb-16 max-w-3xl mx-auto text-muted-foreground ">
          Sua presença é o que mais importa para nós, e qualquer contribuição será recebida com muito carinho. O gesto já significa muito e tornará
          esse momento ainda mais especial.
        </p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {GIFTS.map((gift) => (
          <div key={gift.id} className="border rounded-md overflow-hidden min-h-[365px] flex flex-col justify-between">
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
              <CopyButton text={gift.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
