export interface Product {
  id: string;
  name: string;
  gujaratiName?: string;
  hindiName?: string;
  category: 'Blended Masalas' | 'Powdered Spices' | 'Speciality Masalas';
  tagline: string;
  description: string;
  image: string;
  featured: boolean;
  dishName: string;
  packagingType: 'Pouch' | 'Sprinkler Jar';
}

export const CATEGORIES = [
  'ALL',
  'BLENDED MASALAS',
  'POWDERED SPICES',
  'SPECIALITY MASALAS',
] as const;

export type CategoryType = (typeof CATEGORIES)[number];

export const PRODUCTS: Product[] = [
  {
    id: 'pav-bhaji-masala',
    name: 'Bombay Pav Bhaji Masala',
    gujaratiName: 'બોમ્બે પાંઉભાજી મસાલા',
    category: 'Blended Masalas',
    tagline: 'Spice up your taste buds with the authentic flavor of Pav Bhaji Masala',
    description: 'Rich and aromatic spices blended to perfection, delivering the quintessential buttery street-side taste in every home-cooked bhaji.',
    image: '/assets/products/s9.jpg',
    featured: true,
    dishName: 'Mumbai Pav Bhaji with golden butter pav',
    packagingType: 'Pouch'
  },
  {
    id: 'chat-masala',
    name: 'Chatakedar Chat Masala',
    hindiName: 'चटाकेदार चाट मसाला',
    category: 'Speciality Masalas',
    tagline: 'Sorath Masala Swaad Aapke Vishwas Ka - Chatakedar Chat Masala',
    description: 'A tangy, zesty sprinkle crafted with rock salt, dry mango, and warm spices. Elevates fresh fruits, salads, fries, and street snacks.',
    image: '/assets/products/s1.jpg',
    featured: true,
    dishName: 'Fresh fruit chaat and savoury crispies',
    packagingType: 'Sprinkler Jar'
  },
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'Powdered Spices',
    tagline: 'Ultimate Taste of Indian Spices - Pure Red Chilli Powder',
    description: 'Carefully stone-ground dried red chillies offering brilliant natural crimson hue and balanced fiery warmth without artificial colors.',
    image: '/assets/products/s4.jpg',
    featured: true,
    dishName: 'Traditional curries and marinades',
    packagingType: 'Pouch'
  },
  {
    id: 'buttermilk-masala',
    name: 'Chhachh (Buttermilk) Masala',
    gujaratiName: 'શેકેલા જીરા યુક્ત છાશ મસાલા',
    category: 'Speciality Masalas',
    tagline: 'Koi Preservatives Vagar - Shekela Jira Yukt',
    description: 'Wholesome digestive blend enriched with hand-roasted cumin and refreshing herbs. No preservatives, designed for daily comforting buttermilk.',
    image: '/assets/products/s12.jpg',
    featured: true,
    dishName: 'Chilled spiced Gujarati chaas',
    packagingType: 'Sprinkler Jar'
  },
  {
    id: 'punjabi-chhole-masala',
    name: 'Punjabi Chhole Masala',
    hindiName: 'पंजाबी छोले मसाला',
    category: 'Blended Masalas',
    tagline: 'Satisfy your cravings with this hearty and spicy dish',
    description: 'Authentic blend of robust whole spices that infuses chickpeas with dark caramel color, deep aroma, and royal Punjabi warmth.',
    image: '/assets/products/s6.jpg',
    featured: true,
    dishName: 'Spicy Amritsari Chhole with fluffy Bhature',
    packagingType: 'Pouch'
  },
  {
    id: 'ragda-patties-masala',
    name: 'Ragda Patties Masala',
    gujaratiName: 'રગડા પેટીશ મસાલા',
    category: 'Blended Masalas',
    tagline: 'Bursting with flavors and wholesome goodness',
    description: 'Expertly proportioned spices to create silky, flavorful white pea gravy poured over golden crisp potato patties.',
    image: '/assets/products/s2.jpg',
    featured: true,
    dishName: 'Crisp golden patties with tangy ragda',
    packagingType: 'Pouch'
  },
  {
    id: 'bhungra-bataka-masala',
    name: 'Bhungra Bataka Masala',
    gujaratiName: 'ભુંગળા બટેકા મસાલા',
    category: 'Speciality Masalas',
    tagline: 'Add a touch of homemade love to your meals',
    description: 'The legendary Saurashtra spicy potato recipe companion. Deep red, garlic-infused zest paired with golden fryum bhungra pipes.',
    image: '/assets/products/s7.jpg',
    featured: true,
    dishName: 'Iconic spicy Saurashtra Bhungra Bataka',
    packagingType: 'Pouch'
  },
  {
    id: 'paneer-tikka-masala',
    name: 'Paneer Tikka Masala',
    gujaratiName: 'પનીર ટીક્કા મસાલા',
    category: 'Blended Masalas',
    tagline: 'A satisfying and delicious vegetarian dish',
    description: 'Creamy, smoky restaurant-style gravy mix infused with aromatic whole spice extracts tailored for tender paneer cubes.',
    image: '/assets/products/s11.jpg',
    featured: false,
    dishName: 'Tandoori paneer in rich tomato gravy',
    packagingType: 'Pouch'
  },
  {
    id: 'sambhar-masala',
    name: 'Sambhar Masala',
    gujaratiName: 'સાંભાર મસાલા',
    category: 'Blended Masalas',
    tagline: 'An essential ingredient in any South Indian kitchen',
    description: 'Slow-roasted lentils, fenugreek, curry leaves, and coriander crafted to brew soul-satisfying, fragrant South Indian sambhar.',
    image: '/assets/products/s8.jpg',
    featured: false,
    dishName: 'Steaming sambhar with soft idlis and vadas',
    packagingType: 'Pouch'
  },
  {
    id: 'sandwich-masala',
    name: '2-in-1 Sandwich Masala',
    gujaratiName: 'સેન્ડવીચ મસાલો',
    category: 'Speciality Masalas',
    tagline: 'Take your sandwich from ordinary to extraordinary',
    description: 'Special dual-spice formulation giving street-style toasted cheese and vegetable sandwiches that irresistible burst of flavour.',
    image: '/assets/products/s10.jpg',
    featured: false,
    dishName: 'Crisp grilled Bombay cheese sandwiches',
    packagingType: 'Pouch'
  },
  {
    id: 'khichdi-masala',
    name: 'Khichdi Masala',
    gujaratiName: 'ખીચડી મસાલા',
    category: 'Speciality Masalas',
    tagline: 'Deliciously spiced masala for a khichdi like no other',
    description: 'Brings aromatic spice balance to warm comforting bowls of dal khichdi, turning a simple meal into an artisanal culinary delight.',
    image: '/assets/products/s5.jpg',
    featured: false,
    dishName: 'Fragrant Gujarati spiced khichdi with kadhi',
    packagingType: 'Pouch'
  },
  {
    id: 'signature-collection',
    name: 'Heritage Masala Range',
    category: 'Blended Masalas',
    tagline: 'Ghar Jaisi Baat Vahi Swad - Sorath Masala Range',
    description: 'Our celebrated everyday spectrum spanning Chilli Flakes, Oregano, Pav Bhaji, Ragda, and Dal Fry masalas.',
    image: '/assets/products/s3.jpg',
    featured: true,
    dishName: 'Complete Indian home cooking repertoire',
    packagingType: 'Pouch'
  }
];

export const BRAND_INFO = {
  name: "SORATH MASALA GRUH UDHYOG",
  shortName: "SORATH MASALA",
  tagline: "Ghar Jaisi Baat Vahi Swad",
  motto: "The Taste of Authenticity",
  phone: "9374970310",
  email: "sorathmasala54@gmail.com",
  inquiryNotice: "Order & Trade Inquiries",
  logo: "/assets/logo/sorath-masala-logo.jpg",
  pavBhajiVideo: "/assets/videos/sorath-masala-pavbhaji.mp4",
  copyrightYear: 2026,
};
