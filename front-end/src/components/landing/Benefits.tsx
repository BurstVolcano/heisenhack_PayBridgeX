import { Zap, Globe, DollarSign, Eye, Shield, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Most transactions complete in under 5 minutes'
  },
  {
    icon: Globe,
    title: 'Simple & Universal',
    description: 'Pay with a UPI-style ID, anytime, anywhere'
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description: 'Save up to 90% compared to legacy banks and agents'
  },
  {
    icon: Eye,
    title: 'Total Transparency',
    description: 'Live tracking and on-chain receipts at every step'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'AI-powered fraud prevention, KYC/AML checks'
  },
  {
    icon: Gift,
    title: 'Rewards',
    description: 'Earn cashback and loyalty points on every transaction'
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="relative z-10 py-24 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Why Choose PayBridgeX?
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Experience the future of money transfers with blockchain-powered speed and security
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 group hover:shadow-[var(--glow-purple)]"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
