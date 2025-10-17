"use client";
import Image from "next/image";
import Button from "./components/Button";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // 초기 실행
    updateCountdown();

    // 1초마다 업데이트
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 text-white">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={109}
              height={40}
              className="object-contain"
            />
            <span className="text-white text-[1.5rem] bg-black px-4 py-2 rounded-full font-normal">
              Pre-sales
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-purple-200 transition-colors"
            >
              About
            </a>
            <a
              href="#technology"
              className="hover:text-purple-200 transition-colors"
            >
              Technology
            </a>
            <a
              href="#tokenomics"
              className="hover:text-purple-200 transition-colors"
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className="hover:text-purple-200 transition-colors"
            >
              Roadmap
            </a>
            <a href="#faq" className="hover:text-purple-200 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20 flex items-end relative min-h-screen">
        <Image
          src="/images/img_main.png"
          alt="hero-bg"
          fill
          className="object-cover"
          priority
        />
        <div className="container absolute bottom-[165px] left-0 right-0 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-[80px] md:text-[60px] font-bold mb-6 leading-tight">
                The First DEX Built for Ripple&apos;s XLT Ledger
              </h1>
              <div className="w-[49rem] p-[2.4rem]">
                <div>
                  <div className="text-[2.4rem] text-[#E1DBE5] mb-4">
                    $XLT Presale LIVE! <br />
                    Next price increase in:
                  </div>
                  <div className="flex items-center space-x-4 text-center">
                    <div>
                      <div
                        className="text-[5.6rem] font-bold"
                        style={{
                          fontFamily:
                            "var(--font-manrope), Manrope, sans-serif",
                        }}
                      >
                        {String(timeLeft.days).padStart(2, "0")}
                      </div>
                      <div className="text-[2.4rem] text-white mt-2">Days</div>
                    </div>
                    <div>:</div>
                    <div>
                      <div
                        className="text-[5.6rem] font-bold"
                        style={{
                          fontFamily:
                            "var(--font-manrope), Manrope, sans-serif",
                        }}
                      >
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="text-[2.4rem] text-white mt-2">Hours</div>
                    </div>
                    <div>:</div>
                    <div>
                      <div
                        className="text-[5.6rem] font-bold"
                        style={{
                          fontFamily:
                            "var(--font-manrope), Manrope, sans-serif",
                        }}
                      >
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-[2.4rem] text-white mt-2">
                        Minutes
                      </div>
                    </div>
                    <div>:</div>
                    <div>
                      <div
                        className="text-[5.6rem] font-bold"
                        style={{
                          fontFamily:
                            "var(--font-manrope), Manrope, sans-serif",
                        }}
                      >
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <div className="text-[2.4rem] text-white mt-2">
                        Seconds
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => console.log("BUY $XLT clicked")}
                >
                  BUY $XLT
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
              <div className="bg-black bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-xl font-bold">1,000 XLT</div>
              </div>
              <div className="bg-black bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-xl font-bold">1,778 XLT</div>
              </div>
              <div className="bg-black bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-xl font-bold">2,000 XLT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed">
            Xylo Introduces a new era of DeFi with the XLT Ledger. Through
            seamless transactions, transparent governance, and secure liquidity,
            we connect real-world assets to the blockchain — accessible to both
            newcomers and professionals.
          </p>
        </div>
      </section>

      {/* Own it Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Own it, or miss out.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                This is something you don&apos;t want to miss out. Build wealth
                through real-world assets.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl text-gray-400">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* RWA Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Discover the Innovation of RWA Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">🔮</div>
              </div>
              <h3 className="text-xl font-bold mb-4">
                RWA Issuance Technology
              </h3>
              <p className="text-gray-600">
                Advanced technology for issuing real-world assets on blockchain
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">📋</div>
              </div>
              <h3 className="text-xl font-bold mb-4">RWA LP Smart Contract</h3>
              <p className="text-gray-600">
                Intelligent liquidity pool management for RWA assets
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">💼</div>
              </div>
              <h3 className="text-xl font-bold mb-4">RWA Invest Platform</h3>
              <p className="text-gray-600">
                Comprehensive investment platform for real-world assets
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">🪙</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Token Economy</h3>
              <p className="text-gray-600">
                Robust token economy supporting RWA ecosystem
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-bold mb-4">E-Trust Matrix</h3>
              <p className="text-gray-600">
                Enhanced trust and security framework for digital assets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Next generation token issuance technology, RWA on-chain technology
          </h2>
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-2xl font-bold">XLT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            XLT Token Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-20 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">Investment RWA</h3>
              <p className="text-purple-200">
                Invest in real-world assets through XLT tokens
              </p>
            </div>
            <div className="bg-black bg-opacity-20 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-4">Payment in XLT Future</h3>
              <p className="text-purple-200">
                Use XLT for future payment solutions
              </p>
            </div>
            <div className="bg-black bg-opacity-20 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-xl font-bold mb-4">
                Governance for XRG, XLT
              </h3>
              <p className="text-purple-200">
                Participate in governance decisions
              </p>
            </div>
            <div className="bg-black bg-opacity-20 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-4">
                Utility-Issuance Rewards
              </h3>
              <p className="text-purple-200">
                Earn rewards through token utility
              </p>
            </div>
            <div className="bg-black bg-opacity-20 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">
                DAO Governance Participation
              </h3>
              <p className="text-purple-200">
                Active participation in DAO governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenization Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            User Experience of Tokenization
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600 font-bold">⚡</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Instant Holders</h3>
                  <p className="text-gray-600">
                    Become a token holder instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600 font-bold">🔄</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Real-time transactions</h3>
                  <p className="text-gray-600">
                    Execute transactions in real-time
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600 font-bold">🏢</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Real-world assets</h3>
                  <p className="text-gray-600">Tokenize real-world assets</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600 font-bold">🆓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free usage</h3>
                  <p className="text-gray-600">No fees for basic usage</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl text-gray-400">🔄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Transactions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Check top transactions. Seize the moment.
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join the biggest transactions and be part of the XLT ecosystem.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => console.log("Buy XLT clicked")}
                >
                  Buy XLT
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => console.log("See more clicked")}
                >
                  See more
                </Button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">
                List of biggest transactions
              </h3>
              <div className="space-y-4">
                {[1000, 1778, 2000, 1500, 1200].map((amount, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-semibold">User {index + 1}</div>
                    </div>
                    <div className="font-bold">
                      {amount.toLocaleString()} XLT
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Assets Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Real Assets, Real Value, Tokenized for the World
          </h2>
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center max-w-4xl mx-auto">
            <div className="text-6xl text-gray-400">🏭</div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Explore the XYLO Roadmap
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">
                Q4 2023
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Platform development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Core team assembly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Initial partnerships</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">
                Q1 2024
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Beta launch</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Token presale</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Community building</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">
                Q2 2024
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Mainnet launch</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>DEX integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>RWA tokenization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            XLT Tokenomics
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span>Marketing</span>
                  <span className="font-bold">0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Reserve</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>XLT Private</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Foundation & Core</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Market Makers</span>
                  <span className="font-bold">50%</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-bold mb-4">Market Makers 50%</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Seed Round</span>
                    <span>10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Private Sale</span>
                    <span>10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Sale</span>
                    <span>10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team</span>
                    <span>10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advisors</span>
                    <span>5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Liquidity</span>
                    <span>5%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
              <div className="text-6xl text-gray-400">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* XRG Ecosystem Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            XRG-Powered Ecosystem, Bringing RWA to Life
          </h2>
          <div className="bg-gray-200 rounded-lg h-60 flex items-center justify-center max-w-4xl mx-auto">
            <div className="text-6xl text-gray-400">🔗</div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Insights</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span>‹</span>
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span>›</span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full mb-4 flex items-center justify-center">
                  <div className="text-2xl">🧠</div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  RWA Issuance Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about our innovative approach to real-world asset
                  tokenization.
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Holders Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Asset Holders</h2>
              <p className="text-xl text-green-200 leading-relaxed">
                The XLT Ledger is designed to be a secure and transparent
                platform for managing and trading assets.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <div className="text-6xl font-bold">XLT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "How to create an XLT wallet?",
                "What is Xylo?",
                "How to buy XLT tokens?",
                "How to stake XLT tokens?",
                "Can I trade XLT tokens?",
              ].map((question, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center cursor-pointer hover:text-purple-600 transition-colors">
                    <h3 className="text-lg font-semibold">{question}</h3>
                    <span className="text-gray-400">›</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl text-gray-400">❓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Launch Your Asset, We Tokenize it.
              </h3>
              <p className="text-green-200 mb-6">
                Join the future of real-world asset tokenization with XYLO.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span>📧</span>
                </div>
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span>💬</span>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Foundation</h4>
                  <ul className="space-y-2 text-green-200">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Mission
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Partners</h4>
                  <ul className="space-y-2 text-green-200">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Partnerships
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Integrations
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">About</h4>
                  <ul className="space-y-2 text-green-200">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Legal</h4>
                  <ul className="space-y-2 text-green-200">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4">Explore XYLO</h4>
              <button className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors">
                <span>Get Started</span>
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200">
            <p>&copy; 2024 XYLO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
