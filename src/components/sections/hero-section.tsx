export default function HeroSection() {
  return (
    <section className=" pt-12 lg:pt-24 pb-16 ">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/image-4.jpeg" alt="Maria e Matheus" className="w-full h-[400px] object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl md:scale-110">
              <img src="/image-5.jpeg" alt="Maria e Matheus" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/image-6.jpeg" alt="Maria e Matheus" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
