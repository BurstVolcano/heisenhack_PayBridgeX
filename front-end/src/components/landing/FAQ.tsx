import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is a PayBridgeX ID?',
    answer: 'A PayBridgeX ID is a unique identifier that simplifies money transfers. Instead of sharing complex bank details, you only need to share your PayBridgeX ID—similar to a UPI ID but works internationally.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply sign up for a free account, complete the quick KYC verification, and you\'re ready to send or receive money. The entire process takes less than 5 minutes.'
  },
  {
    question: 'How is my INR converted and transferred?',
    answer: 'When you send INR via UPI, it\'s instantly converted to USDT (a stable cryptocurrency) and transferred over the Solana blockchain. The recipient then receives USD in their preferred payout method—all within minutes.'
  },
  {
    question: 'How do we keep your money safe?',
    answer: 'We use bank-level encryption, multi-factor authentication, and blockchain technology to ensure maximum security. All transactions are monitored by AI-powered fraud detection systems and comply with international financial regulations.'
  },
  {
    question: 'What payout options are available?',
    answer: 'Recipients can receive funds directly to their bank account, PayPal, or other supported payment methods depending on their location. We\'re constantly adding new payout options to serve more countries.'
  },
  {
    question: 'What are the fees?',
    answer: 'Our fees are transparent and up to 90% lower than traditional banks. Typically, we charge around 1.5% per transaction, with no hidden charges. You can see the exact fees before confirming any transfer.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 py-24 px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about PayBridgeX
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
