
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface TicketSubmittedProps {
  ticketInfo: {
    receiveEmailUpdates: boolean;
    notificationEmail: string;
  };
  onReset: () => void;
  onClose: () => void;
}

const TicketSubmitted = ({ ticketInfo, onReset, onClose }: TicketSubmittedProps) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Chamado enviado com sucesso!</h3>
        <p className="text-gray-600 mt-2 mb-4">
          Seu chamado foi registrado com o número <span className="font-semibold">#{Math.floor(Math.random() * 100000)}</span>
        </p>
        <p className="text-sm text-gray-500 mb-6">
          {ticketInfo.receiveEmailUpdates && (
            <>Você receberá atualizações no e-mail: <span className="font-medium">{ticketInfo.notificationEmail}</span></>
          )}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Posso ajudar com mais alguma coisa?
        </p>
        <div className="flex gap-3 justify-center">
          <Button 
            onClick={onReset}
            className="bg-navy-600 hover:bg-navy-700"
          >
            Nova consulta
          </Button>
          <Button 
            onClick={onClose}
            variant="outline"
          >
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketSubmitted;
