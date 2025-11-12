export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 pb-16 flex items-center bg-[url(/flores.jpeg)] ">
      <div className=" max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div data-aos="fade-up" className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/image-4.jpeg" alt="Maria e Matheus" className="w-full h-[400px] object-cover" />
          </div>
          <div data-aos="fade-up" className="rounded-2xl overflow-hidden shadow-xl md:scale-110">
            <img src="/image-5.jpeg" alt="Maria e Matheus" className="w-full h-[500px] object-cover" />
          </div>
          <div data-aos="fade-up" className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/image-6.jpeg" alt="Maria e Matheus" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
