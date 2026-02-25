import Image from "next/image";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Abhishek Kumar Singh
          </h1>

          <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Director – Wealth Management Technology
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
            Engineering leader with 8+ years of experience architecting 
            mission-critical distributed platforms across Apigee Hybrid 
            (Anthos/GKE) and OPDK infrastructure. Managing 600+ nodes powering 
            10,000+ APIs globally with 99.99% availability.
          </p>

          {/* Metrics */}
          <div className="flex gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                600+
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Global Nodes
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                10,000+
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                API Proxies
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                99.99%
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Availability
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Abhishek_Singh_CV.pdf"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition font-medium shadow-sm"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/aksingh14/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 
                         text-gray-800 dark:text-gray-200 
                         hover:bg-gray-100 dark:hover:bg-neutral-800 
                         rounded-xl transition font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-gray-500 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/aksingh14/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/abhishekgplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.youtube.com/@the_infra_engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Abhishek Kumar Singh"
            width={360}
            height={360}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}