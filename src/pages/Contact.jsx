import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Titre principal */}
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Contactez-nous
      </h2>

      {/* Contenu global (grille à deux colonnes) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonne gauche : Informations de contact */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Nos coordonnées
          </h3>

          <div className="space-y-5">
            <div className="flex items-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
              <FaPhoneAlt className="text-pink-600 text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Téléphone</h4>
                <p className="text-gray-600 dark:text-gray-400">+212 600 123 456</p>
              </div>
            </div>

            <div className="flex items-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
              <FaEnvelope className="text-pink-600 text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">E-mail</h4>
                <p className="text-gray-600 dark:text-gray-400">contact@techsinformatique.com</p>
              </div>
            </div>

            <div className="flex items-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-pink-600 text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Adresse</h4>
                <p className="text-gray-600 dark:text-gray-400">Dakar, Sénégal</p>
              </div>
            </div>

            <div className="flex items-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
              <FaClock className="text-pink-600 text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Horaires</h4>
                <p className="text-gray-600 dark:text-gray-400">Lun - Ven : 9h00 - 18h00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite : Formulaire de contact */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Envoyez-nous un message
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Entrez votre nom"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
                Adresse e-mail
              </label>
              <input
                type="email"
                placeholder="Entrez votre e-mail"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Votre message..."
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg shadow-md 
                         transition-transform transform hover:scale-105 hover:shadow-pink-400/40"
            >
              ✉️ Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
