"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "dark"
    );
  }, []);

  useEffect(() => {
    if (!theme) return;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  if (!theme) return null; // prevents hydration flash

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Abhishek Kumar Singh
        </p>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="px-4 py-2 rounded-full 
                     border border-neutral-300 dark:border-neutral-700
                     text-gray-800 dark:text-gray-200
                     hover:bg-neutral-100 dark:hover:bg-neutral-800
                     transition"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </footer>
  );
}