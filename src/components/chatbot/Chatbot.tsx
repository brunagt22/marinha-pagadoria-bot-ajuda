import { useState } from "react";
import { X, Send, ChevronRight, ArrowLeft, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Mock data de perguntas frequentes
const FREQUENT_QUESTIONS = [
  { id: "pagamento", question: "Informações sobre pagamento", answer: "Os pagamentos são processados no último dia útil de cada mês. Caso não tenha recebido, verifique se seus dados bancários estão corretos." },
  { id: "contracheque", question: "Como acessar contracheque", answer: "Para acessar seu contracheque, faça login no sistema BP Online com suas credenciais ZIMBRA/SCORE." },
  { id: "alteracao", question: "Alteração de dados bancários", answer: "Para alterar seus dados bancários, você deve enviar um requerimento ao seu órgão de vinculação com os novos dados." },
  { id: "irpf", question: "Comprovante de rendimentos para IR", answer: "Os comprovantes de rendimentos são disponibilizados anualmente até o final de fevereiro no sistema BP Online." },
  { id: "outros", question: "Outras dúvidas", answer: null },
];

const CATEGORIES = [
  "CONTROLADORIA DO SISPAG2",
  "MELHORIA DE GESTÃO DA PAPEM",
  "IR – COMPROVANTES DE RENDIMENTOS",
  "PAGAMENTO NO EXTERIOR",
  "PAGAMENTO PESSOAL MILITAR",
  "PAGAMENTO PESSOAL CIVIL",
  "PASEP",
  "EXERCÍCIOS ANTERIORES",
  "FUNCIONAMENTO DO SISPAG2",
  "NÃO RECEBIMENTO DE PAGAMENTO",
  "ALTERAÇÃO DE DADOS BANCÁRIOS",
  "COPIMED",
  "RECOLHIMENTO DE PAGAMENTOS INDEVIDOS E DESIN",
  "COPMED DE DIÁRIAS NO EXTERIOR",
  "SISRES",
  "REDIRECIONAMENTO DO PAGAMENTO",
  "BP ONLINE",
  "PENSÃO ALIMENTÍCIA"
];

const TICKET_TYPES = ["Incidente", "Requisição"];

const SAMPLE_TITLES = [
  "Erro ao acessar BP Online",
  "Não recebimento de pagamento",
  "Alteração de dados bancários",
  "Dúvida sobre IRPF"
];

interface ChatbotProps {
  onClose: () => void;
}

type ChatStep = 
  | 'welcome' 
  | 'question-answered' 
  | 'login' 
  | 'ticket-type' 
  | 'ticket-category'
  | 'ticket-email'
  | 'ticket-title'
  | 'ticket-description'
  | 'ticket-submitted';

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
    
    // Em um cenário real, aqui faria autenticação
    // Para o MVP, apenas seguimos para próxima etapa
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
    // Em um cenário real, aqui enviaria as informações do chamado
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
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={resetChat}
            className="text-white/80 hover:text-white"
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        {step === 'welcome' && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-medium text-navy-900">Olá! Como posso ajudar?</p>
              <p className="text-sm text-gray-600 mt-1">
                Selecione uma das opções abaixo ou abra um chamado.
              </p>
            </div>

            <div className="space-y-2">
              {FREQUENT_QUESTIONS.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuestion(q.id)}
                  className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-sm font-medium text-gray-800">{q.question}</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              ))}
            </div>

            <Button 
              onClick={handleCreateTicket}
              className="bg-navy-600 hover:bg-navy-700 w-full"
            >
              Abrir chamado no helpdesk
            </Button>
          </div>
        )}

        {step === 'question-answered' && (
          <div className="space-y-6 animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
                <p className="font-medium text-navy-900">{getSelectedQuestion()?.question}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-800">{getSelectedQuestion()?.answer}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">Sua dúvida não foi resolvida?</p>
                <Button 
                  onClick={handleCreateTicket}
                  className="bg-navy-600 hover:bg-navy-700 w-full"
                >
                  Abrir chamado no helpdesk
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 'login' && (
          <div className="animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="font-semibold text-center text-navy-900">
                  Login para abertura de chamado
                </h3>
                <p className="text-sm text-gray-600 text-center mt-1 mb-4">
                  Use suas credenciais do SCORE (ZIMBRA)
                </p>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                      Usuário / E-mail
                    </label>
                    <Input 
                      id="email"
                      type="text" 
                      value={ticketInfo.email}
                      onChange={(e) => setTicketInfo({...ticketInfo, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
                      Senha
                    </label>
                    <Input 
                      id="password"
                      type="password"
                      value={ticketInfo.password}
                      onChange={(e) => setTicketInfo({...ticketInfo, password: e.target.value})}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-navy-600 hover:bg-navy-700 w-full"
                    disabled={!ticketInfo.email || !ticketInfo.password}
                  >
                    Entrar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}

        {step === 'ticket-type' && (
          <div className="animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
                <h3 className="font-semibold text-navy-900">Tipo de chamado</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">
                  Selecione o tipo de chamado que deseja abrir
                </p>

                <div className="space-y-2">
                  {TICKET_TYPES.map(type => (
                    <button
                      key={type}
                      onClick={() => handleSelectTicketType(type)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors text-left"
                    >
                      <span className="text-sm font-medium text-gray-800">{type}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'ticket-category' && (
          <div className="animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
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
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'ticket-email' && (
          <div className="animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
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
          </div>
        )}

        {step === 'ticket-title' && (
          <div className="animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
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
          </div>
        )}

        {step === 'ticket-description' && (
          <div className="animate-fade-in relative">
            {renderBackButton()}
            
            <div className="pt-8">
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
          </div>
        )}

        {step === 'ticket-submitted' && (
          <div className="animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
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
                  onClick={resetChat}
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
        )}
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
