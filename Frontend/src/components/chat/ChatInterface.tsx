"use client";

import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatMessage, Message } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { toast } from "sonner";

// Adicionamos "uuid" como uma dependência que precisará ser instalada

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Olá! Sou o assistente do Farmachat. Como posso ajudar com informações sobre medicamentos hoje?",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Adiciona a mensagem do usuário
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulando uma resposta da API - em um ambiente real, isso faria uma chamada a um endpoint de IA
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Resposta simulada do assistente
      const assistantResponse: Message = {
        id: uuidv4(),
        role: "assistant",
        content: getSimulatedResponse(content),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantResponse]);
    } catch (error) {
      console.error("Erro ao processar a mensagem:", error);
      toast.error("Houve um erro ao processar sua mensagem. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendImage = (file: File) => {
    toast.info("Análise de imagens será implementada em breve!");

    // Aqui seria implementada a lógica para enviar a imagem para processamento
    // e obter informações sobre o medicamento visualizado
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput
        onSendMessage={handleSendMessage}
        onSendImage={handleSendImage}
        isLoading={isLoading}
      />
    </div>
  );
}

// Função para simular respostas baseadas em palavras-chave (apenas para demonstração)
function getSimulatedResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("dor de cabeça") || lowerMessage.includes("cefaleia")) {
    return "Para dores de cabeça leves a moderadas, medicamentos como paracetamol ou ibuprofeno são comumente utilizados. Se as dores forem severas ou persistentes, é importante consultar um médico para uma avaliação adequada.";
  }

  if (lowerMessage.includes("pressão alta") || lowerMessage.includes("hipertensão")) {
    return "O tratamento da hipertensão geralmente inclui mudanças no estilo de vida e medicamentos como diuréticos, inibidores da ECA, bloqueadores de canais de cálcio, entre outros. O tratamento deve ser personalizado e supervisionado por um profissional de saúde.";
  }

  if (lowerMessage.includes("diabetes")) {
    return "O tratamento do diabetes pode incluir insulina, metformina e outros medicamentos que ajudam a controlar os níveis de açúcar no sangue. Uma dieta balanceada e exercícios regulares também são fundamentais no controle da doença.";
  }

  if (lowerMessage.includes("alergia") || lowerMessage.includes("anti-histamínico")) {
    return "Para alergias, os anti-histamínicos como loratadina, cetirizina e fexofenadina são comumente recomendados. Em casos mais graves, corticosteroides ou outras medicações podem ser necessários sob orientação médica.";
  }

  if (lowerMessage.includes("gripe") || lowerMessage.includes("resfriado")) {
    return "Para sintomas de gripe e resfriado, é geralmente recomendado repouso, hidratação adequada e medicamentos para alívio dos sintomas como paracetamol para febre e dor, descongestionantes nasais para congestão, e antitussígenos para tosse seca.";
  }

  return "Entendo sua pergunta sobre medicamentos. Para obter informações mais específicas e precisas, poderia fornecer mais detalhes sobre o que você está buscando? Estou aqui para ajudar com informações sobre dosagens, efeitos colaterais, interações medicamentosas ou outras dúvidas relacionadas.";
}
