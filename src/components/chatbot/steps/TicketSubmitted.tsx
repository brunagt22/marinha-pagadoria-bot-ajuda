
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface TicketSubmittedProps {
  ticketInfo: {
    title: string;
    category: string;
    type: string;
  };
  onReset: () => void;
  onClose: () => void;
}

const TicketSubmitted = ({ ticketInfo, onReset, onClose }: TicketSubmittedProps) => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [isSatisfied, setIsSatisfied] = useState<boolean | null>(null);

  const handleFeedback = (satisfied: boolean) => {
    setIsSatisfied(satisfied);
    setFeedbackGiven(true);
    // Aqui você pode enviar o feedback para o backend
    console.log('Feedback:', satisfied ? 'Satisfeito' : 'Insatisfeito');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-800">Chamado aberto com sucesso!</h3>
        <p className="text-sm text-green-700 mt-1">
          Seu chamado foi registrado e será atendido em breve.
        </p>
        <div className="mt-4 space-y-1 text-sm text-green-700">
          <p><strong>Categoria:</strong> {ticketInfo.category}</p>
          <p><strong>Tipo:</strong> {ticketInfo.type}</p>
          <p><strong>Título:</strong> {ticketInfo.title}</p>
        </div>
      </div>

      {!feedbackGiven ? (
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">Como você avalia o atendimento?</p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => handleFeedback(true)}
              className="flex items-center gap-2"
            >
              <ThumbsUp className="h-4 w-4" />
              Satisfeito
            </Button>
            <Button
              variant="outline"
              onClick={() => handleFeedback(false)}
              className="flex items-center gap-2"
            >
              <ThumbsDown className="h-4 w-4" />
              Insatisfeito
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isSatisfied 
              ? "Obrigado pelo feedback positivo!" 
              : "Agradecemos seu feedback. Vamos trabalhar para melhorar."}
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <Button onClick={onReset} className="flex-1 bg-navy-600">
          Iniciar nova conversa
        </Button>
        <Button onClick={onClose} variant="outline" className="flex-1">
          Fechar chat
        </Button>
      </div>
    </div>
  );
};

export default TicketSubmitted;
