import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gifts")({
  component: Gifts,
});

function Gifts() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Lista de Presentes</h1>
      <p className="text-lg mb-8">Em breve você poderá escolher seu presente aqui!</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Voltar para o início
      </Link>
    </div>
  );
}
