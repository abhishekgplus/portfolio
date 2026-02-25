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
    <html lang="en">
      <body
        className={`${inter.className}
          bg-neutral-50 text-neutral-900
          dark:bg-neutral-950 dark:text-neutral-100
          antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}