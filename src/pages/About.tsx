
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About as AboutSection } from "@/components/About";
import { User, Award, Truck, Clock, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">À <span className="text-yellow-400">Propos</span> de Nous</h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Découvrez l'histoire et les valeurs de Taxi Eco Transport, votre partenaire de confiance pour tous vos déplacements à Saint-Quentin.
              </p>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos <span className="text-yellow-400">Valeurs</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chez Taxi Eco Transport, nous nous engageons à offrir un service de qualité basé sur des valeurs fortes qui guident toutes nos actions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Service client</h3>
                <p className="text-gray-600">
                  Nous plaçons votre satisfaction au cœur de nos préoccupations et nous nous adaptons à vos besoins spécifiques.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Qualité</h3>
                <p className="text-gray-600">
                  Nous nous engageons à offrir un service de haute qualité avec des véhicules bien entretenus et confortables.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Ponctualité</h3>
                <p className="text-gray-600">
                  Nous respectons scrupuleusement les horaires et nous nous efforçons d'être toujours à l'heure pour vos trajets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Écoute</h3>
                <p className="text-gray-600">
                  Réactif et disponible, je suis à votre écoute pendant toute la durée du trajet pour un maximum de confort.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
