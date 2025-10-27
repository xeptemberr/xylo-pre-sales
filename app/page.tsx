"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Button from "./components/Button";
import TokenomicsChart from "./components/TokenomicsChart";
import Accordion from "./components/Accordion";
import { faqData } from "./data/faqData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { xltWalletAddresses } from "./data/walletAddresses";
import { insightsData, InsightItem } from "./data/insightsData";
import RoundedButton from "./components/RoundedButton";
import BackgroundVideo from "./components/BackgroundVideo";
import ReactVideo from "react-player";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    // 클라이언트 사이드임을 표시
    setIsClient(true);

    // AOS 초기화
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
      delay: 100,
    });

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
      <header className="absolute top-0 left-0 right-0 z-50 text-white backdrop-blur-md">
        <div className="container flex h-[84px] flex justify-between items-center">
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
          <nav className="flex p-[6px] gap-2 font-bold bg-[url('/images/bg_header_nav.png')] bg-[length:100%_100%] bg-center">
            <a
              href="#features"
              className="min-w-[68px] px-6 h-[38px] flex items-center justify-center text-[15px] font-medium text-[var(--gray-006)] bg-[url('/images/bg_header_nav_btn.png')] bg-[length:100%_100%] bg-center"
            >
              Features
            </a>
            <a
              href="#tokenomics"
              className="min-w-[68px] px-6 h-[38px] flex items-center justify-center text-[15px] font-medium text-[var(--gray-006)] bg-[url('/images/bg_header_nav_btn.png')] bg-[length:100%_100%] bg-center"
            >
              Tokenomics
            </a>
            <a
              href="#docs"
              className="min-w-[68px] px-6 h-[38px] flex items-center justify-center text-[15px] font-medium text-[var(--gray-006)] bg-[url('/images/bg_header_nav_btn.png')] bg-[length:100%_100%] bg-center"
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
      <section className="text-white pt-20 flex items-end relative min-h-screen">
        <BackgroundVideo src="/videos/video_main.mp4" />
        <div className="container absolute bottom-[165px] left-0 right-0 z-10">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[80px] font-bold mb-6 leading-tight">
                <div data-aos="fade-up" data-aos-duration="500">
                  The First DEX Built
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  for Ripple&apos;s XLT Ledger
                </div>
              </h1>
              <div className="w-[49rem] p-[2.4rem] flex flex-col gap-8">
                <div>
                  <div className="text-[2.4rem] text-[#E1DBE5] mb-4">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      $XLT Presale LIVE!{" "}
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="400"
                    >
                      Next price increase in:
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-4 text-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="500"
                  >
                    {isClient ? (
                      <>
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
                          <div className="text-[2.4rem] text-white mt-2">
                            Days
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
                            {String(timeLeft.hours).padStart(2, "0")}
                          </div>
                          <div className="text-[2.4rem] text-white mt-2">
                            Hours
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
                      </>
                    ) : (
                      <>
                        <div>
                          <div
                            className="text-[5.6rem] font-bold"
                            style={{
                              fontFamily:
                                "var(--font-manrope), Manrope, sans-serif",
                            }}
                          >
                            00
                          </div>
                          <div className="text-[2.4rem] text-white mt-2">
                            Days
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
                            00
                          </div>
                          <div className="text-[2.4rem] text-white mt-2">
                            Hours
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
                            00
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
                            00
                          </div>
                          <div className="text-[2.4rem] text-white mt-2">
                            Seconds
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="600"
                >
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => console.log("BUY $XLT clicked")}
                  >
                    BUY $XLT
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="flex gap-4 rounded-2xl bg-[url('/images/bg_status_card.png')] bg-[length:100%_100%] bg-center items-center justify-center h-[97px] p-8 w-[511px]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
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
      <section className="h-[630px] bg-[url('/images/bg_introduce.png')] bg-bottom bg-cover">
        <div className="container flex flex-col justify-center h-full">
          <div
            className="font-bold text-[var(--primary)] text-left text-[42px]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Xylo Introduces a new era of DeFi with the XLT Ledger.
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <span className="text-[var(--primary-dark)] font-normal">
                Through seamless transactions, transparent governance, and
                secure liquidity,
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <span className="text-[var(--primary-dark)] font-normal">
                we connect{" "}
              </span>
              real-world assets to the blockchain ㅡ
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              accessible to both newcomers and professionals.
            </div>
          </div>
        </div>
      </section>

      {/* Own it Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[48px] font-bold mb-6">
                <div data-aos="fade-up" data-aos-duration="500">
                  Own it,{" "}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  or miss out.
                </div>
              </h2>
              <p
                className="text-[20px] text-[var(--gray-006)] leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
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
        <div className="container">
          <h2
            className="text-[56px] mb-16 font-semibold text-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Discover the Innovation of RWA Technology
          </h2>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 h-[400px]">
              <div
                className="bg-[url('/images/bg_rwa_tech_01.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-end"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h3
                  className="text-[32px] font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  RWA Issuance <br />
                  Technology
                </h3>
                <p
                  className="text-[20px] text-[var(--gray-006)]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Turn assets into secure digital tokens.
                </p>
              </div>
              <div
                className="bg-[url('/images/bg_rwa_tech_02.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-end"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <h3
                  className="text-[32px] font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  XYLO Smart <br />
                  Right Graph
                </h3>
                <p
                  className="text-[20px] text-[var(--gray-006)]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  On-chain rights, verified and automated.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 h-[400px]">
              <div
                className="bg-[url('/images/bg_rwa_tech_03.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-start"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h3
                  className="text-[32px] font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  RWA Invest Platform
                </h3>
                <p
                  className="text-[20px] text-[var(--gray-006)]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Simple access to global tokenized assets.
                </p>
              </div>
              <div
                className="bg-[url('/images/bg_rwa_tech_04.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-start"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h3
                  className="text-[32px] font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Token Economy
                </h3>
                <p
                  className="text-[20px] text-[var(--gray-006)]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  XLT drives fees, rewards, and governance.
                </p>
              </div>
              <div
                className="bg-[url('/images/bg_rwa_tech_05.png')] bg-cover bg-center rounded-2xl p-16 text-left flex flex-col justify-start"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h3
                  className="text-[32px] font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  5-Trust Matrix
                </h3>
                <p
                  className="text-[20px] text-[var(--gray-006)]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Secure, transparent, and trusted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-40">
        <div className="container aspect-video bg-cover bg-center text-white relative">
          <div className="overflow-hidden rounded-2xl h-full absolute inset-0">
            <BackgroundVideo src="/videos/video_01.mp4" />
          </div>
          <div className="container flex flex-col justify-center h-full pl-50">
            <h2 className="text-[56px] font-semibold">
              <div data-aos="fade-up" data-aos-duration="500">
                Next generation token
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                issuance technology,
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                RWA on-chain technology
              </div>
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
            <div
              className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <Image
                  src="/images/icon_inv_01.png"
                  alt="investment-01"
                  width={62}
                  height={62}
                />
              </div>
              <h3
                className="text-[32px] font-semibold"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Invest in RWA
                <br />
                <br />
              </h3>
              <p
                className="text-[var(--gray-006)]"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                XLT is required to subscribe to RWA, convert(issue) XLT to XUSD
                and subscribe to RWA in XUSD.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start col-span-2 gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <Image
                  src="/images/icon_inv_02.png"
                  alt="investment-02"
                  width={62}
                  height={62}
                />
              </div>
              <h3
                className="text-[32px] font-semibold"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Pay fees in XLT & Burn
                <br />
                <br />
              </h3>
              <p
                className="text-[var(--gray-006)]"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                Flywheel: more platform activity → more XLT demand → more burn →
                higher scarcity Value accrual from product usage to token
                holders.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <Image
                  src="/images/icon_inv_03.png"
                  alt="investment-03"
                  width={62}
                  height={62}
                />
              </div>
              <h3
                className="text-[32px] font-semibold"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Partner fees for <br />
                XRG in XLT
                <br />
              </h3>
              <p
                className="text-[var(--gray-006)]"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                Creates exogenous demand: more partners → more mandatory XLT
                spend.Scales token utility beyond XYLO’s own marketplace.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 h-[350px]">
            <div
              className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <Image
                  src="/images/icon_inv_04.png"
                  alt="investment-04"
                  width={62}
                  height={62}
                />
                <h3
                  className="text-[32px] font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Utility-focused <br />
                  Rewards
                  <br />
                  <br />
                </h3>
                <p
                  className="text-[var(--gray-006)]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Rewards power users without promising fixed returns. <br />{" "}
                  Performance Bonds: stake XLT as issuer collateral;
                  slashed/burned on breaches.
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-2xl p-16 text-left flex flex-col justify-start gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
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
                  <br />
                  <br />
                </h3>
                <p className="text-[var(--gray-006)]">
                  Encourages long-term holding via lockup-weighted voting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenization Experience Section */}
      <section className="py-80 bg-white">
        <div className="container mb-32">
          <h2
            className="text-[56px] font-semibold text-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            User Experience of Tokenization
          </h2>
        </div>
        <div className="container">
          <div className="flex justify-between">
            <div>
              <div>
                <h3
                  className="text-[32px] font-medium mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Asset Holders
                </h3>
                <p
                  className="text-[var(--gray-006)] text-[20px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Improved tokenization technology makes it easy to <br />
                  securitize (ABS) assets and quickly receives liquidity
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3
                  className="text-[32px] font-medium mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Retail Investors
                </h3>
                <p
                  className="text-[var(--gray-006)] text-[20px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Make valuable investments anywhere in the world <br />
                  across borders
                </p>
              </div>
            </div>
          </div>
          <div className="relative my-30">
            <div
              className="sway-animation"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <Image
                src="/images/icon_universe.png"
                alt="tokenization-01"
                width={1811}
                height={481}
              />
            </div>
            <div
              className="absolute top-[80px] left-[100px] w-[475px] h-[260px] bg-[#C9BED2] backdrop-blur-lg opacity-50 rounded-2xl rotate-[-8deg] float-animation"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
            ></div>
            <div
              className="absolute top-[0px] left-[500px] w-[375px] h-[245px] bg-[#DEEFDD] backdrop-blur-lg opacity-50 rounded-2xl rotate-[9deg] float-animation-delayed-2"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            ></div>
            <div
              className="absolute top-[150px] left-[850px] w-[412px] h-[260px] bg-[#F0EFE4] backdrop-blur-lg opacity-50 rounded-2xl rotate-[-6deg] float-animation-delayed-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
            ></div>
            <div
              className="absolute top-[0px] left-[1180px] w-[412px] h-[260px] bg-[#C9BED2] backdrop-blur-lg opacity-50 rounded-2xl rotate-[2deg] float-animation-delayed-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            ></div>
          </div>
          <div className="container">
            <div className="flex justify-between">
              <div>
                <h3
                  className="text-[32px] font-medium mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Institutional Investor
                </h3>
                <p
                  className="text-[var(--gray-006)] text-[20px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Secure and reliable services to carry out Stablecoins <br />
                  and DAT strategies
                </p>
              </div>
              <div>
                <h3
                  className="text-[32px] font-medium mb-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Brokerage
                </h3>
                <p
                  className="text-[var(--gray-006)] text-[20px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Global asset managers connected, blockchain provides <br />
                  24/7 access to investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Transactions Section */}
      <section className="pt-0 pb-80 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-[20px] font-semibold mb-8 text-[var(--gray-006)]"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Real-time Highlights
              </p>
              <h2
                className="text-[56px] font-semibold mb-12"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Check top transactions. Seize the moment.
              </h2>
              <p
                className="text-[20px] text-[var(--gray-006)] mb-24"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Track the most significant transactions happening on the XYLO{" "}
                <br />
                platform and see where the market is moving.
              </p>
              <div
                className="flex space-x-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <RoundedButton
                  variant="primary"
                  size="md"
                  onClick={() => console.log("Buy XLT clicked")}
                >
                  Buy $XLT
                </RoundedButton>
                <RoundedButton
                  variant="secondary"
                  size="md"
                  onClick={() => console.log("View more clicked")}
                >
                  View more
                </RoundedButton>
              </div>
            </div>
            <div className="bg-white rounded-2xl py-12 px-24 shadow-soft">
              <h3
                className="text-[40px] text-[var(--gray-006)] font-medium mb-6 text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                List of biggest transactions
              </h3>
              <div
                className="highlights-swiper"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={48}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                  className="relative"
                >
                  {/* 자동으로 4개씩 그룹화하여 슬라이드 생성 */}
                  {Array.from(
                    { length: Math.ceil(xltWalletAddresses.length / 4) },
                    (_, groupIndex) => (
                      <SwiperSlide key={groupIndex} className="mb-12">
                        <div>
                          {xltWalletAddresses
                            .slice(groupIndex * 4, (groupIndex + 1) * 4)
                            .map((wallet) => (
                              <div
                                key={wallet.id}
                                className="flex items-center space-x-4 bg-white  shadow-md rounded-2xl px-8 py-6 mx-4 mb-4 h-[80px]"
                              >
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[var(--gray-006)] text-[18px] flex items-center justify-start gap-2">
                                    <span className="truncate">
                                      {wallet.shortAddress}
                                    </span>
                                    <button className="flex-shrink-0">
                                      <Image
                                        src="/images/icon_open_window.png"
                                        alt="copy"
                                        width={20}
                                        height={20}
                                      />
                                    </button>
                                  </div>
                                </div>
                                <div className="text-[var(--gray-006)] text-[18px] font-semibold flex-shrink-0">
                                  {wallet.balanceUSD}
                                </div>
                              </div>
                            ))}
                        </div>
                      </SwiperSlide>
                    )
                  )}
                  <div className="swiper-pagination !bottom-0"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[1077px] relative py-40">
        <BackgroundVideo src="/videos/video_02.mp4" />
        <div className="container text-left h-full flex flex-col justify-end">
          <h2 className="text-[56px] font-semibold text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Real Assets,
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              Real Value,
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              Tokenized for the World
            </div>
          </h2>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-60 bg-white relative">
        <div className="absolute top-[50%] mt-[-385px] left-[0] float-animation opacity-50">
          <Image
            src="/images/icon_float_03.png"
            alt="object"
            width={524}
            height={771}
          />
        </div>
        <div className="absolute bottom-[0] right-[0] float-animation-delayed opacity-70">
          <Image
            src="/images/icon_float_04.png"
            alt="object"
            width={641}
            height={493}
          />
        </div>
        <div className="relative border-b border-[#E9E9E9]">
          <div className="container">
            <h2
              className="text-[56px] font-semibold text-center mb-16"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Explore the XYLO Roadmap
            </h2>
            <p
              className="text-[20px] text-[var(--gray-006)] text-center mb-32"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Core technology for turning real-world assets into <br />
              RWA tokens through an automated process.
            </p>
            <div className="grid grid-cols-3 gap-8 relative">
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <h3
                  className="text-[40px] font-bold"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Q4 2025
                </h3>
                <div
                  className="w-[42px] h-[42px] mx-auto relative top-[21px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/icon_roadmap_circle.png"
                    alt="circle"
                    width={42}
                    height={42}
                  />
                </div>
              </div>
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <h3
                  className="text-[40px] font-bold text-[#D9D9D9]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Q1 2026
                </h3>
                <div
                  className="w-[42px] h-[42px] mx-auto relative top-[21px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/icon_roadmap_circle.png"
                    alt="circle"
                    width={42}
                    height={42}
                  />
                </div>
              </div>
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <h3
                  className="text-[40px] font-bold text-[#D9D9D9]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Q2 2026
                </h3>
                <div
                  className="w-[42px] h-[42px] mx-auto relative top-[21px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/icon_roadmap_circle.png"
                    alt="circle"
                    width={42}
                    height={42}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-20 relative grid grid-cols-3 gap-8 leading-12">
          <ul
            className="text-left"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <li className="flex items-start text-[20px] text-[var(--gray-006)]">
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Global presale growth and community outreach</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Xylo Wallet (beta, multi-chain, MPC security)</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Ambassador program scale-up</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>
                First RWA assets onboarded <br />
                (real estate, bonds, K-POP IP, art)
              </span>
            </li>
          </ul>
          <ul className="text-left">
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Xylo Launchpad (alpha release)</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Staking, Swap, and Liquidity Pools go live</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>XLT and XUSD tokens introduced</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Mobile app beta for iOS & Android</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Initial institutional partners onboard</span>
            </li>
          </ul>
          <ul className="text-left">
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Launchpad global release</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Exchange listing preparations (XLT/XUSD)</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>New RWA classes (ESG, carbon credits)</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Stronger compliance: MiCA, SEC, KYC/AML</span>
            </li>
            <li
              className="flex items-start text-[20px] text-[var(--gray-006)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="w-[10px] h-[10px] bg-[#513E5C] rounded-full mt-[10px] mr-3"></div>
              <span>Open API for fintech and exchange partners</span>
            </li>
          </ul>
        </div>
        <div className="container pt-60 relative">
          <h2
            className="text-[56px] font-semibold text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            XLT Tokenomics
          </h2>
          <p
            className="text-[20px] text-[var(--gray-006)] text-center mb-32"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            Discover Xylo’s presale — a transparent, borderless, <br />
            and secure way to access real-world assets.
          </p>
          {/* Tokenomics Chart */}
          <div className="grid grid-cols-3 gap-12 items-center">
            <div className="h-full">
              <div className="h-full flex flex-col">
                <div
                  className="flex justify-between items-center h-full"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-8">
                    <span className="block w-[28px] h-[28px] bg-[#f1f1f1] rounded-lg"></span>
                    <span className="block text-[24px] font-semibold">
                      Marketing
                    </span>
                  </div>
                  <span className="block text-[28px] font-semibold">0%</span>
                </div>
                <div
                  className="flex justify-between items-center h-full"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-8">
                    <span className="block w-[28px] h-[28px] bg-[#e7e7e7] rounded-lg"></span>
                    <span className="block text-[24px] font-semibold">
                      Reserve
                    </span>
                  </div>
                  <span className="block text-[28px] font-semibold ">10%</span>
                </div>
                <div
                  className="flex justify-between items-center h-full"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-8">
                    <span className="block w-[28px] h-[28px] bg-[#B1B0BA] rounded-lg"></span>
                    <span className="block text-[24px] font-semibold">
                      VC &amp; Presales
                    </span>
                  </div>
                  <span className="block text-[28px] font-semibold">10%</span>
                </div>
                <div
                  className="flex justify-between items-center h-full"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-8">
                    <span className="block w-[28px] h-[28px] bg-[#D9D9D9] rounded-lg"></span>
                    <span className="block text-[24px] font-semibold">
                      Foundation & Dev
                    </span>
                  </div>
                  <span className="block text-[28px] font-semibold">10%</span>
                </div>
              </div>
            </div>
            <div
              className="flex justify-center mb-16"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="rounded-full shadow-soft p-8">
                <TokenomicsChart className="drop-shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className="flex justify-between items-center h-full"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-8">
                  <span className="block w-[28px] h-[28px] bg-[#BEE9BB] rounded-lg"></span>
                  <span className="block text-[24px] font-semibold">
                    Market Supply
                  </span>
                </div>
                <span className="block text-[28px] font-semibold">60%</span>
              </div>
              <div className="text-[20px] font-medium text-[[var(--gray-007)]] leading-16">
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>Initial Supply</span>
                  <span>10%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>2nd Supply</span>
                  <span>10%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>3rd Supply</span>
                  <span>10%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>4th Supply</span>
                  <span>10%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>5th Supply</span>
                  <span>5%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>6th Supply</span>
                  <span>5%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>7th Supply</span>
                  <span>5%</span>
                </div>
                <div
                  className="flex justify-between border-l-2 border-l-[#D9D9D9] pl-12"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <span>8th Supply</span>
                  <span>5%</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-[28px] font-semibold text-center mt-8"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            TOTAL: 10,000,000,000
          </div>
          <div
            className="text-[20px] text-[[var(--gray-007)]] text-center mt-8 flex items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <span>
              <Image
                src="/images/icon_xylo_token.png"
                alt="copy"
                width={25}
                height={24}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
            <span>XLTMy69uUrDzWBa9JX1xqPMTJxXSASFcMBCLq3Y3M3n</span>
            <button className="flex-shrink-0">
              <Image
                src="/images/icon_copy.png"
                alt="copy"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </section>

      {/* XRG Ecosystem Banner */}
      <section className="h-[1081px] relative py-40">
        <BackgroundVideo src="/videos/video_03.mp4" />
        <div className="container text-left h-full flex flex-col justify-start">
          <h2 className="text-[56px] font-semibold text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            <div data-aos="fade-up" data-aos-duration="500">
              XRG-Powered Ecosystem,
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Bringing RWA to Life
            </div>
          </h2>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-60 bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-16">
            <h2
              className="text-[56px] font-semibold"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Insights
            </h2>
            <div
              className="flex gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <button
                className="bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={currentSlide === 0}
              >
                <Image
                  src="/images/icon_slide_prev.png"
                  alt="left"
                  width={55}
                  height={55}
                />
              </button>
              <button
                className="bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={currentSlide === totalSlides - 1}
              >
                <Image
                  src="/images/icon_slide_next.png"
                  alt="right"
                  width={55}
                  height={55}
                />
              </button>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            speed={1000}
            className="w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.activeIndex);
            }}
          >
            {Array.from({ length: 3 }, (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex flex-col gap-8">
                  {insightsData
                    .slice(slideIndex * 4, (slideIndex + 1) * 4)
                    .reduce<InsightItem[][]>((acc, item, index) => {
                      if (index % 2 === 0) {
                        acc.push([item]);
                      } else {
                        acc[acc.length - 1].push(item);
                      }
                      return acc;
                    }, [])
                    .map((row: InsightItem[], rowIndex: number) => (
                      <div key={rowIndex} className="flex gap-8 h-full">
                        {row.map((insight, itemIndex: number) => {
                          const globalIndex =
                            slideIndex * 4 + rowIndex * 2 + itemIndex;
                          // 1, 4, 5, 8, 9, 12... 번째는 800px, 나머지는 600px
                          const isWide =
                            (globalIndex + 1) % 4 === 1 ||
                            (globalIndex + 1) % 4 === 0;
                          const width = isWide ? "800px" : "600px";

                          return (
                            <div
                              key={insight.id}
                              className="bg-gray-50 rounded-2xl p-16"
                              style={{ width: width }}
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="100"
                            >
                              <a href="#" className="block w-full h-full">
                                <div className="flex gap-16 h-full">
                                  {isWide && insight.image && (
                                    <div className="flex-shrink-0">
                                      <Image
                                        src={insight.image}
                                        alt={insight.title}
                                        width={249}
                                        height={309}
                                      />
                                    </div>
                                  )}
                                  <div className="flex flex-col justify-between h-full">
                                    <div>
                                      <div className="mb-4 flex items-center justify-start text-[20px] gap-4 font-medium">
                                        <Image
                                          src="/images/icon_coinmarketcap.png"
                                          alt="eye"
                                          width={32}
                                          height={32}
                                        />
                                        <span>CoinMarketCap</span>
                                      </div>
                                      <h3 className="text-[32px] font-semibold mb-3">
                                        {insight.title}
                                      </h3>
                                      <p className="text-[20px]">
                                        {insight.description}
                                      </p>
                                    </div>
                                    <div className="border-t border-[#E9E9E9] pt-12">
                                      <div className="flex items-center justify-between mb-4 text-[20px]">
                                        <span className="text-gray-500">
                                          {insight.date}
                                        </span>
                                        <span className="text-gray-500">
                                          {insight.readTime}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Asset Holders Section */}
      <section className="py-20 h-[646px] bg-[url('/images/bg_asset_holders.png')] bg-cover bg-center text-white relative">
        <div className="absolute top-[-250px] left-[0] float-animation">
          <Image
            src="/images/icon_float_05.png"
            alt="asset-holders"
            width={237}
            height={384}
          />
        </div>
        <div className="container flex flex-col justify-center h-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-[56px] font-semibold mb-6"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Asset Holders
              </h2>
              <div className="text-[20px] text-[var(--gray-006)] font-medium leading-14">
                <div data-aos="fade-up" data-aos-duration="500">
                  Improved tokenization technology makes it easy to{" "}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  securitize (ABS) assets and quickly receives liquidity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-60 bg-white relative">
        <div className="absolute top-[100px] right-[0] float-animation">
          <Image
            src="/images/icon_float_06.png"
            alt="asset-holders"
            width={507}
            height={403}
          />
        </div>
        <div className="container relative z-1">
          <h2 className="text-[56px] font-semibold text-center mb-16">
            <div data-aos="fade-up" data-aos-duration="500">
              Frequently
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Asked Questions
            </div>
          </h2>
          <div className="w-[1126px] mx-auto">
            <Accordion items={faqData} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06040F] text-white py-40">
        <div className="container">
          <div className="flex justify-between gap-12">
            <div>
              <Image
                src="/images/logo_footer.png"
                alt="logo"
                width={81}
                height={26}
                className="object-contain"
                data-aos="fade-up"
                data-aos-duration="500"
              />
              <h3 className="text-[63px] font-medium mt-32">
                <div data-aos="fade-up" data-aos-duration="500">
                  Launch Your Asset,{" "}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  We <strong className="font-semibold">Tokenize</strong> it.
                </div>
              </h3>
              <div className="text-[var(--gray-006)] mt-12 text-[22px] leading-14">
                <div data-aos="fade-up" data-aos-duration="500">
                  Follow us on social media to never miss a job opportunity,{" "}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  career insights, and expert hiring tips.
                </div>
              </div>
              <div className="flex space-x-4 mt-24">
                <button
                  className="flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/icon_discord.png"
                    alt="discord"
                    width={37}
                    height={30}
                  />
                </button>
                <button
                  className="flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Image
                    src="/images/icon_x.png"
                    alt="X:twitter"
                    width={37}
                    height={30}
                  />
                </button>
                <button
                  className="flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  <Image
                    src="/images/icon_telegram.png"
                    alt="telegram"
                    width={38}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-8 font-medium text-[var(--gray-006)] text-[20px]">
                <li data-aos="fade-up" data-aos-duration="500">
                  Navigation
                </li>
                <li data-aos="fade-up" data-aos-duration="500">
                  Building A1, <br />
                  Dubai Digital Park, <br />
                  Dubai Silicon Oasis Dubai, <br />
                  U.A.E
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  Home
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  +84 965 657 893
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Features
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  info@xylo.world
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Tokenomics
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Docs
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Join Presale
                </li>
              </ul>
              <h4
                className="mt-24 text-[63px] font-light shimmer-text leading-tight"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                Explore XYLO →
              </h4>
            </div>
          </div>
          <div
            className="mt-12 text-center text-[var(--gray-006)] text-[15px]"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <p>&copy; 2024 XYLO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
