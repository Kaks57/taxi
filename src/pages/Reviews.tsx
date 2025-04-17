
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const allReviews = [
  {
    name: "Kais MAHOUACHI TAJERT",
    date: "Il y a 1 mois",
    comment: "Trajet agréable, chauffeur ponctuel et souiant je recommande vivement",
    rating: 5,
    initials: "SB",
    source: "Google"
  },
  {
    name: "S Brah",
    date: "Il y a 2 mois",
    comment: "Trajet agréable en compagnie de Belsem, très gentil et courtois je recommande ! Merci encore",
    rating: 5,
    initials: "SB",
    source: "Google"
  },
  {
    name: "P",
    date: "Il y a 3 ans",
    comment: "Voyage très agréable, chauffeur très ponctuel plus de 20 min d'avance donc largement à l'heure à notre rendez-vous.",
    rating: 5,
    initials: "P",
    source: "Pages Jaunes"
  },
  {
    name: "Chantal Souchet",
    date: "Il y a un an",
    comment: "Belsem et super pro serviable attentif à vos problèmes et s'adapte. Sympathique en plus, à l'heure, précis, quelles différences avec pas mal d'autre taxi.",
    rating: 5,
    initials: "CS",
    source: "Google"
  },
  {
    name: "Ambre Renaux-putti",
    date: "Il y a un an",
    comment: "Conducteur très gentil et bienveillant, il m'a pris malgré le fait que je n'avais pas assez en voyant ma détresse. Je le remercie infiniment pour son geste qui va me permettre d'entrer dans l'entreprise dans laquelle je dois travailler. Merci beaucoup 🙏",
    rating: 5,
    initials: "AR",
    source: "Google"
  },
  {
    name: "P",
    date: "Il y a un an",
    comment: "Chauffeur très ponctuel (15 min d'avance), très poli et très agréable. Trajet en toute sécurité. Arrivée à mon rendez-vous médical avec 20min d'avance, parfait Merci encore",
    rating: 5,
    initials: "P",
    source: "Pages Jaunes"
  },
  {
    name: "Gregory Carpentier",
    date: "Il y a un an",
    comment: "Bonjour très bon taxi toujours a écouté il trouve toujours des solutions pour ces clients je suis avec eco taxi depuis des années et frenchemen jamais je changerai merci encore pour ton écoute Greg et Angel je recommande vraiment",
    rating: 5,
    initials: "GC",
    source: "Google"
  },
  {
    name: "moussdeladiouf",
    date: "Il y a un an",
    comment: "Franchement bien, j'étais bourré il est arrivé en 5 min, il m'a déposé chez moi à l'autre bout de la ville pour 10 balles et il a même fait la conversation. Top ✌🏻",
    rating: 5,
    initials: "M",
    source: "Google"
  },
  {
    name: "Ropitail Olivier (Taxi'O)",
    date: "Il y a 4 ans",
    comment: "Sachez que monsieur Belsem El Akrich est une bonne personne, une personne professionnelle à l'écoute de sa clientèle.",
    rating: 5,
    initials: "RO",
    source: "Google"
  },
  {
    name: "Jean-Michel Damulot",
    date: "Il y a 2 ans",
    comment: "A effectué avec moi un transport demandé par l'assistance de mon assurance, de mon domicile à Berck sur Mer pour récupérer un de mes véhicules en réparation.",
    rating: 5,
    initials: "JMD",
    source: "Google"
  },
  {
    name: "Anthony Cusse",
    date: "Il y a un an",
    comment: "Personne rapide et très aimable. La personne est accueillante et souriante. Le véhicule est propre et en bon état ! 😊",
    rating: 5,
    initials: "AC",
    source: "Google"
  },
  {
    name: "Jeff Pochol",
    date: "Il y a un an",
    comment: "2 trajet avec ce chauffeur nickel, à l'heure et sympathique très pro 👍",
    rating: 5,
    initials: "JP",
    source: "Google"
  },
  {
    name: "Christian Naikete",
    date: "Il y a un an",
    comment: "Super bien j'ai appelé le service pour demander de renseignements et ils ont donner un service qui répond à mes attentes",
    rating: 5,
    initials: "CN",
    source: "Google"
  },
  {
    name: "Cedric",
    date: "Il y a un an",
    comment: "Personne très agréable, sympathique et à l'heure, je recommande à 100%",
    rating: 5,
    initials: "C",
    source: "Google"
  },
  {
    name: "Decroix Julien",
    date: "Il y a 4 ans",
    comment: "Serviable (ouvre la portière) mais ne respecte pas l'horaire, ne dispose pas de rehausseur enfant et 'eco' c'est pas pour économique...",
    rating: 2,
    initials: "DJ",
    source: "Google"
  },
  {
    name: "MAXIME FRANCOIS",
    date: "Il y a 4 ans",
    comment: "A fuir et éviter en urgence",
    rating: 1,
    initials: "MF",
    source: "Google"
  },
  {
    name: "snoopy snoopy",
    date: "Il y a 6 ans",
    comment: "Ce chauffeur de taxi a dégrader volontairement ma voiture, Fais des menaces à plusieurs reprises, et m'a agresser physiquement une fois",
    rating: 1,
    initials: "SS",
    source: "Google"
  },
  {
    name: "Gregory Carpentier",
    date: "Il y a 2 ans",
    comment: "Super chauffeur",
    rating: 5,
    initials: "GC",
    source: "Google"
  },
  {
    name: "Tony Di Bin",
    date: "Il y a 5 ans",
    comment: "Impeccable 👌",
    rating: 5,
    initials: "TDB",
    source: "Google"
  },
  {
    name: "Alain aurelien",
    date: "Il y a un an",
    comment: "",
    rating: 5,
    initials: "AA",
    source: "Google"
  },
  {
    name: "isabelle dehame",
    date: "Il y a un an",
    comment: "",
    rating: 4,
    initials: "ID",
    source: "Google"
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-yellow-400">Avis clients</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de notre service de taxi. Nous sommes fiers d'avoir une note moyenne de 4,4/5 étoiles basée sur 20 avis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <Card key={index} className="border border-zinc-800 hover:shadow-md transition-shadow overflow-hidden bg-zinc-900">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 min-h-[80px]">
                    {review.comment || "Client satisfait de nos services."}
                  </p>
                </CardContent>
                <CardFooter className="border-t border-zinc-800 bg-zinc-950 py-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-yellow-400/20 text-yellow-400">{review.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm text-white">{review.name}</div>
                        <div className="text-xs text-gray-400">{review.date}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {review.source}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow-400/10 text-yellow-400 font-medium">
              <span className="text-lg font-bold">4,4/5</span>
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400/40" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm">basé sur 20 avis</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
