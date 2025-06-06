"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funções para lidar com cliques nos ícones
  const handleSettingsClick = () => {
    console.log("Abrir configurações");
  };

  const handleNotificationsClick = () => {
    console.log("Abrir notificações");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-headerBg">
      <div className="flex h-20 items-center w-full px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Nome e Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/med-avatar-blue.png"
            alt="Farmachat Logo"
            width={50}
            height={50}
            className="rounded-md"
          />
          <span className="text-4xl font-bold text-customPurple">
            Farmachat
          </span>
        </Link>

        {/* Espaçador para jogar os ícones para a direita */}
        <div className="flex-1"></div>

        {/* Ícones de Configuração e Notificação */}
        <div className="hidden md:flex space-x-6">
          <button onClick={handleNotificationsClick}>
            <Bell className="w-10 h-10 text-customPurple" />
          </button>

          <button onClick={handleSettingsClick}>
            <Settings className="w-10 h-10 text-customPurple" />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="lg" // Aumenta o tamanho do botão
          className="md:hidden p-3" // Adiciona padding extra para aumentar a área clicável
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        {isMenuOpen ? (
          <X className="h-122 w-12 text-customPurple" /> // Ícone maior
          ) : (
            <Menu className="h-8 w-8 text-customPurple" /> // Ícone maior
          )}
        <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="w-full md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4 px-6 md:px-10">
            <Link
              href="/"
              className="text-sm font-medium text-customPurple hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/chat"
              className="text-sm font-medium text-customPurple hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Assistente
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-customPurple hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link
                href="/chat"
                className="text-customPurple"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
