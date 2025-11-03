import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="py-12 px-4 border-t">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-xs text-gray-500 pt-4 flex items-center justify-center gap-2">
          <p>Feito com</p>
          <div className="flex ">
            <Heart fill="#e40397" color="#e40397" />
            <Heart fill="#ef6d02" color="#ef6d02" />
          </div>
          <p>para celebrar nosso amor</p>
        </div>
      </div>
    </footer>
  );
}
