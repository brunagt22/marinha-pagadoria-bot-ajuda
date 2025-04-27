
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Chatbot from "./Chatbot";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot dialog */}
      <div 
        className={cn(
          "absolute bottom-16 right-0 w-[380px] max-h-[600px] overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200",
          "transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "md:w-[450px]"
        )}
      >
        <Chatbot onClose={() => setIsOpen(false)} />
      </div>

      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center p-4 rounded-full text-white shadow-lg",
          "transition-all duration-300",
          "hover:scale-105",
          "focus:outline-none focus:ring-2 focus:ring-navy-300 focus:ring-offset-2",
          "animate-bounce-in",
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-gradient-to-r from-navy-500 to-navy-700 hover:from-navy-600 hover:to-navy-800"
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
