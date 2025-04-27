
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Login = ({ email, password, onEmailChange, onPasswordChange, onSubmit }: LoginProps) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="font-semibold text-center text-navy-900">
          Login para abertura de chamado
        </h3>
        <p className="text-sm text-gray-600 text-center mt-1 mb-4">
          Use suas credenciais do SCORE (ZIMBRA)
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
              Usuário / E-mail
            </label>
            <Input 
              id="email"
              type="text" 
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
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
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="bg-navy-600 hover:bg-navy-700 w-full"
            disabled={!email || !password}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
