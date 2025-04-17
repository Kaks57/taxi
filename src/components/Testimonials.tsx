
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const featuredTestimonials = [
  
  {
    name: "S Brah",
    date: "Il y a 2 mois",
    comment: "Trajet agréable en compagnie de Belsem, très gentil et courtois je recommande ! Merci encore",
    rating: 5,
    initials: "SB"
  },
  {
    name: "Chantal Souchet",
    date: "Il y a un an",
    comment: "Belsem et super pro serviable attentif à vos problèmes et s'adapte. Sympathique en plus, à l'heure, précis, quelles différences avec pas mal d'autre taxi.",
    rating: 5,
    initials: "CS"
  },
  {
    name: "Ambre Renaux-putti",
    date: "Il y a un an",
    comment: "Conducteur très gentil et bienveillant, il m'a pris malgré le fait que je n'avais pas assez en voyant ma détresse. Je le remercie infiniment pour son geste.",
    rating: 5,
    initials: "AR"
  },
  {
    name: "Grégory Carpentier",
    date: "Il y a un an",
    comment: "Bonjour très bon taxi toujours a écouté il trouve toujours des solutions pour ces clients je suis avec eco taxi depuis des années et frenchemen jamais je changerai.",
    rating: 5,
    initials: "GC"
  }
];

export const Testimonials = () => {
  return (
    <section id="temoignages" className="py-16 bg-black text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Ce que disent nos clients</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            4,4/5 étoiles sur 20 avis de clients satisfaits de notre service de transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTestimonials.map((testimonial, index) => (
            <Card key={index} className="border border-zinc-800 hover:shadow-md transition-shadow overflow-hidden bg-zinc-900">
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4">{testimonial.comment}</p>
              </CardContent>
              <CardFooter className="border-t border-zinc-800 bg-zinc-950 py-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-yellow-400/20 text-yellow-400">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 font-medium mb-6">
            <span className="text-sm">4,4/5 sur 20 avis</span>
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-4 h-4 text-yellow-400/40" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link to="/avis">Voir tous les avis</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
