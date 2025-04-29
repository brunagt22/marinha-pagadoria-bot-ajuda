
import { useState } from "react";
import { X, MessageSquare, TicketPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import Chatbot from "./Chatbot";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenTicket = () => {
    setIsOpen(true);
    // Add a small delay to ensure the chat is open before sending the message
    setTimeout(() => {
      // This is a way to directly trigger the ticket creation flow
      const event = new CustomEvent('openTicket');
      document.dispatchEvent(event);
      
      toast({
        title: "Abrindo formulário de chamado",
        description: "O formulário de abertura de chamado está sendo preparado para você.",
        duration: 3000,
      });
    }, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot dialog */}
      <div 
        className={cn(
          "absolute bottom-16 right-0 w-[380px] max-h-[600px] overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200",
          "transition-all duration-300 ease-in-out",
          isOpen 
            ? "opacity-100 pointer-events-auto transform translate-y-0" 
            : "opacity-0 pointer-events-none transform translate-y-4",
          "md:w-[450px]"
        )}
      >
        <Chatbot onClose={() => setIsOpen(false)} />
      </div>

      {/* Quick action buttons */}
      <div className={cn(
        "flex flex-col gap-2 mb-2 items-end transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <Button
          onClick={handleOpenTicket}
          className="bg-green-600 hover:bg-green-700 text-white shadow-lg flex items-center gap-1"
          size="sm"
        >
          <TicketPlus className="w-4 h-4" /> Abrir Chamado
        </Button>
      </div>

      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center p-4 rounded-full text-white shadow-lg transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-navy-300 focus:ring-offset-2",
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-gradient-to-r from-navy-500 to-navy-700 hover:bg-navy-600 animate-pulse"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/af9fdefd-cf6e-408a-8b63-3f1afe6ab16c.png" 
              alt="PAPEM Mascote"
              className="w-8 h-8 mr-2"
            />
            <span className="text-sm font-medium">Como posso ajudar?</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBubble;
