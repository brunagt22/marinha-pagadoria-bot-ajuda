
import React from "react";

const Documentation = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
      <h2 className="text-2xl font-bold text-navy-900 mb-4">Chatbot Inteligente PAPEM</h2>
      <div className="prose prose-sm max-w-none">
        <p className="font-medium text-navy-700">
          O presente MVP representa uma solução avançada de assistente virtual para o atendimento do Help Desk da Marinha do Brasil, especificamente para a Pagadoria de Pessoal da Marinha (PAPEM).
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Visão Geral do Projeto</h3>
        <p>Esta implementação foi concebida para:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Reduzir o volume de chamados simples</strong> através da resolução automática de dúvidas frequentes</li>
          <li><strong>Otimizar o processo de abertura de chamados</strong> quando necessário</li>
          <li><strong>Proporcionar uma experiência de atendimento moderna e disponível 24/7</strong></li>
          <li><strong>Integrar-se perfeitamente ao sistema HelpDesk PAPEM existente</strong></li>
        </ol>

        <h3 className="text-xl font-semibold mt-4">Abordagem Omnichannel</h3>
        <p>A solução implementa uma estratégia omnichannel entre o chatbot e o sistema HelpDesk da PAPEM, oferecendo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Integração total entre chatbot e HelpDesk</strong>: O usuário pode iniciar uma interação no chatbot e, caso necessário, a conversa é convertida automaticamente em um chamado</li>
          <li><strong>Histórico unificado</strong>: Todo o histórico de interações é preservado entre os canais</li>
          <li><strong>Continuidade do atendimento</strong>: Manutenção do contexto completo entre diferentes canais</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Processamento de Linguagem Natural</h3>
        <p>Um dos diferenciais é a capacidade avançada de compreender texto digitado livremente pelo usuário:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Análise de intenção</strong>: O sistema analisa o texto e identifica a intenção subjacente</li>
          <li><strong>Processamento semântico</strong>: Compreensão do contexto além das palavras-chave</li>
          <li><strong>Tratamento de variações</strong>: Identificação da intenção mesmo com diferentes formulações</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Conheça o Fluxo de Atendimento</h3>
        <p>O chatbot PAPEM implementa um fluxo intuitivo:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Boas-vindas e identificação</strong>: O usuário é recebido e pode escolher entre tirar dúvidas ou abrir um chamado</li>
          <li><strong>Interação flexível</strong>: Através de botões ou texto livre</li>
          <li><strong>Resolução de dúvidas</strong>: Com base na base de conhecimento integrada</li>
          <li><strong>Abertura de chamados</strong>: Sempre disponível em qualquer etapa da interação</li>
          <li><strong>Avaliação do atendimento</strong>: Feedback para melhoria contínua</li>
        </ol>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
          <h3 className="text-lg font-medium text-blue-900">Experimente agora!</h3>
          <p className="text-blue-700">
            Utilize o assistente virtual no canto inferior direito da tela para tirar suas dúvidas ou abrir um chamado no help desk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
