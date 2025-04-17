
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, Mail, PhoneCall } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-taxi text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 bg-yellow-400 text-black rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">ECO</span>
              </div>
              <span className="font-bold text-xl">
                <span className="text-yellow-400">Taxi</span>{" "}
                <span className="text-white">Eco Transport</span>
              </span>
            </div>
            <p className="mb-6 text-gray-300">
              Service de taxi à Saint-Quentin. Véhicule 7 places avec remorque, également véhicule électrique. Transport de malade assis.
            </p>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/p/Taxi-Eco-Transport-100026258092042/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
  <Facebook size={20} />
  <span className="sr-only">Facebook</span>
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
  <Instagram size={20} />
  <span className="sr-only">Instagram</span>
</a>

            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#accueil" className="hover:text-yellow-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#apropos" className="hover:text-yellow-400 transition-colors">À propos</a></li>
              <li><a href="#temoignages" className="hover:text-yellow-400 transition-colors">Témoignages</a></li>
              <li><a href="#reservation" className="hover:text-yellow-400 transition-colors">Réservation</a></li>
              <li><a href="#carte" className="hover:text-yellow-400 transition-colors">Plan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Transport local</li>
              <li>Transfert aéroport</li>
              <li>Trajet longue distance</li>
              <li>Transport malade assis</li>
              <li>Véhicule 7 places avec remorque</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-center">
                <PhoneCall size={18} className="text-yellow-400" />
                <a href="tel:0630162925" className="hover:text-yellow-400 transition-colors">06 30 16 29 25</a>
              </li>

              <li className="pt-4">
             
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Taxi Eco Transport. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-6 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
