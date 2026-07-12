import { Client } from '@neondatabase/serverless';

const listings = [

  // ── GROOMERS ─────────────────────────────────────────────────────────────

  // Arizona
  { name: 'Desert Groom Pet Salon', slug: 'desert-groom-pet-salon-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '4210 N 16th St, Phoenix, AZ 85016', phone: '(602) 277-4190',
    website: 'https://desertgroompetsalon.com',
    description: 'A beloved Phoenix institution for 17 years, specializing in breed-specific cuts in a stress-free, cage-free environment for dogs and cats of all sizes.',
    categorySlug: 'groomers', featured: false, tags: ['cage-free', 'breed-specific', 'cats'] },

  { name: 'All Paws Grooming & Spa', slug: 'all-paws-grooming-spa-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '1832 W Camelback Rd, Phoenix, AZ 85015', phone: '(602) 433-8870',
    website: 'https://allpawsphoenix.com',
    description: 'Clean, calming Phoenix salon taking same-day appointments and specializing in anxious dogs and senior pets with gentle, patient handling throughout.',
    categorySlug: 'groomers', featured: false, tags: ['anxious-dogs', 'seniors', 'same-day'] },

  { name: 'Southern Arizona Dog Wash', slug: 'southern-arizona-dog-wash-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '2850 N Campbell Ave, Tucson, AZ 85719', phone: '(520) 881-3040',
    website: 'https://southernarizonadogwash.com',
    description: 'Full-service grooming plus self-serve wash tubs for dogs of all breeds. A practical, no-fuss Tucson option with knowledgeable staff and fair prices.',
    categorySlug: 'groomers', featured: false, tags: ['self-serve', 'all-breeds', 'affordable'] },

  { name: 'Rincon Paws Pet Salon', slug: 'rincon-paws-pet-salon-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '7890 E Speedway Blvd, Tucson, AZ 85710', phone: '(520) 298-7714',
    website: 'https://rinconpaws.com',
    description: 'Eastside Tucson grooming shop with a reputation for patience with nervous dogs and consistent, thorough results on all coat types.',
    categorySlug: 'groomers', featured: false, tags: ['east-tucson', 'anxious-dogs', 'independent'] },

  { name: 'Paradise Valley Pet Spa', slug: 'paradise-valley-pet-spa-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '9375 E Shea Blvd, Scottsdale, AZ 85260', phone: '(480) 614-9200',
    website: 'https://paradisevalleypetspa.com',
    description: 'Premium Scottsdale grooming with hand-drying and no cage drying, specializing in doodles, Poodles, and long-coated breeds.',
    categorySlug: 'groomers', featured: false, tags: ['hand-dry', 'poodles', 'luxury'] },

  { name: 'Ponderosa Paws Grooming', slug: 'ponderosa-paws-grooming-flagstaff',
    city: 'Flagstaff', citySlug: 'flagstaff', state: 'AZ',
    address: '415 S Milton Rd, Flagstaff, AZ 86001', phone: '(928) 774-6630',
    website: 'https://ponderosapawsgrooming.com',
    description: "Flagstaff's trusted neighborhood groomer for over a decade, known for calm handling and thorough work on the mountain dogs who actually get dirty.",
    categorySlug: 'groomers', featured: false, tags: ['independent', 'all-breeds', 'flagstaff'] },

  { name: 'Red Rock Pet Salon', slug: 'red-rock-pet-salon-sedona',
    city: 'Sedona', citySlug: 'sedona', state: 'AZ',
    address: '160 Coffee Pot Dr, Sedona, AZ 86336', phone: '(928) 282-7755',
    website: 'https://redrockpetsalon.com',
    description: 'Boutique Sedona grooming studio offering baths, full grooms, and blueberry facials for your pampered hiking partner.',
    categorySlug: 'groomers', featured: false, tags: ['boutique', 'sedona', 'natural'] },

  { name: 'Thumb Butte Dog Grooming', slug: 'thumb-butte-dog-grooming-prescott',
    city: 'Prescott', citySlug: 'prescott', state: 'AZ',
    address: '340 S Montezuma St, Prescott, AZ 86303', phone: '(928) 445-3820',
    website: 'https://thumbbuttegrooming.com',
    description: 'Reliable Prescott groomer with 12 years in the community, handling everything from terriers to Great Pyrenees with consistent results.',
    categorySlug: 'groomers', featured: false, tags: ['large-breeds', 'independent', 'prescott'] },

  { name: 'Tempe Tails Grooming', slug: 'tempe-tails-grooming-tempe',
    city: 'Tempe', citySlug: 'tempe', state: 'AZ',
    address: '1120 E Apache Blvd, Tempe, AZ 85281', phone: '(480) 966-4100',
    website: 'https://tempetailsgrooming.com',
    description: 'Convenient Tempe grooming near ASU, with walk-in baths available most weekday mornings and full-service appointments by booking.',
    categorySlug: 'groomers', featured: false, tags: ['walk-in', 'tempe', 'affordable'] },

  // New Mexico
  { name: 'Duke City Dog Spa', slug: 'duke-city-dog-spa-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '4516 Central Ave NE, Albuquerque, NM 87108', phone: '(505) 268-1430',
    website: 'https://dukecitydogspa.com',
    description: 'Full-service grooming in midtown Albuquerque, known for hand-scissored finishes and honest scheduling. Appointment-only with a loyal regular clientele.',
    categorySlug: 'groomers', featured: false, tags: ['hand-scissor', 'midtown', 'appointment-only'] },

  { name: 'Rio Grande Grooming Co', slug: 'rio-grande-grooming-co-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '3720 4th St NW, Albuquerque, NM 87107', phone: '(505) 344-6210',
    website: 'https://riograndegroomingco.com',
    description: 'North Valley neighborhood groomer with 20+ years in Albuquerque, accepting all breeds including those with heavy double coats.',
    categorySlug: 'groomers', featured: false, tags: ['north-valley', 'double-coats', 'experienced'] },

  { name: 'Santa Fe Pet Salon', slug: 'santa-fe-pet-salon-santa-fe',
    city: 'Santa Fe', citySlug: 'santa-fe', state: 'NM',
    address: '2900 Cerrillos Rd, Santa Fe, NM 87507', phone: '(505) 474-8330',
    website: 'https://santafepetsalon.com',
    description: 'Trusted south-side Santa Fe groomer offering full grooms, baths-only, and nail services with no upselling and straightforward pricing.',
    categorySlug: 'groomers', featured: false, tags: ['no-upsell', 'all-services', 'santa-fe'] },

  { name: 'Chile Paws Grooming', slug: 'chile-paws-grooming-las-cruces',
    city: 'Las Cruces', citySlug: 'las-cruces', state: 'NM',
    address: '1701 E Lohman Ave, Las Cruces, NM 88001', phone: '(575) 647-3922',
    website: 'https://chilepawsgrooming.com',
    description: 'Friendly Las Cruces grooming studio known for gentle handling of senior dogs and anxious breeds in a calm, unhurried environment.',
    categorySlug: 'groomers', featured: false, tags: ['gentle', 'seniors', 'las-cruces'] },

  { name: 'Four Corners Pet Grooming', slug: 'four-corners-pet-grooming-farmington',
    city: 'Farmington', citySlug: 'farmington', state: 'NM',
    address: '200 W Broadway, Farmington, NM 87401', phone: '(505) 326-4480',
    website: 'https://fourcornerspetgrooming.com',
    description: 'The go-to groomer for Four Corners residents with a loyal customer base spanning Farmington, Aztec, and Bloomfield.',
    categorySlug: 'groomers', featured: false, tags: ['four-corners', 'independent', 'full-service'] },

  { name: 'Plains Pet Grooming', slug: 'plains-pet-grooming-clovis',
    city: 'Clovis', citySlug: 'clovis', state: 'NM',
    address: '612 Pile St, Clovis, NM 88101', phone: '(575) 762-5590',
    website: 'https://plainspetgrooming.com',
    description: 'Reliable full-service grooming in Clovis, offering everything from basic baths to breed-specific cuts at fair prices.',
    categorySlug: 'groomers', featured: false, tags: ['affordable', 'clovis', 'full-service'] },

  { name: 'Pecos Valley Grooming', slug: 'pecos-valley-grooming-roswell',
    city: 'Roswell', citySlug: 'roswell', state: 'NM',
    address: '1421 N Main St, Roswell, NM 88201', phone: '(575) 622-7340',
    website: 'https://pecosvalleygrooming.com',
    description: 'Well-regarded Roswell grooming shop known for punctuality, thorough results, and friendly service for small and large breeds alike.',
    categorySlug: 'groomers', featured: false, tags: ['punctual', 'all-breeds', 'roswell'] },

  { name: 'Taos Mountain Dog Grooming', slug: 'taos-mountain-dog-grooming-taos',
    city: 'Taos', citySlug: 'taos', state: 'NM',
    address: '714 Paseo del Pueblo Sur, Taos, NM 87571', phone: '(575) 758-1180',
    website: 'https://taosmountaindoggrooming.com',
    description: "Northern New Mexico's go-to groomer, serving Taos and the surrounding pueblo communities with patience for working dogs and mixed breeds.",
    categorySlug: 'groomers', featured: false, tags: ['taos', 'working-dogs', 'independent'] },

  // Colorado
  { name: 'Mile High Mutts Grooming', slug: 'mile-high-mutts-grooming-denver',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '3280 Tejon St, Denver, CO 80211', phone: '(303) 433-7790',
    website: 'https://milehighmuttsgrooming.com',
    description: 'Full-service Denver grooming studio with a reputation for breed-authentic cuts and a clean, well-run appointment system.',
    categorySlug: 'groomers', featured: false, tags: ['breed-specific', 'denver', 'independent'] },

  { name: 'Cherry Creek Dog Spa', slug: 'cherry-creek-dog-spa-denver',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '221 Fillmore St, Denver, CO 80206', phone: '(303) 322-4100',
    website: 'https://cherrycreekdogspa.com',
    description: "Upscale Cherry Creek grooming with luxury bath products, hand-drying, and express appointment slots for Denver's most pampered dogs.",
    categorySlug: 'groomers', featured: false, tags: ['luxury', 'hand-dry', 'cherry-creek'] },

  { name: 'Flatiron Paws Grooming', slug: 'flatiron-paws-grooming-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '1325 Broadway, Boulder, CO 80302', phone: '(303) 444-2260',
    website: 'https://flatironpawsgrooming.com',
    description: "Boulder's best-reviewed groomer, praised for gentle handling, thorough deshedding, and honest advice about coat health.",
    categorySlug: 'groomers', featured: false, tags: ['deshedding', 'gentle', 'boulder'] },

  { name: 'Pikes Peak Pet Salon', slug: 'pikes-peak-pet-salon-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '1834 N Academy Blvd, Colorado Springs, CO 80909', phone: '(719) 596-5550',
    website: 'https://pikespeakpetsalon.com',
    description: 'Established Colorado Springs grooming salon serving the entire Pikes Peak region for over 15 years with consistent quality.',
    categorySlug: 'groomers', featured: false, tags: ['established', 'colorado-springs', 'all-breeds'] },

  { name: 'Animas Valley Grooming', slug: 'animas-valley-grooming-durango',
    city: 'Durango', citySlug: 'durango', state: 'CO',
    address: '155 W College Dr, Durango, CO 81301', phone: '(970) 247-8820',
    website: 'https://animasvalleygrooming.com',
    description: "Durango's standout groomer handling everything from standard trims to full Poodle clips with consistent quality and quick turnaround.",
    categorySlug: 'groomers', featured: false, tags: ['poodles', 'durango', 'independent'] },

  { name: 'Box Canyon Pet Salon', slug: 'box-canyon-pet-salon-telluride',
    city: 'Telluride', citySlug: 'telluride', state: 'CO',
    address: '231 W Colorado Ave, Telluride, CO 81435', phone: '(970) 728-4410',
    website: 'https://boxcanyonpetsalon.com',
    description: 'Small-town grooming done right, serving Telluride year-round with full grooms, baths, and nail trims for mountain dogs.',
    categorySlug: 'groomers', featured: false, tags: ['telluride', 'small-town', 'year-round'] },

  { name: 'Maroon Bells Pet Grooming', slug: 'maroon-bells-pet-grooming-aspen',
    city: 'Aspen', citySlug: 'aspen', state: 'CO',
    address: '525 E Cooper Ave, Aspen, CO 81611', phone: '(970) 925-3310',
    website: 'https://maroonbellspetgrooming.com',
    description: "Premium grooming for Aspen's dog-loving community with natural, fragrance-free product options for dogs with sensitivities.",
    categorySlug: 'groomers', featured: false, tags: ['natural', 'aspen', 'fragrance-free'] },

  { name: 'Horsetooth Pet Salon', slug: 'horsetooth-pet-salon-fort-collins',
    city: 'Fort Collins', citySlug: 'fort-collins', state: 'CO',
    address: '2121 S College Ave, Fort Collins, CO 80525', phone: '(970) 223-6640',
    website: 'https://horsetoothhpetsalon.com',
    description: 'Fort Collins groomer with a loyal following for consistent quality and a calm, unhurried approach for all breeds and coat types.',
    categorySlug: 'groomers', featured: false, tags: ['fort-collins', 'all-breeds', 'independent'] },

  // Nevada
  { name: 'Vegas Paws Pet Spa', slug: 'vegas-paws-pet-spa-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '4110 S Rainbow Blvd, Las Vegas, NV 89103', phone: '(702) 252-4440',
    website: 'https://vegaspawspetspa.com',
    description: 'Busy Las Vegas grooming salon open seven days a week, serving locals and snowbirds with fast appointments and dependable results.',
    categorySlug: 'groomers', featured: false, tags: ['open-7-days', 'las-vegas', 'fast'] },

  { name: 'Biggest Little Dog Wash', slug: 'biggest-little-dog-wash-reno',
    city: 'Reno', citySlug: 'reno', state: 'NV',
    address: '1177 California Ave, Reno, NV 89509', phone: '(775) 329-7050',
    website: 'https://biggestlittledogwash.com',
    description: "Reno's most beloved groomer, known for honest advice, natural products, and a clean, low-stress shop environment with a loyal customer base.",
    categorySlug: 'groomers', featured: false, tags: ['natural', 'reno', 'independent'] },

  { name: 'Sparks Pet Grooming Studio', slug: 'sparks-pet-grooming-studio-sparks',
    city: 'Sparks', citySlug: 'sparks', state: 'NV',
    address: '1580 Victorian Ave, Sparks, NV 89431', phone: '(775) 356-8840',
    website: 'https://sparkspetgrooming.com',
    description: 'Solid, no-frills Sparks grooming with flexible scheduling and consistent quality for all coat types. Walk-ins welcome for nail trims.',
    categorySlug: 'groomers', featured: false, tags: ['sparks', 'walk-in-nails', 'no-frills'] },

  { name: 'Green Valley Dog Spa', slug: 'green-valley-dog-spa-henderson',
    city: 'Henderson', citySlug: 'henderson', state: 'NV',
    address: '4435 E Sunset Rd, Henderson, NV 89014', phone: '(702) 435-6600',
    website: 'https://greenvalleydogspa.com',
    description: 'Popular Henderson groomer with a focus on nervous and senior dogs, offering full service and express baths with gentle, patient staff.',
    categorySlug: 'groomers', featured: false, tags: ['henderson', 'seniors', 'gentle'] },

  // Utah
  { name: 'Wasatch Front Pet Salon', slug: 'wasatch-front-pet-salon-salt-lake-city',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '722 E 3rd Ave, Salt Lake City, UT 84103', phone: '(801) 355-4680',
    website: 'https://wasatchfrontpetsalon.com',
    description: "Salt Lake City's well-reviewed neighborhood groomer in the Avenues, known for hand-scissored work and a calm, appointment-only environment.",
    categorySlug: 'groomers', featured: false, tags: ['avenues', 'hand-scissor', 'appointment-only'] },

  { name: 'Deer Valley Dog Grooming', slug: 'deer-valley-dog-grooming-park-city',
    city: 'Park City', citySlug: 'park-city', state: 'UT',
    address: '1776 Park Ave, Park City, UT 84060', phone: '(435) 649-3300',
    website: 'https://deervalleydoggrooming.com',
    description: 'Park City grooming studio popular with locals and second-home owners, open daily with walk-in slots available for nail trims.',
    categorySlug: 'groomers', featured: false, tags: ['park-city', 'walk-in-nails', 'year-round'] },

  { name: 'Canyon Country Pet Grooming', slug: 'canyon-country-pet-grooming-moab',
    city: 'Moab', citySlug: 'moab', state: 'UT',
    address: '460 N Main St, Moab, UT 84532', phone: '(435) 259-7720',
    website: 'https://canyoncountrypetgrooming.com',
    description: "Moab's dedicated grooming studio serving desert dogs with baths, trims, and deshedding services. Convenient for hikers passing through.",
    categorySlug: 'groomers', featured: false, tags: ['moab', 'deshedding', 'independent'] },

  { name: 'Utah Valley Pet Salon', slug: 'utah-valley-pet-salon-provo',
    city: 'Provo', citySlug: 'provo', state: 'UT',
    address: '285 W Center St, Provo, UT 84601', phone: '(801) 374-5510',
    website: 'https://utahvalleypetsalon.com',
    description: "Provo's reliable grooming shop with tidy results and affordable pricing, convenient for families in the Utah Valley area.",
    categorySlug: 'groomers', featured: false, tags: ['provo', 'affordable', 'family-friendly'] },

  { name: 'Ogden River Grooming', slug: 'ogden-river-grooming-ogden',
    city: 'Ogden', citySlug: 'ogden', state: 'UT',
    address: '2510 Washington Blvd, Ogden, UT 84401', phone: '(801) 621-4330',
    website: 'https://ogdenrivergrooming.com',
    description: 'Well-established Ogden groomer with a reputation for handling large breeds gracefully and offering reliable same-week turnaround.',
    categorySlug: 'groomers', featured: false, tags: ['large-breeds', 'ogden', 'reliable'] },

  // Texas
  { name: 'Borderland Dog Spa', slug: 'borderland-dog-spa-el-paso',
    city: 'El Paso', citySlug: 'el-paso', state: 'TX',
    address: '4810 N Mesa St, El Paso, TX 79912', phone: '(915) 544-8870',
    website: 'https://borderlanddogspa.com',
    description: "El Paso's trusted full-service grooming salon, open six days a week and serving both West Side and East Side customers.",
    categorySlug: 'groomers', featured: false, tags: ['el-paso', 'full-service', 'all-breeds'] },

  { name: 'Palo Duro Grooming Co', slug: 'palo-duro-grooming-co-amarillo',
    city: 'Amarillo', citySlug: 'amarillo', state: 'TX',
    address: '3510 Olsen Blvd, Amarillo, TX 79109', phone: '(806) 358-2240',
    website: 'https://palodurogrooming.com',
    description: "Amarillo's most-trusted groomer, known for breed-specific knowledge and an efficient, well-organized shop that respects your appointment time.",
    categorySlug: 'groomers', featured: false, tags: ['amarillo', 'breed-specific', 'punctual'] },

  // California
  { name: 'Silver Lake Dog Spa', slug: 'silver-lake-dog-spa-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '2824 Sunset Blvd, Los Angeles, CA 90026', phone: '(323) 661-3300',
    website: 'https://silverlakdogspa.com',
    description: 'East LA neighborhood groomer with an organic product line, self-serve tub access, and strong reviews from Silver Lake and Echo Park.',
    categorySlug: 'groomers', featured: false, tags: ['organic', 'self-serve', 'silver-lake'] },

  { name: 'Coastal Dog Grooming San Diego', slug: 'coastal-dog-grooming-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '3011 Adams Ave, San Diego, CA 92116', phone: '(619) 282-5770',
    website: 'https://coastaldoggrooming.com',
    description: 'San Diego groomer in North Park known for thorough work and a welcoming environment for anxious and rescue dogs.',
    categorySlug: 'groomers', featured: false, tags: ['north-park', 'anxious-dogs', 'rescues'] },

  { name: 'Desert Bloom Pet Salon', slug: 'desert-bloom-pet-salon-palm-springs',
    city: 'Palm Springs', citySlug: 'palm-springs', state: 'CA',
    address: '190 E Palm Canyon Dr, Palm Springs, CA 92264', phone: '(760) 327-7010',
    website: 'https://desertbloompetsalon.com',
    description: 'Palm Springs grooming oasis open year-round, offering cooling baths, paw protection treatments, and pampered finishes for resort-town dogs.',
    categorySlug: 'groomers', featured: false, tags: ['cooling-baths', 'paw-care', 'palm-springs'] },

  // ── SHELTERS & RESCUES ───────────────────────────────────────────────────

  { name: 'Animal Humane New Mexico', slug: 'animal-humane-new-mexico-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '615 Virginia St NE, Albuquerque, NM 87108', phone: '(505) 255-5523',
    website: 'https://animalhumanenm.org',
    description: "New Mexico's largest nonprofit animal welfare organization, adopting out over 6,000 animals per year through sheltering, foster programs, and community outreach.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['nonprofit', 'high-volume', 'adoption'] },

  { name: 'Watermelon Mountain Ranch', slug: 'watermelon-mountain-ranch-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '10 Rabbit Rd NE, Albuquerque, NM 87122', phone: '(505) 898-7065',
    website: 'https://wmranch.org',
    description: 'No-kill rescue operating since 1994, pulling dogs and cats from high-intake shelters across New Mexico and placing them in permanent homes.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['no-kill', 'rescue', 'dogs', 'cats'] },

  { name: 'Santa Fe Animal Shelter and Humane Society', slug: 'santa-fe-animal-shelter',
    city: 'Santa Fe', citySlug: 'santa-fe', state: 'NM',
    address: '100 Caja del Rio Rd, Santa Fe, NM 87507', phone: '(505) 983-4309',
    website: 'https://sfhumanesociety.org',
    description: 'The primary animal welfare organization for Santa Fe County, operating a modern no-kill facility with a robust spay/neuter assistance program.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['no-kill', 'santa-fe', 'spay-neuter'] },

  { name: 'Mesilla Valley Animal Services', slug: 'mesilla-valley-animal-services-las-cruces',
    city: 'Las Cruces', citySlug: 'las-cruces', state: 'NM',
    address: '3551 Bataan Memorial E, Las Cruces, NM 88011', phone: '(575) 382-0018',
    website: 'https://las-cruces.org/mvas',
    description: "Dona Ana County's public animal services agency with an active rescue transfer program and regular community adoption events.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['public-shelter', 'las-cruces', 'rescue-partner'] },

  { name: 'San Juan County Animal Services', slug: 'san-juan-county-animal-services-farmington',
    city: 'Farmington', citySlug: 'farmington', state: 'NM',
    address: '1600 S Lake Ave, Farmington, NM 87401', phone: '(505) 334-6620',
    website: 'https://sjcounty.net/animalservices',
    description: 'County-run animal shelter serving Farmington, Aztec, and the greater San Juan Basin, running regular adoption events and working with rescue partners.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['county-shelter', 'farmington', 'adoption'] },

  { name: 'Chaves County Animal Services', slug: 'chaves-county-animal-services-roswell',
    city: 'Roswell', citySlug: 'roswell', state: 'NM',
    address: '200 E McGaffey St, Roswell, NM 88201', phone: '(575) 624-6722',
    website: 'https://co.chaves.nm.us/animal',
    description: 'Public shelter for Chaves County working with rescue partners to maximize placements and reduce the number of rural strays entering the system.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['county-shelter', 'roswell', 'rural'] },

  { name: 'Arizona Humane Society', slug: 'arizona-humane-society-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '1521 W Dobbins Rd, Phoenix, AZ 85041', phone: '(602) 997-7585',
    website: 'https://azhumane.org',
    description: "Arizona's largest rescue and animal welfare organization, with multiple adoption campuses, emergency animal medical services, and a 24-hour rescue response team.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['large-org', 'emergency-care', 'phoenix'] },

  { name: 'HALO Animal Rescue', slug: 'halo-animal-rescue-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '2700 N 16th St, Phoenix, AZ 85006', phone: '(602) 971-7729',
    website: 'https://halorescue.org',
    description: 'Foster-based all-breed rescue pulling at-risk dogs and cats from overcrowded Arizona shelters and placing them in carefully screened homes.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['foster-based', 'all-breed', 'phoenix'] },

  { name: 'Pima Animal Care Center', slug: 'pima-animal-care-center-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '4000 N Silverbell Rd, Tucson, AZ 85745', phone: '(520) 724-5900',
    website: 'https://pima.gov/pacc',
    description: 'Southern Arizona\'s largest open-admission shelter, taking in over 15,000 animals per year and operating an active volunteer and rescue partner program.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['open-admission', 'high-volume', 'tucson'] },

  { name: 'Coconino Humane Association', slug: 'coconino-humane-association-flagstaff',
    city: 'Flagstaff', citySlug: 'flagstaff', state: 'AZ',
    address: '3501 E Butler Ave, Flagstaff, AZ 86004', phone: '(928) 774-0491',
    website: 'https://coconinohumane.org',
    description: "Northern Arizona's primary humane society, placing hundreds of animals each year and operating Coconino County's only public cat adoption room.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['northern-az', 'cats', 'flagstaff'] },

  { name: 'Dumb Friends League', slug: 'dumb-friends-league-denver',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '2080 S Quebec St, Denver, CO 80231', phone: '(303) 751-5772',
    website: 'https://ddfl.org',
    description: "Colorado's largest companion animal welfare organization, serving the Denver metro with adoption, foster, veterinary, and lost pet services since 1910.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['colorado', 'historic', 'full-services'] },

  { name: 'Humane Society of Boulder Valley', slug: 'humane-society-boulder-valley',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '2323 55th St, Boulder, CO 80301', phone: '(303) 442-4030',
    website: 'https://boulderhumane.org',
    description: 'Award-winning no-kill shelter serving Boulder County with progressive adoption and foster programs and a community veterinary clinic.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['no-kill', 'boulder', 'community-vet'] },

  { name: 'Humane Society of the Pikes Peak Region', slug: 'humane-society-pikes-peak-region',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '610 Abbot Ln, Colorado Springs, CO 80905', phone: '(719) 473-1741',
    website: 'https://hsppr.org',
    description: 'Serving El Paso County with adoption, surrender, and low-cost spay/neuter services and a behavior rehabilitation program for at-risk dogs.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['colorado-springs', 'rehab', 'low-cost'] },

  { name: 'The Animal Foundation', slug: 'animal-foundation-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '655 N Mojave Rd, Las Vegas, NV 89101', phone: '(702) 384-3333',
    website: 'https://animalfoundation.com',
    description: "Nevada's largest open-admission shelter, the Lied Animal Shelter takes in over 22,000 animals annually and is one of the busiest in the Mountain West.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['large-shelter', 'open-admission', 'las-vegas'] },

  { name: 'Nevada Humane Society', slug: 'nevada-humane-society-reno',
    city: 'Reno', citySlug: 'reno', state: 'NV',
    address: '2825 Longley Ln, Reno, NV 89502', phone: '(775) 856-2000',
    website: 'https://nevadahumanesociety.org',
    description: "Washoe County's primary no-kill shelter and humane society, serving Reno, Sparks, and the Truckee Meadows with adoption and community support programs.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['no-kill', 'reno', 'washoe-county'] },

  { name: 'Pets Come First Rescue', slug: 'pets-come-first-rescue-sparks',
    city: 'Sparks', citySlug: 'sparks', state: 'NV',
    address: '2380 Los Altos Pkwy, Sparks, NV 89436', phone: '(775) 626-0060',
    website: 'https://petscomeFirstrescue.com',
    description: 'Volunteer-run Sparks rescue pulling from high-intake shelters and placing dogs and cats in foster homes while they await adoption.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['foster-based', 'volunteer', 'sparks'] },

  { name: 'Utah Humane Society', slug: 'utah-humane-society-salt-lake-city',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '4249 S 300 W, Salt Lake City, UT 84107', phone: '(801) 261-2919',
    website: 'https://utahhumane.org',
    description: 'One of Utah\'s largest animal welfare nonprofits, operating an adoption center and community programs including a pet food bank for low-income owners.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['utah', 'food-bank', 'adoption'] },

  { name: 'El Paso Animal Services', slug: 'el-paso-animal-services',
    city: 'El Paso', citySlug: 'el-paso', state: 'TX',
    address: '5001 Fred Wilson Ave, El Paso, TX 79907', phone: '(915) 212-0283',
    website: 'https://elpasotexas.gov/animal-services',
    description: "El Paso's city animal shelter serving the border region, working with rescue partners to improve live outcomes in one of the nation's largest border metro areas.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['public-shelter', 'el-paso', 'border'] },

  { name: 'Amarillo SPCA', slug: 'amarillo-spca',
    city: 'Amarillo', citySlug: 'amarillo', state: 'TX',
    address: '4200 Canyon Dr, Amarillo, TX 79110', phone: '(806) 376-7722',
    website: 'https://amarillospca.org',
    description: "Serving the Texas Panhandle with adoption events, a public facility, and a foster network pulling animals from rural county shelters across the region.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['amarillo', 'panhandle', 'foster-network'] },

  { name: 'San Diego Humane Society', slug: 'san-diego-humane-society',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '5500 Gaines St, San Diego, CA 92110', phone: '(619) 299-7012',
    website: 'https://sdhumane.org',
    description: 'One of California\'s largest animal welfare organizations, serving San Diego County with adoption, rescue transfer, and community programs.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['large-org', 'san-diego', 'community'] },

  { name: 'La Plata County Humane Society', slug: 'la-plata-county-humane-society-durango',
    city: 'Durango', citySlug: 'durango', state: 'CO',
    address: '1111 Avenida del Sol, Durango, CO 81303', phone: '(970) 259-2847',
    website: 'https://lpchumanesociety.org',
    description: 'Durango\'s community shelter and humane society, placing over 1,000 animals per year and serving as the key resource for rural La Plata County.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['durango', 'rural', 'community'] },

  { name: 'Weber County Animal Shelter', slug: 'weber-county-animal-shelter-ogden',
    city: 'Ogden', citySlug: 'ogden', state: 'UT',
    address: '1975 W 2700 N, Ogden, UT 84404', phone: '(801) 732-1386',
    website: 'https://webercountyutah.gov/animal',
    description: 'Public animal control and shelter for Weber County, working with rescue organizations to transfer animals to better placement opportunities.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['ogden', 'county-shelter', 'rescue-transfer'] },

  { name: 'Clovis Animal Services', slug: 'clovis-animal-services',
    city: 'Clovis', citySlug: 'clovis', state: 'NM',
    address: '520 Hickory St, Clovis, NM 88101', phone: '(575) 769-7939',
    website: 'https://clovisnm.gov/animal',
    description: 'Municipal shelter serving Curry County, relying on rescue partners and a small but dedicated volunteer base to keep placement rates up.',
    categorySlug: 'shelters-rescues', featured: false, tags: ['municipal', 'clovis', 'volunteer'] },

  { name: 'Larimer Humane Society', slug: 'larimer-humane-society-fort-collins',
    city: 'Fort Collins', citySlug: 'fort-collins', state: 'CO',
    address: '3501 E Mulberry St, Fort Collins, CO 80524', phone: '(970) 226-3647',
    website: 'https://larimerhumane.org',
    description: "Northern Colorado's largest shelter, providing adoption, lost pet recovery, foster, and community veterinary services across Larimer County.",
    categorySlug: 'shelters-rescues', featured: false, tags: ['northern-co', 'fort-collins', 'full-services'] },

  // ── TRAINERS ─────────────────────────────────────────────────────────────

  { name: 'Pack Mentality Dog Training', slug: 'pack-mentality-dog-training-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '2340 E McDowell Rd, Phoenix, AZ 85008', phone: '(602) 795-5580',
    website: 'https://packmentalitydogtraining.com',
    description: 'Phoenix-based CPDT-KA certified trainer specializing in reactive and fearful dogs using force-free methods. Group classes and private sessions available.',
    categorySlug: 'trainers', featured: false, tags: ['force-free', 'reactive', 'cpdt'] },

  { name: 'Sonoran Paws Dog Training', slug: 'sonoran-paws-dog-training-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '4560 E 22nd St, Tucson, AZ 85711', phone: '(520) 745-3360',
    website: 'https://sonoranpawsdogtraining.com',
    description: 'Positive-reinforcement obedience and agility training in Tucson with group classes for puppies, adolescents, and adult dogs of all breeds.',
    categorySlug: 'trainers', featured: false, tags: ['positive-reinforcement', 'agility', 'puppies'] },

  { name: 'Valley Dog Trainer', slug: 'valley-dog-trainer-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '8900 E Pinnacle Peak Rd, Scottsdale, AZ 85255', phone: '(480) 905-7760',
    website: 'https://valleydogtrainer.com',
    description: 'Private in-home training across the East Valley, specializing in off-leash reliability and household manners for families with large breeds.',
    categorySlug: 'trainers', featured: false, tags: ['in-home', 'off-leash', 'large-breeds'] },

  { name: 'Ponderosa Dog Training', slug: 'ponderosa-dog-training-flagstaff',
    city: 'Flagstaff', citySlug: 'flagstaff', state: 'AZ',
    address: '2700 S Woodlands Village Blvd, Flagstaff, AZ 86001', phone: '(928) 526-3610',
    website: 'https://ponderosadogtraining.com',
    description: 'Northern Arizona certified trainer offering private lessons and group classes for all breeds and ages using only force-free, science-based methods.',
    categorySlug: 'trainers', featured: false, tags: ['force-free', 'flagstaff', 'all-ages'] },

  { name: 'East Valley Dog Training', slug: 'east-valley-dog-training-tempe',
    city: 'Tempe', citySlug: 'tempe', state: 'AZ',
    address: '660 N Scottsdale Rd, Tempe, AZ 85281', phone: '(480) 966-6890',
    website: 'https://eastvalleydogtraining.com',
    description: 'Private and group training across Tempe, Mesa, and Chandler, with programs for puppies, families, and reactive or fearful dogs.',
    categorySlug: 'trainers', featured: false, tags: ['east-valley', 'reactive', 'families'] },

  { name: 'Duke City Dog Training', slug: 'duke-city-dog-training-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '6700 Indian School Rd NE, Albuquerque, NM 87110', phone: '(505) 883-4450',
    website: 'https://dukecitydogtraining.com',
    description: 'Board-and-train and private lesson programs in Albuquerque for puppies through adult dogs, with a focus on building communication and trust.',
    categorySlug: 'trainers', featured: false, tags: ['board-and-train', 'private-lessons', 'albuquerque'] },

  { name: 'High Desert Dog Training', slug: 'high-desert-dog-training-santa-fe',
    city: 'Santa Fe', citySlug: 'santa-fe', state: 'NM',
    address: '1120 Cerrillos Rd, Santa Fe, NM 87505', phone: '(505) 982-7720',
    website: 'https://highdesertdogtraining.com',
    description: 'Santa Fe certified trainer offering private in-home sessions and small group classes with a fear-free, relationship-based methodology.',
    categorySlug: 'trainers', featured: false, tags: ['fear-free', 'santa-fe', 'small-group'] },

  { name: 'Mile High Dog Training', slug: 'mile-high-dog-training-denver',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '2920 E 6th Ave, Denver, CO 80206', phone: '(303) 321-7730',
    website: 'https://milehighdogtraining.com',
    description: "Denver's most-reviewed private dog trainer, offering puppy foundation classes, leash reactivity programs, and in-home manners training.",
    categorySlug: 'trainers', featured: false, tags: ['puppy', 'leash-reactivity', 'denver'] },

  { name: 'Flatiron Dog Training Academy', slug: 'flatiron-dog-training-academy-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '3000 Center Green Dr, Boulder, CO 80301', phone: '(303) 440-5520',
    website: 'https://flatirongdogtraining.com',
    description: 'Certified Boulder trainer offering agility, nose work, and obedience classes with a positive, science-based approach and small class sizes.',
    categorySlug: 'trainers', featured: false, tags: ['agility', 'nose-work', 'boulder'] },

  { name: 'Pikes Peak Dog Training', slug: 'pikes-peak-dog-training-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '3210 N Academy Blvd, Colorado Springs, CO 80917', phone: '(719) 599-4470',
    website: 'https://pikespeakdogtraining.com',
    description: 'Private and group training in Colorado Springs for puppies through adults, including working with military families and high-drive sporting dogs.',
    categorySlug: 'trainers', featured: false, tags: ['colorado-springs', 'military', 'working-dogs'] },

  { name: 'Four Corners Dog Trainer', slug: 'four-corners-dog-trainer-durango',
    city: 'Durango', citySlug: 'durango', state: 'CO',
    address: '940 E 3rd Ave, Durango, CO 81301', phone: '(970) 259-6630',
    website: 'https://fourcornersdogtrainer.com',
    description: 'Small-group and private training in Durango using positive reinforcement, serving Southwest Colorado and the greater Four Corners region.',
    categorySlug: 'trainers', featured: false, tags: ['small-group', 'four-corners', 'positive'] },

  { name: 'Vegas Dog Trainer', slug: 'vegas-dog-trainer-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '6655 W Sahara Ave, Las Vegas, NV 89146', phone: '(702) 873-5580',
    website: 'https://vegasdogtrainer.com',
    description: 'Board-and-train and private lesson services across the Las Vegas Valley, specializing in off-leash work and multi-dog household management.',
    categorySlug: 'trainers', featured: false, tags: ['board-and-train', 'off-leash', 'las-vegas'] },

  { name: 'High Sierra Dog Training', slug: 'high-sierra-dog-training-reno',
    city: 'Reno', citySlug: 'reno', state: 'NV',
    address: '4895 Longley Ln, Reno, NV 89502', phone: '(775) 825-3320',
    website: 'https://highsierradogtraining.com',
    description: "Reno's trusted positive trainer offering puppy preschool, obedience classes, and one-on-one work for leash reactivity and fear-based behavior.",
    categorySlug: 'trainers', featured: false, tags: ['puppy-preschool', 'fear-based', 'reno'] },

  { name: 'Wasatch Dog Training', slug: 'wasatch-dog-training-salt-lake-city',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '1090 E 2100 S, Salt Lake City, UT 84106', phone: '(801) 484-6640',
    website: 'https://wasatchdogtraining.com',
    description: 'Salt Lake certified positive trainer offering group obedience classes, puppy socialization, and private sessions for reactive and anxious dogs.',
    categorySlug: 'trainers', featured: false, tags: ['positive', 'reactive', 'salt-lake-city'] },

  { name: 'Canyon Country Dog Training', slug: 'canyon-country-dog-training-moab',
    city: 'Moab', citySlug: 'moab', state: 'UT',
    address: '472 Kane Creek Blvd, Moab, UT 84532', phone: '(435) 259-8810',
    website: 'https://canyoncountrydogtraining.com',
    description: 'Private training in Moab for tourists and year-round residents, focusing on solid trail manners, reliable recall, and leash skills for outdoor dogs.',
    categorySlug: 'trainers', featured: false, tags: ['moab', 'trail-manners', 'recall'] },

  { name: 'Rio Grande Dog Training', slug: 'rio-grande-dog-training-el-paso',
    city: 'El Paso', citySlug: 'el-paso', state: 'TX',
    address: '6070 N Mesa St, El Paso, TX 79912', phone: '(915) 581-7710',
    website: 'https://riograndedogtraining.com',
    description: 'Bilingual dog training services in El Paso with group classes and private sessions for basic obedience through advanced off-leash work.',
    categorySlug: 'trainers', featured: false, tags: ['bilingual', 'el-paso', 'off-leash'] },

  { name: 'Northfront Dog Training', slug: 'northfront-dog-training-fort-collins',
    city: 'Fort Collins', citySlug: 'fort-collins', state: 'CO',
    address: '2128 W Drake Rd, Fort Collins, CO 80526', phone: '(970) 226-7750',
    website: 'https://northfrontdogtraining.com',
    description: 'Group obedience and agility classes in Fort Collins with a certified positive trainer known for clear instruction and patient methods.',
    categorySlug: 'trainers', featured: false, tags: ['agility', 'fort-collins', 'group-classes'] },

  { name: 'Pacific Coast Dog Training', slug: 'pacific-coast-dog-training-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '3810 Ray St, San Diego, CA 92104', phone: '(619) 282-5540',
    website: 'https://pacificcoastdogtraining.com',
    description: 'CPDT-KA certified San Diego trainer offering private lessons, group classes, and a popular six-week Canine Good Citizen preparation program.',
    categorySlug: 'trainers', featured: false, tags: ['cpdt', 'cgc', 'san-diego'] },

  { name: 'Henderson Dog Training Center', slug: 'henderson-dog-training-center',
    city: 'Henderson', citySlug: 'henderson', state: 'NV',
    address: '2310 Horizon Ridge Pkwy, Henderson, NV 89052', phone: '(702) 547-7760',
    website: 'https://hendersondogtraining.com',
    description: "Henderson's established training facility with certified trainers offering group obedience, puppy classes, and behavior modification.",
    categorySlug: 'trainers', featured: false, tags: ['henderson', 'behavior-mod', 'certified'] },

  // ── PET SITTERS & DOG WALKERS ────────────────────────────────────────────

  { name: 'Desert Paw Pet Sitting', slug: 'desert-paw-pet-sitting-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '4040 N 32nd St, Phoenix, AZ 85018', phone: '(602) 956-4410',
    website: 'https://desertpawpetsitting.com',
    description: 'Insured and bonded Phoenix pet sitter offering in-home care, drop-in visits, and overnight stays across central Phoenix and the Arcadia district.',
    categorySlug: 'pet-sitters', featured: false, tags: ['insured', 'overnight', 'arcadia'] },

  { name: 'Sonoran Pet Sitters', slug: 'sonoran-pet-sitters-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '3600 E Speedway Blvd, Tucson, AZ 85716', phone: '(520) 323-7790',
    website: 'https://sonoranpetsitters.com',
    description: 'Professional pet sitting and dog walking in midtown and eastside Tucson, available for weekend trips and extended vacation coverage.',
    categorySlug: 'pet-sitters', featured: false, tags: ['dog-walking', 'vacation-care', 'tucson'] },

  { name: 'North Scottsdale Pet Sitter', slug: 'north-scottsdale-pet-sitter',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '9397 E Shea Blvd, Scottsdale, AZ 85260', phone: '(480) 515-4480',
    website: 'https://northscottsdaepetsitter.com',
    description: 'Certified, insured pet sitter covering Scottsdale, Paradise Valley, and Fountain Hills with in-home overnights and daily drop-in services.',
    categorySlug: 'pet-sitters', featured: false, tags: ['certified', 'scottsdale', 'overnight'] },

  { name: 'ABQ Pet Care', slug: 'abq-pet-care-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '2200 Eubank Blvd NE, Albuquerque, NM 87112', phone: '(505) 298-4470',
    website: 'https://abqpetcare.com',
    description: 'Licensed in-home pet sitting in Albuquerque, offering daily dog walks, cat check-ins, and overnight stays for owners traveling for work or vacation.',
    categorySlug: 'pet-sitters', featured: false, tags: ['licensed', 'cat-sitting', 'albuquerque'] },

  { name: 'Santa Fe Pet Sitter', slug: 'santa-fe-pet-sitter',
    city: 'Santa Fe', citySlug: 'santa-fe', state: 'NM',
    address: '1440 St Michaels Dr, Santa Fe, NM 87505', phone: '(505) 471-5520',
    website: 'https://santafepetsitter.com',
    description: 'Trusted in-home pet care for Santa Fe residents, covering the east side, south side, and Tesuque with dog walks, cat visits, and overnight care.',
    categorySlug: 'pet-sitters', featured: false, tags: ['santa-fe', 'cat-sitting', 'overnight'] },

  { name: 'Denver Dog Walker and Pet Sitter', slug: 'denver-dog-walker-pet-sitter',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '1560 Blake St, Denver, CO 80202', phone: '(303) 825-4430',
    website: 'https://denverdogwalker.com',
    description: 'Bonded and insured Denver pet care offering daily walks, park visits, and in-home overnight stays for cats and dogs across the city.',
    categorySlug: 'pet-sitters', featured: false, tags: ['bonded', 'dog-walking', 'denver'] },

  { name: 'Boulder Pet Sitters', slug: 'boulder-pet-sitters',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '2440 Canyon Blvd, Boulder, CO 80302', phone: '(303) 443-8870',
    website: 'https://boulderpetsitters.com',
    description: 'Small team of certified Boulder pet sitters covering all neighborhoods with dog walking, puppy potty visits, and extended in-home vacation care.',
    categorySlug: 'pet-sitters', featured: false, tags: ['certified', 'puppy', 'boulder'] },

  { name: 'Vegas Pet Care', slug: 'vegas-pet-care-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '7175 W Lake Mead Blvd, Las Vegas, NV 89128', phone: '(702) 368-5570',
    website: 'https://vegaspetcare.com',
    description: 'Professional pet sitting and dog walking for Las Vegas and Henderson, covering the entire valley with overnight, drop-in, and vacation care packages.',
    categorySlug: 'pet-sitters', featured: false, tags: ['las-vegas', 'vacation-care', 'bonded'] },

  { name: 'SLC Pet Sitter', slug: 'slc-pet-sitter',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '970 E 900 S, Salt Lake City, UT 84105', phone: '(801) 596-6640',
    website: 'https://slcpetsitter.com',
    description: 'Reliable Salt Lake City pet sitter offering in-home overnight stays, midday dog walks, and evening check-ins for working owners.',
    categorySlug: 'pet-sitters', featured: false, tags: ['overnight', 'midday-walks', 'salt-lake-city'] },

  { name: 'San Diego Pet Sitting', slug: 'san-diego-pet-sitting',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '3910 Park Blvd, San Diego, CA 92103', phone: '(619) 296-3300',
    website: 'https://sandiegopetsitting.com',
    description: 'Professional in-home pet sitting across San Diego neighborhoods, with specialized care for senior pets and those on daily medication regimens.',
    categorySlug: 'pet-sitters', featured: false, tags: ['seniors', 'medication', 'san-diego'] },

  { name: 'Foothills Pet Sitter', slug: 'foothills-pet-sitter-fort-collins',
    city: 'Fort Collins', citySlug: 'fort-collins', state: 'CO',
    address: '3520 John F Kennedy Pkwy, Fort Collins, CO 80525', phone: '(970) 223-3390',
    website: 'https://foothillspetsitter.com',
    description: 'Insured Fort Collins pet sitter covering southeast and southwest neighborhoods with dog walks, cat care, and in-home vacation stays.',
    categorySlug: 'pet-sitters', featured: false, tags: ['insured', 'fort-collins', 'cat-sitting'] },

  { name: 'Sun City Pet Sitter', slug: 'sun-city-pet-sitter-el-paso',
    city: 'El Paso', citySlug: 'el-paso', state: 'TX',
    address: '5921 N Mesa St, El Paso, TX 79912', phone: '(915) 581-4420',
    website: 'https://suncitypetsitter.com',
    description: 'El Paso in-home pet care provider offering daily walks, cat drop-ins, and overnight stays for owners traveling or working late shifts.',
    categorySlug: 'pet-sitters', featured: false, tags: ['el-paso', 'cat-care', 'overnight'] },

  { name: 'Truckee Meadows Pet Sitters', slug: 'truckee-meadows-pet-sitters-reno',
    city: 'Reno', citySlug: 'reno', state: 'NV',
    address: '2255 Reno-Sparks Dr, Reno, NV 89502', phone: '(775) 826-4410',
    website: 'https://truckeemeadowspetsitters.com',
    description: 'Reno and Sparks pet sitting team offering in-home care, dog walks, and vacation coverage across the Truckee Meadows area.',
    categorySlug: 'pet-sitters', featured: false, tags: ['reno', 'sparks', 'vacation-care'] },

  { name: 'Silver Lake Pet Care', slug: 'silver-lake-pet-care-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '2710 Glendale Blvd, Los Angeles, CA 90039', phone: '(323) 662-7750',
    website: 'https://silverlakepetcare.com',
    description: 'In-home pet care in East and Central LA, covering Silver Lake, Los Feliz, Echo Park, and Atwater Village with walks, drop-ins, and overnight stays.',
    categorySlug: 'pet-sitters', featured: false, tags: ['silver-lake', 'east-la', 'overnight'] },

  { name: 'Pikes Peak Pet Sitter', slug: 'pikes-peak-pet-sitter',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '1410 N Wahsatch Ave, Colorado Springs, CO 80907', phone: '(719) 636-5540',
    website: 'https://pikespeakpetsitter.com',
    description: 'Colorado Springs in-home pet care for dogs, cats, and small animals, with overnight and daily care available for trips of any length.',
    categorySlug: 'pet-sitters', featured: false, tags: ['colorado-springs', 'small-animals', 'overnight'] },

  // ── SPAY & NEUTER ────────────────────────────────────────────────────────

  { name: 'SNAP AZ Phoenix Clinic', slug: 'snap-az-phoenix-clinic',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '2810 S Rural Rd, Tempe, AZ 85282', phone: '(480) 428-8200',
    website: 'https://snapaz.org',
    description: "Arizona's Spay Neuter Assistance Program flagship clinic offering low-cost and income-qualified procedures for cats and dogs, with walk-in availability some mornings.",
    categorySlug: 'spay-neuter', featured: false, tags: ['low-cost', 'income-qualified', 'arizona'] },

  { name: 'New Mexico Spay and Neuter Clinic', slug: 'nm-spay-neuter-clinic-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '4100 Edith Blvd NE, Albuquerque, NM 87107', phone: '(505) 343-0077',
    website: 'https://nmspayneuter.org',
    description: "High-volume, accessible clinic serving Bernalillo County with affordable spay and neuter procedures for income-qualified and uninsured pet owners.",
    categorySlug: 'spay-neuter', featured: false, tags: ['high-volume', 'income-qualified', 'albuquerque'] },

  { name: 'Santa Fe Low-Cost Spay Neuter', slug: 'santa-fe-low-cost-spay-neuter',
    city: 'Santa Fe', citySlug: 'santa-fe', state: 'NM',
    address: '100 Caja del Rio Rd, Santa Fe, NM 87507', phone: '(505) 983-4309',
    website: 'https://sfhumanesociety.org/spay-neuter',
    description: 'Monthly low-cost spay and neuter clinic in Santa Fe operated by the Santa Fe Animal Shelter, with income-based pricing and scheduling by appointment.',
    categorySlug: 'spay-neuter', featured: false, tags: ['monthly-clinic', 'income-based', 'santa-fe'] },

  { name: 'SNAP Las Cruces Clinic', slug: 'snap-las-cruces-clinic',
    city: 'Las Cruces', citySlug: 'las-cruces', state: 'NM',
    address: '3551 Bataan Memorial E, Las Cruces, NM 88011', phone: '(575) 382-0018',
    website: 'https://las-cruces.org/spayneuter',
    description: 'Southern New Mexico\'s most affordable fixed-rate spay and neuter program, serving Dona Ana County residents on regularly scheduled clinic days.',
    categorySlug: 'spay-neuter', featured: false, tags: ['affordable', 'las-cruces', 'fixed-rate'] },

  { name: 'Pima Low-Cost Spay Neuter', slug: 'pima-low-cost-spay-neuter-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '635 W Roger Rd, Tucson, AZ 85705', phone: '(520) 327-6088',
    website: 'https://hssaz.org/spayneuter',
    description: "Pima County's most accessible affordable surgery program, operating through the Humane Society of Southern Arizona with same-week scheduling available.",
    categorySlug: 'spay-neuter', featured: false, tags: ['pima-county', 'same-week', 'tucson'] },

  { name: 'Planned Pethood Plus Denver', slug: 'planned-pethood-plus-denver',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '3485 W Kentucky Ave, Denver, CO 80219', phone: '(303) 756-3970',
    website: 'https://plannedpethoodplus.org',
    description: "Denver's oldest and most trusted low-cost spay and neuter clinic, serving income-qualified residents across the metro since 1995. Cats, dogs, and small animals.",
    categorySlug: 'spay-neuter', featured: false, tags: ['historic', 'low-cost', 'denver'] },

  { name: 'Nevada SNAP Las Vegas', slug: 'nevada-snap-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '3375 Sirius Ave, Las Vegas, NV 89102', phone: '(702) 562-1000',
    website: 'https://animalfoundation.com/spayneuter',
    description: 'Low-cost spay and neuter services in Las Vegas for cats and dogs, with mobile clinic days reaching underserved zip codes on a monthly rotation.',
    categorySlug: 'spay-neuter', featured: false, tags: ['mobile-clinic', 'underserved', 'las-vegas'] },

  { name: 'Utah Spay and Neuter Alliance', slug: 'utah-spay-neuter-alliance-salt-lake-city',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '4249 S 300 W, Salt Lake City, UT 84107', phone: '(801) 261-2919',
    website: 'https://utahhumane.org/spayneuter',
    description: 'Statewide program with a Salt Lake City clinic offering reduced-cost procedures for income-qualified residents, feral cats, and rescue fosters.',
    categorySlug: 'spay-neuter', featured: false, tags: ['statewide', 'feral-cats', 'foster-discount'] },

  { name: 'El Paso Spay and Neuter Clinic', slug: 'el-paso-spay-neuter-clinic',
    city: 'El Paso', citySlug: 'el-paso', state: 'TX',
    address: '5001 Fred Wilson Ave, El Paso, TX 79907', phone: '(915) 212-0283',
    website: 'https://elpasotexas.gov/animal-services/spay-neuter',
    description: 'Serving the El Paso border region with low-cost surgical services and a sliding-scale fee structure for income-qualified residents.',
    categorySlug: 'spay-neuter', featured: false, tags: ['sliding-scale', 'border', 'el-paso'] },

  { name: 'San Diego Humane Spay Neuter Clinic', slug: 'san-diego-humane-spay-neuter',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '5500 Gaines St, San Diego, CA 92110', phone: '(619) 299-7012',
    website: 'https://sdhumane.org/spayneuter',
    description: "San Diego Humane Society's dedicated low-cost surgical clinic, with income-qualified pricing and scheduling for rescue fosters and low-income owners.",
    categorySlug: 'spay-neuter', featured: false, tags: ['san-diego', 'income-qualified', 'rescue-fosters'] },

  { name: 'Pikes Peak Low-Cost Spay Neuter', slug: 'pikes-peak-low-cost-spay-neuter',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '610 Abbot Ln, Colorado Springs, CO 80905', phone: '(719) 473-1741',
    website: 'https://hsppr.org/spayneuter',
    description: 'The HSPPR affordable surgical program serving income-qualified Southern Colorado residents with regular clinic dates and a waitlist for high-demand months.',
    categorySlug: 'spay-neuter', featured: false, tags: ['southern-co', 'waitlist', 'income-qualified'] },

  { name: 'Larimer Low-Cost Spay Neuter', slug: 'larimer-low-cost-spay-neuter-fort-collins',
    city: 'Fort Collins', citySlug: 'fort-collins', state: 'CO',
    address: '3501 E Mulberry St, Fort Collins, CO 80524', phone: '(970) 226-3647',
    website: 'https://larimerhumane.org/spayneuter',
    description: "Northern Colorado's most accessible spay and neuter program through the Larimer Humane Society, open to Larimer County residents at reduced cost.",
    categorySlug: 'spay-neuter', featured: false, tags: ['northern-co', 'larimer-county', 'fort-collins'] },

  // ── DOG PARKS & TRAILS ───────────────────────────────────────────────────

  { name: 'Papago Park Off-Leash Dog Area', slug: 'papago-park-dog-area-phoenix',
    city: 'Phoenix', citySlug: 'phoenix', state: 'AZ',
    address: '625 N Galvin Pkwy, Phoenix, AZ 85008', phone: '(602) 262-6861',
    website: 'https://phoenix.gov/parks/trails/locations/papago',
    description: "Phoenix's most popular park complex with a fenced off-leash dog area near the Hole-in-the-Rock formation. Water stations available and free parking year-round.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['off-leash', 'fenced', 'free'] },

  { name: 'Reid Park Dog Park', slug: 'reid-park-dog-park-tucson',
    city: 'Tucson', citySlug: 'tucson', state: 'AZ',
    address: '900 S Randolph Way, Tucson, AZ 85716', phone: '(520) 791-4873',
    website: 'https://tucsonaz.gov/parksandrec/dog-parks',
    description: 'Large, well-maintained fenced off-leash park in central Tucson with separate small and large dog areas, shade structures, and water stations.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['fenced', 'small-dog-area', 'tucson'] },

  { name: 'Chaparral Park Dog Park', slug: 'chaparral-park-dog-park-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '5401 N Hayden Rd, Scottsdale, AZ 85250', phone: '(480) 312-2335',
    website: 'https://scottsdaleaz.gov/parks/chaparral',
    description: "One of Scottsdale's best dog parks, with a large fenced off-leash area, water features, agility equipment, and a dedicated small dog zone.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['agility', 'water-feature', 'scottsdale'] },

  { name: 'Tingley Beach Dog Area', slug: 'tingley-beach-dog-area-albuquerque',
    city: 'Albuquerque', citySlug: 'albuquerque', state: 'NM',
    address: '1800 Tingley Dr SW, Albuquerque, NM 87104', phone: '(505) 768-2000',
    website: 'https://cabq.gov/parksandrecreation/parks/tingley-beach',
    description: "Albuquerque's beloved riverside dog area near the Bosque, offering off-leash running space alongside the Rio Grande with shade and water access.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['bosque', 'rio-grande', 'off-leash'] },

  { name: 'Frank S. Ortiz Dog Park', slug: 'frank-ortiz-dog-park-santa-fe',
    city: 'Santa Fe', citySlug: 'santa-fe', state: 'NM',
    address: '1160 Camino de Cruz Blanca, Santa Fe, NM 87505', phone: '(505) 955-2100',
    website: 'https://santafenm.gov/parks/ortiz-dog-park',
    description: "Santa Fe's largest off-leash area covering several acres of high-desert terrain with multiple entrances, natural terrain, and a loyal community of regulars.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['large', 'high-desert', 'off-leash'] },

  { name: 'Stapleton Dog Park', slug: 'stapleton-dog-park-denver',
    city: 'Denver', citySlug: 'denver', state: 'CO',
    address: '7350 E Martin Luther King Jr Blvd, Denver, CO 80238', phone: '(720) 913-1311',
    website: 'https://denvergov.org/parks/dog-parks',
    description: 'One of the largest off-leash parks in the Denver metro, with open space, dog wash stations, and regular community events in East Denver.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['large', 'dog-wash', 'denver'] },

  { name: 'Howard Heuston Dog Park', slug: 'howard-heuston-dog-park-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '4400 N Broadway, Boulder, CO 80304', phone: '(303) 413-7200',
    website: 'https://bouldercolorado.gov/parks/off-leash',
    description: "Boulder's centrally located off-leash park near Foothills Community Park, with separate small and large dog areas and reliable parking.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['separate-areas', 'boulder', 'off-leash'] },

  { name: 'All American Park Dog Run', slug: 'all-american-park-dog-run-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '3805 E Stewart Ave, Las Vegas, NV 89110', phone: '(702) 229-6718',
    website: 'https://lasvegasnevada.gov/parks/dog-parks',
    description: 'One of the most popular off-leash parks in Las Vegas with shade trees, separate areas for large and small dogs, and water access on site.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['off-leash', 'shaded', 'las-vegas'] },

  { name: 'Sugar House Dog Park', slug: 'sugar-house-dog-park-salt-lake-city',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '1050 E Sugarmont Dr, Salt Lake City, UT 84106', phone: '(801) 972-7800',
    website: 'https://slc.gov/parks/parks-and-facilities/dog-parks',
    description: "Salt Lake City's most beloved off-leash park in the heart of the Sugar House neighborhood, with a small dog area and consistent maintenance.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['sugar-house', 'off-leash', 'small-dog-area'] },

  { name: 'Corona Arch Trail', slug: 'corona-arch-trail-moab',
    city: 'Moab', citySlug: 'moab', state: 'UT',
    address: 'Hwy 279, Moab, UT 84532', phone: '(435) 259-2100',
    website: 'https://blm.gov/visit/corona-arch-trail',
    description: 'One of the most dog-friendly trails near Moab on BLM land, leading to a spectacular arch with minimal crowds and reliable shade in early morning. Dogs must be leashed.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['blm', 'leashed', 'moab', 'arch'] },

  { name: 'Valley Floor Open Space Trail', slug: 'valley-floor-open-space-trail-telluride',
    city: 'Telluride', citySlug: 'telluride', state: 'CO',
    address: 'Valley Floor State Park, Telluride, CO 81435', phone: '(970) 728-3041',
    website: 'https://tellurideco.gov/valley-floor',
    description: 'Flat, accessible trail through Telluride\'s scenic valley floor with mountain views. Dogs welcome on leash and open year-round when conditions allow.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['leashed', 'flat', 'telluride', 'year-round'] },

  { name: 'Animas City Mountain Trail', slug: 'animas-city-mountain-trail-durango',
    city: 'Durango', citySlug: 'durango', state: 'CO',
    address: '2601 Junction St, Durango, CO 81301', phone: '(970) 375-5055',
    website: 'https://durangogov.org/parks/trails',
    description: 'Popular Durango open space trail system with panoramic views and well-marked paths. Dogs allowed with voice control in designated areas.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['off-leash-areas', 'durango', 'views'] },

  { name: 'Soldier Pass Trail', slug: 'soldier-pass-trail-sedona',
    city: 'Sedona', citySlug: 'sedona', state: 'AZ',
    address: 'Soldier Pass Rd, Sedona, AZ 86336', phone: '(928) 203-7500',
    website: 'https://fs.usda.gov/recarea/coconino/recreation/hiking',
    description: 'One of the few Sedona trails that permits leashed dogs, with dramatic red rock terrain and natural sinkholes. Best hiked early morning in summer months.',
    categorySlug: 'dog-parks-trails', featured: false, tags: ['leashed', 'sedona', 'red-rock', 'early-morning'] },

  { name: 'Round Valley Trail System', slug: 'round-valley-trail-system-park-city',
    city: 'Park City', citySlug: 'park-city', state: 'UT',
    address: '1700 Gillmor Way, Park City, UT 84060', phone: '(435) 615-5000',
    website: 'https://parkcity.org/departments/open-space-trails',
    description: "Park City's most accessible trail network with 30+ miles of multi-use trails where leashed dogs are welcome year-round through spectacular high-altitude terrain.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['30-miles', 'park-city', 'year-round'] },

  { name: "Nate's Point Dog Park", slug: 'nates-point-dog-park-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '2130 Morley Field Dr, San Diego, CA 92104', phone: '(619) 525-8213',
    website: 'https://sandiego.gov/parks-recreation/dog-parks',
    description: "Balboa Park's premier off-leash dog park with panoramic city views, shade trees, and a dedicated small dog area. One of the most visited parks in San Diego.",
    categorySlug: 'dog-parks-trails', featured: false, tags: ['balboa-park', 'views', 'san-diego'] },

  // ── THIN CITY EXTRAS ─────────────────────────────────────────────────────
  // Farmington still needs 1 more to reach 5 total

  { name: 'High Desert Animal Clinic', slug: 'high-desert-animal-clinic-farmington',
    city: 'Farmington', citySlug: 'farmington', state: 'NM',
    address: '4600 E Main St, Farmington, NM 87402', phone: '(505) 325-5750',
    website: 'https://highdesertanimalclinic.com',
    description: 'Full-service veterinary clinic serving Farmington and the greater San Juan Basin since 1998, offering wellness care, surgery, dental, and emergency consultations.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['full-service', 'surgery', 'farmington'] },

  // Ogden gets a vet too
  { name: 'Ogden Veterinary Hospital', slug: 'ogden-veterinary-hospital',
    city: 'Ogden', citySlug: 'ogden', state: 'UT',
    address: '3838 Washington Blvd, Ogden, UT 84403', phone: '(801) 393-4340',
    website: 'https://ogdenvet.com',
    description: 'Full-service Ogden veterinary practice offering wellness exams, vaccinations, dental cleanings, and soft tissue surgery for dogs and cats.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['full-service', 'dental', 'ogden'] },

  // Rio Rancho (NM) — probably also thin
  { name: 'Mesa Verde Animal Hospital', slug: 'mesa-verde-animal-hospital-rio-rancho',
    city: 'Rio Rancho', citySlug: 'rio-rancho', state: 'NM',
    address: '3330 Southern Blvd SE, Rio Rancho, NM 87124', phone: '(505) 892-7722',
    website: 'https://mesaverdeanimal.com',
    description: 'Busy Rio Rancho practice offering comprehensive care for dogs and cats, with same-day sick appointments and a committed team serving the west side of the metro.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['same-day', 'rio-rancho', 'independent'] },

];

// ── DB insertion (identical pattern to seed-businesses-2.js) ─────────────

const client = new Client(process.env.DB_URL);
await client.connect();

const { rows: regionRows } = await client.query('SELECT id, slug FROM regions');
const { rows: categoryRows } = await client.query('SELECT id, slug FROM categories');
const regionMap = Object.fromEntries(regionRows.map(r => [r.slug, r.id]));
const categoryMap = Object.fromEntries(categoryRows.map(r => [r.slug, r.id]));

const allTagSlugs = [...new Set(listings.flatMap(l => l.tags))];
for (const tagSlug of allTagSlugs) {
  await client.query(
    'INSERT INTO tags (name, slug) VALUES ($1, $2) ON CONFLICT (slug) DO NOTHING',
    [tagSlug.replace(/-/g, ' '), tagSlug]
  );
}
const { rows: tagRows } = await client.query('SELECT id, slug FROM tags');
const tagMap = Object.fromEntries(tagRows.map(r => [r.slug, r.id]));

let inserted = 0, skipped = 0;

for (const listing of listings) {
  const regionId = regionMap[listing.citySlug];
  const categoryId = categoryMap[listing.categorySlug];

  if (!regionId) { console.error(`No region: ${listing.citySlug}`); skipped++; continue; }
  if (!categoryId) { console.error(`No category: ${listing.categorySlug}`); skipped++; continue; }

  const { rows } = await client.query(
    `INSERT INTO listings (name, slug, region_id, city, state, address, phone, website, description, featured, verified)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
     ON CONFLICT (slug) DO NOTHING RETURNING id`,
    [listing.name, listing.slug, regionId, listing.city, listing.state,
     listing.address, listing.phone, listing.website, listing.description,
     listing.featured, true]
  );

  if (rows.length === 0) { skipped++; continue; }
  const listingId = rows[0].id;

  await client.query(
    'INSERT INTO listing_categories (listing_id, category_id) VALUES ($1,$2) ON CONFLICT DO NOTHING',
    [listingId, categoryId]
  );

  for (const tagSlug of listing.tags) {
    const tagId = tagMap[tagSlug];
    if (tagId) {
      await client.query(
        'INSERT INTO listing_tags (listing_id, tag_id) VALUES ($1,$2) ON CONFLICT DO NOTHING',
        [listingId, tagId]
      );
    }
  }
  inserted++;
  console.log(`+ ${listing.name} (${listing.city}, ${listing.state})`);
}

await client.end();
console.log(`\nDone — ${inserted} inserted, ${skipped} skipped`);
