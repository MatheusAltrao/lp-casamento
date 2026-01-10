import SectionHeader from "../ui/section-header";

export function OurStory() {
  return (
    <section id="story" className="py-20 border-y bg-background">
      <div data-aos="fade-up" className="section-area">
        <SectionHeader
          title="Nossa História"
          description="Cada grande história de amor começa com um momento especial. A nossa começou quando nossos olhares se cruzaram pela primeira vez."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className=" text-2xl  mb-4 text-primary font-cormorant text-center">Maria Luiza</h3>
            <p className=" leading-relaxed text-muted-foreground text-justify lg:text-left ">
              É curiosa por natureza e apaixonada por descobrir coisas novas seja um restaurante diferente, um canto escondido de uma cidade ou um
              assunto aleatório pra pesquisar por horas. Adora boa comida (especialmente se tiver massa envolvida), música para qualquer humor do dia
              e viagens que rendem boas histórias. Ama organizar tudo e gosta mesmo é quando as coisas saem exatamente como planejou. É prática, mas
              tem um lado sonhador que acredita que o amor está nas pequenas coisas e nos grandes rolês também.
            </p>
          </div>

          <div>
            <h3 className=" text-2xl  mb-4 text-secondary font-cormorant  text-center">Matheus</h3>
            <p className=" leading-relaxed text-muted-foreground text-justify lg:text-left ">
              O Matheus é daqueles que acredita no poder das ideias e na transformação que elas podem gerar. Curioso por natureza, dificilmente me
              contento com o óbvio. Ir além faz parte de mim: adoro aprender algo novo e criar soluções que, de fato, façam a diferença. Com o coração
              sempre inquieto, gosto de sonhar grande. Mas, acima de tudo, sonho junto. Acredito que a vida ganha mais sentido quando é compartilhada.
              Sou apaixonado por conversas boas, por desafios que me tirem do automático e pelas pequenas conquistas que constroem um futuro gigante.
              Hoje, me sinto exatamente onde deveria estar: ao lado de quem ilumina meus planos, abraça meus defeitos e fortalece cada passo dado. Ao
              lado do meu verdadeiro amor. Este é o nosso projeto de vida, nosso propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
