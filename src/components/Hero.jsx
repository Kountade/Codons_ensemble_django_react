import React from "react";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative w-full h-[30vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl font-bold mb-2">Bienvenue sur notre site</h1>
        <p className="text-sm max-w-md">
          Découvrez nos produits et services exclusifs.
        </p>
        <button className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-sm">
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default Hero;