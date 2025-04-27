
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FREQUENT_QUESTIONS, CATEGORIES, TICKET_TYPES, SAMPLE_TITLES, type ChatStep } from "./constants";
import Welcome from "./steps/Welcome";
import QuestionAnswered from "./steps/QuestionAnswered";
import Login from "./steps/Login";
import TicketType from "./steps/TicketType";
import TicketSubmitted from "./steps/TicketSubmitted";

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot = ({ onClose }: ChatbotProps) => {
  const [step, setStep] = useState<ChatStep>('welcome');
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [ticketInfo, setTicketInfo] = useState({
    email: '',
    password: '',
    type: '',
    category: '',
    receiveEmailUpdates: false,
    notificationEmail: '',
    title: '',
    description: ''
  });
  const [customInput, setCustomInput] = useState('');

  const handleSelectQuestion = (id: string) => {
    const question = FREQUENT_QUESTIONS.find(q => q.id === id);
    setSelectedQuestion(id);
    
    if (question?.answer === null) {
      handleCreateTicket();
    } else {
      setStep('question-answered');
    }
  };

  const handleCreateTicket = () => {
    setStep('login');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('ticket-type');
  };

  const handleSelectTicketType = (type: string) => {
    setTicketInfo(prev => ({ ...prev, type }));
    setStep('ticket-category');
  };

  const handleSelectCategory = (category: string) => {
    setTicketInfo(prev => ({ ...prev, category }));
    setStep('ticket-email');
  };

  const handleEmailUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setTicketInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('ticket-title');
  };

  const handleTitleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('ticket-description');
  };

  const handleDescriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('ticket-submitted');
  };

  const getSelectedQuestion = () => {
    return FREQUENT_QUESTIONS.find(q => q.id === selectedQuestion);
  };

  const renderBackButton = () => (
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-2 left-2"
      onClick={() => {
        if (step === 'question-answered') setStep('welcome');
        else if (step === 'login') {
          setSelectedQuestion(null);
          setStep('welcome');
        }
        else if (step === 'ticket-type') setStep('login');
        else if (step === 'ticket-category') setStep('ticket-type');
        else if (step === 'ticket-email') setStep('ticket-category');
        else if (step === 'ticket-title') setStep('ticket-email');
        else if (step === 'ticket-description') setStep('ticket-title');
      }}
    >
      <ArrowLeft className="h-4 w-4 mr-1" /> Voltar
    </Button>
  );

  const resetChat = () => {
    setStep('welcome');
    setSelectedQuestion(null);
    setTicketInfo({
      email: '',
      password: '',
      type: '',
      category: '',
      receiveEmailUpdates: false,
      notificationEmail: '',
      title: '',
      description: ''
    });
  };

  return (
    <div className="flex flex-col h-[600px]">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-navy-700 to-navy-900 text-white flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6cb6a548-72a3-4922-866c-6238d2d02be1.png" 
            alt="PAPEM Logo" 
            className="h-8 w-8 mr-3"
          />
          <div>
            <h3 className="font-semibold">Assistente PAPEM</h3>
            <p className="text-xs opacity-80">Pagadoria de Pessoal da Marinha</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        <div className="relative">
          {step !== 'welcome' && step !== 'ticket-submitted' && renderBackButton()}

          {step === 'welcome' && (
            <Welcome 
              questions={FREQUENT_QUESTIONS}
              onSelectQuestion={handleSelectQuestion}
              onCreateTicket={handleCreateTicket}
            />
          )}

          {step === 'question-answered' && getSelectedQuestion() && (
            <QuestionAnswered 
              question={getSelectedQuestion()!.question}
              answer={getSelectedQuestion()!.answer!}
              onCreateTicket={handleCreateTicket}
            />
          )}

          {step === 'login' && (
            <Login 
              email={ticketInfo.email}
              password={ticketInfo.password}
              onEmailChange={(value) => setTicketInfo({...ticketInfo, email: value})}
              onPasswordChange={(value) => setTicketInfo({...ticketInfo, password: value})}
              onSubmit={handleLogin}
            />
          )}

          {step === 'ticket-type' && (
            <TicketType 
              types={TICKET_TYPES}
              onSelectType={handleSelectTicketType}
            />
          )}

          {step === 'ticket-category' && (
            <div className="animate-fade-in">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-navy-900">Categoria do chamado</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">
                  Selecione a categoria que melhor descreve seu chamado
                </p>

                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => handleSelectCategory(category)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors text-left"
                    >
                      <span className="text-sm font-medium text-gray-800">{category}</span>
                      <ArrowLeft className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'ticket-email' && (
            <div className="animate-fade-in">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-navy-900">Acompanhamento por e-mail</h3>
                <p className="text-sm text-gray-600 mt-1 mb-4">
                  Deseja receber atualizações sobre seu chamado por e-mail?
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="receiveEmailUpdates"
                      name="receiveEmailUpdates"
                      checked={ticketInfo.receiveEmailUpdates}
                      onChange={handleEmailUpdate}
                      className="h-4 w-4 text-navy-600 border-gray-300 rounded"
                    />
                    <label htmlFor="receiveEmailUpdates" className="ml-2 text-sm text-gray-700">
                      Sim, quero receber atualizações por e-mail
                    </label>
                  </div>

                  {ticketInfo.receiveEmailUpdates && (
                    <div>
                      <label htmlFor="notificationEmail" className="text-sm font-medium text-gray-700 block mb-1">
                        E-mail para notificações
                      </label>
                      <Input 
                        id="notificationEmail"
                        name="notificationEmail"
                        type="email" 
                        value={ticketInfo.notificationEmail}
                        onChange={handleEmailUpdate}
                        required={ticketInfo.receiveEmailUpdates}
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="bg-navy-600 hover:bg-navy-700 w-full"
                  >
                    Continuar
                  </Button>
                </form>
              </div>
            </div>
          )}

          {step === 'ticket-title' && (
            <div className="animate-fade-in">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-navy-900">Título do chamado</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">
                  Digite um título que resuma seu chamado
                </p>

                <form onSubmit={handleTitleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Título do chamado"
                      value={ticketInfo.title}
                      onChange={(e) => setTicketInfo({...ticketInfo, title: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Sugestões de título:</p>
                    <div className="space-y-2">
                      {SAMPLE_TITLES.map(title => (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setTicketInfo({...ticketInfo, title})}
                          className="block w-full text-left text-sm bg-gray-50 p-2 rounded border border-gray-200 hover:bg-gray-100"
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-navy-600 hover:bg-navy-700 w-full"
                    disabled={!ticketInfo.title.trim()}
                  >
                    Continuar
                  </Button>
                </form>
              </div>
            </div>
          )}

          {step === 'ticket-description' && (
            <div className="animate-fade-in">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-navy-900">Descrição do problema</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">
                  Descreva seu problema ou solicitação em detalhes
                </p>

                <form onSubmit={handleDescriptionSubmit} className="space-y-4">
                  <div>
                    <Textarea 
                      placeholder="Descreva seu problema aqui..."
                      value={ticketInfo.description}
                      onChange={(e) => setTicketInfo({...ticketInfo, description: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-navy-600 hover:bg-navy-700 w-full"
                    disabled={!ticketInfo.description.trim()}
                  >
                    Enviar chamado
                  </Button>
                </form>
              </div>
            </div>
          )}

          {step === 'ticket-submitted' && (
            <TicketSubmitted 
              ticketInfo={ticketInfo}
              onReset={resetChat}
              onClose={onClose}
            />
          )}
        </div>
      </div>

      {/* Footer with controlled visibility */}
      {step === 'welcome' && (
        <div className="p-3 border-t border-gray-100 text-center bg-white">
          <p className="text-xs text-gray-500">
            PAPEM - Pagadoria de Pessoal da Marinha
          </p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
