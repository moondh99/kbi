/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qKcsgYLQTUd
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'
export default function TestPage() {
  return (
    (<div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">K리그 1 팀 및 선수 분석</h1>
          <p className="text-sm text-primary-foreground mt-2">
            한국 최고 축구 리그 K리그 1의 전략과 선수 프로필을 살펴보세요.
          </p>
        </div>
      </header>
      <main className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <section>
            <h2 className="text-2xl font-bold mb-6">팀 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">울산 현대</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  울산 현대는 공격적이고 높은 압박 축구로 유명한 K리그 1의 강호입니다. 경험 많은 김도훈 감독이 이끄는 이
                  팀은 강력한 수비 조직과 침착한 득점력으로 상대를 압도합니다.
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="울산 현대"
                    width={80}
                    height={80}
                    className="rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div>
                    <p className="font-medium">김도훈</p>
                    <p className="text-sm text-muted-foreground">감독</p>
                  </div>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="울산 현대 경기장"
                  width={600}
                  height={400}
                  className="mt-4 rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              </div>
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">전북 현대 모터스</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  전북 현대 모터스는 K리그 1에서 늘 우승 경쟁을 하는 팀으로, 점유율 위주의 공격적인 축구로 유명합니다.
                  김상식 감독이 이끄는 이 팀은 깊이 있고 재능 있는 선수들로 상대를 압도합니다.
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="전북 현대 모터스"
                    width={80}
                    height={80}
                    className="rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div>
                    <p className="font-medium">김상식</p>
                    <p className="text-sm text-muted-foreground">감독</p>
                  </div>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="전북 현대 모터스 경기장"
                  width={600}
                  height={400}
                  className="mt-4 rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              </div>
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">대구 FC</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  대구 FC는 실용적이고 조직적인 축구로 알려져 있습니다. 견고한 수비를 바탕으로 역습 기회를 노리는 것이
                  이 팀의 전략입니다. 최원권 감독이 이끄는 이 팀은 상대를 지치게 만들어 결과를 얻는 것을 목표로 합니다.
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="대구 FC"
                    width={80}
                    height={80}
                    className="rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div>
                    <p className="font-medium">최원권</p>
                    <p className="text-sm text-muted-foreground">감독</p>
                  </div>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="대구 FC 경기장"
                  width={600}
                  height={400}
                  className="mt-4 rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              </div>
            </div>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">선수 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="김보경"
                    width={80}
                    height={80}
                    className="rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div>
                    <p className="font-medium">김보경</p>
                    <p className="text-sm text-muted-foreground">울산 현대</p>
                    <p className="text-sm text-muted-foreground">미드필더</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  김보경은 울산 현대 미드필드의 엔진 역할을 합니다. 뛰어난 패스 범위와 시야로 팀의 공격을 조율하며, 경기
                  전체에 걸쳐 높은 템포를 유지합니다.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="손준호"
                    width={80}
                    height={80}
                    className="rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div>
                    <p className="font-medium">손준호</p>
                    <p className="text-sm text-muted-foreground">전북 현대 모터스</p>
                    <p className="text-sm text-muted-foreground">미드필더</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  손준호는 전북 현대 모터스 미드필드의 심장부입니다. 끊임없는 활동량, 뛰어난 위치 선정, 경기 템포 조절
                  능력으로 팀의 점유율 위주 축구의 핵심 역할을 합니다.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="정승원"
                    width={80}
                    height={80}
                    className="rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div>
                    <p className="font-medium">정승원</p>
                    <p className="text-sm text-muted-foreground">대구 FC</p>
                    <p className="text-sm text-muted-foreground">수비수</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  정승원은 대구 FC 수비의 핵심입니다. 공중볼 장악력, 뛰어난 위치 선정, 강인한 플레이로 팀의 조직적이고
                  규율 있는 수비 구조의 기둥 역할을 합니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <p className="text-sm text-center">&copy; 2023 K리그 1 분석. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}
