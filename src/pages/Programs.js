import React, { useEffect, useState } from "react";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔧 Détection automatique de l’URL du backend
  const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${API_URL}/programs/`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de chargement des programmes");
        return res.json();
      })
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
        ⏳ Chargement des programmes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        ❌ {error}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Nos Programmes 🎓
      </h1>

      {programs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Aucun programme disponible pour le moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {program.image && (
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-t-2xl w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {program.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                  {program.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">
                    {program.price} €
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {program.hours}h • {program.lessons} leçons
                  </span>
                </div>

                {program.teacher && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    👨‍🏫 Prof : {program.teacher.name || "Inconnu"}
                  </p>
                )}

                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 hover:scale-105 transform transition duration-300">
                  Voir Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Programs;
