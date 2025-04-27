
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Question = {
  id: string;
  question: string;
  answer: string | null;
};

interface WelcomeProps {
  questions: Question[];
  onSelectQuestion: (id: string) => void;
  onCreateTicket: () => void;
}

const Welcome = ({ questions, onSelectQuestion, onCreateTicket }: WelcomeProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <p className="font-medium text-navy-900">Olá! Como posso ajudar?</p>
        <p className="text-sm text-gray-600 mt-1">
          Selecione uma das opções abaixo ou abra um chamado.
        </p>
      </div>

      <div className="space-y-2">
        {questions.map((q) => (
          <button
            key={q.id}
            onClick={() => onSelectQuestion(q.id)}
            className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-sm font-medium text-gray-800">{q.question}</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
        ))}
      </div>

      <Button 
        onClick={onCreateTicket}
        className="bg-navy-600 hover:bg-navy-700 w-full"
      >
        Abrir chamado no helpdesk
      </Button>
    </div>
  );
};

export default Welcome;
