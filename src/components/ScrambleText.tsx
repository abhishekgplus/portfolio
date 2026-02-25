"use client";

import { useEffect, useState } from "react";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function ScrambleText({
  text,
  duration = 1500,
  className = "",
}: {
  text: string;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 30);

    const interval = setInterval(() => {
      frame++;

      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * text.length);

      const scrambled = text
        .split("")
        .map((char, i) => {
          if (i < revealCount) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(scrambled);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{display}</span>;
}