
import { Car, Clock, Users, ShieldCheck, CreditCard, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
 
  {
    icon: Clock,
    title: "Disponibilité fléxible",
    description: "À votre service tous les jours, à toute heure. Réservez à l'avance ou appelez pour une course immédiate."
  },
  {
    icon: Users,
    title: "Trajets personnalisés",
    description: "Transport adapté à vos besoins: individuel, familial ou professionnel."
  },
  {
    icon: MapPin,
    title: "Longue distance",
    description: "Voyages vers les aéroports, gares et autres villes de la région avec confort et sécurité."
  },
  {
    icon: ShieldCheck,
    title: "Sécurité garantie",
    description: "Chauffeurs professionnels et véhicules régulièrement entretenus pour votre sécurité."
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    description: "Accepte les paiements en espèces, en ligne pour professionel."
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-darkblue text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Nos Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de transport, conçus pour répondre à tous vos besoins de déplacement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 border-t-yellow-400 hover:shadow-md transition-shadow bg-zinc-900 text-white">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-2">
                  <service.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <CardTitle className="text-xl text-yellow-400">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
