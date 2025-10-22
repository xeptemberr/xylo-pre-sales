// app/components/BackgroundVideo.tsx
"use client";

import React from "react";

interface BackgroundVideoProps {
  src: string; // mp4 파일 경로
  className?: string; // 예: "absolute inset-0 w-full h-full object-cover"
}

export default function BackgroundVideo({
  src,
  className = "absolute inset-0 w-full h-full object-cover",
}: BackgroundVideoProps) {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline // 모바일 전체화면 방지
      preload="metadata" // 초기 로딩 최소화
    >
      <source src={src} type="video/mp4" />
      {/* 브라우저가 mp4 지원 안 하면 대체 텍스트 */}
      Your browser does not support the video tag.
    </video>
  );
}
