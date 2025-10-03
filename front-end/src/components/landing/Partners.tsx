import { Globe, Users, Handshake, Briefcase } from 'lucide-react';

const partnerTypes = [
  {
    icon: Users,
    title: 'Individual Users',
    description: 'Send money to family and friends around the world'
  },
  {
    icon: Briefcase,
    title: 'Freelancers',
    description: 'Get paid quickly for your international work'
  },
  {
    icon: Handshake,
    title: 'Businesses',
    description: 'Pay suppliers and partners across borders'
  },
  {
    icon: Globe,
    title: 'Partners',
    description: 'White-label solutions and API integration'
  }
];

export const Partners = () => {
  return (
    <section className="relative z-10 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Designed for Everyone. <span className="text-primary">Ready for Everywhere.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're sending money to family, a freelancer, or a supplier—PayBridgeX 
            supports multiple countries, currencies, and payout methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Interested in Partnership or White-Labelling?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of partners and bring seamless cross-border payments to your platform
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-bold text-lg shadow-[var(--glow-purple)]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
