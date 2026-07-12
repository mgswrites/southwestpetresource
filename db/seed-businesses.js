import { Client } from '@neondatabase/serverless';

const listings = [
  // ── LOS ANGELES, CA ──────────────────────────────────────────────────────
  {
    name: 'Los Feliz Small Animal Hospital',
    slug: 'los-feliz-small-animal-hospital-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '3166 Los Feliz Blvd, Los Angeles, CA 90039',
    phone: '(323) 664-3309', website: 'https://www.lfsah.com',
    description: 'Family-owned and operated since 1922, this AAHA-accredited hospital has deep roots in the Los Feliz neighborhood. Offers the full spectrum of care from routine wellness to dentistry and surgery.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'Angel City Animal Hospital',
    slug: 'angel-city-animal-hospital-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '4364 Fountain Ave, Los Angeles, CA 90029',
    phone: '(323) 522-3134', website: 'https://angelcityvet.com',
    description: 'Independently owned Silver Lake clinic providing compassionate, affordable veterinary care for dogs and cats. Known for same-week appointments and a low-stress environment.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'affordable', 'dogs'],
  },
  {
    name: 'Centinela Feed & Pet Supplies',
    slug: 'centinela-feed-pet-supplies-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '3860 Centinela Ave, Los Angeles, CA 90066',
    phone: '(310) 398-2134', website: 'https://www.centinelafeed.com',
    description: 'Southern California\'s beloved regional pet-supply chain carrying premium dog and cat food, treats, and accessories. Locations feature self-service dog-wash stations and anesthesia-free teeth cleanings.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'grooming'],
  },
  {
    name: 'The Wags Club',
    slug: 'the-wags-club-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '11860 Mississippi Ave, Los Angeles, CA 90025',
    phone: '(310) 473-3333', website: 'https://thewagsclub.com',
    description: 'Upscale 12,000-sq-ft dog resort in West LA offering daycare and boarding with real grass play yards, shaded cabanas, and pools. Resort-style amenities in a thoughtfully designed space.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'luxury'],
  },
  {
    name: 'Paradise Ranch Pet Resort',
    slug: 'paradise-ranch-pet-resort-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '10268 La Tuna Canyon Rd, Sun Valley, CA 91352',
    phone: '(818) 394-9557', website: 'https://paradiseranch.net',
    description: 'The first fully licensed cage-free dog-boarding facility in the US, Paradise Ranch features a supervised water park and open-play environment just 20 minutes from downtown LA.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'cage-free', 'dogs'],
  },
  {
    name: 'Kimpton Hotel Wilshire',
    slug: 'kimpton-hotel-wilshire-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '6317 Wilshire Blvd, Los Angeles, CA 90048',
    phone: '(323) 852-6000', website: 'https://www.hotelwilshire.com',
    description: 'Stylish Kimpton boutique hotel along the Miracle Mile that welcomes pets of any size and breed at no extra charge. Amenities include plush pet-bed loaners and food and water bowls.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'luxury'],
  },
  {
    name: 'Kimpton Everly Hotel Hollywood',
    slug: 'kimpton-everly-hotel-los-angeles',
    city: 'Los Angeles', citySlug: 'los-angeles', state: 'CA',
    address: '1800 Argyle Ave, Los Angeles, CA 90028',
    phone: '(213) 279-3529', website: 'https://www.everlyhotelhollywood.com',
    description: 'Rooftop-pool boutique hotel in Hollywood that accepts pets of any size in designated rooms at no additional fee. Complimentary pet bed, bowls, and a pet-friendly welcome package await guests.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'dogs'],
  },

  // ── SAN DIEGO, CA ─────────────────────────────────────────────────────────
  {
    name: 'Tierrasanta Veterinary Hospital',
    slug: 'tierrasanta-veterinary-hospital-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '10799 Tierrasanta Blvd, San Diego, CA 92124',
    phone: '(858) 292-6116', website: 'https://www.tierrasantavetsd.com',
    description: 'Independently and veteran-owned full-service animal hospital north of Mission Valley. Provides compassionate care for dogs and cats with a strong emphasis on client education.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'dogs'],
  },
  {
    name: 'Amici Pet Hospital of Little Italy',
    slug: 'amici-pet-hospital-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '2135 Columbia St, San Diego, CA 92101',
    phone: '(619) 795-2400', website: 'https://amicipethospital.com',
    description: 'Downtown San Diego\'s neighborhood vet serving Little Italy with personalized medical and surgical care for dogs and cats. Warm, community-focused practice.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'HOWLISTIC',
    slug: 'howlistic-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '930 W Washington St #7, San Diego, CA 92103',
    phone: '(619) 255-7317', website: 'https://howlistic.com',
    description: 'Mission Hills natural pet supply boutique stocking San Diego\'s best selection of premium and holistic food, treats, and accessories for dogs and cats. Knowledgeable, locally minded staff.',
    categorySlug: 'pet-supply', featured: false, tags: ['natural', 'boutique', 'independent'],
  },
  {
    name: 'Fon Jon Pet Care',
    slug: 'fon-jon-pet-care-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '5050 Santa Fe St, San Diego, CA 92109',
    phone: '(858) 490-2117', website: 'https://fonjonpetcare.com',
    description: 'The original San Diego pet-care institution, serving the community for over 70 years with dog and cat boarding, daycare, and full grooming in the only indoor/outdoor kennel in the city.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'grooming'],
  },
  {
    name: 'Ocean Villa Inn',
    slug: 'ocean-villa-inn-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '5142 W Point Loma Blvd, San Diego, CA 92107',
    phone: '(619) 224-3481', website: 'https://www.oceanvillainn.com',
    description: 'Independently owned Ocean Beach motel renowned for its pet program: tile-floored pet rooms open onto a private patio or dog run, and a fully stocked dog-wash station awaits.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['independent', 'boutique', 'dogs'],
  },
  {
    name: 'Kimpton Hotel Solamar',
    slug: 'kimpton-hotel-solamar-san-diego',
    city: 'San Diego', citySlug: 'san-diego', state: 'CA',
    address: '435 6th Ave, San Diego, CA 92101',
    phone: '(619) 531-8740', website: 'https://www.hotelsolamar.com',
    description: 'Chic Gaslamp Quarter boutique hotel that welcomes any number of pets of any size at no extra charge. Guests receive pet beds, food and water bowls, and a pet-concierge list of nearby parks.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'luxury'],
  },

  // ── SAN FRANCISCO, CA ─────────────────────────────────────────────────────
  {
    name: 'San Francisco Pet Hospital',
    slug: 'san-francisco-pet-hospital-sf',
    city: 'San Francisco', citySlug: 'san-francisco', state: 'CA',
    address: '1371 Fulton St, San Francisco, CA 94117',
    phone: '(415) 931-8312', website: 'https://www.sfpethospital.com',
    description: 'Veterinarian-owned and operated NOPA clinic serving San Francisco since 1981. Offers the full spectrum of care from routine wellness and surgery to diagnostic imaging, with same-day availability.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'Blue Cross Pet Hospital SF',
    slug: 'blue-cross-pet-hospital-sf',
    city: 'San Francisco', citySlug: 'san-francisco', state: 'CA',
    address: '1386 Golden Gate Ave, San Francisco, CA 94115',
    phone: '(415) 931-5550', website: 'https://www.bluecrosspet.com',
    description: 'Community cornerstone near Alamo Square providing veterinary services to San Francisco since the early 1920s. Offers same- or next-day appointments for wellness, surgery, and urgent care.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'emergency'],
  },
  {
    name: 'The Animal Connection SF',
    slug: 'the-animal-connection-sf',
    city: 'San Francisco', citySlug: 'san-francisco', state: 'CA',
    address: '3401 Irving St, San Francisco, CA 94122',
    phone: '(415) 564-6482', website: 'https://www.animalconnectionsf.net',
    description: 'The city\'s largest independent pet store, in the Outer Sunset, stocking premium products for dogs, cats, birds, reptiles, and aquatic animals alongside expert staff advice.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'boutique'],
  },
  {
    name: 'Pet Camp SF',
    slug: 'pet-camp-sf',
    city: 'San Francisco', citySlug: 'san-francisco', state: 'CA',
    address: '525 Phelps St, San Francisco, CA 94124',
    phone: '(415) 282-0700', website: 'https://www.petcamp.com',
    description: 'San Francisco\'s most award-winning pet-boarding and daycare destination, with innovative indoor and outdoor play areas and separate facilities for dogs and cats. Open since 1997.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'independent'],
  },
  {
    name: 'Kimpton Hotel Enso SF',
    slug: 'kimpton-hotel-enso-sf',
    city: 'San Francisco', citySlug: 'san-francisco', state: 'CA',
    address: '1800 Sutter St, San Francisco, CA 94115',
    phone: '(415) 921-4000', website: 'https://www.ensohotelsf.com',
    description: 'Japantown Kimpton boutique hotel welcoming two pets of any size at no charge. Pet amenities include a plush bed, feeding bowls, dog-walking bags, and a door hanger for privacy.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'luxury'],
  },
  {
    name: "Kimpton Alton Fisherman's Wharf",
    slug: 'kimpton-alton-fishermans-wharf-sf',
    city: 'San Francisco', citySlug: 'san-francisco', state: 'CA',
    address: '250 Beach St, San Francisco, CA 94133',
    phone: '(415) 561-1100', website: 'https://www.altonhotelsf.com',
    description: 'Pet-friendly Kimpton hotel steps from Fisherman\'s Wharf with no pet-size or breed restrictions and zero extra fees. Complimentary pet bed and bowls provided at check-in.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'dogs'],
  },

  // ── LAS VEGAS, NV ─────────────────────────────────────────────────────────
  {
    name: 'Rainbow Animal Hospital',
    slug: 'rainbow-animal-hospital-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '244 S Rainbow Blvd, Las Vegas, NV 89145',
    phone: '(702) 363-1300', website: 'https://www.rainbowanimalhospital.com',
    description: 'Family-owned and locally operated full-service veterinary hospital serving Las Vegas and Henderson for over 35 years. Provides comprehensive medical, surgical, and preventive care.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'Craig Road Animal Hospital',
    slug: 'craig-road-animal-hospital-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '5051 W Craig Rd, Las Vegas, NV 89130',
    phone: '(702) 645-0331', website: 'https://craigrd.com',
    description: 'Full-service North Las Vegas hospital open six days per week, offering wellness exams, vaccinations, surgery, dental care, and daytime emergency services for dogs and cats.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'emergency'],
  },
  {
    name: 'Dog Supplies Outlet Las Vegas',
    slug: 'dog-supplies-outlet-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '6181 S Rainbow Blvd #101, Las Vegas, NV 89118',
    phone: '(702) 778-6569', website: 'https://dogsuppliesvegas.com',
    description: 'Las Vegas-born independent retailer with multiple valley locations, carrying over 8,000 curated pet items — from premium foods and raw diets to enrichment toys — with boutique-level service.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'boutique'],
  },
  {
    name: 'Tails Pet Resort Las Vegas',
    slug: 'tails-pet-resort-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '6050 W Lone Mountain Rd, Las Vegas, NV 89130',
    phone: '(702) 509-9909', website: 'https://www.tailsresorts.com',
    description: 'Las Vegas\'s largest rated pet hotel with 45,000 sq ft of indoor and outdoor play yards, overnight staffing, and complimentary webcam access for boarding and daycare guests.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'luxury'],
  },
  {
    name: 'The Platinum Hotel & Spa',
    slug: 'the-platinum-hotel-las-vegas',
    city: 'Las Vegas', citySlug: 'las-vegas', state: 'NV',
    address: '211 E Flamingo Rd, Las Vegas, NV 89169',
    phone: '(702) 365-5000', website: 'https://www.theplatinumhotel.com',
    description: 'Stylish all-suite boutique hotel just off the Strip with full kitchens and a rooftop pool. Welcomes dogs under 40 lbs with a non-refundable pet fee and rooftop pool access.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'dogs', 'luxury'],
  },

  // ── SALT LAKE CITY, UT ────────────────────────────────────────────────────
  {
    name: 'University Veterinary Hospital SLC',
    slug: 'university-veterinary-hospital-slc',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '952 E 900 S, Salt Lake City, UT 84105',
    phone: '(801) 596-9005', website: 'https://www.universityvetslc.com',
    description: 'Compassionate neighborhood clinic serving the 9th and 9th district since 1992. Provides comprehensive diagnostics, wellness exams, and surgery with a doctor-owned, community-focused approach.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'diagnostics'],
  },
  {
    name: 'Avenues Pet Clinic',
    slug: 'avenues-pet-clinic-slc',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '350 E 100 S, Salt Lake City, UT 84111',
    phone: '(801) 364-3475', website: 'https://www.avenuespetclinicslc.com',
    description: 'Full-service independent clinic in downtown Salt Lake City providing complete medical, surgical, and dental services for dogs and cats in a welcoming neighborhood setting.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: "The Dog's Meow",
    slug: 'the-dogs-meow-slc',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '2047 E 3300 S, Millcreek, UT 84109',
    phone: '(801) 468-0700', website: 'https://dogsmeow.com',
    description: 'Locally owned Millcreek pet boutique with the largest selection of natural dog and cat food in the Salt Lake valley, plus treats, supplements, and informed staff ready to help with special diets.',
    categorySlug: 'pet-supply', featured: false, tags: ['natural', 'independent', 'boutique'],
  },
  {
    name: 'DogMode',
    slug: 'dogmode-slc',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '4030 S Howick St, Salt Lake City, UT 84107',
    phone: '(801) 261-2665', website: 'https://dogmode.com',
    description: 'Award-winning SLC institution setting the standard for dog daycare and boarding since 1999. Over 20,000 sq ft of play space including a swimming pool, plus grooming and self-wash services.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'grooming'],
  },
  {
    name: 'Kimpton Hotel Monaco Salt Lake City',
    slug: 'kimpton-hotel-monaco-slc',
    city: 'Salt Lake City', citySlug: 'salt-lake-city', state: 'UT',
    address: '15 W 200 S, Salt Lake City, UT 84101',
    phone: '(801) 595-0000', website: 'https://www.monaco-saltlakecity.com',
    description: 'Downtown SLC\'s most vibrant boutique hotel, welcoming two pets of any size at no charge. Guests receive plush pet beds, food and water bowls, and can even borrow a goldfish for the room.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'luxury'],
  },

  // ── AUSTIN, TX ────────────────────────────────────────────────────────────
  {
    name: 'Allandale Veterinary Clinic',
    slug: 'allandale-veterinary-clinic-austin',
    city: 'Austin', citySlug: 'austin', state: 'TX',
    address: '6800 Burnet Rd Ste 1, Austin, TX 78757',
    phone: '(512) 454-6719', website: 'https://www.allandalevetclinic.com',
    description: 'Independently owned Austin institution staffed by four dedicated veterinarians, serving the Allandale and Rosedale communities with high-quality care for dogs and cats since the 1970s.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'Austin Vet Hospital',
    slug: 'austin-vet-hospital-austin',
    city: 'Austin', citySlug: 'austin', state: 'TX',
    address: '4701 N I-35 Frontage Rd, Austin, TX 78722',
    phone: '(512) 476-9191', website: 'https://www.austinvethospital.com',
    description: 'Established in 1971 near Mueller, this independent clinic offers wellness, surgery, ultrasound, dental care, senior care, and alternative medicine for dogs and cats.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: "Tomlinson's Feed Austin",
    slug: 'tomlinsons-feed-austin',
    city: 'Austin', citySlug: 'austin', state: 'TX',
    address: '916 W 12th St Ste B, Austin, TX 78703',
    phone: '(512) 514-1881', website: 'https://tomlinsons.com',
    description: 'Locally owned and operated since 1946 with 11 Central Texas locations, specializing in all-natural and premium pet food, quality supplies, and community-focused service for dogs and cats.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'dogs'],
  },
  {
    name: 'Paws on Chicon',
    slug: 'paws-on-chicon-austin',
    city: 'Austin', citySlug: 'austin', state: 'TX',
    address: '1301 Chicon St, Austin, TX 78702',
    phone: '(512) 273-7297', website: 'https://www.pawsonchicon.com',
    description: 'East Austin\'s trusted independent pet supply store offering expert nutrition advice, premium brands, and free local delivery over $65 — plus self-serve dog wash stations.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'boutique'],
  },
  {
    name: 'Austin Dogtown',
    slug: 'austin-dogtown-austin',
    city: 'Austin', citySlug: 'austin', state: 'TX',
    address: '537 Woodward St, Austin, TX 78704',
    phone: '(512) 535-4244', website: 'https://www.dogtownaustin.com',
    description: 'South Austin\'s most trusted dog professionals since 2006, providing expert structured socialization in a 7,000+ sq ft open-play facility with daycare and overnight boarding options.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'independent'],
  },
  {
    name: 'Hotel Van Zandt',
    slug: 'hotel-van-zandt-austin',
    city: 'Austin', citySlug: 'austin', state: 'TX',
    address: '605 Davis St, Austin, TX 78701',
    phone: '(512) 542-5300', website: 'https://www.hotelvanzandt.com',
    description: 'Kimpton\'s music-inspired boutique hotel in the Rainey Street Historic District welcomes dogs of all sizes with no breed restrictions and custom dog robes, Yeti water bowls included.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'luxury', 'dogs'],
  },

  // ── HOUSTON, TX ───────────────────────────────────────────────────────────
  {
    name: 'Rice Village Animal Hospital',
    slug: 'rice-village-animal-hospital-houston',
    city: 'Houston', citySlug: 'houston', state: 'TX',
    address: '2348 Rice Blvd, Houston, TX 77005',
    phone: '(713) 527-0489', website: 'https://rvahpet.com',
    description: 'AAHA-accredited neighborhood practice operating since 1976 in the heart of Rice Village. Provides comprehensive medical, surgical, and dental care, holding itself to standards met by fewer than 15% of US animal hospitals.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'West Alabama Animal Clinic',
    slug: 'west-alabama-animal-clinic-houston',
    city: 'Houston', citySlug: 'houston', state: 'TX',
    address: '2030 W Alabama St, Houston, TX 77098',
    phone: '(713) 528-0818', website: 'https://westalabamaanimalclinic.com',
    description: 'Independent Montrose-area clinic open six days a week, delivering personalized veterinary care for dogs and cats with a focus on building long-term client relationships.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'dogs'],
  },
  {
    name: 'Funny Fur Houston',
    slug: 'funny-fur-houston',
    city: 'Houston', citySlug: 'houston', state: 'TX',
    address: '3636 Greenbriar Dr Ste 103-A, Houston, TX 77098',
    phone: '(713) 239-0133', website: 'https://www.funnyfur.com',
    description: 'Premier River Oaks/Upper Kirby pet boutique specializing in all-natural and holistic pet foods, raw diets, designer dog apparel, carriers, and unique accessories for dogs and cats.',
    categorySlug: 'pet-supply', featured: false, tags: ['boutique', 'natural', 'independent'],
  },
  {
    name: "Wag'n World Houston",
    slug: 'wagn-world-houston',
    city: 'Houston', citySlug: 'houston', state: 'TX',
    address: '1616 Montrose Blvd, Houston, TX 77006',
    phone: '(713) 496-3596', website: 'https://www.wagnworld.com',
    description: 'Independently owned Montrose and Heights dog daycare and boarding with structured playgroups, live webcams, and hands-on owner oversight ensuring a genuinely personal experience.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'independent'],
  },
  {
    name: 'Magnolia Hotel Houston',
    slug: 'magnolia-hotel-houston',
    city: 'Houston', citySlug: 'houston', state: 'TX',
    address: '1100 Texas Ave, Houston, TX 77002',
    phone: '(713) 221-0011', website: 'https://www.magnoliahotels.com/houston',
    description: 'Voted Best Boutique Hotel in Houston, this downtown landmark welcomes two pets up to 75 lbs at no extra charge. Rooftop plunge pool and 24-hour fitness center included.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'no-fee', 'luxury'],
  },

  // ── DALLAS, TX ────────────────────────────────────────────────────────────
  {
    name: 'Dallas Veterinary Clinic',
    slug: 'dallas-veterinary-clinic-dallas',
    city: 'Dallas', citySlug: 'dallas', state: 'TX',
    address: '6125 Sherry Ln, Dallas, TX 75225',
    phone: '(214) 363-4561', website: 'https://dallasvet.net',
    description: 'Texas\'s only independent AAHA-accredited, Fear Free–certified, and Cat Friendly Practice, now in its third generation of family ownership, serving Park Cities and Preston Hollow since 1954.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'fear-free'],
  },
  {
    name: 'East Dallas Veterinary Clinic',
    slug: 'east-dallas-veterinary-clinic-dallas',
    city: 'Dallas', citySlug: 'dallas', state: 'TX',
    address: '8541 Ferguson Rd, Dallas, TX 75228',
    phone: '(214) 328-9935', website: 'https://eastdallasvetclinic.com',
    description: 'Privately owned community-focused clinic that has cared for East Dallas cats and dogs for decades, remembering every family by name and offering extended evening hours.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'dogs'],
  },
  {
    name: 'Odyssey Pets Dallas',
    slug: 'odyssey-pets-dallas',
    city: 'Dallas', citySlug: 'dallas', state: 'TX',
    address: '14999 Preston Rd #400A, Dallas, TX 75254',
    phone: '(972) 407-1166', website: 'https://odysseypets.com',
    description: 'Family-owned Dallas pet supply store since 2006 carrying premium holistic foods, plus on-site expert grooming, boarding, and daycare — one of the largest freshwater fish selections in the city.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'boutique'],
  },
  {
    name: "Abbie's Doghouse",
    slug: 'abbies-doghouse-dallas',
    city: 'Dallas', citySlug: 'dallas', state: 'TX',
    address: '4325 Belmont Ave, Dallas, TX 75204',
    phone: '(469) 729-9080', website: 'https://www.abbiesdoghouse.com',
    description: 'Completely cage-free daycare and boarding facility in the heart of Dallas. Every dog is treated like family in a home-like environment with attentive staff.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'cage-free'],
  },
  {
    name: 'Kimpton Pittman Hotel Dallas',
    slug: 'kimpton-pittman-hotel-dallas',
    city: 'Dallas', citySlug: 'dallas', state: 'TX',
    address: '2551 Elm St, Dallas, TX 75226',
    phone: '(469) 498-2500', website: 'https://www.pittmanhoteldallas.com',
    description: 'Boutique Kimpton property anchoring Dallas\'s Deep Ellum arts district, welcoming pets of any size at no charge with cozy pet beds, feeding mats, and leashes available at the front desk.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['no-fee', 'boutique', 'luxury'],
  },

  // ── SAN ANTONIO, TX ───────────────────────────────────────────────────────
  {
    name: 'North Star Animal Hospital',
    slug: 'north-star-animal-hospital-san-antonio',
    city: 'San Antonio', citySlug: 'san-antonio', state: 'TX',
    address: '7227 San Pedro Ave, San Antonio, TX 78216',
    phone: '(210) 342-7387', website: 'https://sanantoniotxvet.com',
    description: 'North Central San Antonio clinic providing comprehensive care for dogs, cats, and exotic pets. Warm, professional team with a strong focus on client education and preventive medicine.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'exotics'],
  },
  {
    name: 'Alamo Dog & Cat Hospital',
    slug: 'alamo-dog-cat-hospital-san-antonio',
    city: 'San Antonio', citySlug: 'san-antonio', state: 'TX',
    address: '1619 Pleasanton Rd, San Antonio, TX 78221',
    phone: '(210) 922-1231', website: 'https://www.alamodogandcat.com',
    description: 'Committed to providing quality and affordable veterinary care since 1922, offering extended weekend hours and a full suite of medical and surgical services for dogs and cats.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'affordable', 'wellness'],
  },
  {
    name: 'Fifi & Fido\'s Pet Boutique',
    slug: 'fifi-fidos-pet-boutique-san-antonio',
    city: 'San Antonio', citySlug: 'san-antonio', state: 'TX',
    address: '5120 Broadway Ste A, San Antonio, TX 78209',
    phone: '(210) 822-2525', website: 'https://fifiandfidos.com',
    description: 'Alamo Heights holistic pet nutrition boutique offering quality food, treats, and supplies for dogs and cats, with same-day local delivery and a knowledgeable team.',
    categorySlug: 'pet-supply', featured: false, tags: ['boutique', 'natural', 'independent'],
  },
  {
    name: 'Tail Waggerz Daycare & Boarding',
    slug: 'tail-waggerz-san-antonio',
    city: 'San Antonio', citySlug: 'san-antonio', state: 'TX',
    address: '5407 Bandera Rd Suite 117, San Antonio, TX 78238',
    phone: '(210) 647-7760', website: 'https://tailwaggerzsa.com',
    description: 'Family-owned San Antonio pet-care facility with spacious kennels, two indoor/outdoor play yards, and separate dog and cat boarding areas with dedicated personal attention.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'independent'],
  },
  {
    name: 'Fairmount Hotel San Antonio',
    slug: 'fairmount-hotel-san-antonio',
    city: 'San Antonio', citySlug: 'san-antonio', state: 'TX',
    address: '401 S Alamo St, San Antonio, TX 78205',
    phone: '(210) 224-8800', website: 'https://fairmountsa.com',
    description: 'European-inspired boutique hotel in the Unbound Collection by Hyatt, steps from La Villita and Hemisfair. Welcomes well-behaved pets with leash-on policies and personalized service.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'luxury', 'dogs'],
  },

  // ── SCOTTSDALE, AZ ────────────────────────────────────────────────────────
  {
    name: 'Hopi Animal Hospital',
    slug: 'hopi-animal-hospital-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '5533 E Bell Rd Ste 101, Scottsdale, AZ 85254',
    phone: '(602) 494-4674', website: 'https://hopianimalhospital.com',
    description: 'Privately owned family practice serving Scottsdale and Phoenix for over 23 years, providing compassionate full-service care for dogs, cats, and a variety of small and exotic pets.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'exotics'],
  },
  {
    name: 'Hayden Road Animal Hospital',
    slug: 'hayden-road-animal-hospital-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '814 N Hayden Rd, Scottsdale, AZ 85257',
    phone: '(480) 945-9466', website: 'https://haydenroadanimalhospital.com',
    description: 'Longtime South Scottsdale independent clinic offering drop-in availability alongside a full range of wellness, dental, surgical, and diagnostic services for dogs and cats.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'The Fetching Dog Scottsdale',
    slug: 'the-fetching-dog-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '8660 E Shea Blvd #170, Scottsdale, AZ 85260',
    phone: '(480) 391-3647', website: 'https://fetchingdog.net',
    description: 'Scottsdale\'s premier natural-pet-food destination with Arizona\'s largest selection of raw dog and cat food, plus premium treats, supplements, and accessories.',
    categorySlug: 'pet-supply', featured: false, tags: ['natural', 'independent', 'boutique'],
  },
  {
    name: "Petey's Grooming & Pet Supplies",
    slug: 'peteys-grooming-pet-supplies-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '23271 N Scottsdale Rd Unit A103, Scottsdale, AZ 85255',
    phone: '(480) 656-1122', website: 'https://www.peteyspets.com',
    description: 'Local family-owned North Scottsdale shop offering natural pet foods, treats, and supplements alongside professional dog and cat grooming.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'grooming'],
  },
  {
    name: 'Always Unleashed Pet Resort',
    slug: 'always-unleashed-pet-resort-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '7230 E Adobe Dr, Scottsdale, AZ 85255',
    phone: '(480) 767-7046', website: 'https://www.alwaysunleashed.com',
    description: 'Arizona\'s only 24/7 cage-free, fully staffed pet resort with live webcams, a 55-ft beach-entry pool, splash pad, agility course, and full boarding, daycare, training, and grooming services.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'luxury', 'cage-free'],
  },
  {
    name: 'Bespoke Inn Scottsdale',
    slug: 'bespoke-inn-scottsdale',
    city: 'Scottsdale', citySlug: 'scottsdale', state: 'AZ',
    address: '3701 N Marshall Way, Scottsdale, AZ 85251',
    phone: '(844) 861-6715', website: 'https://bespokeinnscottsdale.com',
    description: 'Intimate 10-room luxury boutique inn in Scottsdale\'s Arts District, welcoming two pets with no weight restrictions for a $50-per-pet fee. Private courtyard with top-tier personalized service.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'luxury', 'independent'],
  },

  // ── BOULDER, CO ───────────────────────────────────────────────────────────
  {
    name: 'Indian Peaks Veterinary Hospital',
    slug: 'indian-peaks-veterinary-hospital-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '3015 Sterling Cir Suite 300, Boulder, CO 80301',
    phone: '(303) 938-9474', website: 'https://indianpeaksvet.com',
    description: 'Small, independently owned Boulder clinic free of corporate influence, providing personalized wellness care, diagnostics, and surgery for dogs and cats with a team that truly knows every patient.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'North Boulder Companion Animal Hospital',
    slug: 'north-boulder-companion-animal-hospital-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '2750 Glenwood Dr Ste 9, Boulder, CO 80304',
    phone: '(303) 443-9003', website: 'https://www.northbouldervet.com',
    description: 'Doctor-owned practice open seven days a week serving the Boulder community for over 20 years. Offers comprehensive medical, surgical, and dental care with a welcoming team approach.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'dogs'],
  },
  {
    name: "Farfel's Farm & Rescue",
    slug: 'farfels-farm-rescue-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '906 Pearl St, Boulder, CO 80302',
    phone: '(303) 443-7711', website: 'https://farfels.com',
    description: 'Boulder\'s beloved Pearl Street dog and cat boutique and rescue since 2005, offering one-of-a-kind collars, harnesses, natural premium food, tough toys, and an on-site rescue adoption program.',
    categorySlug: 'pet-supply', featured: false, tags: ['boutique', 'independent', 'natural'],
  },
  {
    name: 'Cottonwood Kennels Boulder',
    slug: 'cottonwood-kennels-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '7275 Valmont Rd, Boulder, CO 80301',
    phone: '(720) 230-2044', website: 'https://www.cottonwoodkennels.com',
    description: 'Voted Best Independent Business by Colorado Daily, Cottonwood has served Boulder for over 50 years with pet boarding and daycare in a clean, cozy setting with ample outdoor space.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'independent'],
  },
  {
    name: 'Limelight Boulder',
    slug: 'limelight-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '1295 University Ave, Boulder, CO 80302',
    phone: '(844) 674-2733', website: 'https://www.limelighthotels.com/boulder',
    description: 'Outdoor-focused boutique hotel between downtown Pearl Street and CU Boulder campus, welcoming pets with in-room pet beds and water bowls. Perfect basecamp for hiking the Flatirons with your dog.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'dogs', 'independent'],
  },
  {
    name: 'Hotel Boulderado',
    slug: 'hotel-boulderado-boulder',
    city: 'Boulder', citySlug: 'boulder', state: 'CO',
    address: '2115 13th St, Boulder, CO 80302',
    phone: '(303) 442-4344', website: 'https://www.boulderado.com',
    description: 'Historic landmark hotel near Pearl Street Mall open since 1909, welcoming dogs in its charming first-floor North Wing rooms with a dog bed, bowls, and a welcome chew bone upon arrival.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'independent', 'dogs'],
  },

  // ── COLORADO SPRINGS, CO ──────────────────────────────────────────────────
  {
    name: 'Fillmore Veterinary Hospital',
    slug: 'fillmore-veterinary-hospital-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '1010 E Fillmore St, Colorado Springs, CO 80907',
    phone: '(719) 633-3808', website: 'https://fillmorevet.com',
    description: 'Privately owned Colorado Springs clinic offering routine wellness through advanced diagnostics and exotic-pet care, with a personal touch only an independent practice can provide.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'exotics'],
  },
  {
    name: 'Crossroads Animal Hospital',
    slug: 'crossroads-animal-hospital-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '3901 Siferd Blvd, Colorado Springs, CO 80917',
    phone: '(719) 531-0531', website: 'https://crossroadsah.com',
    description: 'Locally owned Colorado Springs clinic delivering top-notch care for dogs and cats for over 26 years, with a compassionate team and comprehensive services from preventive care to surgery.',
    categorySlug: 'veterinary-clinics', featured: false, tags: ['independent', 'wellness', 'surgery'],
  },
  {
    name: 'Bon Pet Supply',
    slug: 'bon-pet-supply-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '2326 N Wahsatch Ave, Colorado Springs, CO 80907',
    phone: '(719) 465-2143', website: 'https://bonpetsupply.com',
    description: 'Old North End neighborhood gem since 2012 stocking a wide range of premium and natural pet foods, treats, toys, and grooming supplies with staff who care deeply about ingredient quality.',
    categorySlug: 'pet-supply', featured: false, tags: ['independent', 'natural', 'boutique'],
  },
  {
    name: 'Lucky Dog Daycare and Boarding',
    slug: 'lucky-dog-daycare-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '4401 Mark Dabling Blvd, Colorado Springs, CO 80907',
    phone: '(719) 599-9663', website: 'https://bealuckydog.com',
    description: 'Locally owned facility operating since 2004, specializing in small play groups of no more than 15 dogs at a time. Offers daycare, boarding, grooming, and self-wash with free webcam access.',
    categorySlug: 'boarding-daycare', featured: false, tags: ['boarding', 'daycare', 'independent'],
  },
  {
    name: 'Kinship Landing',
    slug: 'kinship-landing-colorado-springs',
    city: 'Colorado Springs', citySlug: 'colorado-springs', state: 'CO',
    address: '415 S Nevada Ave, Colorado Springs, CO 80903',
    phone: '(719) 203-9309', website: 'https://www.kinshiplanding.com',
    description: 'Michelin-selected downtown boutique hotel welcoming two dogs under 80 lbs ($49/night pet fee). Features Mae Woven dog beds, a doggy potty station, and an outdoor fire-pit patio.',
    categorySlug: 'pet-friendly-lodging', featured: false, tags: ['boutique', 'dogs', 'independent'],
  },
];

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
  console.log(`+ ${listing.name} (${listing.city})`);
}

await client.end();
console.log(`\nDone — ${inserted} inserted, ${skipped} skipped`);
