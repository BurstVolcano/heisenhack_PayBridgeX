import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Encryption',
    description: 'Your data is protected with industry-standard encryption'
  },
  {
    icon: Lock,
    title: 'Dual Authentication',
    description: 'Multiple layers of security for every transaction'
  },
  {
    icon: Eye,
    title: 'Blockchain Immutability',
    description: 'All transactions are permanently recorded and verifiable'
  },
  {
    icon: CheckCircle2,
    title: 'Fully Compliant',
    description: 'Meets all financial regulations and compliance standards'
  }
];

export const Security = () => {
  return (
    <section className="relative z-10 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Trusted. Transparent. <span className="text-secondary">Secure.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your money is protected with bank-level encryption, dual authentication, 
            and blockchain immutability. All transactions are instantly trackable 
            and fully compliant with financial regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-secondary transition-all duration-300 hover:shadow-[var(--glow-yellow)]"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
