"use client";

import { useState, useRef, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Mic, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onSendImage?: (file: File) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSendMessage, onSendImage, isLoading = false }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleVoiceInput = () => {
    // Aqui seria implementada a funcionalidade de reconhecimento de voz
    // Usando a Web Speech API ou outra biblioteca semelhante
    setIsRecording(!isRecording);

    if (!isRecording) {
      alert("Funcionalidade de reconhecimento de voz será implementada em breve!");
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onSendImage) {
      onSendImage(file);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-4 border-t">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="flex-shrink-0"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
        >
          <Paperclip className="h-5 w-5" />
          <span className="sr-only">Anexar imagem</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("flex-shrink-0", isRecording && "text-red-500")}
          onClick={handleVoiceInput}
          disabled={isLoading}
        >
          <Mic className="h-5 w-5" />
          <span className="sr-only">Entrada de voz</span>
        </Button>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="min-h-[50px] resize-none"
          rows={1}
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          className="flex-shrink-0"
          disabled={!message.trim() || isLoading}
        >
          <Send className="h-5 w-5" />
          <span className="sr-only">Enviar mensagem</span>
        </Button>
      </form>
    </div>
  );
}
