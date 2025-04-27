import MarinhaTemplate from "@/components/MarinhaTemplate";
import ChatBubble from "@/components/chatbot/ChatBubble";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
