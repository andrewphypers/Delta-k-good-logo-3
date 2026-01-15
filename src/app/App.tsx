// Delta K - Build loaded successfully - v1.3 - CLEAN
console.log("Delta K - Build loaded successfully - v1.3 - CLEAN");

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">ΔK</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Delta K</h1>
                <p className="text-xs text-yellow-500">Kootenay Group</p>
              </div>
            </div>
            <a 
              href="tel:250-402-8124"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              (250) 402-8124
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert Electrical Services
            <span className="block text-yellow-500 mt-2">Across the Kootenays</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            100% Indigenous-owned electrical contractor serving British Columbia with excellence in new construction, renovations, and industrial maintenance.
          </p>
          <a 
            href="tel:250-402-8124"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Call Us Today: (250) 402-8124
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">New Construction</h3>
              <p className="text-slate-300">Complete electrical installations for residential and commercial new builds.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Renovations</h3>
              <p className="text-slate-300">Expert electrical upgrades and modifications for renovation projects.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Industrial Maintenance</h3>
              <p className="text-slate-300">Reliable maintenance and repair services for industrial facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Delta K</h2>
          <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto">
            Delta K (Kootenay Group) is a 100% Indigenous-owned electrical contracting company proudly serving the Kootenay region of British Columbia. Our experienced team combines decades of electrical expertise with a commitment to quality and community service.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Andrew Phypers</h3>
              <p className="text-slate-400 mb-4">Co-Owner</p>
              <p className="text-slate-300">Status member of Lower Kootenay Band, lawyer, and entrepreneur bringing strategic vision to Delta K.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Steve Dressel</h3>
              <p className="text-slate-400 mb-4">Co-Owner & General Manager</p>
              <p className="text-slate-300">Decades of electrical experience ensuring excellence in every project.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Dave Comer</h3>
              <p className="text-slate-400 mb-4">Co-Owner</p>
              <p className="text-slate-300">Co-owner of Delta Tritec Group Ltd, bringing extensive electrical expertise from the Greater Vancouver Area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="space-y-4">
            <p className="text-2xl text-yellow-500 font-bold">
              <a href="tel:250-402-8124" className="hover:text-yellow-400 transition-colors">
                (250) 402-8124
              </a>
            </p>
            <p className="text-xl text-slate-300">
              <a href="mailto:steve@deltatec.ca" className="hover:text-yellow-500 transition-colors">
                steve@deltatec.ca
              </a>
            </p>
            <p className="text-slate-400 mt-8">Serving the Kootenays, British Columbia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-yellow-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Delta K (Kootenay Group). 100% Indigenous-owned electrical contractor.</p>
          <p className="mt-2 text-sm">Licensed electrical services across British Columbia</p>
        </div>
      </footer>
    </div>
  );
}
