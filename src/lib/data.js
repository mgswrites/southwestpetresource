export const categories = [
  {
    slug: 'veterinary-clinics',
    name: 'Veterinary Clinics',
    description: 'General and emergency veterinary care across the Southwest.',
    icon: '🩺',
  },
  {
    slug: 'shelters-rescues',
    name: 'Animal Shelters & Rescues',
    description: 'Adoption, fostering, and rescue organizations.',
    icon: '🐾',
  },
  {
    slug: 'spay-neuter',
    name: 'Spay & Neuter Clinics',
    description: 'Low-cost and mobile spay/neuter services.',
    icon: '🧑‍⚕️',
  },
  {
    slug: 'groomers',
    name: 'Groomers',
    description: 'Local groomers for dogs and cats.',
    icon: '✂️',
  },
  {
    slug: 'boarding-daycare',
    name: 'Boarding & Daycare',
    description: 'Pet boarding, kennels, and daycares.',
    icon: '🏡',
  },
  {
    slug: 'trainers',
    name: 'Trainers & Behaviorists',
    description: 'Positive reinforcement trainers and behavior specialists.',
    icon: '🎾',
  },
  {
    slug: 'pet-sitters',
    name: 'Pet Sitters & Dog Walkers',
    description: 'In-home care and trustworthy walks.',
    icon: '🚶',
  },
  {
    slug: 'pet-supply',
    name: 'Pet Supply Stores',
    description: 'Independent and neighborhood pet supply retailers.',
    icon: '🛍️',
  },
  {
    slug: 'dog-parks-trails',
    name: 'Dog Parks & Trails',
    description: 'Places to play, sniff, and explore.',
    icon: '🌲',
  },
  {
    slug: 'pet-friendly-lodging',
    name: 'Pet-Friendly Lodging',
    description: 'Hotels and rentals that welcome pets.',
    icon: '🏨',
  },
];

export const regions = [
  { slug: 'albuquerque', name: 'Albuquerque', state: 'NM' },
  { slug: 'santa-fe', name: 'Santa Fe', state: 'NM' },
  { slug: 'las-cruces', name: 'Las Cruces', state: 'NM' },
  { slug: 'taos', name: 'Taos', state: 'NM' },
  { slug: 'tucson', name: 'Tucson', state: 'AZ' },
  { slug: 'phoenix', name: 'Phoenix', state: 'AZ' },
  { slug: 'flagstaff', name: 'Flagstaff', state: 'AZ' },
  { slug: 'denver', name: 'Denver', state: 'CO' },
  { slug: 'durango', name: 'Durango', state: 'CO' },
];

export const listings = [
  {
    slug: 'albuquerque-animal-medical-center',
    name: 'Albuquerque Animal Medical Center',
    city: 'Albuquerque',
    state: 'NM',
    citySlug: 'albuquerque',
    regionSlug: 'albuquerque',
    address: '3200 Menaul Blvd NE',
    phone: '(505) 555-0101',
    website: 'https://example.com/abq-animal-medical',
    description: 'Companion animal care with preventive medicine, dental care, and same-day wellness appointments.',
    categorySlugs: ['veterinary-clinics'],
    featured: true,
    verified: true,
    tags: ['wellness', 'urgent-care'],
  },
  {
    slug: 'new-mexico-rescue-league',
    name: 'New Mexico Rescue League',
    city: 'Albuquerque',
    state: 'NM',
    citySlug: 'albuquerque',
    regionSlug: 'albuquerque',
    address: '1000 San Mateo Blvd NE',
    phone: '(505) 555-0102',
    website: 'https://example.com/nm-rescue',
    description: 'Adoption and foster support for dogs and cats in the metro area.',
    categorySlugs: ['shelters-rescues'],
    featured: true,
    verified: true,
    tags: ['adoption', 'foster'],
  },
  {
    slug: 'paws-on-the-path',
    name: 'Paws on the Path',
    city: 'Santa Fe',
    state: 'NM',
    citySlug: 'santa-fe',
    regionSlug: 'santa-fe',
    address: '1320 Cerrillos Rd',
    phone: '(505) 555-0103',
    website: 'https://example.com/paws-on-the-path',
    description: 'Low-cost spay and neuter referrals plus vaccine clinics for community pets.',
    categorySlugs: ['spay-neuter'],
    featured: true,
    verified: true,
    tags: ['affordable', 'mobile'],
  },
  {
    slug: 'the-bark-room',
    name: 'The Bark Room',
    city: 'Santa Fe',
    state: 'NM',
    citySlug: 'santa-fe',
    regionSlug: 'santa-fe',
    address: '3921 Airport Rd',
    phone: '(505) 555-0104',
    website: 'https://example.com/the-bark-room',
    description: 'Full-service grooming with breed-specific styling and puppy packages.',
    categorySlugs: ['groomers'],
    featured: false,
    verified: true,
    tags: ['grooming', 'self-wash'],
  },
  {
    slug: 'sunrise-daycare',
    name: 'Sunrise Daycare & Boarding',
    city: 'Las Cruces',
    state: 'NM',
    citySlug: 'las-cruces',
    regionSlug: 'las-cruces',
    address: '2320 Avenida de Mesilla',
    phone: '(575) 555-0105',
    website: 'https://example.com/sunrise-daycare',
    description: 'Play-based daycare and overnight boarding for active dogs.',
    categorySlugs: ['boarding-daycare'],
    featured: true,
    verified: true,
    tags: ['daycare', 'overnight'],
  },
  {
    slug: 'tailored-training-co',
    name: 'Tailored Training Co.',
    city: 'Tucson',
    state: 'AZ',
    citySlug: 'tucson',
    regionSlug: 'tucson',
    address: '1501 E Speedway Blvd',
    phone: '(520) 555-0106',
    website: 'https://example.com/tailored-training',
    description: 'Private lessons, behavior plans, and support for multi-dog hogares.',
    categorySlugs: ['trainers'],
    featured: true,
    verified: true,
    tags: ['behavior', 'private-lessons'],
  },
  {
    slug: 'denver-pet-sitting',
    name: 'Denver Pet Sitting Collective',
    city: 'Denver',
    state: 'CO',
    citySlug: 'denver',
    regionSlug: 'denver',
    address: '2010 W 38th Ave',
    phone: '(303) 555-0107',
    website: 'https://example.com/denver-pet-sitting',
    description: 'Reliable dog walking, drop-in visits, and medication administration.',
    categorySlugs: ['pet-sitters'],
    featured: false,
    verified: true,
    tags: ['walks', 'drop-ins'],
  },
  {
    slug: 'durango-pet-supply',
    name: 'Durango Pet Supply',
    city: 'Durango',
    state: 'CO',
    citySlug: 'durango',
    regionSlug: 'durango',
    address: '900 Main Ave',
    phone: '(970) 555-0108',
    website: 'https://example.com/durango-pet-supply',
    description: 'Independent shop with locally sourced chews, food, and enrichment toys.',
    categorySlugs: ['pet-supply'],
    featured: false,
    verified: true,
    tags: ['local', 'enrichment'],
  },
];

export const guides = [
  {
    slug: 'how-to-choose-a-vet-in-albuquerque',
    title: 'How to choose the right vet in Albuquerque',
    excerpt: 'A practical checklist for comparing clinics, emergency coverage, and care philosophies.',
    body: 'Start by evaluating distance, after-hours coverage, and whether the clinic is a good fit for your pets at every life stage. Ask about dental care, senior wellness, and emergency transfer protocols before you commit.',
    regionSlug: 'albuquerque',
  },
  {
    slug: 'low-cost-spay-and-neuter-in-new-mexico',
    title: 'Low-cost spay and neuter options in New Mexico',
    excerpt: 'A guide to affordable clinics and mobile programs for pet owners in the region.',
    body: 'Many communities offer seasonal or monthly clinics through local rescues and veterinary partners. Look for organizations that publish clear pricing and accept walk-ins when possible.',
    regionSlug: 'santa-fe',
  },
  {
    slug: 'what-to-expect-when-fostering-a-rescue-dog',
    title: 'What to expect when fostering a rescue dog',
    excerpt: 'A calm, realistic overview of the first few weeks after bringing a rescue home.',
    body: 'Fostering is part patience, part preparation. Expect a transition period, a few routines to establish, and plenty of support from rescue groups and trainers.',
    regionSlug: 'albuquerque',
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((item) => item.slug === slug);
}

export function getRegionBySlug(slug) {
  return regions.find((item) => item.slug === slug);
}

export function getListingsForCategoryAndCity(categorySlug, citySlug) {
  return listings.filter((listing) => listing.categorySlugs.includes(categorySlug) && listing.citySlug === citySlug);
}

export function getListingBySlug(slug) {
  return listings.find((listing) => listing.slug === slug);
}

export function getGuides() {
  return guides;
}

export function getGuideBySlug(slug) {
  return guides.find((guide) => guide.slug === slug);
}

export function getFeaturedListings() {
  return listings.filter((listing) => listing.featured);
}
