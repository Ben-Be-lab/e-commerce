const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">
            Inside the <span className="text-emerald-500">Vault</span>
          </h1>
          <p className="mt-8 text-xl text-gray-400 font-medium leading-relaxed">
            Ben's Vault isn't just a store; it's a curated archive of global streetwear, 
            brought directly to the heart of Kigali.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-100 aspect-square rounded-[3rem] overflow-hidden">
             <img src="/Images/about-style.avif" alt="Streetwear Culture" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Authenticity over everything.</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We source every piece with one goal: quality. From the weight of the cotton in our hoodies to the stitch 
              density in our footwear, we verify every item so you don't have to.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">01</span>
                <p className="font-bold uppercase text-sm">Hand-Picked Curation</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">02</span>
                <p className="font-bold uppercase text-sm">24H Kigali Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;