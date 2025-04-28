
import { Button } from "@/components/ui/button";

interface QuestionAnsweredProps {
  question: string;
  answer: string;
  onCreateTicket: () => void;
}

const QuestionAnswered = ({ question, answer, onCreateTicket }: QuestionAnsweredProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
          <p className="font-medium text-navy-900">{question}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-800">{answer}</p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-2">Sua dúvida não foi resolvida?</p>
          <Button 
            onClick={onCreateTicket}
            className="bg-navy-600 w-full"
          >
            Abrir chamado no helpdesk
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswered;
