
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface QuestionAnsweredProps {
  question: string;
  answer: string;
  onCreateTicket: () => void;
  onSubmitFeedback: (rating: number) => void;
}

const QuestionAnswered = ({ 
  question, 
  answer, 
  onCreateTicket,
  onSubmitFeedback
}: QuestionAnsweredProps) => {
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
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-4">
          <h3 className="font-semibold text-navy-900 mb-1">{question}</h3>
          <div className="text-sm text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500 mb-2">Esta resposta resolveu sua dúvida?</p>
          
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
                  {rating > 0 ? `${rating} estrela${rating !== 1 ? 's' : ''}` : 'Avalie nossa resposta'}
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
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-3">
          Não encontrou o que procurava?
        </p>
        <Button 
          onClick={onCreateTicket}
          className="bg-navy-600"
        >
          Abrir chamado no helpdesk
        </Button>
      </div>
    </div>
  );
};

export default QuestionAnswered;
