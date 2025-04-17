
import { Button } from "./ui/button";
import { PhoneCall, Calendar, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      id="accueil" 
      className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-taxi/70 mix-blend-multiply" />

      {/* Taxi-themed pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzZjLTkuOTQgMC0xOC04LjA2LTE4LTE4czguMDYtMTggMTgtMTggMTggOC4wNiAxOCAxOC04LjA2IDE4LTE4IDE4eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase bg-yellow-500 rounded-full">
              Service de taxi à Saint-Quentin
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Taxi Eco</span> Transport
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-md">
              Vous souhaitez vous rendre à l'aéroport ou vous avez un rendez-vous ou un événement personnel ? Véhicule 7 places avec remorque, également véhicule électrique.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                asChild
              >
                <a href="#reservation" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Réserver
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white/10"
                asChild
              >
                <a href="tel:0630162925" className="flex items-center gap-2">
                  <PhoneCall size={18} />
                  06 30 16 29 25
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-300">
              <MapPin size={16} className="text-yellow-400" />
              <address className="not-italic">
                45 rue Saverne, 02100 Saint-Quentin
              </address>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="relative bg-gray-800 p-2 rounded-lg shadow-xl">
                <div className="bg-yellow-400 rounded-t-md py-3 px-4 font-bold text-black text-center">
                  TAXI
                </div>
                <div className="bg-white rounded-b-md p-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-bold text-black">Eco Transport</span>
                    <span className="text-sm text-gray-600">Saint-Quentin</span>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">4,4/5 - 20 avis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
