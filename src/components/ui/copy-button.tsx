import { Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./button";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Pix copiado!");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const buttonText = isCopied ? "Copiado!" : "Copiar Chave PIX";

  return (
    <Button onClick={handleCopy} className="w-full ">
      <Copy size={20} />
      {buttonText}
    </Button>
  );
}
