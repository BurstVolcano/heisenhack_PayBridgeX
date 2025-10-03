interface NavigationProps {
  onLogoClick: () => void;
  onLoginClick: () => void;
}

export const Navigation = ({ onLogoClick, onLoginClick }: NavigationProps) => (
  <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
    <button
      onClick={onLogoClick}
      className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
    >
      PayBridgeX
    </button>
    <div className="flex gap-8 items-center">
      <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
        How It Works
      </a>
      <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
        Benefits
      </a>
      <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
        FAQ
      </a>
      <button
        onClick={onLoginClick}
        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
      >
        Login
      </button>
    </div>
  </nav>
);
