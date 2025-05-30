import { homeTexts } from "@/utils/texts";

import Link from "next/link";

import MaterialCards from "@/components/MaterialCards";
import QA from "@/components/QA";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/forChristWP3.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>{" "}
        {/* Added bg-opacity-60 for better readability if needed */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h2 className="mb-5 text-3xl font-bold">{homeTexts.hTitle}</h2>
            <h1 className="mb-5 text-5xl font-bold">{homeTexts.hSubtitle}</h1>
            {homeTexts.hparrafos.map((parrafo) => (
              <p key={parrafo} className="mb-5">
                {parrafo}
              </p>
            ))}
            {/* Botón del Hero con Link a /tutorials */}
            <Link href="/tutoriales" className="btn btn-primary">
              {homeTexts.hBotton}
            </Link>
          </div>
        </div>
      </div>
      <QA />
      <MaterialCards />
    </div>
  );
}
