import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

const sections = [
  {
    title: "Qui sommes-nous ?",
    text: "Nous sommes une équipe passionnée, animée par l'innovation et le sens du détail. Notre objectif est de transformer vos idées en projets concrets, performants et durables.",
    image: about1,
  },
  {
    title: "Notre équipe",
    text: "Des experts en technologie, design et stratégie qui unissent leurs talents pour concevoir des solutions à fort impact. L’humain est au cœur de tout ce que nous faisons.",
    image: about2,
  },
  {
    title: "Nos valeurs",
    text: "Nous croyons en l’excellence, la transparence et la créativité. Ces valeurs guident chacune de nos réalisations et renforcent la confiance de nos clients.",
    image: about3,
  },
];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {sections.map((section, index) => (
        <section
          key={index}
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Image de fond semi-transparente */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
            }}
          ></div>

          <div
            className={`relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Bloc image */}
            <div
              className={`transform transition-all duration-700 hover:scale-105 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Bloc texte */}
            <div
              className={`space-y-5 text-gray-800 dark:text-gray-100 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed max-w-lg">
                {section.text}
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-pink-400/50 transform hover:scale-105 transition-all duration-300"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
