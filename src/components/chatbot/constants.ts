export const FREQUENT_QUESTIONS = [
  { 
    id: "pagamento", 
    question: "Informações sobre pagamento", 
    answer: "Os pagamentos são processados no último dia útil de cada mês. Caso não tenha recebido, verifique se seus dados bancários estão corretos." 
  },
  { 
    id: "contracheque", 
    question: "Como faço para ter acesso ao contracheque?", 
    answer: "Para acessar seu contracheque, acesse o BP Online através do portal PAPEM usando suas credenciais. No menu principal, selecione a opção 'Bilhete de Pagamento'.",
    keywords: ["bp", "bilhete", "pagamento", "salário", "holerite", "demonstrativo", "folha"]
  },
  { 
    id: "alteracao", 
    question: "Alteração de dados bancários", 
    answer: "Para alterar seus dados bancários, você deve enviar um requerimento ao seu órgão de vinculação com os novos dados." 
  },
  { 
    id: "ir", 
    question: "Onde encontro meu comprovante de rendimentos para IR?", 
    answer: "O comprovante de rendimentos está disponível no BP Online. Acesse o portal PAPEM, entre no BP Online e procure a opção 'Comprovante de Rendimentos' no menu.",
    keywords: ["imposto", "renda", "declaração", "informe", "tributação"]
  },
  { 
    id: "outros", 
    question: "Outras dúvidas", 
    answer: null 
  },
];

export const CATEGORIES = [
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

export const TICKET_TYPES = ["Incidente", "Requisição"];

export const SAMPLE_TITLES = [
  "Erro ao acessar BP Online",
  "Não recebimento de pagamento",
  "Alteração de dados bancários",
  "Dúvida sobre IRPF"
];

export type ChatStep = 
  | 'welcome' 
  | 'question-answered' 
  | 'login' 
  | 'ticket-type' 
  | 'ticket-category'
  | 'ticket-email'
  | 'ticket-title'
  | 'ticket-description'
  | 'ticket-submitted';

export interface FrequentQuestion {
  id: string;
  question: string;
  answer: string | null;
  keywords?: string[];
}
