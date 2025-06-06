"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User } from "lucide-react"; // Importando o ícone

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 py-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/images/med-avatar-blue.png" alt="AI" />
          <AvatarFallback className="bg-primary text-primary-foreground">IA</AvatarFallback>
        </Avatar>
      )}
      <div className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start")}>
        <Card
          className={cn(
            "max-w-[85%] pr-4 rounded-xl p-3 text-sm",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          )}
        >
          <p className="whitespace-pre-wrap break-words min-w-2">{message.content}</p>
        </Card>
        <span className="text-xs text-muted-foreground">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      {isUser && (
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            <User className="h-5 w-5" /> {/* Ícone de usuário */}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
