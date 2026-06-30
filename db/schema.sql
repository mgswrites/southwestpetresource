CREATE TABLE regions (
  id        SERIAL PRIMARY KEY,
  name      TEXT NOT NULL,
  slug      TEXT NOT NULL UNIQUE,
  state     CHAR(2) NOT NULL
);

CREATE TABLE categories (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE listings (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  region_id   INT REFERENCES regions(id),
  city        TEXT NOT NULL,
  state       CHAR(2) NOT NULL,
  address     TEXT,
  phone       TEXT,
  website     TEXT,
  description TEXT,
  featured    BOOLEAN NOT NULL DEFAULT FALSE,
  verified    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE listing_categories (
  listing_id  INT REFERENCES listings(id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (listing_id, category_id)
);

CREATE TABLE tags (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE listing_tags (
  listing_id INT REFERENCES listings(id) ON DELETE CASCADE,
  tag_id     INT REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (listing_id, tag_id)
);

CREATE TABLE guides (
  id           SERIAL PRIMARY KEY,
  title        TEXT NOT NULL,
  slug         TEXT NOT NULL UNIQUE,
  body         TEXT NOT NULL,
  excerpt      TEXT,
  region_id    INT REFERENCES regions(id),
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed categories
INSERT INTO categories (name, slug, description) VALUES
  ('Veterinary Clinics',         'veterinary-clinics',      'General and emergency veterinary care'),
  ('Animal Shelters & Rescues',  'shelters-rescues',        'Adoption, fostering, and rescue organizations'),
  ('Spay & Neuter Clinics',      'spay-neuter',             'Low-cost and mobile spay/neuter services'),
  ('Groomers',                   'groomers',                'Dog and cat grooming services'),
  ('Boarding & Daycare',         'boarding-daycare',        'Pet boarding, kennels, and doggy daycare'),
  ('Trainers & Behaviorists',    'trainers',                'Dog training and behavior specialists'),
  ('Pet Sitters & Dog Walkers',  'pet-sitters',             'In-home pet sitting and dog walking'),
  ('Pet Supply Stores',          'pet-supply',              'Local and independent pet supply retailers'),
  ('Dog Parks & Trails',         'dog-parks-trails',        'Off-leash parks and pet-friendly trails'),
  ('Pet-Friendly Lodging',       'pet-friendly-lodging',    'Hotels and rentals that welcome pets');

-- Seed regions
INSERT INTO regions (name, slug, state) VALUES
  ('Albuquerque',  'albuquerque',  'NM'),
  ('Santa Fe',     'santa-fe',     'NM'),
  ('Las Cruces',   'las-cruces',   'NM'),
  ('Taos',         'taos',         'NM'),
  ('Tucson',       'tucson',       'AZ'),
  ('Phoenix',      'phoenix',      'AZ'),
  ('Flagstaff',    'flagstaff',    'AZ'),
  ('Denver',       'denver',       'CO'),
  ('Santa Fe',     'santa-fe-co',  'CO'),
  ('Durango',      'durango',      'CO');
