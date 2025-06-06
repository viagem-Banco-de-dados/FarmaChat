import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, MessageSquare, Image as ImageIcon, Mic, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <MainLayout hideHeader>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Informações precisas sobre medicamentos em segundos
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  O Farmachat utiliza inteligência artificial avançada para responder suas dúvidas sobre medicamentos com precisão e clareza.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/chat">
                    Começar agora
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#about">
                    Saiba mais
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/med-avatar-blue.png"
                alt="Farmachat"
                width={400}
                height={400}
                className="rounded-xl w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-background" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Recursos Principais
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Nossa plataforma oferece múltiplas formas de interação, garantindo que você obtenha as informações que precisa da maneira mais conveniente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/60 transition-colors">
              <CardHeader className="pb-2">
                <MessageSquare className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Chat de Texto</CardTitle>
                <CardDescription>
                  Digite suas perguntas sobre medicamentos e receba respostas detalhadas instantaneamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Converse naturalmente com nossa IA e faça perguntas específicas sobre dosagens, contraindicações, efeitos colaterais e mais.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/60 transition-colors">
              <CardHeader className="pb-2">
                <Mic className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Reconhecimento de Voz</CardTitle>
                <CardDescription>
                  Pergunte usando sua voz e obtenha respostas em áudio ou texto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ideal para quando você estiver ocupado ou precisar de informações rapidamente sem digitar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/60 transition-colors">
              <CardHeader className="pb-2">
                <ImageIcon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Detecção de Imagem</CardTitle>
                <CardDescription>
                  Envie fotos de medicamentos ou receitas médicas para identificação e informações.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nossa IA pode reconhecer medicamentos a partir de imagens e fornecer detalhes específicos sobre eles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 bg-secondary/20" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
                Sobre o Farmachat
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nosso objetivo é fornecer um acesso rápido e confiável a informações sobre medicamentos, ajudando as pessoas a entenderem melhor os tratamentos e a fazerem perguntas importantes sobre sua saúde.
                </p>
                <p>
                  Através da integração de tecnologias avançadas de inteligência artificial, o Farmachat pode:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Responder dúvidas sobre dosagens, indicações e contraindicações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Explicar possíveis efeitos colaterais e interações medicamentosas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fornecer informações gerais sobre classes de medicamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identificar medicamentos através de imagens</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/chat">
                    Experimente agora
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <Pill className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-lg font-medium">Base de Conhecimento Ampla</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Informações atualizadas sobre milhares de medicamentos e tratamentos
                  </p>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-lg font-medium">Respostas Personalizadas</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Adaptamos nossas respostas às suas perguntas específicas
                  </p>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <ImageIcon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-lg font-medium">Reconhecimento Visual</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Identifique medicamentos através de fotos para maior conveniência
                  </p>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <Mic className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-lg font-medium">Interface por Voz</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Faça perguntas e receba respostas através de comandos de voz
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Pronto para começar?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Acesse nosso assistente interativo e obtenha respostas para suas dúvidas sobre medicamentos.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/chat">
                  Acessar o Assistente
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
