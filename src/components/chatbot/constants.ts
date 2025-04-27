
export const FREQUENT_QUESTIONS = [
  { 
    id: "pagamento", 
    question: "Informações sobre pagamento", 
    answer: "Os pagamentos são processados no último dia útil de cada mês. Caso não tenha recebido, verifique se seus dados bancários estão corretos." 
  },
  { 
    id: "contracheque", 
    question: "Como acessar contracheque", 
    answer: "Para acessar seu contracheque, faça login no sistema BP Online com suas credenciais ZIMBRA/SCORE." 
  },
  { 
    id: "alteracao", 
    question: "Alteração de dados bancários", 
    answer: "Para alterar seus dados bancários, você deve enviar um requerimento ao seu órgão de vinculação com os novos dados." 
  },
  { 
    id: "irpf", 
    question: "Comprovante de rendimentos para IR", 
    answer: "Os comprovantes de rendimentos são disponibilizados anualmente até o final de fevereiro no sistema BP Online." 
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
