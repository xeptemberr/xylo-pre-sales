"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./components/Button";

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
      <header className="fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-md">
        <div className="container mx-auto flex h-[84px] flex justify-between items-center">
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
          <nav className="hidden md:flex space-x-4 font-bold">
            <a
              href="#features"
              className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[var(--gray-006)] hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Features
            </a>
            <a
              href="#tokenomics"
              className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[var(--gray-006)] hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Tokenomics
            </a>
            <a
              href="#docs"
              className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[var(--gray-006)] hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Docs
            </a>
            <a
              href="#presale"
              className="px-6 py-3 rounded-2xl bg-[var(--primary)] backdrop-blur-md border border-purple-400/30 text-white hover:bg-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Join Presale
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
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[80px] font-bold mb-6 leading-tight">
                The First DEX Built <br />
                for Ripple&apos;s XLT Ledger
              </h1>
              <div className="w-[49rem] p-[2.4rem] flex flex-col gap-8">
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
            <div className="flex gap-4 rounded-2xl bg-black items-center justify-center h-[97px] p-8 w-[511px]">
              <div className="p-4 text-center">
                <div className="font-[Manrope] font-[900] text-[25px]">
                  8,068 <br />{" "}
                  <span className="text-[20px] font-normal">Investors</span>
                </div>
              </div>
              <div className="w-[1px] h-full bg-white"></div>
              <div className="p-4 text-center">
                <div className="font-[Manrope] font-[900] text-[25px]">
                  5,510,025 <br />{" "}
                  <span className="text-[20px] font-normal">Rasied</span>
                </div>
              </div>
              <div className="w-[1px] h-full bg-white"></div>
              <div className="p-4 text-center">
                <div className="font-[Manrope] font-[900] text-[25px]">
                  $0.0932 <br />{" "}
                  <span className="text-[20px] font-normal">Current Price</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="h-[630px] bg-[url('/images/bg_introduce.png')]  bg-bottom bg-cover">
        <div className="container flex flex-col justify-center h-full">
          <p className="font-bold text-[var(--primary)] text-left text-[42px]">
            Xylo Introduces a new era of DeFi with the XLT Ledger. <br />
            <span className="text-[var(--primary-dark)] font-normal">
              Through seamless transactions, transparent governance, and secure
              liquidity, we connect{" "}
            </span>
            real-world assets to the blockchain ㅡ <br />
            accessible to both newcomers and professionals.
          </p>
        </div>
      </section>

      {/* Own it Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[48px] font-bold mb-6">
                Own it, <br />
                or miss out.
              </h2>
              <p className="text-[20px] text-[var(--gray-006)] leading-relaxed">
                Core technology for turning real-world assets into <br /> RWA
                tokens through an automated process.
              </p>
            </div>
            <button className="bg-[url('/images/img_ownit_thumb.png')] bg-cover bg-center rounded-2xl w-[658px] h-[372px] flex items-center justify-center cursor-pointer relative overflow-hidden group transition-all duration-300">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* RWA Technology Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-[56px] mb-16 font-semibold text-center">
            Discover the Innovation of RWA Technology
          </h2>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 h-[400px]">
              <div className="bg-[url('/images/bg_rwa_tech_01.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-end">
                <h3 className="text-[32px] font-semibold mb-4">
                  RWA Issuance <br />
                  Technology
                </h3>
                <p className="text-[20px] text-[var(--gray-006)]">
                  Turn assets into secure digital tokens.
                </p>
              </div>
              <div className="bg-[url('/images/bg_rwa_tech_02.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-end">
                <h3 className="text-[32px] font-semibold mb-4">
                  XYLO Smart <br />
                  Right Graph
                </h3>
                <p className="text-[20px] text-[var(--gray-006)]">
                  On-chain rights, verified and automated.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 h-[400px]">
              <div className="bg-[url('/images/bg_rwa_tech_03.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-start">
                <h3 className="text-[32px] font-semibold mb-4">
                  RWA Invest Platform
                </h3>
                <p className="text-[20px] text-[var(--gray-006)]">
                  Simple access to global tokenized assets.
                </p>
              </div>
              <div className="bg-[url('/images/bg_rwa_tech_04.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-start">
                <h3 className="text-[32px] font-semibold mb-4">
                  Token Economy
                </h3>
                <p className="text-[20px] text-[var(--gray-006)]">
                  XLT drives fees, rewards, and governance.
                </p>
              </div>
              <div className="bg-[url('/images/bg_rwa_tech_05.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-start">
                <h3 className="text-[32px] font-semibold mb-4">
                  5-Trust Matrix
                </h3>
                <p className="text-[20px] text-[var(--gray-006)]">
                  Secure, transparent, and trusted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-40">
        <div className="container bg-[url('/images/bg_next_generation.png')] h-[644px] bg-cover bg-center text-white">
          <div className="container flex flex-col justify-center h-full pl-50">
            <h2 className="text-[56px] font-semibold">
              Next generation token <br />
              issuance technology, <br />
              RWA on-chain technology
            </h2>
          </div>
        </div>
      </section>

      {/* Token Features Section */}
      <section className="py-20 h-[1080px] bg-[url('/images/bg_benefit.png')] bg-cover bg-center relative">
        <div className="absolute -bottom-[100px] -right-[50px] z-2 float-animation">
          <Image
            src="/images/icon_float_02.png"
            alt="benefit-bg"
            width={403}
            height={386}
          />
        </div>
        <div className="container flex flex-col gap-8 justify-center h-full relative">
          <div className="absolute -top-[50px] -left-[200px] float-animation-delayed">
            <Image
              src="/images/icon_float_01.png"
              alt="benefit-bg"
              width={403}
              height={386}
            />
          </div>
          <div className="grid grid-cols-4 gap-8 h-[350px] relative z-1">
            <div className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8">
              <div>
                <Image
                  src="/images/icon_inv_01.png"
                  alt="investment-01"
                  width={62}
                  height={62}
                />
              </div>
              <h3 className="text-[32px] font-semibold">
                Invest in RWA
                <br />
                <br />
              </h3>
              <p className="text-[var(--gray-006)]">
                XLT is required to subscribe to RWA, convert(issue) XLT to XUSD
                and subscribe to RWA in XUSD.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start col-span-2 gap-8">
              <div>
                <Image
                  src="/images/icon_inv_02.png"
                  alt="investment-02"
                  width={62}
                  height={62}
                />
              </div>
              <h3 className="text-[32px] font-semibold">
                Pay fees in XLT & Burn
                <br />
                <br />
              </h3>
              <p className="text-[var(--gray-006)]">
                Flywheel: more platform activity → more XLT demand → more burn →
                higher scarcity Value accrual from product usage to token
                holders.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8">
              <div>
                <Image
                  src="/images/icon_inv_03.png"
                  alt="investment-03"
                  width={62}
                  height={62}
                />
              </div>
              <h3 className="text-[32px] font-semibold">
                Partner fees for <br />
                XRG in XLT
                <br />
              </h3>
              <p className="text-[var(--gray-006)]">
                Creates exogenous demand: more partners → more mandatory XLT
                spend.Scales token utility beyond XYLO’s own marketplace.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 h-[350px]">
            <div className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8">
              <div>
                <Image
                  src="/images/icon_inv_04.png"
                  alt="investment-04"
                  width={62}
                  height={62}
                />
              </div>
              <h3 className="text-[32px] font-semibold">
                Utility-focused <br />
                Rewards
                <br />
                <br />
              </h3>
              <p className="text-[var(--gray-006)]">
                Rewards power users without promising fixed returns. <br />{" "}
                Performance Bonds: stake XLT as issuer collateral;
                slashed/burned on breaches.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8">
              <div className="mb-4">
                <Image
                  src="/images/icon_inv_05.png"
                  alt="investment-05"
                  width={62}
                  height={62}
                />
              </div>
              <h3 className="text-[32px] font-semibold">
                DAO Governance <br />
                Participation
              </h3>
              <p className="text-[var(--gray-006)]">
                Encourages long-term holding via lockup-weighted voting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenization Experience Section */}
      <section className="py-80 bg-white">
        <div className="container mb-32">
          <h2 className="text-[56px] font-semibold text-center">
            User Experience of Tokenization
          </h2>
        </div>
        <div className="container">
          <div className="flex justify-between">
            <div>
              <div>
                <h3 className="text-[32px] font-medium mb-4">Asset Holders</h3>
                <p className="text-[var(--gray-006)] text-[20px]">
                  Improved tokenization technology makes it easy to <br />
                  securitize (ABS) assets and quickly receives liquidity
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-[32px] font-medium mb-4">
                  Retail Investors
                </h3>
                <p className="text-[var(--gray-006)] text-[20px]">
                  Make valuable investments anywhere in the world <br />
                  across borders
                </p>
              </div>
            </div>
          </div>
          <div className="relative my-30">
            <div className="sway-animation">
              <Image
                src="/images/icon_universe.png"
                alt="tokenization-01"
                width={1811}
                height={481}
              />
            </div>
            <div className="absolute top-[80px] left-[100px] w-[475px] h-[260px] bg-[#C9BED2] backdrop-blur-lg opacity-50 rounded-2xl rotate-[-8deg] float-animation"></div>
            <div className="absolute top-[0px] left-[500px] w-[375px] h-[245px] bg-[#DEEFDD] backdrop-blur-lg opacity-50 rounded-2xl rotate-[9deg] float-animation-delayed-2"></div>
            <div className="absolute top-[150px] left-[850px] w-[412px] h-[260px] bg-[#F0EFE4] backdrop-blur-lg opacity-50 rounded-2xl rotate-[-6deg] float-animation-delayed-3"></div>
            <div className="absolute top-[0px] left-[1180px] w-[412px] h-[260px] bg-[#C9BED2] backdrop-blur-lg opacity-50 rounded-2xl rotate-[2deg] float-animation-delayed-4"></div>
          </div>
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div>
                <h3 className="text-[32px] font-medium mb-4">
                  Institutional Investor
                </h3>
                <p className="text-[var(--gray-006)] text-[20px]">
                  Secure and reliable services to carry out Stablecoins <br />
                  and DAT strategies
                </p>
              </div>
              <div>
                <h3 className="text-[32px] font-medium mb-4">Brokerage</h3>
                <p className="text-[var(--gray-006)] text-[20px]">
                  Global asset managers connected, blockchain provides <br />
                  24/7 access to investment
                </p>
              </div>
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
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
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
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center max-w-4xl mx-auto">
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
              <div className="bg-gray-100 rounded-2xl p-6">
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
          <div className="bg-gray-200 rounded-2xl h-60 flex items-center justify-center max-w-4xl mx-auto">
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
              <div key={item} className="bg-gray-50 rounded-2xl p-6">
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
              <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
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
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
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
