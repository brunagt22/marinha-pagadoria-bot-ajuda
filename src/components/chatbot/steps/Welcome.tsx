
import { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { FrequentQuestion } from "../constants";

interface WelcomeProps {
  questions: FrequentQuestion[];
  onSelectQuestion: (id: string) => void;
  onCreateTicket: () => void;
}

const Welcome = ({ questions, onSelectQuestion, onCreateTicket }: WelcomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (q.keywords?.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="font-semibold text-navy-900">Como posso ajudar?</h3>
        <p className="text-sm text-gray-600 mt-1">
          Digite sua dúvida ou selecione uma das opções abaixo
        </p>

        <div className="mt-4 relative">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Digite sua dúvida aqui..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        {searchQuery.length > 0 && filteredQuestions.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-sm text-gray-600">Nenhuma dúvida encontrada.</p>
            <Button 
              onClick={onCreateTicket}
              className="bg-navy-600 mt-2"
            >
              Abrir chamado no helpdesk
            </Button>
          </div>
        ) : (
          filteredQuestions.map(q => (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(q.id)}
              className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium text-gray-800">{q.question}</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default Welcome;
