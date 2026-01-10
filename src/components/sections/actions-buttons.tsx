import { Link } from "@tanstack/react-router";
import { Gift, Heart } from "lucide-react";
import { Button } from "../ui/button";

export default function ActionsButtons() {
  return (
    <section id="rsvp" className="py-20  border-y">
      <div data-aos="fade-up" className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 px-4">
        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary-400" />
          <h3 className="font-cormorant text-2xl mb-3 text-primary ">Confirmar Presença</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">Sua presença é o nosso maior presente! Por favor, confirme até 15 de março.</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5514997878309?text=Olá,%20gostaria%20de%20confirmar%20a%20minha%20presença%20no%20casamento%20da%20Maria%20e%20do%20Matheus%20no%20dia%2001/05/26"
          >
            <Button size="lg">Confirmar agora</Button>
          </a>
        </div>

        <div className="bg-secondary/10 rounded-2xl p-8 text-center ">
          <Gift className="w-12 h-12 mx-auto mb-4 text-secondary-400" />
          <h3 className="font-cormorant text-2xl mb-3 text-secondary">Lista de Presentes</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">Se desejar nos presentear, preparamos uma lista especial com muito carinho.</p>
          <Link to="/gifts">
            <Button variant={"secondary"} size="lg">
              Ver presentes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
