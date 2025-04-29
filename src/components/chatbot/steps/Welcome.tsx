
import { useState, KeyboardEvent, useEffect } from "react";
import { ChevronRight, Search, TicketPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { FrequentQuestion } from "../constants";

interface WelcomeProps {
  questions: FrequentQuestion[];
  onSelectQuestion: (id: string) => void;
  onCreateTicket: () => void;
  onSendMessage: (message: string) => void;
}

const Welcome = ({ questions, onSelectQuestion, onCreateTicket, onSendMessage }: WelcomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userMessages, setUserMessages] = useState<{message: string, isUser: boolean}[]>([]);

  useEffect(() => {
    // Listen for the custom event to directly trigger ticket creation
    const handleOpenTicket = () => {
      onCreateTicket();
    };
    
    document.addEventListener('openTicket', handleOpenTicket);
    
    // Initial welcome message
    setTimeout(() => {
      setUserMessages([{
        message: "Olá! Sou o assistente virtual da PAPEM. Como posso ajudar? Você pode digitar sua pergunta ou escolher uma das opções abaixo.",
        isUser: false
      }]);
    }, 500);
    
    return () => {
      document.removeEventListener('openTicket', handleOpenTicket);
    };
  }, [onCreateTicket]);

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (q.keywords?.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const handleSendMessage = () => {
    if (!searchQuery.trim()) return;
    
    // Add user message to the conversation
    setUserMessages([...userMessages, {message: searchQuery, isUser: true}]);
    
    // Process the message
    onSendMessage(searchQuery);
    
    // Find matching questions based on the query
    const matchingQuestions = questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.keywords?.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    // If there are matching questions, show a response
    if (matchingQuestions.length > 0) {
      const botResponse = `Encontrei algumas informações que podem ajudar com sua pergunta sobre "${searchQuery}".`;
      setUserMessages(prev => [...prev, {message: botResponse, isUser: false}]);
    } else {
      const botResponse = `Não encontrei informações específicas sobre "${searchQuery}". Posso tentar ajudar de outra forma ou você pode abrir um chamado.`;
      setUserMessages(prev => [...prev, {message: botResponse, isUser: false}]);
    }
    
    // Clear the input
    setSearchQuery('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <h3 className="font-semibold text-navy-900">Como posso ajudar?</h3>
        <p className="text-sm text-gray-600 mt-1">
          Digite sua dúvida ou selecione uma das opções abaixo
        </p>

        {/* Always available "Open Ticket" button - now more prominent */}
        <Button
          onClick={onCreateTicket}
          className="w-full bg-green-600 hover:bg-green-700 my-3 flex items-center justify-center"
        >
          <TicketPlus className="h-4 w-4 mr-2" />
          Abrir chamado no helpdesk
        </Button>

        {/* Chat messages */}
        {userMessages.length > 0 && (
          <div className="mt-3 space-y-3 max-h-56 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
            {userMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg ${msg.isUser ? 'bg-navy-600 text-white' : 'bg-white border border-gray-200'}`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 relative">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua dúvida aqui..."
            className="pl-10 pr-20"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Button 
            onClick={handleSendMessage}
            className="absolute right-1 top-1 bg-navy-600 h-8"
            size="sm"
          >
            Enviar
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {/* Filtered questions section */}
        {searchQuery.length > 0 && (
          <h4 className="text-sm font-medium text-gray-700 mt-2">Resultados da pesquisa:</h4>
        )}
        
        {searchQuery.length > 0 && filteredQuestions.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-sm text-gray-600">Nenhuma dúvida encontrada.</p>
          </div>
        ) : (
          <>
            {searchQuery.length === 0 ? (
              <h4 className="text-sm font-medium text-gray-700">Dúvidas frequentes:</h4>
            ) : null}
            
            {(searchQuery.length === 0 ? questions : filteredQuestions).slice(0, 5).map(q => (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(q.id)}
                className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-800">{q.question}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Welcome;
