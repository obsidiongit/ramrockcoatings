export const FAQ_ITEMS = [
  {
    category: "Cost & Pricing",
    q: "How much does epoxy flooring cost?",
    a: "Epoxy flooring typically ranges from $3–$12+ per square foot depending on the finish type, surface condition, and square footage. Metallic and decorative finishes cost more than solid color coatings. We provide free, detailed estimates so you know exactly what to expect before any work begins.",
  },
  {
    category: "Cost & Pricing",
    q: "Do you charge for estimates?",
    a: "No. Estimates are completely free and come with no obligation. We assess your floor, discuss your goals, and give you a transparent price — no hidden fees, no pressure.",
  },
  {
    category: "Cost & Pricing",
    q: "Are there any hidden fees?",
    a: "Never. Our estimate includes everything: surface prep, primer, coating, topcoat. The price we quote is the price you pay.",
  },
  {
    category: "The Process",
    q: "How long does epoxy flooring installation take?",
    a: "Most residential floors (garage, basement) take 1–2 days. Larger commercial projects may take 2–5 days. We'll give you a specific timeline during your estimate.",
  },
  {
    category: "The Process",
    q: "How do you prepare the floor before coating?",
    a: "Proper prep is the most important step. We diamond-grind or shot-blast the concrete to open the pores, repair cracks and spalls, clean thoroughly, and apply a primer coat. Good prep is what separates a floor that lasts 20 years from one that peels in 2.",
  },
  {
    category: "The Process",
    q: "How long does epoxy take to cure?",
    a: "Light foot traffic is typically safe after 24 hours. Vehicle traffic and full cure takes 72 hours for most systems. We'll give you exact timing based on the specific product used.",
  },
  {
    category: "The Process",
    q: "Do I need to move everything out of my garage?",
    a: "Yes — the floor needs to be completely clear for proper prep and installation. We recommend having the space empty before our arrival. For larger commercial jobs, we can often work in sections.",
  },
  {
    category: "Durability & Maintenance",
    q: "How long does epoxy flooring last?",
    a: "A professionally installed epoxy floor with proper prep typically lasts 10–20 years or more. Decorative topcoats may show wear faster in high-traffic areas, but the base coating itself is extremely durable.",
  },
  {
    category: "Durability & Maintenance",
    q: "How do I clean and maintain my epoxy floor?",
    a: "Epoxy is very easy to maintain. Sweep regularly, mop with a mild cleaner, and avoid harsh solvents or abrasive scrubbers. Clean up oil or chemical spills promptly. That's it.",
  },
  {
    category: "Durability & Maintenance",
    q: "Will epoxy flooring crack or peel?",
    a: "When installed correctly with proper surface prep, epoxy rarely cracks or peels. Most failures come from poor prep, trapped moisture, or using DIY products. Our professional installation and quality materials minimize this risk significantly.",
  },
  {
    category: "Durability & Maintenance",
    q: "Can epoxy flooring handle hot tire pickup?",
    a: "Our systems use a polyaspartic or urethane topcoat that resists hot tire pickup — a common problem with DIY epoxy kits. This is one of the main reasons professional installation outperforms store-bought products.",
  },
  {
    category: "Finish Options",
    q: "What finish types do you offer?",
    a: "We install metallic, flake/chip, quartz, solid color, marble, and custom finishes. Each has different aesthetics, price points, and ideal use cases. We're happy to walk you through the options during your free estimate.",
  },
  {
    category: "Finish Options",
    q: "Can I choose a custom color?",
    a: "Yes. We have a wide range of colors, and for solid color and flake finishes especially, the options are nearly unlimited. Bring us your inspiration and we'll help match it.",
  },
  {
    category: "Service Area",
    q: "What areas do you serve?",
    a: "We're based in Cedar Rapids and serve the surrounding Iowa area including Iowa City, Dubuque, Waterloo, Cedar Falls, Davenport, Des Moines, and Sioux City. Not sure if we cover your area? Just call or send a message.",
  },
  {
    category: "Service Area",
    q: "Do you do residential and commercial work?",
    a: "Yes — both. We work on garages, basements, patios, driveways, warehouses, restaurants, retail spaces, medical facilities, and more. The process and materials are tailored to the specific use case.",
  },
] as const;

export const FAQ_CATEGORIES = Array.from(new Set(FAQ_ITEMS.map((f) => f.category)));
