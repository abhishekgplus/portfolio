import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Kumar Singh | Engineering Director",
  description:
    "Director – Wealth Management Technology | Platform Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} relative antialiased text-neutral-100 bg-neutral-950 overflow-x-hidden`}
      >
        {/* ===== Background Grid Layer ===== */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Base dark */}
          <div className="absolute inset-0 bg-neutral-950" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Radial glow top */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[140px] rounded-full" />

          {/* Secondary glow bottom */}
          <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] bg-purple-500/10 blur-[160px] rounded-full" />
        </div>

        {/* ===== Main Content ===== */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}