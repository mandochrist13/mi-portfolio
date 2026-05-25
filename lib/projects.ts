export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  year: string
  client: string
  context: string
  objectives: string[]
  strategy: string
  results: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: "maison-lumiere",
    title: "Maison Lumière",
    category: "Brand Communication",
    description: "A complete brand repositioning for a heritage French jewelry house.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    year: "2024",
    client: "Maison Lumière",
    context: "Maison Lumière, a century-old French jewelry house, sought to reconnect with younger audiences while preserving its heritage. The brand had lost relevance in the contemporary luxury market.",
    objectives: [
      "Reposition the brand for millennial and Gen-Z luxury consumers",
      "Develop a cohesive visual and verbal identity",
      "Launch a digital-first communication strategy",
      "Increase brand awareness by 40% within 12 months"
    ],
    strategy: "We crafted a narrative that honored the brand's artisanal legacy while embracing modern values of sustainability and self-expression. The campaign centered on 'Heirloom Modernity' - pieces that carry stories across generations.",
    results: [
      "52% increase in brand awareness among target demographics",
      "3x growth in social media engagement",
      "Featured in Vogue Paris, Elle, and Harper's Bazaar",
      "30% increase in direct-to-consumer sales"
    ],
    testimonial: {
      quote: "Miriame understood our heritage and transformed it into something that resonates with today's luxury consumer. The results exceeded our expectations.",
      author: "Marie-Claire Dubois",
      role: "CEO, Maison Lumière"
    },
    gallery: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ]
  },
  {
    id: "galerie-moderne",
    title: "Galerie Moderne",
    category: "Cultural Institution",
    description: "Strategic communication for a contemporary art gallery's international expansion.",
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80",
    year: "2024",
    client: "Galerie Moderne",
    context: "A prestigious Parisian gallery preparing to open locations in London and New York needed a unified communication strategy that would translate across cultural contexts.",
    objectives: [
      "Establish brand presence in new markets",
      "Build relationships with international press",
      "Create a global narrative while respecting local nuances",
      "Generate buzz for opening exhibitions"
    ],
    strategy: "Developed a 'Local Lens, Global Vision' approach that highlighted the gallery's Parisian roots while showcasing its commitment to discovering talent from around the world.",
    results: [
      "Opening night coverage in The New York Times and Financial Times",
      "200+ international press mentions in first quarter",
      "Sold-out opening exhibitions at both locations",
      "Partnership deals with 3 major art foundations"
    ],
    testimonial: {
      quote: "The communication strategy perfectly captured our identity while making us feel at home in new cities.",
      author: "Jean-Pierre Martin",
      role: "Founder, Galerie Moderne"
    },
    gallery: [
      "https://images.unsplash.com/photo-1577083300964-8b2d14e3d7c5?w=800&q=80",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&q=80",
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&q=80"
    ]
  },
  {
    id: "essence-beauty",
    title: "Essence Beauty",
    category: "Product Launch",
    description: "Launch strategy for a sustainable luxury skincare line.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    year: "2023",
    client: "Essence Beauty",
    context: "A new entrant to the luxury skincare market with a focus on sustainability needed to differentiate in a crowded space dominated by established players.",
    objectives: [
      "Create distinctive brand positioning",
      "Build credibility in the luxury segment",
      "Educate consumers on sustainable luxury",
      "Achieve €2M in first-year sales"
    ],
    strategy: "Positioned the brand as 'Conscious Luxury' - where efficacy meets ethics. Created an influencer program focused on dermatologists and sustainability advocates rather than traditional beauty influencers.",
    results: [
      "€3.2M in first-year sales, exceeding target by 60%",
      "Won 2 industry sustainability awards",
      "95% positive sentiment across social platforms",
      "Waitlist of 10,000+ for hero product"
    ],
    testimonial: {
      quote: "Miriame's strategic vision helped us stand out in a market where everyone claims to be sustainable.",
      author: "Sophie DOUTSONA ",
      role: "Founder, Essence Beauty"
    },
    gallery: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
    ]
  },
  {
    id: "festival-lumières",
    title: "Festival des Lumières",
    category: "Event Communication",
    description: "Communication direction for Paris's premiere light art festival.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    year: "2023",
    client: "City of Paris",
    context: "The annual light festival needed a fresh approach to attract both local and international visitors while highlighting the artists and their installations.",
    objectives: [
      "Increase international visitor attendance by 25%",
      "Secure major media partnerships",
      "Create shareable social content",
      "Position Paris as a leader in public art"
    ],
    strategy: "Developed 'Paris Illuminated' campaign focusing on the intersection of art, technology, and urban space. Created immersive preview experiences for press and influencers.",
    results: [
      "35% increase in international attendance",
      "500M+ social media impressions",
      "Partnership with Netflix for documentary",
      "Featured on CNN, BBC, and Arte"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
    ]
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir",
    category: "Fashion Brand",
    description: "Global brand strategy for a Parisian fashion house.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    year: "2023",
    client: "Atelier Noir",
    context: "An emerging fashion house sought to establish itself in the competitive luxury fashion market with a distinct point of view on sustainable haute couture.",
    objectives: [
      "Build brand awareness in key fashion markets",
      "Secure Fashion Week presence",
      "Develop celebrity and influencer partnerships",
      "Create a distinctive brand voice"
    ],
    strategy: "Crafted 'The New Noir' narrative - a vision of fashion that is bold, sustainable, and unapologetically modern. Focused on exclusive experiences over mass reach.",
    results: [
      "Official Paris Fashion Week debut",
      "Dressed 5 A-list celebrities for major events",
      "Vogue 'Brand to Watch' feature",
      "200% growth in brand searches"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ]
  },
  {
    id: "maison-hospitality",
    title: "Maison Hospitality",
    category: "Hospitality",
    description: "Brand launch for a collection of boutique hotels.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    year: "2022",
    client: "Maison Hospitality Group",
    context: "A new hospitality group launching a collection of design-forward boutique hotels in European cities needed to create a cohesive brand that celebrated local culture.",
    objectives: [
      "Create unified brand identity across properties",
      "Generate pre-opening buzz",
      "Build partnerships with design publications",
      "Achieve 70% occupancy in first quarter"
    ],
    strategy: "Developed 'Local Soul, Global Style' positioning that highlighted each property's unique character while maintaining brand cohesion through design and service standards.",
    results: [
      "82% occupancy in first quarter",
      "Features in Condé Nast Traveler and Wallpaper*",
      "Sold-out launch event with 500 guests",
      "Partnership with Design Hotels"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
    ]
  }
]
