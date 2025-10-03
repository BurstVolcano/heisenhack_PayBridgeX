import { GridBackground } from '../landing/GridBackground';
import { Navigation } from '../landing/Navigation';
import { LoginForm } from './LoginForm';

interface LoginPageProps {
  onBackToHome: () => void;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onLogin: () => void;
}

export const LoginPage = ({
  onBackToHome,
  email,
  password,
  setEmail,
  setPassword,
  onLogin
}: LoginPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <GridBackground />
      <Navigation onLogoClick={onBackToHome} onLoginClick={() => {}} />

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-8">
        <div className="w-full max-w-md relative">
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onLogin={onLogin}
          />

          {/* Decorative Orbs */}
          <div className="absolute top-1/4 -left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
