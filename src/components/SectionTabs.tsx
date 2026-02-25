"use client";
import { useState } from "react";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "initiatives", label: "Initiatives" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

export default function SectionTabs() {
  const [active, setActive] = useState("");

  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setActive(section.id)}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                active === section.id
                  ? "bg-white text-black"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-gray-700"
              }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </div>
  );
}