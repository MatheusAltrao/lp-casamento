export function OurStory() {
  return (
    <section id="story" data-aos="fade-up" className="py-20 border-t  ">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl  mb-8 text-balance  ">Nossa História</h2>
          <p className=" text-lg leading-relaxed mb-16 max-w-3xl mx-auto text-muted-foreground ">
            Cada grande história de amor começa com um momento especial. A nossa começou quando nossos olhares se cruzaram pela primeira vez, e desde
            então, cada dia tem sido uma nova página escrita com carinho, cumplicidade e muito amor.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <h3 className=" text-2xl  mb-4 text-primary font-cormorant">Maria Luiza</h3>
              <p className=" leading-relaxed text-muted-foreground">
                Apaixonada por arte, música e momentos simples da vida. Acredita que o amor verdadeiro é construído nos pequenos gestos do dia a dia e
                nos sorrisos compartilhados.
              </p>
            </div>

            <div className="text-center">
              <h3 className=" text-2xl  mb-4 text-secondary font-cormorant ">Matheus</h3>
              <p className=" leading-relaxed text-muted-foreground ">
                Sonhador e aventureiro, encontrou em Maria Luiza a parceira perfeita para todas as jornadas. Acredita que juntos podem conquistar o
                mundo, um passo de cada vez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
