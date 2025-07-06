
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services as ServicesSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Car, Users, Clock, MapPin, ShieldCheck, Ambulance } from "lucide-react";

const ServicesPage = () => {
  const serviceDetails = [
    {
      title: "Véhicule 7 places avec remorque",
      description: "Parfait pour les groupes ou les familles avec beaucoup de bagages. Notre véhicule spacieux peut accueillir jusqu'à 7 personnes confortablement, et la remorque offre un espace supplémentaire pour vos bagages.",
      icon: Users,
      color: "bg-yellow-400"
    },
    {
      title: "Véhicule électrique",
      description: "Pour les clients soucieux de l'environnement, nous proposons aussi un véhicule électrique, combinant confort et respect de l'écologie.",
      icon: Car,
      color: "bg-yellow-400"
    },
    {
      title: "Transport de malade assis",
      description: "Nous assurons le transport de personnes malades ou à mobilité réduite, avec un véhicule adapté et un chauffeur formé pour ce type de transport.",
      icon: Ambulance,
      color: "bg-yellow-400"
    },
    {
      title: "Longues distances",
      description: "Réactif et disponible pour de longues distances, nous sommes à votre écoute pendant toute la durée du trajet pour vous assurer un voyage confortable.",
      icon: MapPin,
      color: "bg-yellow-400"
    },
    {
      title: "Disponibilité fléxible",
      description: "Notre serviceest fléxible que ce soit pour un trajet planifié ou une urgence de dernière minute, nous sommes là pour vous.",
      icon: Clock,
      color: "bg-yellow-400"
    },
    {
      title: "Sécurité garantie",
      description: "Votre sécurité est notre priorité. Tous nos véhicules sont régulièrement entretenus et nos chauffeurs sont des professionnels expérimentés.",
      icon: ShieldCheck,
      color: "bg-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Nos <span className="text-yellow-400">Services</span></h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Découvrez l'ensemble des services proposés par Taxi Eco Transport pour répondre à tous vos besoins de déplacement à Saint-Quentin et ses environs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceDetails.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex gap-6 items-start">
                  <div className={`${service.color} text-black p-3 rounded-full`}>
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Besoin d'un service sur mesure ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Nous sommes à votre écoute pour adapter nos services à vos besoins spécifiques. N'hésitez pas à nous contacter pour discuter de votre projet de transport.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black" size="lg" asChild>
                  <a href="#reservation">Réserver maintenant</a>
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" size="lg" asChild>
                  <a href="tel:0630162925">Appelez-nous</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
