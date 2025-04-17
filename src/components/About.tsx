
import { Badge } from "./ui/badge";
import { CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-yellow-500 border-yellow-500">
              À propos de nous
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              Transport fiable à Saint-Quentin
            </h2>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Taxi Eco Transport</span> s'est engagé à offrir un service de qualité. Nous assurons également le transport de malade assis.
            </p>
            <p className="text-gray-600 mb-8">
              Réactif et disponible, pour de longues distances, je suis à votre écoute pendant toute la durée du trajet. La commune de stationnement est Saint-Quentin.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Service 24/7", 
                "Chauffeurs expérimentés", 
                "Véhicule 7 places avec remorque", 
                "Véhicule électrique disponible"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-yellow-400/10 rounded-full blur-xl"></div>
            <div className="aspect-square bg-gradient-to-br from-taxi to-gray-800 rounded-lg overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzZjLTkuOTQgMC0xOC04LjA2LTE4LTE4czguMDYtMTggMTgtMTggMTggOC4wNiAxOCAxOC04LjA2IDE4LTE4IDE4eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-4">
                  ECO TRANSPORT
                </div>
                <h3 className="text-2xl font-bold mb-2">Transport de qualité</h3>
                <p className="mb-6 text-gray-300">
                  Réservez votre taxi chez Taxi Eco Transport pour tous vos besoins de déplacement.
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="mt-2 text-sm">4,4/5 - 20 avis clients</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-60 h-60 bg-yellow-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
