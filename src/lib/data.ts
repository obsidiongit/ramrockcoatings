// ─── Site-wide data ──────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "RamRock Coatings",
  phone: "(319) 257-2061",
  phoneHref: "tel:+13192572061",
  email: "ramrockcoatings@gmail.com",
  emailHref: "mailto:ramrockcoatings@gmail.com",
  address: "Cedar Rapids, IA 52402",
  city: "Cedar Rapids",
  state: "IA",
  hours: "Mon–Sat: 6:30AM–9PM · Sun: 6:30AM–9PM",
  mission:
    "Install durable epoxy floors with honest pricing, careful prep, and clear communication on every job.",
  social: {
    facebook: "https://www.facebook.com/people/RamRock-Coatings/61584663874914/",
    instagram: "https://www.instagram.com/ramrockcoatings/",
    yelp: "https://www.yelp.com/biz/ramrock-coatings-cedar-rapids",
    google: "https://maps.app.goo.gl/UwCkVmvuexcKd5Cd6",
  },
} as const;

export const SERVICES = [
  {
    slug: "residential-epoxy-flooring",
    name: "Residential Epoxy Flooring",
    shortName: "Residential",
    tagline: "Garage, basement, or patio — done right",
    description:
      "Durable, beautiful epoxy floors built for everyday home life — from garages to basements to patios.",
    keywords: "residential epoxy flooring Cedar Rapids IA",
  },
  {
    slug: "commercial-epoxy-flooring",
    name: "Commercial Epoxy Flooring",
    shortName: "Commercial",
    tagline: "Heavy-traffic floors that stay professional",
    description:
      "Industrial-grade coatings for warehouses, showrooms, restaurants, and any commercial space that demands durability.",
    keywords: "commercial epoxy flooring Cedar Rapids IA",
  },
  {
    slug: "anti-slip-coating",
    name: "Anti-Slip Coating",
    shortName: "Anti-Slip",
    tagline: "Safety without sacrificing looks",
    description:
      "Protect employees, customers, and family with proven anti-slip surface treatments that look great.",
    keywords: "anti-slip floor coating Cedar Rapids Iowa",
  },
  {
    slug: "metallic-epoxy-flooring",
    name: "Metallic Epoxy Flooring",
    shortName: "Metallic",
    tagline: "One-of-a-kind swirling metallic finishes",
    description:
      "Each metallic floor is one of a kind — pigmented resins create depth and movement you won't get from standard coatings.",
    keywords: "metallic epoxy flooring Iowa",
  },
  {
    slug: "flake-chip-epoxy-flooring",
    name: "Flake & Chip Epoxy Flooring",
    shortName: "Flake & Chip",
    tagline: "The classic garage floor upgrade",
    description:
      "Decorative vinyl flakes broadcast into epoxy give you a speckled, durable surface that hides dirt and wear.",
    keywords: "flake chip epoxy garage floor Iowa",
  },
  {
    slug: "quartz-epoxy-flooring",
    name: "Quartz Epoxy Flooring",
    shortName: "Quartz",
    tagline: "Natural texture, industrial strength",
    description:
      "Quartz aggregate embedded in epoxy creates a textured, slip-resistant surface perfect for commercial and outdoor spaces.",
    keywords: "quartz epoxy flooring Iowa",
  },
  {
    slug: "solid-color-epoxy-flooring",
    name: "Solid Color Epoxy Flooring",
    shortName: "Solid Color",
    tagline: "Clean, bold, and endlessly customizable",
    description:
      "A seamless solid-color epoxy coat gives any floor a sharp, professional finish in virtually any color.",
    keywords: "solid color epoxy flooring Iowa",
  },
  {
    slug: "marble-epoxy-flooring",
    name: "Marble Epoxy Flooring",
    shortName: "Marble",
    tagline: "Luxury marble look at a fraction of the cost",
    description:
      "Achieve the elegance of real marble on any concrete surface — without the maintenance or price tag.",
    keywords: "marble epoxy coating Iowa",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "cedar-rapids",
    city: "Cedar Rapids",
    state: "IA",
    description: "Our home base — we know every neighborhood in Cedar Rapids.",
    isPrimary: true,
  },
  {
    slug: "iowa-city",
    city: "Iowa City",
    state: "IA",
    description: "Garage, basement, and commercial epoxy across Iowa City and Coralville.",
    isPrimary: false,
  },
  {
    slug: "dubuque",
    city: "Dubuque",
    state: "IA",
    description: "Epoxy floors for Dubuque homes, shops, and older-building concrete.",
    isPrimary: false,
  },
  {
    slug: "waterloo",
    city: "Waterloo",
    state: "IA",
    description: "Garage and commercial coatings for Waterloo and Cedar Falls.",
    isPrimary: false,
  },
  {
    slug: "cedar-falls",
    city: "Cedar Falls",
    state: "IA",
    description: "Flake, metallic, and solid-color floors for Cedar Falls homeowners.",
    isPrimary: false,
  },
  {
    slug: "davenport",
    city: "Davenport",
    state: "IA",
    description: "Epoxy flooring across Davenport, Bettendorf, and the Quad Cities.",
    isPrimary: false,
  },
  {
    slug: "des-moines",
    city: "Des Moines",
    state: "IA",
    description: "Residential and commercial epoxy throughout the Des Moines metro.",
    isPrimary: false,
  },
  {
    slug: "sioux-city",
    city: "Sioux City",
    state: "IA",
    description: "Garage and shop floors for Sioux City — we make the drive.",
    isPrimary: false,
  },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export const STATS = [
  { value: "0", label: "Hidden fees" },
  { value: "100%", label: "Customer satisfaction" },
  { value: "7", label: "Days a week" },
  { value: "8+", label: "Iowa cities served" },
] as const;

export const INTEREST_ROUTES = [
  {
    href: "/contact",
    eyebrow: "Ready to start?",
    title: "Free Estimate",
    subtitle: "Tell us about your garage, basement, or commercial space.",
    cta: "Get started",
    image: {
      src: "/images/gallery/11.jpg",
      alt: "Freshly finished residential garage with flecked epoxy floor at golden hour",
    },
  },
  {
    href: "/our-work",
    eyebrow: "Proof first",
    title: "Our Work",
    subtitle: "Browse metallic, flake, quartz, and solid-color finishes.",
    cta: "View gallery",
    image: {
      src: "/images/gallery/12.jpg",
      alt: "Luxury metallic epoxy showroom floor with glassy copper and charcoal swirl",
    },
  },
  {
    href: "/#process",
    eyebrow: "How we work",
    title: "Our Process",
    subtitle: "Surface prep, base coat, custom finish, and top coat — done right.",
    cta: "See the steps",
    image: {
      src: "/images/gallery/10.jpg",
      alt: "Diamond grinder prepping a concrete floor — surface prep before coating",
    },
  },
  {
    href: "/locations",
    eyebrow: "Across Iowa",
    title: "Service Areas",
    subtitle: "Cedar Rapids, Iowa City, Des Moines, and six more cities.",
    cta: "Find your city",
    image: {
      src: "/images/gallery/13.jpg",
      alt: "Iowa suburban home with open garage showing a glossy epoxy floor",
    },
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Josephine N.",
    rating: 5,
    service: "Residential Epoxy — Garage",
    title: "Highly Recommend RamRock Coatings!",
    featured: true,
    source: "yelp",
    date: "December 2025",
    excerpt:
      "I had an amazing experience with RamRock Coatings for my epoxy flooring in my garage. Their team was professional, knowledgeable, and extremely detail-oriented. The final result turned out better than I imagined.",
    text: "I had an amazing experience with RamRock Coatings for my epoxy flooring in my garage. From start to finish, their team was professional, knowledgeable, and extremely detail-oriented. They walked me through every step of the process, answered all my questions, and made sure I knew exactly what to expect.\n\nThe final result turned out better than I imagined. The floor is smooth, durable, and has a clean, high-quality finish that completely transformed the space. You can tell they take pride in their work — everything was done with precision and care.\n\nThey were also punctual, respectful of my home, and cleaned up thoroughly when they were done. It's rare to find a company that combines great craftsmanship with great customer service, but RamRock Coatings absolutely delivers both.\n\nIf you're thinking about getting epoxy flooring, I highly recommend RamRock Coatings. You won't be disappointed!",
  },
  {
    id: 2,
    name: "Nolan E.",
    rating: 5,
    service: "Garage Coating & Epoxy",
    source: "yelp",
    date: "December 2025",
    excerpt:
      "I'm absolutely thrilled with the garage coating and epoxy work. The application was flawless, with meticulous attention to detail — my garage has been completely transformed.",
    text: "I'm absolutely thrilled with the garage coating and epoxy work done by this company! From start to finish, the entire process was seamless and professional. The team was incredibly knowledgeable, helping me choose the perfect coating to match my needs and aesthetic preferences. The application was flawless, with meticulous attention to detail, resulting in a smooth, durable, and visually stunning finish. My garage has been completely transformed into a clean, functional, and attractive space that I'm proud to show off. I highly recommend their services to anyone looking to upgrade their garage!",
  },
  {
    id: 3,
    name: "Demarcus C.",
    rating: 5,
    service: "Flake & Chip — Garage",
    source: "yelp",
    date: "May 2026",
    text: "Jonanthan was very kind and respectful during the whole process, he only took 2 days, and my garage was brand new. I went with the black and red flake with a red basecoat, now my home is looking fresh, and the property value has already gone up according to my realtor.",
  },
] as const;

export type Testimonial = (typeof TESTIMONIALS)[number];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Surface Prep",
    description:
      "Diamond grinding and crack repair ensure the coating bonds permanently — the step most contractors skip.",
  },
  {
    step: "02",
    title: "Primer & Base Coat",
    description:
      "A moisture-blocking primer and structural base coat create the foundation for a flawless finish.",
  },
  {
    step: "03",
    title: "Custom Finish",
    description:
      "Your chosen finish — metallic, flake, quartz, or solid — is applied with precision and care.",
  },
  {
    step: "04",
    title: "Top Coat & Cure",
    description:
      "A UV-stable clear top coat locks in the look and delivers the durability epoxy is known for.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Free Estimates — No Pressure",
    description:
      "We'll visit, assess the space, and give you a clear, itemized quote. No obligation, no sales tactics, no hidden line items.",
  },
  {
    title: "Floors That Actually Last",
    description:
      "Proper diamond grinding, a moisture-blocking primer, and UV-stable top coats — because a floor that peels in two years isn't a floor.",
  },
  {
    title: "Straight Shooters",
    description:
      "We tell you what your floor needs, what it'll cost, and how long it'll take. No upsells, no scope creep, no surprises on the final invoice.",
  },
  {
    title: "Every Finish, One Crew",
    description:
      "Metallic, flake, quartz, marble, solid color — we do all of it. One contractor, one standard of quality, no subcontracting the hard parts.",
  },
  {
    title: "We Work Around Your Schedule",
    description:
      "7 days a week, 6:30AM–9PM. Residential or commercial, we find a time that works without shutting your life down.",
  },
  {
    title: "Locally Owned, Personally Accountable",
    description:
      "This is our name on every job. Cedar Rapids is our home, and we care what our neighbors think of our work.",
  },
] as const;
