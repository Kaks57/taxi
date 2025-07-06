
export const Map = () => {
  return (
    <section id="carte" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nous trouver</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Taxi Eco Transport est situé à Saint-Quentin. Retrouvez-nous à l'adresse ci-dessous ou appelez-nous pour une prise en charge à l'endroit de votre choix.
          </p>
        </div>
        
        <div className="overflow-hidden rounded-lg shadow-md">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.125042286707!2d3.294007612850582!3d49.8401079713632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e818607484ffff%3A0x6da56c6380100c96!2sTaxi%20Eco%20Transport!5e0!3m2!1sfr!2sfr!4v1744899462801!5m2!1sfr!2sfr"
    width="100%" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Carte Taxi Eco Transport"
    className="w-full"
  ></iframe>
</div>



        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Adresse</h3>
            <address className="not-italic text-gray-600">
              160 rue Georges Pompidou<br />
              02100 Saint-Quentin<br />
              France
            </address>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Téléphone</h3>
            <a href="tel:0630162925" className="text-yellow-500 hover:underline">
              06 30 16 29 25
            </a>
            <p className="text-gray-600 mt-2">
              Disponible pour vos réservations
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Horaires</h3>
            <p className="text-gray-600">
              Lundi - Dimanche<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
