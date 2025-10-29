import React from "react";

function CourseSection() {
  return (
  <section className="pt-2 flex flex-col items-center justify-center text-center min-h-[40vh] py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">

      {/* Vidéo encadrée */}
      <div className="relative border-4 border-orange-400 rounded-xl overflow-hidden shadow-lg w-[360px] sm:w-[420px] md:w-[480px]">
        <iframe
          className="w-full h-[200px] sm:h-[240px] md:h-[270px]"
          src="https://www.youtube.com/embed/3NO2N2VmYxQ"
          title="Cours FastAPI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Étiquette "On Air" */}
        <span className="absolute bottom-2 left-2 bg-purple-700 text-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
          On Air
        </span>
      </div>

      {/* Texte descriptif */}
      <p className="mt-8 text-gray-700 max-w-xl">
        Rejoignez notre cours complet pour maîtriser{" "}
        <span className="font-semibold text-blue-700">FastAPI</span> avec des
        projets concrets, un accompagnement expert et une communauté active.
        Commencez votre aventure dès aujourd'hui !
      </p>

      {/* Bouton animé */}
      <a
        href="https://www.youtube.com/watch?v=3NO2N2VmYxQ"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-md 
                   transition-transform transform hover:scale-110 
                   hover:shadow-pink-400/50 hover:shadow-lg 
                   animate-glow"
      >
        Voir le cours complet 🎥
      </a>

      {/* Animation personnalisée */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ec4899, 0 0 10px #ec4899;
          }
          50% {
            box-shadow: 0 0 20px #f472b6, 0 0 30px #ec4899;
          }
          100% {
            box-shadow: 0 0 5px #ec4899, 0 0 10px #ec4899;
          }
        }
        .animate-glow {
          animation: glow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default CourseSection;