import { Phone, Mail, MapPin, Smartphone, Tv, Laptop, Clock, Shield, BadgeCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Fixanto</h1>
                <p className="text-blue-100 text-sm">Servis elektroniky</p>
              </div>
            </div>
            <a
              href="tel:0949344600"
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0949 344 600
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Profesionálne opravy elektroniky v Dolnej Súči
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Špecializujeme sa na opravy mobilných telefónov, televízorov a ďalšej elektroniky.
              Bezplatná diagnostika pri oprave a náhradné zariadenie zdarma.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:0949344600"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Zavolať teraz
              </a>
              <a
                href="#kontakt"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Kontaktovať
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Naše služby</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Oprava mobilov</h4>
              <p className="text-gray-600">
                Výmena displejov, batérií, kamier a ďalších komponentov. Opravujeme všetky značky vrátane iPhone, Samsung, Huawei a iné.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Tv className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Oprava televízorov</h4>
              <p className="text-gray-600">
                Servis LCD, LED a Smart TV. Diagnostika a oprava porúch obrazu, zvuku a elektroniky televízorov všetkých značek.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Laptop className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Oprava elektroniky</h4>
              <p className="text-gray-600">
                Servis notebookov, tabletov, konzol a ďalšej spotrebnej elektroniky. Profesionálna diagnostika a oprava.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Prečo si vybrať nás?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Bezplatná diagnostika</h4>
              <p className="text-gray-600">Pri oprave nevyberáme poplatok za diagnostiku</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Náhradné zariadenie</h4>
              <p className="text-gray-600">Počas opravy vám poskytneme náhradný telefón zdarma</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Rýchly servis</h4>
              <p className="text-gray-600">Väčšinu opráv dokončíme do 24 hodín</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Kontakt</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold mb-6 text-gray-900">Kontaktné informácie</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefón</p>
                    <a href="tel:0949344600" className="text-blue-600 hover:text-blue-700">
                      0949 344 600
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@fixanto.sk" className="text-blue-600 hover:text-blue-700">
                      info@fixanto.sk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresa</p>
                    <p className="text-gray-600">Dolná Súča</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg text-white">
              <h4 className="text-xl font-bold mb-4">Otváracie hodiny</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Pondelok - Piatok</span>
                  <span className="font-semibold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="font-semibold">9:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Nedeľa</span>
                  <span className="font-semibold">Zatvorené</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-500">
                <p className="text-sm text-blue-100">
                  Objednajte si termín vopred telefonicky pre rýchlejšie vybavenie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Fixanto - Servis elektroniky Dolná Súča. Všetky práva vyhradené.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
