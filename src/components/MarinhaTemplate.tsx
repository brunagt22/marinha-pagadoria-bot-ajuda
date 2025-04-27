
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarinhaTemplateProps {
  children: ReactNode;
  className?: string;
}

const MarinhaTemplate = ({ children, className }: MarinhaTemplateProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {/* Header */}
      <header className="bg-navy-900 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="Marinha do Brasil" 
                className="h-12 w-12 bg-white p-1 rounded" 
              />
              <div className="ml-3">
                <h1 className="font-semibold text-xl">PAPEM</h1>
                <p className="text-xs opacity-80">Pagadoria de Pessoal da Marinha</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm hover:text-navy-100">Página Inicial</a>
              <a href="#" className="text-sm hover:text-navy-100">Institucional</a>
              <a href="#" className="text-sm hover:text-navy-100">Serviços</a>
              <a href="#" className="text-sm hover:text-navy-100">Contato</a>
            </nav>
          </div>

          <div className="flex items-center">
            <a href="#" className="text-sm px-3 py-2 rounded bg-navy-700 hover:bg-navy-600">
              Área Restrita
            </a>
          </div>
        </div>
      </header>

      {/* Sub header with breadcrumbs */}
      <div className="bg-navy-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex text-sm">
            <a href="#" className="text-navy-100 hover:text-white">Início</a>
            <span className="mx-2">›</span>
            <span>Pagamentos</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Pagadoria de Pessoal da Marinha</h3>
              <p className="text-sm text-gray-300 mb-3">
                Praça Barão de Ladário, s/nº - Centro<br />
                Rio de Janeiro - RJ - CEP: 20091-000
              </p>
              <p className="text-sm text-gray-300">
                Telefone: (21) 2104-6963
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">BP Online</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Sistema SCORE</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Calendário de Pagamentos</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Legislação</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Sites Relacionados</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Marinha do Brasil</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Ministério da Defesa</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Governo Federal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-navy-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} PAPEM - Marinha do Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarinhaTemplate;
