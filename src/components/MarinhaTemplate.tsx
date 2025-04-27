
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface MarinhaTemplateProps {
  children: ReactNode;
  className?: string;
}

const MarinhaTemplate = ({ children, className }: MarinhaTemplateProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {/* Top gov.br bar */}
      <div className="bg-navy-900 text-white">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center text-xs">
          <a href="https://gov.br" className="text-white/90 hover:text-white">
            gov.br
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/90 hover:text-white">ACESSO À INFORMAÇÃO</a>
            <a href="#" className="text-white/90 hover:text-white">PARTICIPE</a>
            <a href="#" className="text-white/90 hover:text-white">LEGISLAÇÃO</a>
            <a href="#" className="text-white/90 hover:text-white">ÓRGÃOS DO GOVERNO</a>
          </div>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">MINISTÉRIO DA DEFESA</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">EXÉRCITO</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FORÇA AÉREA</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">OUVIDORIA</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">ÁREA DE IMPRENSA</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">ACESSIBILIDADE</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">MAPA DO SITE</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">ALTO CONTRASTE</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
              
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/6cb6a548-72a3-4922-866c-6238d2d02be1.png" 
                  alt="PAPEM" 
                  className="h-16 w-16"
                />
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-navy-900">PAGADORIA DE PESSOAL DA MARINHA</h1>
                  <p className="text-sm text-gray-600">"ORDEM, PRONTIDÃO E REGULARIDADE"</p>
                </div>
              </div>
            </div>

            <div className="relative w-96">
              <Input 
                type="search"
                placeholder="O que você procura?"
                className="pr-10 bg-gray-50"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-6">
            <div className="flex items-center gap-2 py-4 px-6 cursor-pointer hover:bg-gray-50">
              <span className="text-green-600">📰</span>
              <span className="text-gray-700">Notícias</span>
            </div>
            <div className="flex items-center gap-2 py-4 px-6 cursor-pointer hover:bg-gray-50">
              <span className="text-yellow-500">⭐</span>
              <span className="text-gray-700">Transparência Pública</span>
            </div>
            <div className="flex items-center gap-2 py-4 px-6 cursor-pointer hover:bg-gray-50">
              <span className="text-red-500">🔥</span>
              <span className="text-gray-700">Links úteis</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-8">
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
        </div>
      </footer>
    </div>
  );
};

export default MarinhaTemplate;
