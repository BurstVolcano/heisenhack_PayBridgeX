import { ArrowRight, Smartphone, Zap, Banknote } from 'lucide-react';

const steps = [
  {
    icon: ArrowRight,
    number: '1',
    title: 'Enter a PayBridgeX ID',
    description: 'No bank details needed—just a simple, unique ID'
  },
  {
    icon: Smartphone,
    number: '2',
    title: 'Pay INR via UPI',
    description: 'Fast, secure, mobile-first payment method'
  },
  {
    icon: Zap,
    number: '3',
    title: 'Blockchain Magic',
    description: 'INR converts to USDT & moves instantly on Solana'
  },
  {
    icon: Banknote,
    number: '4',
    title: 'Instant Payout',
    description: 'Receiver gets USD in their bank/PayPal within minutes'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative z-10 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          How PayBridgeX Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-card border-2 border-border rounded-xl p-6 h-full hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-purple)]">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="text-4xl font-bold text-primary mb-2">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
