"use client";

import Image from "next/image";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
  "/images/avatar5.png",
  "/images/avatar6.png",
  "/images/avatar7.png",
  "/images/avatar8.png",
  "/images/avatar9.png",
];

const avatarGrid = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [8, 0, 1, 2, 3, 4, 5, 6],
  [7, 8, 0, 1, 2, 3, 4, 5],
  [6, 7, 8, 0, 1, 2, 3, 4],
  [5, 6, 7, 8, 0, 1, 2, 3],
];

const opacityMap: Record<number, string> = {
  0: "opacity-5",
  1: "opacity-0",
  2: "opacity-15",
  3: "opacity-30",
  4: "opacity-50",
  5: "opacity-80",
  6: "opacity-45",
  7: "opacity-10",
  8: "opacity-65",
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
        {/* Avatar Background Grid */}
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-12 scale-125">
              <div className="grid grid-rows-5 gap-4 p-8">
                {avatarGrid.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-4 justify-center">
                    {row.map((avatarIdx, colIdx) => (
                      <div
                        key={`${rowIdx}-${colIdx}`}
                        className={`relative w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden border border-white/5 shrink-0 ${opacityMap[avatarIdx] ?? "opacity-30"}`}
                      >
                        <Image
                          src={avatars[avatarIdx]}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-[96px] font-black leading-tight md:leading-[1.15] tracking-tight">
            <span className="block">크리에이터를</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #30A9FF 0%, #A855F7 50%, #F000FF 100%)",
              }}
            >
              더 스마트하게!
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
      <section id="service" className="bg-black py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight mb-20 leading-tight">
            나만의 AI 아바타를 만들어 팬들과 소통해보세요!
          </h2>

          {/* Feature 1 - Phone left, text right */}
          <div className="flex justify-center mb-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-5xl">
              <div className="relative w-[360px] md:w-[470px] h-[650px] md:h-[830px] shrink-0">
                <Image
                  src="/images/phone1.png"
                  alt="AI 아바타 채팅 화면"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center max-w-xl">
                <h3 className="text-2xl md:text-[40px] font-black text-[#AD46FF] leading-tight mb-6">
                  시공간과 언어의 장벽을 넘어
                  <br />
                  팬들과 소통하다!
                </h3>
                <p className="text-lg font-normal text-white leading-relaxed">
                  트윈톡의 아바타는 LLM이 제공하는 모든 언어를 구사합니다.
                  <br />
                  글로벌 팬들과 언어의 장벽을 넘어 소통이 가능합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Text left, phone right */}
          <div className="flex justify-center mb-32">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-5xl">
              <div className="text-center max-w-xl">
                <h3 className="text-2xl md:text-[40px] font-black text-[#0184FF] leading-tight mb-6">
                  실사 그대로의 아바타!
                </h3>
                <p className="text-lg font-normal text-white leading-relaxed">
                  트윈톡의 아바타는 캐릭터가 아닌, 실존 인물과 동일하며
                  <br />
                  목소리까지 닮은 실시간 상호작용이 가능한
                  <br />
                  아바타를 생성합니다!
                </p>
              </div>
              <div className="relative w-[360px] md:w-[470px] h-[650px] md:h-[830px] shrink-0">
                <Image
                  src="/images/phone2.png"
                  alt="실사 아바타 화면"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - Phone left, text right */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-5xl">
              <div className="relative w-[360px] md:w-[470px] h-[650px] md:h-[830px] shrink-0">
                <Image
                  src="/images/phone3.png"
                  alt="말투와 성격 설정 화면"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center max-w-xl">
                <h3 className="text-2xl md:text-[40px] font-black text-[#AD46FF] leading-tight mb-6">
                  말투와 성격까지 구현된다고?
                </h3>
                <p className="text-lg font-normal text-white leading-relaxed">
                  트윈톡의 아바타는 LLM 활용 기술을 통해 의도된 말투와
                  <br />
                  성격을 지정할 수 있고, 음담패설 또는 불필요한 정보를 제한하여
                  <br />
                  보다 안전하게 사용할 수 있습니다.
                </p>
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
