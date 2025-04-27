
import MarinhaTemplate from "@/components/MarinhaTemplate";
import ChatBubble from "@/components/chatbot/ChatBubble";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <MarinhaTemplate>
      {/* Banner */}
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-navy-700 to-navy-900 mb-8">
        <div className="absolute inset-0 bg-navy-900/30"></div>
        <div className="relative px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Pagadoria de Pessoal da Marinha
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Bem-vindo ao sistema de pagamento e atendimento da PAPEM
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white hover:bg-gray-100 text-navy-900 px-6 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Acessar área do militar
              </a>
              <a 
                href="#" 
                className="bg-navy-500 hover:bg-navy-600 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Consultar pagamento
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Informações principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-navy-700">Contracheque</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Acesse seu contracheque online através do sistema BP Online
            </p>
            <a 
              href="#" 
              className="text-navy-600 hover:text-navy-800 font-medium text-sm hover:underline inline-flex items-center"
            >
              Acessar BP Online
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-navy-700">IRPF</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Baixe seu comprovante de rendimentos para declaração do Imposto de Renda
            </p>
            <a 
              href="#" 
              className="text-navy-600 hover:text-navy-800 font-medium text-sm hover:underline inline-flex items-center"
            >
              Acessar comprovantes
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-navy-700">Helpdesk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Precisa de ajuda? Abra um chamado no nosso sistema de suporte
            </p>
            <a 
              href="#" 
              className="text-navy-600 hover:text-navy-800 font-medium text-sm hover:underline inline-flex items-center"
            >
              Acessar helpdesk
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Notícias e informativos */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy-900 mb-4">Notícias e Informativos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-navy-700 text-lg">Calendário de Pagamento 2025</CardTitle>
              <p className="text-sm text-gray-500">Publicado em 15/04/2025</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Foi divulgado o calendário de pagamentos para o ano de 2025. Confira as datas e planeje-se.
              </p>
              <a 
                href="#" 
                className="text-navy-600 hover:text-navy-800 font-medium text-sm hover:underline inline-flex items-center"
              >
                Ler mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-navy-700 text-lg">Atualização do Sistema BP Online</CardTitle>
              <p className="text-sm text-gray-500">Publicado em 10/04/2025</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                O sistema BP Online passará por manutenção programada no dia 30/04/2025, das 22h às 02h.
              </p>
              <a 
                href="#" 
                className="text-navy-600 hover:text-navy-800 font-medium text-sm hover:underline inline-flex items-center"
              >
                Ler mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Links Úteis */}
      <div>
        <h2 className="text-xl font-bold text-navy-900 mb-4">Links Úteis</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="font-medium text-navy-800">Alteração Cadastral</span>
          </a>

          <a href="#" className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="font-medium text-navy-800">Formulários</span>
          </a>

          <a href="#" className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium text-navy-800">Calendário de Pagamentos</span>
          </a>

          <a href="#" className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-medium text-navy-800">Legislação</span>
          </a>
        </div>
      </div>

      {/* Chatbot */}
      <ChatBubble />
    </MarinhaTemplate>
  );
};

export default Index;
