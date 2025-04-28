
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface TicketTypeProps {
  types: string[];
  onSelectType: (type: string) => void;
}

const TicketType = ({ types, onSelectType }: TicketTypeProps) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-navy-900">Tipo de chamado</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">
          Selecione o tipo de chamado que deseja abrir
        </p>

        <div className="space-y-2">
          {types.map(type => (
            <button
              key={type}
              onClick={() => onSelectType(type)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium text-gray-800">{type}</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketType;
