import { Clock, MapPin, Wine } from "lucide-react";

export function WhereWhen() {
  return (
    <section id="where-when" className="py-20 border-t ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className=" font-cormorant text-5xl text-primary text-center mb-16 text-balance">Onde e Quando?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8  text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl mb-2 text-primary-400">Cerimônia</h3>
                  <p className="text-wedding-text leading-relaxed mb-2">
                    <strong className="font-cormorant text-primary">Igreja Nossa Senhora da Paz</strong>
                  </p>
                  <p className="text-wedding-text leading-relaxed">
                    Rua das Flores, 123 - Centro
                    <br />
                    São Paulo, SP
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-primary">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">15:00</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Wine className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl text-secbg-secondary mb-2 text-secondary-400">Recepção</h3>
                  <p className="text-wedding-text leading-relaxed mb-2">
                    <strong className="font-cormorant text-secondary">Espaço Jardim das Rosas</strong>
                  </p>
                  <p className="text-wedding-text leading-relaxed">
                    Avenida dos Sonhos, 456 - Jardins
                    <br />
                    São Paulo, SP
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-secondary">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">17:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976545105!2d-46.65844!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjEiUyA0NsKwMzknMzAuNCJX!5e0!3m2!1sen!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
