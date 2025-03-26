"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D17] text-white overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0D17]/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">BuilderFi</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#problems" className="hover:text-purple-400 transition-colors">Problems</a>
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#modules" className="hover:text-purple-400 transition-colors">Modules</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
          </nav>
          <a href="https://app.builderfi.io" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 px-4 py-2 rounded-md transition-all text-sm md:text-base">
              Launch App
            </button>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Build Agentic Workflows on <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Educhain</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  The first no-code Agentic workflow builder for the Educhain ecosystem. Create custom solutions with our intuitive drag-and-drop builder, seamlessly integrating with Blend, SailFish, and edu.fun to build powerful educational finance strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 px-6 py-3 rounded-md text-lg font-medium transition-all">
                    Get Started Free
                  </button>
                  <button className="border border-purple-600 hover:bg-purple-600/10 px-6 py-3 rounded-md text-lg font-medium transition-colors">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                {/* Interactive Workflow Demonstration */}
                <div className="relative bg-[#151929] p-5 rounded-xl border border-[#222b45] shadow-xl overflow-hidden">
                  {/* Animated grid background */}
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
                    {Array.from({ length: 144 }).map((_, index) => (
                      <div key={index} className="bg-purple-500/5"></div>
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 bg-[#1A1F35] p-2 rounded-md">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm text-gray-400">Yield Maximizer Flow</div>
                      <div className="flex items-center space-x-2">
                        <button className="bg-purple-500/20 hover:bg-purple-500/30 p-1 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                        <button className="bg-purple-500/20 hover:bg-purple-500/30 p-1 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative h-[500px] bg-[#1A1F35] rounded-md p-4">
                      <div className="h-full">
                        <div className="bg-[#151929] p-3 rounded-md overflow-hidden relative h-full">
                          <div className="flex flex-col h-full">
                            <div className="flex-1 relative">
                              {/* Visual workflow representation */}
                              <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet" className="min-w-full">
                                {/* Glowing effect definitions */}
                                <defs>
                                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)">
                                      <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                                    </stop>
                                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)">
                                      <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                                    </stop>
                                  </linearGradient>
                                  <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                    <feMerge>
                                      <feMergeNode in="coloredBlur"/>
                                      <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                  </filter>
                                </defs>

                                {/* Connection paths */}
                                <g filter="url(#glow)">
                                  <path d="M180,200 C220,200 220,100 260,100" stroke="url(#flowGradient)" strokeWidth="2" fill="none" />
                                  <path d="M420,100 C460,100 460,200 500,200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" />
                                  <path d="M420,100 C460,100 460,300 500,300" stroke="url(#flowGradient)" strokeWidth="2" fill="none" />
                                  <path d="M660,200 C700,200 700,200 740,200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" />
                                </g>

                                {/* Wallet Connect */}
                                <g transform="translate(20, 160)" className="cursor-pointer" filter="url(#glow)">
                                  <rect width="160" height="80" rx="8" fill="#1F2544" stroke="#8B5CF6" strokeWidth="2">
                                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                                  </rect>
                                  <text x="80" y="35" fontSize="14" fill="white" textAnchor="middle">Connect Wallet</text>
                                  <text x="80" y="55" fontSize="12" fill="#8B5CF6" textAnchor="middle">EDU Balance: 1000</text>
                                </g>

                                {/* SailFish Swap */}
                                <g transform="translate(260, 60)" className="cursor-pointer" filter="url(#glow)">
                                  <rect width="160" height="80" rx="8" fill="#1F2544" stroke="#3B82F6" strokeWidth="2">
                                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                                  </rect>
                                  <text x="80" y="35" fontSize="14" fill="white" textAnchor="middle">SailFish Swap</text>
                                  <text x="80" y="55" fontSize="12" fill="#3B82F6" textAnchor="middle">EDU → USDT</text>
                                </g>

                                {/* LP Provision */}
                                <g transform="translate(500, 160)" className="cursor-pointer" filter="url(#glow)">
                                  <rect width="160" height="80" rx="8" fill="#1F2544" stroke="#8B5CF6" strokeWidth="2">
                                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                                  </rect>
                                  <text x="80" y="35" fontSize="14" fill="white" textAnchor="middle">Add Liquidity</text>
                                  <text x="80" y="55" fontSize="12" fill="#8B5CF6" textAnchor="middle">APY: 18%</text>
                                </g>

                                {/* Blend Lending */}
                                <g transform="translate(500, 260)" className="cursor-pointer" filter="url(#glow)">
                                  <rect width="160" height="80" rx="8" fill="#1F2544" stroke="#22C55E" strokeWidth="2">
                                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                                  </rect>
                                  <text x="80" y="35" fontSize="14" fill="white" textAnchor="middle">Blend Lending</text>
                                  <text x="80" y="55" fontSize="12" fill="#22C55E" textAnchor="middle">Supply APY: 12%</text>
                                </g>

                                {/* AI Optimizer */}
                                <g transform="translate(740, 160)" className="cursor-pointer" filter="url(#glow)">
                                  <rect width="160" height="80" rx="8" fill="#1F2544" stroke="#8B5CF6" strokeWidth="2">
                                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                                  </rect>
                                  <text x="80" y="35" fontSize="14" fill="white" textAnchor="middle">AI Optimizer</text>
                                  <text x="80" y="55" fontSize="12" fill="#8B5CF6" textAnchor="middle">Auto-rebalance</text>
                                </g>

                                {/* Animated dots */}
                                <g filter="url(#glow)">
                                  <circle r="3" fill="#8B5CF6">
                                    <animateMotion dur="2s" repeatCount="indefinite" path="M180,200 C220,200 220,100 260,100"/>
                                    <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                                  </circle>
                                  <circle r="3" fill="#3B82F6">
                                    <animateMotion dur="2s" repeatCount="indefinite" path="M420,100 C460,100 460,200 500,200"/>
                                    <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                                  </circle>
                                </g>
                              </svg>
                            </div>

                            {/* Component Palette */}
                            <div className="absolute top-4 left-4 bg-[#1A1F35] p-2 rounded-lg border border-[#222b45] shadow-lg">
                              <div className="text-xs text-gray-400 mb-2">Components</div>
                              <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2 p-2 bg-[#151929] rounded cursor-move hover:bg-[#1F2544]">
                                  <span className="text-blue-400">🔄</span>
                                  <span className="text-xs text-gray-300">Swap</span>
                                </div>
                                <div className="flex items-center space-x-2 p-2 bg-[#151929] rounded cursor-move hover:bg-[#1F2544]">
                                  <span className="text-purple-400">💧</span>
                                  <span className="text-xs text-gray-300">Liquidity</span>
                                </div>
                                <div className="flex items-center space-x-2 p-2 bg-[#151929] rounded cursor-move hover:bg-[#1F2544]">
                                  <span className="text-green-400">🏦</span>
                                  <span className="text-xs text-gray-300">Lending</span>
                                </div>
                              </div>
                            </div>

                            {/* Status Bar */}
                            <div className="mt-4 bg-[#1A1F35] p-2 rounded-md">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                                    <span className="text-xs text-green-400">Flow Active</span>
                                  </div>
                                  <div className="h-4 w-px bg-[#222b45]"></div>
                                  <div className="text-xs text-gray-400">Total APY: 30.4%</div>
                                </div>
                                <button className="bg-purple-500/20 hover:bg-purple-500/30 px-3 py-1 rounded-md text-xs text-purple-400">
                                  Share to Marketplace
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Problem Statement Section */}
        <section id="problems" className="py-20 relative bg-[#0D0F1D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Empowering Educhain&apos;s DeFi Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
              Building the future of educational finance through seamless protocol integration
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Native Educhain Integration</h3>
                  <p className="text-gray-400 mb-4">Built specifically for Educhain&apos;s ecosystem, seamlessly connecting with Blend lending, SailFish DEX, and edu.fun launchpad.</p>
                </div>
              </div>
              
              <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">EDU Token Utility</h3>
                  <p className="text-gray-400 mb-4">Maximize EDU token utility through automated yield strategies, liquidity provision, and educational project funding.</p>
                </div>
              </div>
              
              <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Educational Focus</h3>
                  <p className="text-gray-400 mb-4">Designed for educational institutions, students, and alumni to participate in Educhain&apos;s growing DeFi ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Build Anything on Educhain
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
              Create custom solutions with our unified, dynamic canvas
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-[#151929] p-6 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                  <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="ml-12">
                    <h3 className="text-xl font-bold mb-3">Unified Canvas</h3>
                    <p className="text-gray-400">Design and execute custom solutions on a dynamic canvas. Build anything from DeFi strategies to community engagement tools.</p>
                  </div>
                </div>
                
                <div className="bg-[#151929] p-6 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                  <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="ml-12">
                    <h3 className="text-xl font-bold mb-3">AI-Powered Optimization</h3>
                    <p className="text-gray-400">Advanced AI analyzes market conditions and suggests optimal execution strategies. Get smart recommendations for timing, routing, and risk management.</p>
                  </div>
                </div>
                
                <div className="bg-[#151929] p-6 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                  <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="ml-12">
                    <h3 className="text-xl font-bold mb-3">Marketplace Integration</h3>
                    <p className="text-gray-400">Share and discover pre-built workflows in our marketplace. Earn rewards for popular strategies and one-click deploy proven solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Community Integration Demo */}
                <div className="bg-[#151929] p-5 rounded-xl border border-[#222b45] shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between mb-4 bg-[#1A1F35] p-2 rounded-md">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-400">Community Integration</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-[#1A1F35] p-3 rounded-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-400">🤖</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Protocol Assistant</div>
                          <div className="text-xs text-gray-400">Real-time protocol information</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300">Automatically answers questions about Blend, SailFish, and edu.fun protocols</div>
                    </div>
                    
                    <div className="bg-[#1A1F35] p-3 rounded-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-blue-400">📢</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Event Updates</div>
                          <div className="text-xs text-gray-400">Hackathon & community events</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300">Keeps community informed about upcoming events and important announcements</div>
                    </div>
                    
                    <div className="bg-[#1A1F35] p-3 rounded-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <span className="text-green-400">💬</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Community Support</div>
                          <div className="text-xs text-gray-400">24/7 automated assistance</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300">Provides instant support and guidance for community members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ecosystem Impact Section */}
        <section className="py-20 relative bg-[#0D0F1D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Driving Educhain&apos;s Growth
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
              Empowering the educational finance revolution on Educhain
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Transaction Volume Card */}
              <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">EDU Token Adoption</h3>
                  <p className="text-gray-400 mb-4">Driving EDU token utility through automated trading strategies and cross-protocol interactions on Educhain.</p>
                  <div className="flex items-center text-sm text-purple-400">
                    <span className="mr-2">🔄</span>
                    <span>Growing EDU ecosystem liquidity</span>
                  </div>
                </div>
              </div>

              {/* Protocol Integration Card */}
              <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ecosystem Integration</h3>
                  <p className="text-gray-400 mb-4">Seamless integration with Educhain&apos;s core protocols: Blend lending, SailFish DEX, and edu.fun launchpad.</p>
                  <div className="flex items-center text-sm text-blue-400">
                    <span className="mr-2">🔗</span>
                    <span>Connected Educhain protocols</span>
                  </div>
                </div>
              </div>

              {/* Communication Hub Card */}
              <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Educational Community</h3>
                  <p className="text-gray-400 mb-4">Built for educational institutions, students, and alumni to participate in Educhain&apos;s DeFi ecosystem.</p>
                  <div className="flex items-center text-sm text-green-400">
                    <span className="mr-2">🎓</span>
                    <span>Empowering educational finance</span>
                  </div>
                </div>
              </div>

              {/* Visual Builder Card */}
              <div className="lg:col-span-3">
                <div className="bg-[#151929] p-8 rounded-xl border border-[#222b45] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Visual Workflow Builder</h3>
                        <p className="text-gray-400 mb-6">Create complex DeFi strategies with our intuitive drag-and-drop Canvas interface. No coding required.</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm text-gray-300">Real-time preview</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                            <span className="text-sm text-gray-300">Auto-validation</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                            <span className="text-sm text-gray-300">AI assistance</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 flex justify-end">
                        <div className="bg-[#1A1F35] p-4 rounded-lg border border-[#222b45] w-full max-w-md">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-sm text-gray-400">Workflow Builder</span>
                          </div>
                          <div className="aspect-video bg-[#0D0F1D] rounded-md flex items-center justify-center">
                            <div className="text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              <span className="text-sm text-gray-400">Drag nodes to build your workflow</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modules Section */}
        <section id="modules" className="py-20 relative bg-[#0D0F1D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                200+ Pre-built Components
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-8">
              Everything you need to build powerful DeFi automation workflows
            </p>
            
            <div className="flex justify-center mb-12">
              <div className="relative md:w-2/3">
                <input
                  type="text"
                  placeholder="Search components..."
                  className="w-full bg-[#151929] border border-[#222b45] rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-[#151929] rounded-lg border border-[#222b45] p-4 hover:border-purple-500 transition-all cursor-pointer group">
                  <div className="flex flex-col">
                    <div className="flex items-start mb-3">
                      <div className={`w-10 h-10 rounded-lg ${module.bgColor} flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <span className={`text-lg ${module.textColor}`}>{module.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">{module.name}</h3>
                        <p className="text-gray-400 text-xs">{module.category}</p>
                      </div>
                    </div>
                    
                    {/* Only show for Blend, SailFish, and edu.fun */}
                    {module.description && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-300 mb-2">{module.description}</p>
                        <div className="flex items-center">
                          <span className="text-orange-400 text-xs mr-2">🍊</span>
                          <span className="text-xs text-gray-400">{module.points} yuzu pt</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="border border-purple-600 hover:bg-purple-600/10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                View All Components
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                What Our Users Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
              Join hundreds of traders who&apos;ve transformed their DeFi strategies
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#151929] p-6 rounded-xl border border-[#222b45] relative overflow-hidden group hover:border-purple-500 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4">&ldquo;{testimonial.comment}&rdquo;</p>
                  
                  <div className="text-sm text-gray-400 flex items-center">
                    <div className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Verified User</span>
                    </div>
                    <div>{testimonial.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative bg-[#0D0F1D]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-10 border border-[#222b45] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Start Building Your DeFi Workflows Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-center">
                  Join our community of DeFi automation builders and take control of your on-chain strategies
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="md:w-64 w-full bg-[#151929] border border-[#222b45] rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 px-6 py-3 rounded-md text-lg font-medium transition-all w-full md:w-auto">
                    Get Started Free
                  </button>
                </div>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  No credit card required. Free plan includes 5 workflows and 100 executions/month.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B0D17] py-12 border-t border-[#222b45]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">BuilderFi</span>
              </div>
              <p className="text-gray-400 mb-4">
                The AI-powered DeFi workflow automation platform.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/BuilderFi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-2 bg-[#151929] rounded-lg hover:bg-[#1a1f35] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-400 group-hover:text-white">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1a1f35] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Follow us on X
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://defai-office.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">MVP Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#222b45] text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BuilderFi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Particle Background Component
function ParticleBackground() {
  // Predefined positions for particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    width: `${2 + (i % 3)}px`,
    height: `${2 + (i % 3)}px`,
    top: `${(i * 2.5) % 100}%`,
    left: `${(i * 3) % 100}%`,
    animationDelay: `${(i * 0.2) % 10}s`,
    animationDuration: `${10 + (i % 10)}s`
  }));

  return (
    <div className="fixed inset-0 z-0">
      {/* dot grid pattern with gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full grid grid-cols-12 md:grid-cols-24 gap-4">
          {Array.from({ length: 24 * 36 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute rounded-full h-1 w-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* floating particles with trails */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 animate-float"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
              filter: 'blur(1px)',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)'
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
          </div>
        ))}
      </div>
      
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D17]/50 to-[#0B0D17]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-50"></div>
      
      {/* animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}

// Sample data for modules
const modules = [
  {
    name: 'Blend',
    category: 'Lending Protocol',
    icon: '🏦',
    bgColor: 'bg-orange-500/20',
    textColor: 'text-orange-400',
    description: 'Decentralised, non-custodial lending protocol on Educhain',
    points: '26,706,232',
    type: 'Protocol'
  },
  {
    name: 'SailFish',
    category: 'DEX',
    icon: '🐟',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400',
    description: 'First veDEX on Opencampus EDUCHAIN with 100% fee distribution',
    points: '26,706,232',
    type: 'Exchange'
  },
  {
    name: 'edu.fun',
    category: 'Launchpad',
    icon: '🎓',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400',
    description: 'University community token launchpad for students and alumni',
    points: '1,000,000',
    type: 'Platform'
  },
  { name: 'Wallet Connect', category: 'Authentication', icon: 'WC', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400' },
  { name: 'Token Swap', category: 'DEX', icon: 'TS', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400' },
  { name: 'Price Oracle', category: 'Data', icon: 'PO', bgColor: 'bg-green-500/20', textColor: 'text-green-400' },
  { name: 'AI Prediction', category: 'Machine Learning', icon: 'AI', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-400' },
  { name: 'Gas Optimizer', category: 'Transaction', icon: 'GO', bgColor: 'bg-red-500/20', textColor: 'text-red-400' },
  { name: 'Yield Farm', category: 'DeFi', icon: 'YF', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400' },
  { name: 'Flash Loan', category: 'DeFi', icon: 'FL', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400' },
  { name: 'NFT Collection', category: 'NFT', icon: 'NC', bgColor: 'bg-pink-500/20', textColor: 'text-pink-400' },
  { name: 'Liquidity Pool', category: 'DEX', icon: 'LP', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400' },
];

// Sample data for testimonials
interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const testimonials: Testimonial[] = [
  { 
    name: 'Alex Thompson', 
    title: 'DeFi Strategist',
    avatar: 'AT',
    rating: 5,
    comment: 'BuilderFi has transformed how I execute DeFi strategies. I can build complex workflows in minutes that would have taken days to code.',
    date: 'Jan 2025'
  },
  { 
    name: 'Sarah Johnson', 
    title: 'Crypto Fund Manager',
    avatar: 'SJ',
    rating: 5,
    comment: 'The AI optimization features have increased our fund&apos;s yield by 18%. This platform is a game-changer for serious DeFi users.',
    date: 'Feb 2025'
  },
  { 
    name: 'Michael Chen', 
    title: 'Web3 Developer',
    avatar: 'MC',
    rating: 4,
    comment: 'Even as a developer, I prefer using BuilderFi for quick prototyping and automation. The visual workflow editor saves me countless hours.',
    date: 'Mar 2025'
  }
];