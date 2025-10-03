import { useState } from 'react';
import { GridBackground } from '@/components/landing/GridBackground';
import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Benefits } from '@/components/landing/Benefits';
import { Security } from '@/components/landing/Security';
import { Demo } from '@/components/landing/Demo';
import { Partners } from '@/components/landing/Partners';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/landing/Footer';
import { LoginPage } from '@/components/login/LoginPage';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt:', { email, password });
    // Add your login logic here
  };

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  const handleBackToHome = () => {
    setShowLogin(false);
  };

  if (showLogin) {
    return (
      <LoginPage
        onBackToHome={handleBackToHome}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <GridBackground />
      <Navigation onLogoClick={handleBackToHome} onLoginClick={handleGetStarted} />
      <HeroSection onGetStarted={handleGetStarted} />
      <HowItWorks />
      <Benefits />
      <Security />
      <Demo />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
