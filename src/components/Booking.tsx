
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Calendar } from "lucide-react";

export const Booking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({
      name,
      phone,
      date,
      time,
      pickupLocation,
      dropoffLocation,
      message
    });
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Réservez votre taxi</h2>
            <p className="text-gray-600 mb-8">
              Réservez votre trajet rapidement et facilement. Nous vous confirmerons votre réservation dans les plus brefs délais.
            </p>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Merci pour votre réservation !</h3>
                <p className="text-gray-600 mb-4">
                  Nous avons bien reçu votre demande et nous vous contacterons très prochainement pour confirmer votre réservation.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-2">
                  Faire une nouvelle réservation
                </Button>
              </div>
            ) : (
              <Tabs defaultValue="reservation" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="reservation">Réservation</TabsTrigger>
                  <TabsTrigger value="devis">Demande de devis</TabsTrigger>
                </TabsList>
                <TabsContent value="reservation">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Votre nom" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          placeholder="Votre numéro" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <div className="relative">
                          <Input 
                            id="date" 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                            required 
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Heure</Label>
                        <Input 
                          id="time" 
                          type="time" 
                          value={time} 
                          onChange={(e) => setTime(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Adresse de prise en charge</Label>
                      <Input 
                        id="pickup" 
                        type="text" 
                        value={pickupLocation} 
                        onChange={(e) => setPickupLocation(e.target.value)} 
                        placeholder="Où souhaitez-vous être pris en charge ?" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dropoff">Adresse de destination</Label>
                      <Input 
                        id="dropoff" 
                        type="text" 
                        value={dropoffLocation} 
                        onChange={(e) => setDropoffLocation(e.target.value)} 
                        placeholder="Où souhaitez-vous aller ?" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Informations complémentaires sur votre trajet..." 
                        rows={3} 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-eco hover:bg-eco/90 text-white">
                      Réserver maintenant
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="devis">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name-quote">Nom complet</Label>
                        <Input 
                          id="name-quote" 
                          type="text" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Votre nom" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-quote">Téléphone</Label>
                        <Input 
                          id="phone-quote" 
                          type="tel" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          placeholder="Votre numéro" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Type de trajet</Label>
                      <RadioGroup defaultValue="aller-simple" className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="aller-simple" id="aller-simple" />
                          <Label htmlFor="aller-simple">Aller simple</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="aller-retour" id="aller-retour" />
                          <Label htmlFor="aller-retour">Aller-retour</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mise-a-disposition" id="mise-a-disposition" />
                          <Label htmlFor="mise-a-disposition">Mise à disposition</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pickup-quote">Adresse de départ</Label>
                      <Input 
                        id="pickup-quote" 
                        type="text" 
                        value={pickupLocation} 
                        onChange={(e) => setPickupLocation(e.target.value)} 
                        placeholder="Départ" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dropoff-quote">Adresse d'arrivée</Label>
                      <Input 
                        id="dropoff-quote" 
                        type="text" 
                        value={dropoffLocation} 
                        onChange={(e) => setDropoffLocation(e.target.value)} 
                        placeholder="Destination" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message-quote">Détails de votre demande</Label>
                      <Textarea 
                        id="message-quote" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Nombre de passagers, date souhaitée, bagages, etc." 
                        rows={3} 
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-eco hover:bg-eco/90 text-white">
                      Demander un devis
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            )}
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Pourquoi choisir Taxi Eco Transport ?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-eco/10 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-eco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ponctualité garantie</h4>
                  <p className="text-gray-600 text-sm">Nos chauffeurs sont toujours à l'heure, vous permettant de planifier votre journée en toute sérénité.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-eco/10 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-eco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Confort et sécurité</h4>
                  <p className="text-gray-600 text-sm">Voyagez dans des véhicules modernes, propres et bien entretenus pour un maximum de confort.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-eco/10 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-eco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tarifs transparents</h4>
                  <p className="text-gray-600 text-sm">Pas de surprises : nos tarifs sont clairs et transparents, sans frais cachés.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-eco/10 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-eco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Chauffeurs professionnels</h4>
                  <p className="text-gray-600 text-sm">Nos chauffeurs sont expérimentés, courtois et connaissent parfaitement la région.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 font-medium mb-2">
                <svg className="h-5 w-5 text-eco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Besoin d'un taxi immédiatement ?</span>
              </div>
              <a href="tel:0630162925" className="block text-lg font-semibold text-eco hover:underline">
                06 30 16 29 25
              </a>
              <p className="text-sm text-gray-500 mt-1">Disponible 24/7 pour vos déplacements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
