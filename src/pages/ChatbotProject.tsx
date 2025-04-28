
import { useState } from "react";
import MarinhaTemplate from "@/components/MarinhaTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ExternalLink } from "lucide-react";
import ChatBubble from "@/components/chatbot/ChatBubble";

const ChatbotProject = () => {
  const [activeTab, setActiveTab] = useState("visao-geral");

  const handleDownloadPDF = () => {
    // Create a link to download the PDF and trigger it
    const link = document.createElement('a');
    link.href = '/lovable-uploads/chatbot-papem-mvp.pdf'; // This is where you'd upload your PDF
    link.download = 'chatbot-papem-mvp.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <MarinhaTemplate>
      <div className="space-y-8">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white p-6 md:p-12 rounded-lg shadow-lg">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Chatbot Inteligente PAPEM</h1>
                <p className="text-lg opacity-90 mb-6">
                  Um assistente virtual avançado para o Help Desk da Marinha do Brasil
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleDownloadPDF}
                    className="bg-white text-navy-900 hover:bg-gray-100"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Proposta PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => {
                      const demoSection = document.getElementById('demo-section');
                      if (demoSection) {
                        demoSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Testar o Chatbot
                  </Button>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <img 
                  src="/lovable-uploads/6cb6a548-72a3-4922-866c-6238d2d02be1.png" 
                  alt="PAPEM Logo" 
                  className="w-32 h-32"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4">Conteúdo</h3>
                <nav className="space-y-1">
                  {[
                    { id: 'visao-geral', label: '1. Visão Geral do Projeto' },
                    { id: 'comparativo', label: '2. Comparativo de Soluções' },
                    { id: 'arquitetura', label: '3. Arquitetura da Solução' },
                    { id: 'fluxo', label: '4. Fluxo de Atendimento' },
                    { id: 'linguagem', label: '5. Capacidade de NLP' },
                    { id: 'hardware', label: '6. Especificações Técnicas' },
                    { id: 'conhecimento', label: '7. Base de Conhecimento' },
                    { id: 'monitoramento', label: '8. Monitoramento e Logs' },
                    { id: 'seguranca', label: '9. Segurança e Compliance' },
                    { id: 'cronograma', label: '10. Cronograma' },
                    { id: 'beneficios', label: '11. Vantagens e Benefícios' },
                    { id: 'expansoes', label: '12. Expansões Futuras' },
                  ].map(item => (
                    <button
                      key={item.id}
                      className={`block w-full text-left px-3 py-2 rounded-md ${activeTab === item.id ? 'bg-navy-100 text-navy-900 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Demo Section on Mobile */}
            <div className="lg:hidden" id="demo-section-mobile">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Demonstração</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Teste o chatbot PAPEM clicando no botão flutuante no canto inferior direito da tela.
                  </p>
                  <div className="h-12"></div> {/* Space for floating button */}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Content Card */}
            <Card>
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  {/* 1. Visão Geral do Projeto */}
                  <TabsContent value="visao-geral" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">1. Visão Geral do Projeto</h2>
                    <p>
                      O presente MVP (Minimum Viable Product) representa uma solução avançada de assistente virtual (chatbot) para o atendimento do Help Desk da Marinha do Brasil, especificamente para a Pagadoria de Pessoal da Marinha (PAPEM). Esta implementação foi concebida para:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Reduzir o volume de chamados simples</strong> através da resolução automática de dúvidas frequentes</li>
                      <li><strong>Otimizar o processo de abertura de chamados</strong> quando necessário</li>
                      <li><strong>Proporcionar uma experiência de atendimento moderna e disponível 24/7</strong></li>
                      <li><strong>Integrar-se perfeitamente ao sistema HelpDesk PAPEM existente</strong></li>
                    </ul>
                    <p>
                      Nossa proposta atende todos os requisitos especificados no documento original de definição e vai além, incorporando tecnologias modernas em processamento de linguagem natural, experiência do usuário e integração com sistemas existentes.
                    </p>
                  </TabsContent>

                  {/* 2. Comparativo de Soluções */}
                  <TabsContent value="comparativo" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">2. Comparativo: Proposta Anterior vs. Nossa Solução</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead>
                          <tr className="bg-navy-50">
                            <th className="py-2 px-4 border border-gray-200 text-left">Aspecto</th>
                            <th className="py-2 px-4 border border-gray-200 text-left">Solução Anterior (Indra/Conect Chat)</th>
                            <th className="py-2 px-4 border border-gray-200 text-left">Solução da PAPEM-32</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200 font-medium">Motor de IA</td>
                            <td className="py-2 px-4 border border-gray-200">Biblioteca node-nlp limitada (versão 4.17.2) com tokenização básica, stop-words e stemming</td>
                            <td className="py-2 px-4 border border-gray-200">Framework Rasa Open Source com pipeline de NLU avançado e capacidade superior de interpretação de texto livre</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200 font-medium">Arquitetura</td>
                            <td className="py-2 px-4 border border-gray-200">Solução baseada em plataforma pré-construída</td>
                            <td className="py-2 px-4 border border-gray-200">Desenvolvimento customizado alinhado às necessidades específicas da PAPEM</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200 font-medium">Processamento de Linguagem</td>
                            <td className="py-2 px-4 border border-gray-200">Processamento básico com TF-IDF em trigramas</td>
                            <td className="py-2 px-4 border border-gray-200">Processamento avançado com técnicas de machine learning e compreensão de contexto</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200 font-medium">Manutenção</td>
                            <td className="py-2 px-4 border border-gray-200">Dependência de plataforma externa</td>
                            <td className="py-2 px-4 border border-gray-200">Solução de código aberto totalmente controlável pela equipe da PAPEM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  {/* 3. Arquitetura da Solução */}
                  <TabsContent value="arquitetura" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">3. Arquitetura da Solução</h2>
                    <h3 className="text-xl font-semibold text-navy-700">3.1 Visão Geral da Arquitetura</h3>
                    <p>
                      A solução da PAPEM-32 implementa uma arquitetura moderna de microserviços, garantindo escalabilidade, performance e facilidade de manutenção:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto">
                      [Usuário] → [Portal PAPEM c/ Widget de Chat] → [Backend do Chatbot] → [Engine Rasa NLU/ML]<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
                      [Sistema HelpDesk PAPEM] ← [API de Integração] ← [Base de Conhecimento]
                    </div>
                    
                    <h3 className="text-xl font-semibold text-navy-700">3.2 Stack Tecnológica</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-md p-4">
                        <h4 className="font-bold">Front-end:</h4>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li><strong>React 18 + TypeScript</strong>: Para interface responsiva</li>
                          <li><strong>TailwindCSS</strong>: Para estilização consistente e moderna</li>
                          <li><strong>Componentes UI customizados</strong>: Identidade visual da Marinha</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md p-4">
                        <h4 className="font-bold">Back-end:</h4>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li><strong>Node.js 18+</strong>: Ambiente de execução JavaScript</li>
                          <li><strong>Express.js</strong>: Framework web para API RESTful</li>
                          <li><strong>Rasa Open Source</strong>: Framework de IA para NLP</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-navy-700">3.3 Integrações</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Integração com LDAP da Marinha</strong>: Para validação da identidade do usuário</li>
                      <li><strong>Integração com HelpDesk PAPEM (HESK)</strong>: Para abertura direta de chamados pelo chatbot</li>
                      <li><strong>Integração com o Portal PAPEM</strong>: Para incorporação do widget de chat</li>
                    </ul>
                  </TabsContent>

                  {/* 4. Fluxo de Atendimento */}
                  <TabsContent value="fluxo" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">4. Fluxo de Atendimento do Chatbot</h2>
                    <p>
                      O chatbot da PAPEM-32 implementa o seguinte fluxo de atendimento:
                    </p>
                    
                    <div className="bg-navy-50 p-4 rounded-md space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-bold">1. Boas-vindas e identificação</h3>
                        <p className="text-sm">O usuário é recebido e sua identidade é validada através da integração com LDAP. Já nesta etapa inicial, o chatbot pergunta se o usuário deseja tirar uma dúvida ou abrir um chamado diretamente.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-bold">2. Modos de interação flexíveis</h3>
                        <p className="text-sm">O usuário pode selecionar opções predefinidas para navegar pelo sistema ou digitar suas perguntas naturalmente, com o sistema interpretando a intenção usando processamento avançado de linguagem natural (Rasa).</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-bold">3. Para tirar dúvidas</h3>
                        <p className="text-sm">O usuário seleciona a categoria ou digita diretamente sua questão. O sistema processa o texto usando seu motor de NLP para identificar a intenção correta e apresenta informações relevantes.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-bold">4. Para abertura de chamado</h3>
                        <p className="text-sm">O chatbot sempre sugere dúvidas frequentes antes de prosseguir. O usuário seleciona o tipo de chamado, a categoria específica, e fornece as informações necessárias.</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border-l-4 border-navy-400 bg-navy-50">
                      <p className="italic">
                        Este fluxo prioriza a resolução imediata das dúvidas do usuário, tentando ao máximo evitar a abertura de chamados desnecessários, mas sempre oferecendo a opção de abertura de chamado em todas as etapas da interação.
                      </p>
                    </div>
                  </TabsContent>

                  {/* 5. Capacidade de NLP */}
                  <TabsContent value="linguagem" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">5. Capacidade de Compreensão de Linguagem Natural</h2>
                    
                    <h3 className="text-xl font-semibold text-navy-700">5.1 Como Funciona o Processamento de Linguagem</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Análise de intenção</strong>: O framework Rasa analisa o texto digitado pelo usuário</li>
                      <li><strong>Processamento semântico</strong>: O sistema compreende o contexto da pergunta</li>
                      <li><strong>Tratamento de variações</strong>: Identifica a mesma intenção em formulações diferentes</li>
                      <li><strong>Tratamento de linguagem natural</strong>: Interação com linguagem cotidiana</li>
                    </ol>
                    
                    <h3 className="text-xl font-semibold text-navy-700">5.2 Exemplos de Processamento de Linguagem</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead>
                          <tr className="bg-navy-50">
                            <th className="py-2 px-4 border border-gray-200 text-left">Variações de perguntas</th>
                            <th className="py-2 px-4 border border-gray-200 text-left">Intenção identificada</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200">"Como faço para ter acesso ao contracheque?"</td>
                            <td className="py-2 px-4 border border-gray-200">Acesso ao BP Online</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200">"Não consigo ver meu bilhete de pagamento"</td>
                            <td className="py-2 px-4 border border-gray-200">Acesso ao BP Online</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-gray-200">"Onde vejo meu contracheque?"</td>
                            <td className="py-2 px-4 border border-gray-200">Acesso ao BP Online</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  {/* 6. Especificações Técnicas */}
                  <TabsContent value="hardware" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">6. Especificações de Hardware e Infraestrutura</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-md p-4">
                        <h3 className="font-bold text-navy-700">Servidor de Aplicação</h3>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li><strong>Processador</strong>: 12 vCPUs</li>
                          <li><strong>Memória RAM</strong>: 16GB DDR4</li>
                          <li><strong>Armazenamento</strong>: SSD 1TB</li>
                          <li><strong>Sistema Operacional</strong>: Oracle Linux 9.4</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md p-4">
                        <h3 className="font-bold text-navy-700">Servidor de NLP/ML</h3>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li><strong>Processador</strong>: 16 vCPUs</li>
                          <li><strong>Memória RAM</strong>: 32GB DDR4</li>
                          <li><strong>Armazenamento</strong>: SSD 1TB</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md p-4">
                        <h3 className="font-bold text-navy-700">Banco de Dados</h3>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li><strong>Oracle 9.4</strong>: 8 vCPUs, 16GB RAM</li>
                          <li><strong>MongoDB</strong>: 8 vCPUs, 16GB RAM</li>
                          <li><strong>Redis Cache</strong>: 4 vCPUs, 8GB RAM</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 7. Base de Conhecimento */}
                  <TabsContent value="conhecimento">
                    <h2 className="text-2xl font-bold text-navy-900">7. Base de Conhecimento</h2>
                    <p className="mt-4">
                      A solução da PAPEM-32 incorpora uma extensa base de conhecimento com mais de 50 perguntas e respostas categorizadas por áreas (PAPEM 10-40) e suas subcategorias, incluindo:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="bg-navy-50 rounded-lg p-4">
                        <h3 className="font-semibold text-navy-900">Categorias Principais</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Informações sobre pagamentos e comprovantes</li>
                          <li>Imposto de Renda</li>
                          <li>PASEP</li>
                          <li>Pagamento no exterior</li>
                          <li>Consignações e empréstimos</li>
                          <li>Pensão alimentícia</li>
                        </ul>
                      </div>
                      
                      <div className="bg-navy-50 rounded-lg p-4">
                        <h3 className="font-semibold text-navy-900">Exemplos de Perguntas</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Como acessar o contracheque?</li>
                          <li>Onde consigo o comprovante de rendimentos?</li>
                          <li>Como alterar meus dados bancários?</li>
                          <li>O que fazer em caso de não recebimento?</li>
                          <li>Como funciona a pensão alimentícia?</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 8. Monitoramento e Logs */}
                  <TabsContent value="monitoramento">
                    <h2 className="text-2xl font-bold text-navy-900">8. Monitoramento e Logs</h2>
                    <p className="mt-4">
                      A PAPEM-32 implementa um sistema robusto de monitoramento usando OpenSearch para:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="border border-gray-200 p-4 rounded-md flex items-start space-x-3">
                        <div className="bg-navy-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Acompanhamento de performance</h3>
                          <p className="text-sm text-gray-600 mt-1">Identificação de gargalos e otimização contínua do sistema</p>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-md flex items-start space-x-3">
                        <div className="bg-navy-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Registro de interações</h3>
                          <p className="text-sm text-gray-600 mt-1">Histórico de conversas para auditoria e melhorias</p>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-md flex items-start space-x-3">
                        <div className="bg-navy-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Alertas proativos</h3>
                          <p className="text-sm text-gray-600 mt-1">Notificações sobre problemas potenciais</p>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-md flex items-start space-x-3">
                        <div className="bg-navy-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Visualização de métricas</h3>
                          <p className="text-sm text-gray-600 mt-1">Dashboards com informações sobre uso e desempenho</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 9. Segurança e Compliance */}
                  <TabsContent value="seguranca" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">9. Segurança e Compliance</h2>
                    
                    <h3 className="text-xl font-semibold text-navy-700">9.1. Conformidade com a DCTIMBOTEC 31/002/2020</h3>
                    <p>
                      A solução da PAPEM-32 foi desenvolvida em total alinhamento com os requisitos estabelecidos na DCTIMBOTEC 31/002/2020, garantindo os padrões de segurança exigidos pela Marinha do Brasil.
                    </p>
                    
                    <div className="bg-navy-50 p-4 rounded-md">
                      <h4 className="font-semibold">Interface via navegador web (Item 3.1):</h4>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                        <li>Compatibilidade com todos os navegadores padronizados na MB</li>
                        <li>Utilização exclusiva do protocolo HTTPS com certificados válidos</li>
                        <li>Certificados emitidos pelo CTIM para acesso interno na RECIM</li>
                        <li>Desabilitação de cache de informações sensíveis</li>
                      </ul>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-navy-700">9.2. Compliance com LGPD</h3>
                    <p>
                      A solução foi desenvolvida com foco no pleno atendimento à Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), implementando por design (Privacy by Design) os princípios de proteção de dados.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-md">
                        <h4 className="font-semibold">Finalidade específica e limitada</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                          <li>Coleta e processamento apenas dos dados estritamente necessários</li>
                          <li>Transparência sobre quais dados são coletados e sua finalidade</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-md">
                        <h4 className="font-semibold">Medidas técnicas de segurança</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                          <li>Criptografia de dados sensíveis em trânsito e em repouso</li>
                          <li>Logs de auditoria para rastrear acessos e alterações</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 10. Cronograma */}
                  <TabsContent value="cronograma">
                    <h2 className="text-2xl font-bold text-navy-900">10. Cronograma de Implementação</h2>
                    
                    <div className="mt-6 space-y-6">
                      <div className="relative">
                        <div className="absolute left-8 h-full w-0.5 bg-navy-200"></div>
                        
                        <div className="relative flex items-start mb-8">
                          <div className="flex h-16 items-center">
                            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy-600 text-white">
                              1
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">MVP (1 mês)</h3>
                            <p className="mt-1 text-gray-600">
                              Chatbot com capacidade de resposta às dúvidas frequentes e direcionamento para o HelpDesk
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative flex items-start mb-8">
                          <div className="flex h-16 items-center">
                            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy-600 text-white">
                              2
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">Versão 1.0 (2 meses após MVP)</h3>
                            <p className="mt-1 text-gray-600">
                              Implementação completa incluindo integração com HelpDesk
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative flex items-start">
                          <div className="flex h-16 items-center">
                            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy-600 text-white">
                              3
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">Versão 2.0 (3 meses após v1.0)</h3>
                            <p className="mt-1 text-gray-600">
                              Aprimoramentos baseados no feedback dos usuários e ampliação da base de conhecimento
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 11. Vantagens e Benefícios */}
                  <TabsContent value="beneficios" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">11. Vantagens e Benefícios</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-navy-700 mb-4">Para os Usuários</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                              <span className="font-medium">Interação mais natural</span>
                              <p className="text-sm text-gray-600">Capacidade de digitar perguntas em linguagem natural</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                              <span className="font-medium">Experiência mais fluida</span>
                              <p className="text-sm text-gray-600">Interface moderna e responsiva</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                              <span className="font-medium">Atendimento 24/7</span>
                              <p className="text-sm text-gray-600">Disponibilidade contínua</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-navy-700 mb-4">Para a PAPEM</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                              <span className="font-medium">Redução significativa de chamados simples</span>
                              <p className="text-sm text-gray-600">Estimativa de redução de até 70% dos chamados de primeiro nível</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                              <span className="font-medium">Melhor aproveitamento dos recursos humanos</span>
                              <p className="text-sm text-gray-600">Equipe focada em casos complexos</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                              <span className="font-medium">Independência tecnológica</span>
                              <p className="text-sm text-gray-600">Solução de código aberto controlável internamente</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 12. Expansões Futuras */}
                  <TabsContent value="expansoes" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy-900">12. Funcionalidades Adicionais</h2>
                    <p>
                      Identificamos oportunidades de expansão que podem ser implementadas mediante aprovação e disponibilização de recursos:
                    </p>
                    
                    <div className="space-y-6 mt-4">
                      <div className="bg-gradient-to-r from-navy-50 to-blue-50 rounded-lg p-6 border border-navy-100">
                        <h3 className="text-lg font-semibold text-navy-900">Capacidades Avançadas de IA (Deep Learning)</h3>
                        <p className="text-gray-600 mt-2">
                          A implementação de modelos avançados de deep learning ampliaria significativamente as capacidades de compreensão de linguagem do chatbot.
                        </p>
                        
                        <div className="mt-4">
                          <h4 className="font-medium">Melhorias possíveis:</h4>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Compreensão contextual aprimorada</li>
                            <li>Fallback inteligente para perguntas não previstas</li>
                            <li>Detecção de frustração do usuário</li>
                            <li>Compreensão de jargões específicos da Marinha</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-navy-50 to-green-50 rounded-lg p-6 border border-navy-100">
                        <h3 className="text-lg font-semibold text-navy-900">Expansão para Canal WhatsApp</h3>
                        <p className="text-gray-600 mt-2">
                          A adição de um canal de atendimento via WhatsApp expandiria significativamente o alcance do chatbot.
                        </p>
                        
                        <div className="mt-4">
                          <h4 className="font-medium">Benefícios para a PAPEM:</h4>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Atendimento em áreas com conectividade limitada</li>
                            <li>Disponibilidade em dispositivos móveis</li>
                            <li>Notificações push sobre status de chamados</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsList className="hidden">
                    <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
                    <TabsTrigger value="comparativo">Comparativo</TabsTrigger>
                    <TabsTrigger value="arquitetura">Arquitetura</TabsTrigger>
                    <TabsTrigger value="fluxo">Fluxo</TabsTrigger>
                    <TabsTrigger value="linguagem">NLP</TabsTrigger>
                    <TabsTrigger value="hardware">Hardware</TabsTrigger>
                    <TabsTrigger value="conhecimento">Conhecimento</TabsTrigger>
                    <TabsTrigger value="monitoramento">Monitoramento</TabsTrigger>
                    <TabsTrigger value="seguranca">Segurança</TabsTrigger>
                    <TabsTrigger value="cronograma">Cronograma</TabsTrigger>
                    <TabsTrigger value="beneficios">Benefícios</TabsTrigger>
                    <TabsTrigger value="expansoes">Expansões</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Section - Desktop */}
        <section id="demo-section" className="mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-navy-900">Demonstração do Chatbot</h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => window.open("https://github.com/papem-32/chatbot-mvp", "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver no GitHub
                </Button>
              </div>
              
              <p className="text-gray-600 mb-6">
                Esta é uma versão demonstrativa do chatbot PAPEM. Experimente fazer perguntas sobre pagamentos, contracheques ou abertura de chamados.
                O chatbot está disponível no canto inferior direito da tela. Clique no ícone para iniciar uma conversa.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-500">
                  ↘️ Clique no botão "Como posso ajudar?" no canto inferior direito para interagir com o chatbot
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      
      {/* Chatbot */}
      <ChatBubble />
    </MarinhaTemplate>
  );
};

export default ChatbotProject;
