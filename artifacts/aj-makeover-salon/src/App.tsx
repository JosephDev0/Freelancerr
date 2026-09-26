import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const phone = '075066 32083';
const telPhone = 'tel:+917506632083';
const address =
  'no 6 Shop No.01, Kalyan Building, Shop No. 1, Ground Floor, 22/24B Eaarth Pillar, 134, Khadilkar Rd, Khotachiwadi, Ambewadi, Girgaon, Mumbai, Maharashtra 400004';
const directions =
  'https://www.google.com/maps/search/?api=1&query=AJ+Makeover+Hair+%26+Beauty+Salon,+Khadilkar+Road,+Mumbai';
const whatsapp = `https://wa.me/917506632083?text=${encodeURIComponent('Hello AJ Makeover, I would like to enquire about an appointment.')}`;

const services = [
  { name: 'Hair ritual', detail: 'Cut, colour, care & styling', price: 'from ₹450', tone: 'rose' },
  { name: 'Skin & glow', detail: 'Facials, clean-ups & polish', price: 'from ₹550', tone: 'gold' },
  { name: 'Occasion ready', detail: 'Makeup, draping & finishing', price: 'from ₹1,500', tone: 'green' },
  { name: 'Hands & feet', detail: 'Manicure, pedicure & care', price: 'from ₹350', tone: 'rose' },
];

const testimonials = [
  {
    quote: 'I walked in before a family function and walked out feeling completely looked after. The team understood exactly what I wanted.',
    name: 'Rhea M.',
    note: 'Local guide · 12 visits',
  },
  {
    quote: 'The kind of neighbourhood salon you keep to yourself — warm, precise, and never rushed. My haircut has never sat better.',
    name: 'Nandita K.',
    note: 'Girgaon resident',
  },
  {
    quote: 'Clean space, gentle hands, and the makeup stayed beautiful through the whole evening. AJ is now my occasion ritual.',
    name: 'Prerna S.',
    note: 'Verified client',
  },
];

function Mark() {
  return (
    <div className="flex items-center gap-3" data-testid="brand-mark">
      <div className="relative flex size-11 items-center justify-center rounded-full border border-[hsl(var(--accent))] bg-[hsl(var(--secondary))] text-[hsl(var(--accent))]">
        <Scissors size={19} strokeWidth={1.5} />
        <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[8px] font-bold text-[hsl(var(--primary-foreground))]">AJ</span>
      </div>
      <div className="leading-none">
        <p className="font-display text-xl tracking-[-.02em] text-[hsl(var(--foreground))]">AJ Makeover</p>
        <p className="mt-1 font-mono-ui text-[9px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Hair & Beauty Salon</p>
      </div>
    </div>
  );
}

function Stars({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-1" data-testid="rating-stars">
      {[0, 1, 2, 3, 4].map((item) => <Star key={item} size={compact ? 12 : 14} fill="currentColor" strokeWidth={1.5} className="text-[hsl(var(--accent))]" />)}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = 'AJ Makeover Hair & Beauty Salon | Khotachiwadi, Mumbai';
    const description = 'A trusted neighbourhood salon in Khotachiwadi, Girgaon for beautiful hair, glowing skin and occasion-ready looks.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="noise min-h-[100dvh] overflow-hidden bg-[hsl(var(--background))]">
      <div className="bg-[hsl(var(--secondary))] px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[.13em] text-[hsl(var(--secondary-foreground))]">
        <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-[hsl(var(--accent))]" /> Open today until 9 pm <span className="hidden text-[hsl(var(--secondary-foreground)/.55)] sm:inline">·</span> Walk-ins welcome</span>
      </div>

      <header className="relative z-40 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button type="button" onClick={() => scrollTo('top')} className="text-left" data-testid="button-brand-home"><Mark /></button>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {[
            ['Our salon', 'story'],
            ['Services', 'services'],
            ['Kind words', 'reviews'],
            ['Find us', 'visit'],
          ].map(([label, id]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)} className="group relative text-[11px] font-semibold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" data-testid={`button-nav-${id}`}>
              {label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[hsl(var(--primary))] transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={telPhone} className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[hsl(var(--foreground))] transition-transform hover:-translate-y-0.5" data-testid="link-header-call">
            <Phone size={14} /> {phone}
          </a>
          <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-[11px] font-bold uppercase tracking-[.12em] text-[hsl(var(--primary-foreground))] shadow-[0_8px_24px_hsl(var(--primary)/.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_hsl(var(--primary)/.28)]" data-testid="button-header-book">
            Book a visit <ArrowUpRight size={14} />
          </button>
        </div>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex size-11 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/.7)] md:hidden" aria-label="Toggle navigation" data-testid="button-mobile-menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <div className="relative z-30 mx-5 mb-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 shadow-lg md:hidden" data-testid="mobile-navigation">
          {[
            ['Our salon', 'story'],
            ['Services', 'services'],
            ['Kind words', 'reviews'],
            ['Find us', 'visit'],
          ].map(([label, id]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)} className="flex w-full items-center justify-between border-b border-[hsl(var(--border))] px-2 py-4 text-left text-sm font-semibold last:border-0" data-testid={`button-mobile-nav-${id}`}>
              {label} <ChevronRight size={16} className="text-[hsl(var(--primary))]" />
            </button>
          ))}
          <a href={telPhone} className="mt-3 flex items-center gap-2 rounded-xl bg-[hsl(var(--secondary))] px-4 py-3 text-sm font-semibold text-[hsl(var(--secondary-foreground))]" data-testid="link-mobile-call"><Phone size={16} /> Call {phone}</a>
        </div>
      )}

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 md:grid-cols-[1.02fr_.98fr] md:gap-10 md:pb-28 md:pt-12 lg:px-12">
        <div className="reveal max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/.62)] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">
            <MapPin size={12} className="text-[hsl(var(--primary))]" /> Khotachiwadi · Girgaon
          </div>
          <h1 className="font-display text-[clamp(3.65rem,8vw,7.4rem)] leading-[.9] tracking-[-.065em] text-[hsl(var(--foreground))]">
            Leave feeling<br /><em className="text-[hsl(var(--primary))]">like yourself,</em><br />only brighter.
          </h1>
          <p className="reveal reveal-1 mt-8 max-w-md text-base leading-7 text-[hsl(var(--muted-foreground))]">
            A warm, unhurried beauty salon in the heart of old Girgaon — for everyday polish, important days, and the little reset in between.
          </p>
          <div className="reveal reveal-2 mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-4 text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_hsl(var(--primary)/.22)]" data-testid="button-hero-book">
              Plan your visit <CalendarDays size={16} />
            </button>
            <a href={directions} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-6 py-4 text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" data-testid="link-hero-directions">
              Get directions <Navigation size={16} />
            </a>
          </div>
          <div className="reveal reveal-3 mt-10 flex items-center gap-4 border-t border-[hsl(var(--border))] pt-5">
            <div className="flex -space-x-2">
              {['RM', 'NK', 'PS'].map((initials, index) => <span key={initials} className={`flex size-8 items-center justify-center rounded-full border-2 border-[hsl(var(--background))] text-[10px] font-bold ${index === 1 ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]'}`}>{initials}</span>)}
            </div>
            <div>
              <div className="flex items-center gap-2"><Stars compact /><span className="font-mono-ui text-xs font-bold">4.9</span></div>
              <p className="mt-1 text-[11px] text-[hsl(var(--muted-foreground))]">from 1,079 local reviews</p>
            </div>
          </div>
        </div>

        <div className="reveal reveal-2 relative min-h-[480px] sm:min-h-[590px]">
          <div className="absolute inset-x-0 bottom-0 top-5 overflow-hidden rounded-[9rem_9rem_1.5rem_1.5rem] bg-[hsl(var(--secondary))] sm:left-10">
            <img src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="A calm salon styling moment" className="h-full w-full object-cover opacity-90 mix-blend-luminosity transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--secondary)/.8)] via-transparent to-transparent" />
          </div>
          <div className="absolute left-0 top-16 rounded-2xl border border-[hsl(var(--accent)/.4)] bg-[hsl(var(--secondary))] p-4 text-[hsl(var(--secondary-foreground))] shadow-xl sm:top-24">
            <Sparkles size={17} className="mb-5 text-[hsl(var(--accent))]" />
            <p className="font-display text-2xl italic leading-none">small rituals,<br />big difference</p>
          </div>
          <div className="absolute bottom-7 right-0 rounded-2xl bg-[hsl(var(--card))] px-5 py-4 shadow-[0_15px_40px_hsl(var(--secondary)/.15)] sm:right-3">
            <p className="font-mono-ui text-[9px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Today’s note</p>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold"><span className="size-2 rounded-full bg-emerald-600" /> Open until 9 pm</p>
          </div>
          <span className="absolute -right-2 top-0 font-mono-ui text-[9px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))] [writing-mode:vertical-rl]">आज मेकओवर</span>
        </div>
      </section>

      <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card)/.48)]" aria-label="Salon highlights">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[hsl(var(--border))] sm:grid-cols-4 sm:divide-y-0">
          {[
            [<Star size={17} />, '4.9', 'customer rating'],
            [<Heart size={17} />, '1,079', 'happy reviews'],
            [<ShieldCheck size={17} />, '10+ yrs', 'of local trust'],
            [<Clock3 size={17} />, '9 pm', 'open till today'],
          ].map(([icon, value, label], index) => (
            <div key={label as string} className={`flex items-center gap-3 px-5 py-5 sm:justify-center sm:py-7 ${index > 1 ? 'border-t sm:border-t-0' : ''}`} data-testid={`stat-highlight-${index}`}>
              <span className="text-[hsl(var(--primary))]">{icon}</span>
              <div><p className="font-display text-2xl leading-none">{value}</p><p className="mt-1 text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">{label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[.82fr_1.18fr] md:py-32 lg:px-12">
        <div>
          <p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary))]">01 / The feeling</p>
          <h2 className="mt-5 max-w-sm font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">The best part is how <em>at home</em> you feel.</h2>
        </div>
        <div className="grid items-end gap-10 sm:grid-cols-[1fr_220px]">
          <div>
            <p className="max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">In Khotachiwadi, beauty is personal. It is a familiar voice, a careful hand, and enough time to get the detail right. AJ Makeover brings that neighbourhood warmth to every cut, colour, facial, and finishing touch.</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">Come in for a change. Stay for the conversation. Leave with the kind of confidence that does not need announcing.</p>
            <button type="button" onClick={() => scrollTo('visit')} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--primary))] hover:gap-3 transition-all" data-testid="button-story-visit">Come say hello <ArrowUpRight size={15} /></button>
          </div>
          <div className="border-l-2 border-[hsl(var(--accent))] pl-5">
            <p className="font-display text-3xl leading-tight">“Your regular place, for every special occasion.”</p>
            <p className="mt-4 font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">— The AJ promise</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[hsl(var(--secondary))] px-5 py-24 text-[hsl(var(--secondary-foreground))] sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">02 / What we do</p><h2 className="mt-5 max-w-lg font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">Your look, <em>thought through.</em></h2></div>
            <p className="max-w-xs text-sm leading-6 text-[hsl(var(--secondary-foreground)/.68)]">Every service starts with a conversation. Tell us the occasion, the mood, or simply what feels like you.</p>
          </div>
          <div className="mt-16 divide-y divide-[hsl(var(--secondary-foreground)/.18)]">
            {services.map((service, index) => (
              <div key={service.name} className="group grid gap-4 py-6 transition-colors hover:text-[hsl(var(--accent))] sm:grid-cols-[80px_1fr_auto] sm:items-center" data-testid={`service-row-${index}`}>
                <span className="font-mono-ui text-[10px] text-[hsl(var(--accent))]">0{index + 1}</span>
                <div><h3 className="font-display text-3xl tracking-[-.02em]">{service.name}</h3><p className="mt-1 text-sm text-[hsl(var(--secondary-foreground)/.58)]">{service.detail}</p></div>
                <div className="flex items-center justify-between gap-8 sm:justify-end"><span className="font-mono-ui text-xs text-[hsl(var(--secondary-foreground)/.64)]">{service.price}</span><span className="flex size-9 items-center justify-center rounded-full border border-[hsl(var(--secondary-foreground)/.3)] transition-all group-hover:border-[hsl(var(--accent))] group-hover:bg-[hsl(var(--accent))] group-hover:text-[hsl(var(--secondary))]"><ChevronRight size={16} /></span></div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-4 text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--secondary))] transition-all hover:-translate-y-1" data-testid="button-services-book">Ask about your look <ArrowUpRight size={15} /></button>
            <span className="text-xs text-[hsl(var(--secondary-foreground)/.55)]">Prices are a starting point · consultation always included</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[.72fr_1.28fr] md:items-end">
          <div><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary))]">03 / In the chair</p><h2 className="mt-5 font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">Little details.<br /><em>Lasting glow.</em></h2></div>
          <p className="max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))] md:justify-self-end">A glimpse of the mood we make room for: relaxed, considered, and ready for wherever Mumbai takes you next.</p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-12 sm:grid-rows-[220px_220px]">
          <figure className="group relative overflow-hidden rounded-[2rem] sm:col-span-5 sm:row-span-2">
            <img src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Hair styling tools and a salon chair" className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[hsl(var(--card)/.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em]">The finishing touch</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-[2rem] sm:col-span-4">
            <img src="https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Beauty salon manicure detail" className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[hsl(var(--card)/.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em]">Care, not rush</figcaption>
          </figure>
          <div className="relative overflow-hidden rounded-[2rem] bg-[hsl(var(--accent))] p-7 sm:col-span-3">
            <Sparkles size={22} className="text-[hsl(var(--foreground))]" />
            <p className="mt-16 font-display text-3xl leading-none">Made for<br /><em>your mirror.</em></p>
            <span className="absolute bottom-6 right-6 font-mono-ui text-[9px] uppercase tracking-[.15em]">AJ / 2024</span>
          </div>
          <figure className="group relative overflow-hidden rounded-[2rem] sm:col-span-7">
            <img src="https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Relaxed beauty salon interior" className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[hsl(var(--card)/.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em]">Your neighbourhood reset</figcaption>
          </figure>
        </div>
      </section>

      <section id="reviews" className="bg-[hsl(var(--muted)/.5)] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary))]">04 / Kind words</p><h2 className="mt-5 font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">They came for<br /><em>the feeling too.</em></h2></div><div className="flex items-center gap-3"><Stars /><span className="font-mono-ui text-xs font-bold">4.9 / 1,079 reviews</span></div></div>
          <div className="mt-14 grid gap-6 md:grid-cols-[1.15fr_.85fr]">
            <div className="relative min-h-[310px] rounded-[2rem] bg-[hsl(var(--secondary))] p-7 text-[hsl(var(--secondary-foreground))] sm:p-12">
              <span className="font-display text-7xl leading-none text-[hsl(var(--accent))]">“</span>
              <p className="mt-3 max-w-2xl font-display text-3xl leading-[1.15] sm:text-4xl" data-testid="text-active-testimonial">{testimonials[activeTestimonial].quote}</p>
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-10 sm:left-12 sm:right-12"><div><p className="text-sm font-semibold">{testimonials[activeTestimonial].name}</p><p className="mt-1 text-xs text-[hsl(var(--secondary-foreground)/.58)]">{testimonials[activeTestimonial].note}</p></div><div className="flex gap-2">{testimonials.map((item, index) => <button type="button" key={item.name} aria-label={`Show review from ${item.name}`} onClick={() => setActiveTestimonial(index)} className={`size-2 rounded-full transition-all ${index === activeTestimonial ? 'w-7 bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--secondary-foreground)/.4)]'}`} data-testid={`button-review-${index}`} />)}</div></div>
            </div>
            <div className="flex flex-col justify-between rounded-[2rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 sm:p-10">
              <div><MessageCircle size={23} className="text-[hsl(var(--primary))]" /><p className="mt-7 font-display text-3xl leading-tight">“A good salon should feel like a friend who has excellent taste.”</p></div>
              <div className="mt-8 flex items-center justify-between border-t border-[hsl(var(--border))] pt-5"><span className="text-xs text-[hsl(var(--muted-foreground))]">What we aim for, every day</span><Heart size={17} className="text-[hsl(var(--primary))]" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="relative overflow-hidden bg-[hsl(var(--primary))] px-5 py-24 text-[hsl(var(--primary-foreground))] sm:px-8 md:py-28 lg:px-12">
        <div className="absolute -right-24 -top-40 size-[480px] rounded-full border border-[hsl(var(--primary-foreground)/.18)]" />
        <div className="absolute -right-4 -top-20 size-[320px] rounded-full border border-[hsl(var(--primary-foreground)/.15)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1fr_.9fr] md:items-end">
            <div><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary-foreground)/.7)]">05 / Come by</p><h2 className="mt-5 max-w-xl font-display text-5xl leading-[.93] tracking-[-.05em] sm:text-7xl">Your next good hair day is <em>nearby.</em></h2><p className="mt-7 max-w-md text-base leading-7 text-[hsl(var(--primary-foreground)/.76)]">Find us tucked into Khotachiwadi, just off Khadilkar Road. Easy to reach, hard to forget.</p></div>
            <div className="rounded-[2rem] bg-[hsl(var(--foreground)/.12)] p-7 backdrop-blur-sm sm:p-9">
              <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[hsl(var(--accent))]" size={20} /><div><p className="text-sm font-semibold">AJ Makeover Hair & Beauty Salon</p><p className="mt-3 text-sm leading-6 text-[hsl(var(--primary-foreground)/.72)]">{address}</p></div></div>
              <div className="mt-7 flex flex-wrap gap-3"><a href={directions} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-5 py-3 text-xs font-bold uppercase tracking-[.1em] text-[hsl(var(--foreground))] transition-transform hover:-translate-y-1" data-testid="link-visit-directions"><Navigation size={14} /> Get directions</a><a href={telPhone} className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary-foreground)/.3)] px-5 py-3 text-xs font-bold uppercase tracking-[.1em] transition-colors hover:border-[hsl(var(--accent))]" data-testid="link-visit-call"><Phone size={14} /> {phone}</a></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[hsl(var(--secondary))] px-5 py-10 text-[hsl(var(--secondary-foreground))] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div><div className="brightness-0 invert"><Mark /></div><p className="mt-4 max-w-xs text-xs leading-5 text-[hsl(var(--secondary-foreground)/.55)]">आज मेकओवर हेयर & ब्यूटी सैलून<br />Khotachiwadi, Girgaon, Mumbai</p></div>
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold"><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[hsl(var(--accent))]" data-testid="link-footer-whatsapp"><MessageCircle size={15} /> WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[hsl(var(--accent))]" data-testid="link-footer-instagram"><Instagram size={15} /> Instagram</a><button type="button" onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-5 py-3 text-[hsl(var(--foreground))]" data-testid="button-footer-book">Book a visit <ArrowUpRight size={14} /></button></div>
        </div>
        <div className="mx-auto mt-9 max-w-7xl border-t border-[hsl(var(--secondary-foreground)/.15)] pt-5 text-[10px] text-[hsl(var(--secondary-foreground)/.44)]"><span>© {new Date().getFullYear()} AJ Makeover Hair & Beauty Salon</span></div>
      </footer>

      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[hsl(var(--foreground)/.48)] p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="booking-title" data-testid="dialog-booking">
          <div className="max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] bg-[hsl(var(--card))] p-6 shadow-2xl sm:rounded-[2rem] sm:p-9">
            <div className="flex items-start justify-between"><div><p className="font-mono-ui text-[10px] uppercase tracking-[.17em] text-[hsl(var(--primary))]">A little time for you</p><h2 id="booking-title" className="mt-3 font-display text-4xl leading-none">Plan your visit.</h2></div><button type="button" onClick={() => { setBookingOpen(false); setSent(false); }} className="flex size-9 items-center justify-center rounded-full border border-[hsl(var(--border))]" aria-label="Close booking form" data-testid="button-close-booking"><X size={17} /></button></div>
            {sent ? (
              <div className="py-14 text-center"><div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[hsl(var(--accent))]"><Check size={24} /></div><h3 className="mt-6 font-display text-3xl">We’ll be in touch.</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[hsl(var(--muted-foreground))]">Your enquiry is ready. For the quickest reply, you can also call or WhatsApp us directly.</p><div className="mt-7 flex justify-center gap-3"><a href={telPhone} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-5 py-3 text-xs font-bold text-[hsl(var(--secondary-foreground))]" data-testid="link-success-call"><Phone size={14} /> Call us</a><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-5 py-3 text-xs font-bold" data-testid="link-success-whatsapp"><MessageCircle size={14} /> WhatsApp</a></div></div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div><label htmlFor="name" className="mb-2 block text-xs font-semibold">Your name</label><input id="name" required placeholder="How should we call you?" className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]" data-testid="input-booking-name" /></div>
                <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="contact" className="mb-2 block text-xs font-semibold">Phone / WhatsApp</label><input id="contact" required type="tel" placeholder="Your number" className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]" data-testid="input-booking-phone" /></div><div><label htmlFor="service" className="mb-2 block text-xs font-semibold">I’m here for</label><select id="service" className="w-full appearance-none rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3.5 text-sm outline-none focus:border-[hsl(var(--primary))]" data-testid="select-booking-service"><option>Hair ritual</option><option>Skin & glow</option><option>Occasion ready</option><option>Hands & feet</option><option>Not sure yet</option></select></div></div>
                <div><label htmlFor="message" className="mb-2 block text-xs font-semibold">Anything we should know? <span className="font-normal text-[hsl(var(--muted-foreground))]">(optional)</span></label><textarea id="message" rows={3} placeholder="Date, occasion, or a little context..." className="w-full resize-none rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]" data-testid="textarea-booking-message" /></div>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--primary))] py-4 text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-0.5 hover:shadow-lg" data-testid="button-submit-booking">Send enquiry <Send size={15} /></button>
                <p className="text-center text-[10px] leading-4 text-[hsl(var(--muted-foreground))]">We usually reply within the day. Or call <a href={telPhone} className="font-semibold text-[hsl(var(--primary))]">{phone}</a> for an immediate answer.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;