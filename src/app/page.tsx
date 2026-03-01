"use client";

import Image from "next/image";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden break-keep">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] px-6 md:px-10 bg-black/60 backdrop-blur-md">
        <div className="relative h-10 w-[200px]">
          <Image
            src="/images/logo.png"
            alt="Twintok"
            fill
            className="object-contain object-left max-w-[100px]"
            priority
          />
        </div>
        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollTo("service")}
            className="min-w-[80px] w-full text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            서비스 소개
          </button>
          <button
            onClick={() => scrollTo("footer")}
            className="min-w-[80px] text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            컨택트
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-[96px] font-black leading-tight md:leading-[1.15] tracking-tight">
            <span className="block mb-2">또 다른 나를</span>
            <span
              className="block bg-clip-text text-transparent pb-2"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #30A9FF 0%, #A855F7 50%, #F000FF 100%)",
              }}
            >
              크리에이트하다!
            </span>
          </h1>

          <p className="mt-8 text-base md:text-xl font-medium text-white/70 leading-relaxed tracking-wide max-w-xl">
            Twintok과 함께 나만의 AI 아바타를 만들어 팬들과 소통해보세요!
          </p>

          <button
            onClick={() => scrollTo("service")}
            className="mt-10 px-12 py-4 rounded-full border border-white/20 bg-white/10 text-lg font-bold hover:bg-white/20 transition-colors cursor-pointer"
          >
            둘러보기
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-16 flex flex-col items-center gap-2 opacity-30">
            <span className="text-xs font-medium tracking-[4.8px] uppercase">
              Scroll down
            </span>
            <div className="w-px h-12 bg-white" />
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="bg-black py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-tight mb-20 lg:mb-32 leading-tight">
            나만의 AI 아바타를 만들어 팬들과 소통해보세요!
          </h2>

          {/* Desktop Overlapping Flex Rows */}
          <div className="hidden md:flex flex-col items-center w-full">
            {/* Feature 1 - 시공간 장벽 (Text Right, Image Left) */}
            <div className="flex flex-row items-center justify-center gap-12 lg:gap-24 w-full">
              <div className="relative w-[340px] lg:w-[420px] aspect-[418/743] shrink-0">
                <Image
                  src="/images/875_1x_shots_so 1.svg"
                  alt="글로벌 소통 화면"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center w-[350px] lg:w-[420px]">
                <h3 className="text-3xl lg:text-[40px] font-black text-[#AD46FF] leading-tight mb-6 tracking-tight">
                  시공간과 언어의 장벽을 넘어
                  <br />
                  팬들과 소통하다!
                </h3>
                <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed lg:leading-[2]">
                  트윈톡의 아바타는 LLM이 제공하는 모든 언어를 구사합니다.
                  <br />
                  글로벌 팬들과 언어의 장벽을 넘어 소통이 가능합니다.
                </p>
              </div>
            </div>

            {/* Feature 2 - 실사 아바타 (Text Left, Image Right) */}
            <div className="flex flex-row items-center justify-center gap-12 lg:gap-24 w-full -mt-24 lg:-mt-64 relative z-10 pointer-events-none">
              <div className="text-center w-[350px] lg:w-[420px] pointer-events-auto">
                <h3 className="text-3xl lg:text-[40px] font-black text-[#0184FF] leading-tight mb-6 tracking-tight">
                  실사 그대로의 아바타!
                </h3>
                <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed lg:leading-[2]">
                  트윈톡의 아바타는 캐릭터가 아닌, 실존 인물과 동일하며
                  목소리까지 닮은 실시간 상호작용이 가능한 아바타를 생성합니다!
                </p>
              </div>
              <div className="relative w-[340px] lg:w-[420px] aspect-[418/743] shrink-0 pointer-events-auto">
                <Image
                  src="/images/523_1x_shots_so 1.svg"
                  alt="실사 아바타 화면"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Feature 3 - 말투와 성격 (Text Right, Image Left) */}
            <div className="flex flex-row items-center justify-center gap-12 lg:gap-24 w-full -mt-24 lg:-mt-64 relative z-20 pointer-events-none">
              <div className="relative w-[340px] lg:w-[420px] aspect-[418/743] shrink-0 pointer-events-auto">
                <Image
                  src="/images/546_1x_shots_so 1.svg"
                  alt="말투와 성격 설정 화면"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center w-[350px] lg:w-[420px] pointer-events-auto">
                <h3 className="text-3xl lg:text-[40px] font-black text-[#AD46FF] leading-tight mb-6 tracking-tight">
                  말투와 성격까지 구현된다고?
                </h3>
                <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed lg:leading-[2]">
                  트윈톡의 아바타는 LLM 활용 기술을 통해 의도된 말투와
                  <br />
                  성격을 지정할 수 있으며, 음담패설 또는 불필요한 정보를
                  제한하여 보다 안전하게 사용할 수 있습니다.
                </p>
              </div>
            </div>

            {/* Feature 4 - 24시간 워커 (Text Left, Image Right) */}
            <div className="flex flex-row items-center justify-center gap-12 lg:gap-24 w-full -mt-24 lg:-mt-64 relative z-30 pointer-events-none">
              <div className="text-center w-[350px] lg:w-[420px] pointer-events-auto">
                <h3 className="text-3xl lg:text-[40px] font-black text-[#0184FF] leading-tight mb-6 tracking-tight">
                  언제 어디서나 24시간 일하는
                  <br />
                  AI 아바타!
                </h3>
                <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed lg:leading-[2]">
                  AI 아바타라는 새로운 무기로, 팬들과의 소통으로 새로운
                  수익구조를 만들어갈 수 있습니다. 또한, 아바타에게 비지니스
                  정보를 주입하여 CS 및 세일즈 담당자로도 사용해 보세요!
                </p>
              </div>
              <div className="relative w-[340px] lg:w-[420px] aspect-[418/743] shrink-0 pointer-events-auto">
                <Image
                  src="/images/909_1x_shots_so 1.svg"
                  alt="24시간 일하는 AI 아바타 화면"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile Single-Column Layout */}
          <div className="flex flex-col md:hidden gap-y-16">
            {/* Section 1 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-full max-w-[320px] aspect-[418/743]">
                <Image
                  src="/images/875_1x_shots_so 1.svg"
                  alt="글로벌 소통 화면"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center -mt-8 relative z-10 pointer-events-none">
                <div className="pointer-events-auto">
                  <h3 className="text-2xl font-black text-[#AD46FF] leading-tight mb-3">
                    시공간과 언어의 장벽을 넘어
                    <br />
                    팬들과 소통하다!
                  </h3>
                  <p className="text-base font-medium text-white/90 leading-relaxed">
                    트윈톡의 아바타는 LLM이 제공하는 모든 언어를 구사합니다.
                    <br />
                    글로벌 팬들과 언어의 장벽을 넘어 소통이 가능합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-center gap-6">
              <div className="text-center relative z-10 pointer-events-none">
                <div className="pointer-events-auto">
                  <h3 className="text-2xl font-black text-[#0184FF] leading-tight mb-3">
                    실사 그대로의 아바타!
                  </h3>
                  <p className="text-base font-medium text-white/90 leading-relaxed">
                    트윈톡의 아바타는 캐릭터가 아닌, 실존 인물과 동일하며
                    <br />
                    목소리까지 닮은 실시간 상호작용이 가능한
                    <br />
                    아바타를 생성합니다!
                  </p>
                </div>
              </div>
              <div className="relative w-full max-w-[320px] aspect-[418/743] -mt-8">
                <Image
                  src="/images/523_1x_shots_so 1.svg"
                  alt="실사 아바타 화면"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-full max-w-[320px] aspect-[418/743]">
                <Image
                  src="/images/546_1x_shots_so 1.svg"
                  alt="말투와 성격 설정 화면"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center -mt-8 relative z-10 pointer-events-none">
                <div className="pointer-events-auto">
                  <h3 className="text-2xl font-black text-[#AD46FF] leading-tight mb-3">
                    말투와 성격까지 구현된다고?
                  </h3>
                  <p className="text-base font-medium text-white/90 leading-relaxed">
                    트윈톡의 아바타는 LLM 활용 기술을 통해
                    <br />
                    의도된 말투와 성격을 지정할 수 있으며,
                    <br />
                    음담패설 또는 불필요한 정보를 제한하여 보다 안전하게 사용할
                    수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col items-center gap-6">
              <div className="text-center relative z-10 pointer-events-none">
                <div className="pointer-events-auto">
                  <h3 className="text-2xl font-black text-[#0184FF] leading-tight mb-3">
                    언제 어디서나 24시간 일하는
                    <br />
                    AI 아바타!
                  </h3>
                  <p className="text-base font-medium text-white/90 leading-relaxed">
                    AI 아바타라는 새로운 무기로, 팬들과의 소통으로 새로운
                    수익구조를
                    <br />
                    만들어갈 수 있습니다. 또한, 아바타에게 비지니스 정보를
                    주입하여
                    <br />
                    CS 및 세일즈 담당자로도 사용해 보세요!
                  </p>
                </div>
              </div>
              <div className="relative w-full max-w-[320px] aspect-[418/743] -mt-8">
                <Image
                  src="/images/909_1x_shots_so 1.svg"
                  alt="24시간 일하는 AI 아바타 화면"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="border-t border-white/5 bg-black px-6 md:px-10 pt-16 pb-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="relative h-10 w-[200px] mb-4">
              <Image
                src="/images/logo.png"
                alt="Twintok"
                fill
                className="object-contain object-left max-w-[100px]"
              />
            </div>
            <p className="text-base font-medium text-white/40 leading-relaxed">
              크리에이터를 더 스마트하게 만드는 힘,
              <br />
              트윈톡
            </p>
          </div>
          <div className="text-base font-medium text-white/40 leading-relaxed">
            <p>
              주소: 서울특별시 강동구 올림픽로 610 천호역효성해링턴타워 B동 2층
            </p>
            <p>TEL : 010-8494-8903</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
