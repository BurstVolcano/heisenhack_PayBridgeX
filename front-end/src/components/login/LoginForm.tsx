import { Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onLogin: () => void;
}

export const LoginForm = ({ email, password, setEmail, setPassword, onLogin }: LoginFormProps) => {
  return (
    <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-[var(--glow-purple)] relative z-10">
      <h2 className="text-4xl font-bold mb-2">Welcome back</h2>
      <p className="text-muted-foreground mb-8">Log in to your PayBridgeX account</p>

      <div className="space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-muted-foreground">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-input border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-muted-foreground">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-input border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-border bg-input accent-primary"
            />
            <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
          </label>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors">
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={onLogin}
          className="w-full px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Log in
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
          Sign up
        </button>
      </p>
    </div>
  );
};
