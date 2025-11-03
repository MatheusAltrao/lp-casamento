export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-xs text-gray-500 pt-4">
          <p>© {new Date().getFullYear()} - Feito com 💖 para celebrar nosso amor</p>
        </div>
      </div>
    </footer>
  );
}
