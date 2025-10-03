import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export const Demo = () => {
  const [amount, setAmount] = useState('10000');
  const exchangeRate = 0.012; // Example: 1 INR = 0.012 USD
  const feePercent = 1.5;
  
  const inrAmount = parseFloat(amount) || 0;
  const fee = (inrAmount * feePercent) / 100;
  const usdAmount = (inrAmount - fee) * exchangeRate;

  return (
    <section className="relative z-10 py-24 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            See PayBridgeX in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try our calculator to see fees and transfer times compared to legacy options
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-[var(--glow-purple)]">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Transfer Calculator</h3>
            </div>

            <div className="space-y-6">
              {/* Input Amount */}
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  You Send (INR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-input border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-2xl font-bold"
                    placeholder="10000"
                  />
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Transfer Fee ({feePercent}%)</span>
                  <span>₹{fee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Exchange Rate</span>
                  <span>1 INR = ${exchangeRate} USD</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-muted-foreground">
                  <span>Estimated Time</span>
                  <span className="text-secondary font-semibold">~3 minutes</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>

              {/* Output Amount */}
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Recipient Gets (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">$</span>
                  <div className="w-full pl-12 pr-4 py-4 bg-secondary/10 border-2 border-secondary rounded-lg text-2xl font-bold text-secondary">
                    {usdAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-bold text-lg">
                Start Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
