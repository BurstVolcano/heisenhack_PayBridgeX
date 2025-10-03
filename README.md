# PayBridgeX

### The Fastest Way to Move Money Internationally  
*Seamless UPI payments, blockchain settlement, instant global payout*

---

## Features

- **Send INR instantly via UPI from any device**
- **Global payouts:** PayPal, direct bank deposit (USD and more)
- **UPI-style PayBridgeX ID:** No bank details required
- **Solana blockchain settlement:** Fast, transparent, and secure
- **Real-time tracking:** Live status at each step
- **Low, transparent fees** compared to legacy remittance services
- **AI-powered FX prediction, compliance, and fraud checks**
- **Mobile-first app + responsive web interface**

---

## Architecture Overview

1. **Sender pays INR via UPI using PayBridgeX ID**
2. **INR auto-converted to stablecoin (USDT/USDC)**
3. **Stablecoin sent instantly over Solana blockchain**
4. **Receiver paid out in USD via PayPal or bank transfer**

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.10+)
- npm / yarn
- Git

### Clone the Repo
git clone https://github.com/youruser/paybridgex.git
cd paybridgex


---

## Installation

### Frontend (React/Next.js)
cd frontend
npm install
npm run dev


### Backend (Node.js/Python)

cd backend
npm install # for Node.js

OR
pip install -r requirements.txt # for Python services


---

## Configuration

- Add your API keys for UPI gateway, PayPal, Solana RPC, KYC providers into `.env.local` (frontend) & `.env` (backend)
- See `config.sample.json` for structure

---

## Demo

- Visit [http://localhost:3000](http://localhost:3000) for the local React/Next.js app
- Login/register, send a test INR transaction, view progress

---

## Tech Stack

- **Frontend:** React, Next.js, TailwindCSS
- **Backend:** Node.js (Express/FastAPI), Python (for AI/ML modules)
- **Blockchain:** Solana, USDT/USDC
- **Database:** PostgreSQL, MongoDB
- **Security:** JWT, Argon2, encryption, ISO 20022 messaging

---

## Contributing

Pull requests welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT

---

## Authors

- [Your Name](https://github.com/youruser)
- Hackathon Team



