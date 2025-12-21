import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gifts")({
  component: Gifts,
});

function Gifts() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Lista de Presentes</h1>
      <p className="text-lg mb-8">Em breve você poderá escolher seu presente aqui!</p>
    </div>
  );
}
