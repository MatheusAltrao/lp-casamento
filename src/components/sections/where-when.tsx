import { Clock, MapPin } from "lucide-react";

export function WhereWhen() {
  return (
    <section data-aos="fade-up" id="where-when" className="py-20 border-t ">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className=" font-cormorant text-5xl text-primary text-center mb-16 text-balance">Onde e Quando?</h2>

        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12">
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8  text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl mb-2 text-primary-400">Cerimônia</h3>
              <p className="text-wedding-text leading-relaxed mb-2">
                <strong className="font-cormorant text-primary">São Francisco Eventos</strong>
              </p>
              <p className="text-wedding-text leading-relaxed">
                Rod. Marechal Rondon - Agudos, SP, 17120-000
                <br />
                Bauru, SP
              </p>
              <div className="flex items-center gap-2 mt-3 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15:00</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] w-full max-w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.633930011942!2d-49.028999!3d-22.400345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf5f0b411ff831%3A0x5d76d326cc6ae295!2sS%C3%A3o%20Francisco%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1731423600000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
