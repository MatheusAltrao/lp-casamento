"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="message" className="py-20 border-t relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-5xl  mb-4 text-balance">Deixe uma Mensagem para os Noivos</h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Suas palavras são especiais para nós. Compartilhe seus votos, conselhos ou simplesmente nos deseje felicidades!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/10  border focus:border-white/40 h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Sua mensagem para o casal..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-white/10  border focus:border-white/40 resize-none h-[200px]"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
