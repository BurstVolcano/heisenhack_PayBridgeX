import React, {useState, useEffect} from 'react';

export default function RipeCryptoLanding() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const blockchains = [
        {name: 'SOLANA', logo: 'SOL'},
        {name: 'APTOS', logo: 'APT'},
        {name: 'BASE', logo: 'BASE'},
        {name: 'CELO', logo: 'CELO'},
        {name: 'Stellar', logo: 'XLM'}
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="fixed inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                        transform: `perspective(1000px) rotateX(60deg) translateY(-50%)`,
                        transformOrigin: 'center top'
                    }}
                />
            </div>

            {/* Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-8 py-6">
                <div className="text-2xl font-bold">ripe</div>
                <div className="flex gap-8">
                    <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#blog" className="hover:text-purple-400 transition-colors">Blog</a>
                    <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-between px-8 py-16 max-w-7xl mx-auto">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl">
                    <h1 className="text-6xl font-bold leading-tight mb-8">
                        Send Money Around the World<br/>
                        in minutes.<span className="text-yellow-400">With Zero Hassles.
                    </span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-6">
                        The fastest, most transparent way to move money from India-powered by UPI, Solana blockchain,
                        and PayBridgeX ID.
                    </p>

                    <p className="text-lg text-gray-300 mb-8">
                        Send INR; your loved ones receive USD instantly in their bank or PayPal.
                    </p>

                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold"
                    >
                        Get Started
                    </button>
                </div>

                {/* Right Content - 3D Cards */}
                <div className="flex-1 flex items-center justify-center relative h-96">
                    <div
                        className="relative w-full h-full"
                        style={{
                            transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                            transition: 'transform 0.1s ease-out',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Left Card */}
                        <div
                            className="absolute left-1/4 top-1/4 w-40 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl"
                            style={{
                                transform: 'translateZ(50px) rotateY(-15deg)',
                                border: '3px solid rgba(168, 85, 247, 0.5)',
                                boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                            }}
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg"/>
                            </div>
                        </div>

                        {/* Right Card with QR */}
                        <div
                            className="absolute right-1/4 top-1/3 w-44 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl"
                            style={{
                                transform: 'translateZ(80px) rotateY(10deg)',
                                border: '3px solid rgba(168, 85, 247, 0.5)',
                                boxShadow: '0 25px 70px rgba(168, 85, 247, 0.4)'
                            }}
                        >
                            <div className="h-full flex flex-col items-center justify-center p-4">
                                <div className="w-32 h-32 bg-white rounded-lg mb-4 flex items-center justify-center">
                                    <div className="text-black text-4xl font-mono">QR</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Coin */}
                        <div
                            className="absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl"
                            style={{
                                transform: `translateZ(120px) translateY(${Math.sin(Date.now() / 1000) * 10}px)`,
                                animation: 'float 3s ease-in-out infinite',
                                boxShadow: '0 10px 40px rgba(251, 191, 36, 0.6)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section - Blockchains */}
            <div className="relative z-10 mt-32 px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <p className="text-gray-400 mb-8">Supporting stablecoins on fast, low-gas chains</p>
                    <div className="flex items-center gap-12 flex-wrap">
                        {blockchains.map((chain, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer"
                            >
                                <div
                                    className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center text-xs font-mono">
                                    {chain.logo.slice(0, 2)}
                                </div>
                                <span className="text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  {chain.name}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateZ(120px) translateY(0px);
                    }
                    50% {
                        transform: translateZ(120px) translateY(-20px);
                    }
                }
            `}</style>
        </div>
    );
}