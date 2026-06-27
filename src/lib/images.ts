/** Local image paths for RamRock Coatings website photography. */

/** Primary homepage hero — interior shot reads sharpest at full-bleed crop. */
export const HERO_IMAGE = {
  src: "/images/hero/slide-3.jpg",
  alt: "Beautiful finished basement with warm epoxy floor — RamRock Coatings, Cedar Rapids IA",
} as const;

/** Reserved for future carousel when higher-res garage/commercial shots are ready. */
export const HERO_SLIDES = [HERO_IMAGE] as const;

export const GALLERY_PREVIEW = [
  {
    src: "/images/gallery/01.jpg",
    alt: "Blue and silver metallic swirl epoxy floor — signature finish by RamRock Coatings",
    label: "Metallic Finish",
    featured: true,
  },
  {
    src: "/images/gallery/02.jpg",
    alt: "Flake and chip epoxy garage floor with grey white black broadcast",
    label: "Flake & Chip",
  },
  {
    src: "/images/gallery/04.jpg",
    alt: "High-gloss grey epoxy residential garage with LED lighting",
    label: "Residential Garage",
  },
  {
    src: "/images/gallery/05.jpg",
    alt: "Marble-look epoxy floor in modern home entryway",
    label: "Marble Finish",
  },
  {
    src: "/images/gallery/06.jpg",
    alt: "Bright red commercial epoxy floor in industrial warehouse",
    label: "Commercial",
  },
  {
    src: "/images/gallery/03.jpg",
    alt: "Professional epoxy flooring contractor applying coating — RamRock Coatings at work",
    label: "The Process",
  },
] as const;

export const SERVICE_IMAGES: Record<
  string,
  { src: string; alt: string; featured?: boolean; featuredOrder?: number }
> = {
  "metallic-epoxy-flooring": {
    src: "/images/gallery/01.jpg",
    alt: "Blue and silver metallic swirl epoxy floor with glassy depth",
    featured: true,
    featuredOrder: 1,
  },
  "residential-epoxy-flooring": {
    src: "/images/gallery/04.jpg",
    alt: "High-gloss residential garage epoxy floor installation",
    featured: true,
    featuredOrder: 2,
  },
  "commercial-epoxy-flooring": {
    src: "/images/gallery/06.jpg",
    alt: "Commercial-grade red epoxy floor in industrial warehouse",
    featured: true,
    featuredOrder: 3,
  },
  "flake-chip-epoxy-flooring": {
    src: "/images/gallery/02.jpg",
    alt: "Decorative flake and chip epoxy garage floor installation",
  },
  "quartz-epoxy-flooring": {
    src: "/images/gallery/07.jpg",
    alt: "Decorative quartz broadcast epoxy floor with fine tan aggregate texture",
  },
  "marble-epoxy-flooring": {
    src: "/images/gallery/05.jpg",
    alt: "Marble-look epoxy floor with white and grey veining",
  },
  "solid-color-epoxy-flooring": {
    src: "/images/gallery/08.jpg",
    alt: "Solid slate-grey high-gloss epoxy garage floor with clean professional finish",
  },
  "anti-slip-coating": {
    src: "/images/gallery/09.jpg",
    alt: "Textured anti-slip epoxy coating with non-slip aggregate for safety and durability",
  },
};

export const ABOUT_IMAGE = {
  src: "/images/gallery/14.jpg",
  alt: "Finished basement living space with warm metallic epoxy floor — RamRock Coatings, Cedar Rapids IA",
} as const;

export const PROCESS_IMAGE = {
  src: "/images/gallery/03.jpg",
  alt: "Professional epoxy floor application by RamRock Coatings",
} as const;

/** Hero background images for subpages — keyed by route segment or page id */
export const PAGE_HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  services: {
    src: "/images/page-heroes/services.jpg",
    alt: "Assortment of professional epoxy floor finishes in a clean contractor showroom",
  },
  "residential-epoxy-flooring": {
    src: "/images/page-heroes/residential-epoxy-flooring.jpg",
    alt: "High-gloss flake epoxy garage floor in a modern residential home",
  },
  "commercial-epoxy-flooring": {
    src: "/images/page-heroes/commercial-epoxy-flooring.jpg",
    alt: "Polished commercial epoxy floor in a large warehouse facility",
  },
  "anti-slip-coating": {
    src: "/images/page-heroes/anti-slip-coating.jpg",
    alt: "Textured anti-slip epoxy coating on a commercial loading dock",
  },
  "metallic-epoxy-flooring": {
    src: "/images/page-heroes/metallic-epoxy-flooring.jpg",
    alt: "Blue and silver metallic swirl epoxy floor with glassy depth",
  },
  "flake-chip-epoxy-flooring": {
    src: "/images/page-heroes/flake-chip-epoxy-flooring.jpg",
    alt: "Decorative grey and white flake chip epoxy garage floor",
  },
  "quartz-epoxy-flooring": {
    src: "/images/page-heroes/quartz-epoxy-flooring.jpg",
    alt: "Decorative quartz broadcast epoxy floor with fine tan aggregate",
  },
  "solid-color-epoxy-flooring": {
    src: "/images/page-heroes/solid-color-epoxy-flooring.jpg",
    alt: "Clean slate-grey solid color epoxy garage floor",
  },
  "marble-epoxy-flooring": {
    src: "/images/page-heroes/marble-epoxy-flooring.jpg",
    alt: "Marble-look epoxy floor with white and grey veining in a showroom",
  },
  locations: {
    src: "/images/page-heroes/locations.jpg",
    alt: "Quiet Iowa suburban street — RamRock Coatings service area across the state",
  },
  "cedar-rapids": {
    src: "/images/page-heroes/cedar-rapids.jpg",
    alt: "Finished epoxy garage floor in a Cedar Rapids area home",
  },
  "iowa-city": {
    src: "/images/page-heroes/iowa-city.jpg",
    alt: "Premium epoxy basement floor in an Iowa City area home",
  },
  dubuque: {
    src: "/images/page-heroes/dubuque.jpg",
    alt: "Commercial epoxy floor in a Dubuque area facility",
  },
  waterloo: {
    src: "/images/page-heroes/waterloo.jpg",
    alt: "Flake epoxy garage floor in a Waterloo area home",
  },
  "cedar-falls": {
    src: "/images/page-heroes/cedar-falls.jpg",
    alt: "Metallic epoxy garage floor in a Cedar Falls area home",
  },
  davenport: {
    src: "/images/page-heroes/davenport.jpg",
    alt: "Marble-look epoxy floor in a Quad Cities commercial space",
  },
  "des-moines": {
    src: "/images/page-heroes/des-moines.jpg",
    alt: "Polished commercial epoxy floor in a Des Moines metro facility",
  },
  "sioux-city": {
    src: "/images/page-heroes/sioux-city.jpg",
    alt: "Solid color epoxy garage floor in a Sioux City area home",
  },
  "our-work": {
    src: "/images/page-heroes/our-work.jpg",
    alt: "High-gloss metallic epoxy garage floor with mirror-like reflections — RamRock Coatings portfolio",
  },
  "our-work-residential": {
    src: "/images/page-heroes/our-work-residential.jpg",
    alt: "Residential garage with premium flake epoxy floor installation",
  },
  "our-work-commercial": {
    src: "/images/page-heroes/our-work-commercial.jpg",
    alt: "Commercial warehouse with durable red epoxy floor coating",
  },
  "our-work-before-after": {
    src: "/images/page-heroes/our-work-before-after.jpg",
    alt: "Garage floor before and after epoxy coating renovation",
  },
  about: {
    src: "/images/page-heroes/about.jpg",
    alt: "Epoxy floor coating tools and prep equipment in a professional workspace",
  },
  faq: {
    src: "/images/page-heroes/faq.jpg",
    alt: "Bright modern garage with flake epoxy floor — RamRock Coatings answers common flooring questions",
  },
  contact: {
    src: "/images/page-heroes/contact.jpg",
    alt: "Contact RamRock Coatings for a free epoxy flooring estimate",
  },
  testimonials: {
    src: "/images/page-heroes/testimonials.jpg",
    alt: "Five-star quality epoxy garage floor installation by RamRock Coatings",
  },
};

export function getPageHeroImage(key: string) {
  return PAGE_HERO_IMAGES[key];
}

/** Project showcase photos for location city pages */
export const LOCATION_PROJECT_IMAGES: Record<string, { src: string; alt: string }> = {
  "cedar-rapids": {
    src: "/images/locations/cedar-rapids.jpg",
    alt: "Grey flake epoxy garage floor installed in a Cedar Rapids area home",
  },
  "iowa-city": {
    src: "/images/locations/iowa-city.jpg",
    alt: "Warm metallic epoxy basement floor in an Iowa City area home",
  },
  dubuque: {
    src: "/images/locations/dubuque.jpg",
    alt: "High-gloss commercial epoxy floor in a Dubuque area warehouse",
  },
  waterloo: {
    src: "/images/locations/waterloo.jpg",
    alt: "Charcoal and white flake epoxy garage floor in the Waterloo metro",
  },
  "cedar-falls": {
    src: "/images/locations/cedar-falls.jpg",
    alt: "Blue metallic swirl epoxy garage floor in a Cedar Falls area home",
  },
  davenport: {
    src: "/images/locations/davenport.jpg",
    alt: "Marble-look epoxy floor in a Quad Cities commercial showroom",
  },
  "des-moines": {
    src: "/images/locations/des-moines.jpg",
    alt: "Polished red epoxy warehouse floor in the Des Moines metro",
  },
  "sioux-city": {
    src: "/images/locations/sioux-city.jpg",
    alt: "Slate grey solid color epoxy garage floor in a Sioux City area home",
  },
};

export function getLocationProjectImage(citySlug: string) {
  return LOCATION_PROJECT_IMAGES[citySlug];
}
