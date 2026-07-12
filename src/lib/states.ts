export interface State {
  name: string;
  slug: string;
  abbr: string;
  image: string;
}

export const STATES: State[] = [
  { name: 'California', slug: 'california', abbr: 'CA', image: 'https://images.unsplash.com/photo-1594365458706-6fab3472f681?w=1400&h=500&fit=crop&auto=format' },
  { name: 'Nevada',     slug: 'nevada',     abbr: 'NV', image: 'https://images.unsplash.com/photo-1516325759459-7251ff998ab8?w=1400&h=500&fit=crop&auto=format' },
  { name: 'Arizona',    slug: 'arizona',    abbr: 'AZ', image: 'https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?w=1400&h=500&fit=crop&auto=format' },
  { name: 'New Mexico', slug: 'new-mexico', abbr: 'NM', image: 'https://plus.unsplash.com/premium_photo-1674160595891-2d820b2e4c02?w=1400&h=500&fit=crop&auto=format' },
  { name: 'Utah',       slug: 'utah',       abbr: 'UT', image: 'https://images.unsplash.com/photo-1535515505622-7621ebc4fc58?w=1400&h=500&fit=crop&auto=format' },
  { name: 'Colorado',   slug: 'colorado',   abbr: 'CO', image: 'https://images.unsplash.com/photo-1524429656589-6633a470097c?w=1400&h=500&fit=crop&auto=format' },
  { name: 'Texas',      slug: 'texas',      abbr: 'TX', image: 'https://images.unsplash.com/photo-1592190057402-2bf1ee02118d?w=1400&h=500&fit=crop&auto=format' },
];
