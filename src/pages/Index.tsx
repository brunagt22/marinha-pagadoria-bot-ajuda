
import MarinhaTemplate from "@/components/MarinhaTemplate";
import ChatBubble from "@/components/chatbot/ChatBubble";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ServiceCard = ({ icon, title, link }: { icon: string; title: string; link: string }) => (
  <a 
    href={link}
    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center hover:shadow-md transition-shadow"
  >
    <span className="text-4xl mb-4">{icon}</span>
    <span className="text-navy-700 font-medium text-center">{title}</span>
  </a>
);

const Index = () => {
  return (
    <MarinhaTemplate>
      <div className="space-y-12">
        {/* Project Highlight Section */}
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold mb-3">Chatbot Inteligente PAPEM - Apresentação de MVP</h2>
              <p className="text-white/80 mb-4">
                Conheça nossa proposta de assistente virtual para atendimento do Help Desk da Marinha, 
                combinando tecnologia avançada em processamento de linguagem natural e excelente experiência do usuário.
              </p>
              <Link to="/chatbot-project">
                <Button variant="secondary" className="flex items-center gap-2">
                  Explorar o projeto
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <img 
                src="/lovable-uploads/af9fdefd-cf6e-408a-8b63-3f1afe6ab16c.png" 
                alt="PAPEM Chatbot" 
                className="h-32 w-32"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-navy-900 mb-8">
            SERVIÇOS PRESTADOS À FAMÍLIA NAVAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon="📱"
              title="APLICATIVO PAPEM"
              link="#"
            />
            <ServiceCard
              icon="🏦"
              title="BANCOS E TARIFAS"
              link="#"
            />
            <ServiceCard
              icon="📊"
              title="BP ON-LINE"
              link="#"
            />
            <ServiceCard
              icon="📝"
              title="CARTA DE SERVIÇOS AOS USUÁRIOS"
              link="#"
            />
            <ServiceCard
              icon="❓"
              title="DÚVIDAS FREQUENTES"
              link="#"
            />
            <ServiceCard
              icon="💰"
              title="IMPOSTO DE RENDA"
              link="#"
            />
            <ServiceCard
              icon="📋"
              title="ORIENTAÇÕES AOS BENEFICIÁRIOS"
              link="#"
            />
            <ServiceCard
              icon="👨‍👩‍👧‍👦"
              title="PENSÃO ALIMENTÍCIA"
              link="#"
            />
            <ServiceCard
              icon="🔄"
              title="REDIRECIONAMENTO DE PAGAMENTO"
              link="#"
            />
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-navy-900 mb-8">
            VÍDEOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add video placeholders here */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </section>
      </div>

      {/* Chatbot */}
      <ChatBubble />
    </MarinhaTemplate>
  );
};

export default Index;
