
import React from "react";
import ChatBubble from "@/components/chatbot/ChatBubble";
import Documentation from "@/components/chatbot/Documentation";

const ChatbotProject = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/lovable-uploads/6cb6a548-72a3-4922-866c-6238d2d02be1.png" 
              alt="PAPEM Logo" 
              className="h-16 w-16 mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-navy-900">PAPEM - Chatbot Inteligente</h1>
              <p className="text-gray-600">Pagadoria de Pessoal da Marinha</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700">
              Este projeto demonstra um chatbot avançado com processamento de linguagem natural, 
              integração com help desk e interface omnichannel para a Pagadoria de Pessoal da Marinha.
            </p>
          </div>
        </header>
        
        <Documentation />
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>PAPEM-32 &copy; {new Date().getFullYear()} - Marinha do Brasil</p>
          <p className="mt-1">"ORDEM, PRONTIDÃO E REGULARIDADE"</p>
        </footer>
      </div>
      
      {/* Chatbot widget */}
      <ChatBubble />
    </div>
  );
};

export default ChatbotProject;
