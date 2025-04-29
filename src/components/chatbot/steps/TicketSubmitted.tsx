
import { useState } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TicketSubmittedProps {
  ticketInfo: {
    type: string;
    category: string;
    title: string;
    description: string;
    [key: string]: any;
  };
  onReset: () => void;
  onClose: () => void;
  onSubmitFeedback: (rating: number) => void;
}

const TicketSubmitted = ({ ticketInfo, onReset, onClose, onSubmitFeedback }: TicketSubmittedProps) => {
  const [rating, setRating] = useState<number>(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmitFeedback = () => {
    if (rating > 0) {
      onSubmitFeedback(rating);
      setFeedbackSubmitted(true);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-green-50 p-4 rounded-lg text-center">
        <div className="mx-auto w-12 h-12 flex items-center justify-center bg-green-500 rounded-full mb-3">
          <Check className="text-white w-6 h-6" />
        </div>
        <h3 className="font-semibold text-gray-800 text-lg mb-1">Chamado enviado com sucesso</h3>
        <p className="text-gray-600">
          Seu chamado foi registrado e será analisado em breve pela nossa equipe
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h4 className="font-medium text-navy-900 mb-3">Detalhes do chamado:</h4>
        
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-500">Tipo:</span>
            <p className="text-sm font-medium">{ticketInfo.type}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Categoria:</span>
            <p className="text-sm font-medium">{ticketInfo.category}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Título:</span>
            <p className="text-sm font-medium">{ticketInfo.title}</p>
          </div>
        </div>
      </div>

      {/* Feedback section */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h4 className="font-medium text-navy-900 mb-2">Como você avalia nosso atendimento?</h4>
        
        {!feedbackSubmitted ? (
          <div className="space-y-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="mr-1 focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 ${
                      rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              <span className="text-sm text-gray-500 ml-2">
                {rating > 0 ? `${rating} estrela${rating !== 1 ? 's' : ''}` : 'Avalie nosso atendimento'}
              </span>
            </div>
            
            <Button 
              onClick={handleSubmitFeedback}
              className="bg-navy-600 w-full"
              disabled={rating === 0}
            >
              Enviar avaliação
            </Button>
          </div>
        ) : (
          <p className="text-green-600 text-sm">Obrigado pelo seu feedback!</p>
        )}
      </div>

      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 mt-4">
        <Button 
          onClick={onReset}
          className="bg-navy-600 flex-1"
        >
          Iniciar nova conversa
        </Button>
        <Button 
          onClick={onClose}
          variant="outline" 
          className="flex-1"
        >
          Fechar chat
        </Button>
      </div>
    </div>
  );
};

export default TicketSubmitted;
