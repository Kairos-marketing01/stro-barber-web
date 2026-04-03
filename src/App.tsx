import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  MessageCircle,
  Award,
  Users,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Visión', href: '#vision' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Sucursales', href: '#sucursales' },
    { name: 'Reseñas', href: '#resenas' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-premium-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scissors className="text-gold w-8 h-8" />
          <span className="font-display text-2xl font-extrabold tracking-tighter">
            STRO<span className="text-gold">BARBER</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5073912072" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold text-premium-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gold-light transition-all transform hover:scale-105"
          >
            RESERVAR CITA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-premium-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-gold text-premium-black px-5 py-3 rounded-lg font-bold text-center">
              RESERVAR CITA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
          alt="Barber Shop" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/60 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
            MÁS QUE UN CORTE,<br />
            <span className="text-gold">UNA EXPERIENCIA</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Estilo, precisión y confianza en cada detalle. Descubre el arte de la barbería premium en STRO BARBER SHOP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5073912072" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-premium-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              RESERVAR CITA <ChevronRight size={20} />
            </a>
            <a 
              href="#servicios"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              VER SERVICIOS
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Vision = () => {
  const points = [
    { icon: <Users className="text-gold" />, title: "Atención Personalizada", desc: "Cada cliente es único, por eso adaptamos nuestro arte a tu estilo personal." },
    { icon: <Award className="text-gold" />, title: "Barberos Profesionales", desc: "Expertos apasionados por la precisión y las últimas tendencias." },
    { icon: <Zap className="text-gold" />, title: "Ambiente Moderno", desc: "Un espacio diseñado para tu comodidad, donde el estilo urbano se encuentra con el lujo." },
    { icon: <CheckCircle2 className="text-gold" />, title: "Confianza y Estilo", desc: "Nuestro objetivo es que salgas con la seguridad que solo un buen corte puede dar." },
  ];

  return (
    <section id="vision" className="py-24 px-6 bg-premium-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Nuestra Visión</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
              REDEFINIENDO EL ESTILO <br /> MASCULINO URBANO
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              En STRO BARBER SHOP, buscamos ofrecer más que un simple corte de cabello. Creamos una experiencia integral donde combinamos las técnicas clásicas de la barbería con las tendencias más actuales. Nuestro enfoque está en la excelencia y en crear un ambiente donde te sientas como en casa.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{p.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{p.title}</h4>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000" 
                alt="Barber at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl hidden md:block">
              <p className="text-premium-black font-black text-4xl">10+</p>
              <p className="text-premium-black/70 font-bold text-sm uppercase tracking-wider">Años de Experiencia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Corte de Cabello",
      desc: "Corte clásico o moderno adaptado a tu fisionomía.",
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Barba y Perfilado",
      desc: "Diseño, recorte y perfilado con toalla caliente.",
      img: "https://images.unsplash.com/photo-1621605815841-aa88c82b0281?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fade / Degradados",
      desc: "Degradados perfectos: Skin Fade, Taper, Burst Fade.",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Arreglo Completo",
      desc: "Corte premium + Barba + Lavado y Peinado.",
      img: "https://images.unsplash.com/photo-1599351431247-f10b21893982?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-premium-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black mb-4">EL ARTE DEL DETALLE</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">Ofrecemos una gama completa de servicios de barbería premium para el hombre moderno.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group bg-premium-gray rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">{s.title}</h4>
                </div>
                <p className="text-gray-500 text-sm mb-6">{s.desc}</p>
                <a 
                  href="https://wa.me/5073912072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg border border-white/10 text-sm font-bold hover:bg-gold hover:text-premium-black transition-all block text-center"
                >
                  RESERVAR
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621605815841-aa88c82b0281?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1599351431247-f10b21893982?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1622286332618-f280219953f1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1593702295094-282582f978ad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512690196252-741ef294f445?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1592647425447-11e1f3fdc405?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="galeria" className="py-24 px-6 bg-premium-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Galería</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black">NUESTROS TRABAJOS</h3>
          </div>
          <p className="text-gray-500 max-w-md">Echa un vistazo a algunos de los estilos y transformaciones que hemos realizado recientemente.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
            >
              <img 
                src={img} 
                alt={`Trabajo ${i}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Scissors className="text-white w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Carlos R.", rating: 5, text: "Excelente y agradable lugar para tener una buena experiencia con barberos profesionales." },
    { name: "Andrés M.", rating: 5, text: "Excelente. El mejor trato y el corte justo como lo pedí." },
    { name: "Juan P.", rating: 5, text: "Excelente lugar, excelentes barberos. Muy recomendado." },
    { name: "Luis G.", rating: 5, text: "Una experiencia maravillosa. Barbero profesional. Gracias." },
  ];

  return (
    <section id="resenas" className="py-24 px-6 bg-premium-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-gold text-gold" />)}
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-black mb-4">LO QUE DICEN NUESTROS CLIENTES</h3>
          <p className="text-gray-500">La satisfacción de nuestros clientes es nuestra mejor carta de presentación.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[400px] bg-premium-gray p-8 rounded-2xl border border-white/5 snap-center"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={16} className="fill-gold text-gold" />)}
              </div>
              <p className="text-lg italic text-gray-300 mb-6">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {r.name[0]}
                </div>
                <span className="font-bold">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
            DEJAR UNA RESEÑA
          </button>
        </div>
      </div>
    </section>
  );
};

const Branches = () => {
  return (
    <section id="sucursales" className="py-24 px-6 bg-premium-gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Sucursales</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black mb-8">DÓNDE ENCONTRARNOS</h3>
        </div>
        
        <div className="space-y-8">
          <div className="bg-premium-black p-12 md:p-16 rounded-3xl border border-gold/30 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="text-gold w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Sede Principal</h4>
                  <p className="text-gray-400 text-lg">XFGP+RHR, Vía Italia, Panamá, Provincia de Panamá</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Clock className="text-gold w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Horarios</h4>
                  <p className="text-gray-400">Lun - Sáb: 10:00 AM - 7:00 PM</p>
                  <p className="text-xs text-gold/60 italic mt-1">Viernes Santo: Horarios pueden variar</p>
                  <p className="text-gray-400">Domingo: Cerrado</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Phone className="text-gold w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Contacto</h4>
                  <p className="text-gray-400 text-2xl font-display font-bold">3912072</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center bg-white/5">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Scissors className="text-white/20" />
            </div>
            <h4 className="font-bold text-white/40 tracking-widest uppercase text-sm">PRÓXIMAMENTE NUEVAS UBICACIONES</h4>
            <p className="text-sm text-white/20 mt-2">Expandiendo el estilo STRO a más rincones de la ciudad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-premium-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="text-gold w-8 h-8" />
              <span className="font-display text-2xl font-extrabold tracking-tighter">
                STRO<span className="text-gold">BARBER</span>
              </span>
            </div>
            <p className="text-gray-500 mb-8">
              La barbería premium de referencia para el hombre que busca estilo, precisión y una experiencia exclusiva.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-premium-gray flex items-center justify-center hover:bg-gold hover:text-premium-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-premium-gray flex items-center justify-center hover:bg-gold hover:text-premium-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-premium-gray flex items-center justify-center hover:bg-gold hover:text-premium-black transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Enlaces</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#vision" className="hover:text-white transition-colors">Nuestra Visión</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Horarios</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex justify-between"><span>Lun - Sáb</span> <span>10:00 - 19:00</span></li>
              <li className="text-xs italic text-gold/60">Viernes (Viernes Santo): Los horarios pueden variar</li>
              <li className="flex justify-between"><span>Domingo</span> <span>Cerrado</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">Newsletter</h4>
            <p className="text-gray-500 mb-4 text-sm">Suscríbete para recibir ofertas exclusivas y consejos de estilo.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-premium-gray border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-premium-black p-2 rounded-lg hover:bg-gold-light transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2026 STRO BARBER SHOP. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5073912072" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
      <MessageCircle size={32} />
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-premium-black">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Gallery />
        <Reviews />
        <Branches />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
