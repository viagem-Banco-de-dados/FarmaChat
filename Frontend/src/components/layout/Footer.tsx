import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Farmachat</h3>
            <p className="text-sm text-muted-foreground">
              Uma plataforma inteligente para responder perguntas sobre medicamentos utilizando IA.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Assistente
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Importante</h3>
            <p className="text-sm text-muted-foreground mb-2">
              As informações fornecidas por este assistente não substituem o aconselhamento médico profissional.
            </p>
            <p className="text-sm text-muted-foreground">
              Sempre consulte um profissional de saúde qualificado antes de tomar decisões relacionadas à medicação.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Farmachat. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
