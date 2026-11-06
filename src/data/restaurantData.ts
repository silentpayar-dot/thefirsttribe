export interface MenuItem {
  id: string;
  category: 'pizza' | 'bbq' | 'fastfood' | 'traditional' | 'drinks';
  name: string;
  tagline?: string;
  description: string;
  price: number;
  displayPrice: string;
  image: string;
  isSignature?: boolean;
}

export interface MuralItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  city: string;
  rating: number;
}

export const RESTAURANT_INFO = {
  name: "The First Tribe",
  tagline: "Taste of Tradition in Peshawar",
  subtitle: "Authentic Pashtun flavors meets modern dining — crafted with tradition, served with hospitality at Army Stadium Food Court.",
  address: "Army Stadium Food Court, Peshawar Cantonment, KPK, Pakistan",
  phonePrimary: "0370-5694290",
  whatsappNumber: "923705694290",
  hours: "Monday – Sunday: 12:00 PM – 01:00 AM",
  dineIn: "Indoor Luxury Lounge, Traditional Dastarkhwan & Open-air Terrace",
  deliveryAvailable: true,
};

export const SIGNATURE_MENU: MenuItem[] = [
  {
    id: "pizza-1",
    category: "pizza",
    name: "Pizza",
    tagline: "Wood-Fired Perfection",
    description: "Classic oven-baked pepperoni with mozzarella, tomato sauce & fresh basil",
    price: 1200,
    displayPrice: "PKR 1,200",
    image: "./images/food-pizza.jpg",
    isSignature: true,
  },
  {
    id: "bbq-1",
    category: "bbq",
    name: "BBQ",
    tagline: "Charcoal Grilled Skewers",
    description: "Smoky grilled skewered beef & chicken with spices & herbs",
    price: 1800,
    displayPrice: "PKR 1,800",
    image: "./images/food-bbq.jpg",
    isSignature: true,
  },
  {
    id: "burger-1",
    category: "fastfood",
    name: "Fast Food",
    tagline: "Signature Gourmet Cheeseburger",
    description: "Classic cheeseburger with fries, lettuce, tomato & sauce",
    price: 1800,
    displayPrice: "PKR 1,800",
    image: "./images/food-burger.jpg",
    isSignature: true,
  },
  {
    id: "chicken-1",
    category: "fastfood",
    name: "Fast Food",
    tagline: "Crispy Golden Crunch",
    description: "Crispy fried chicken with seasoned fries & garlic mayo dip",
    price: 800,
    displayPrice: "PKR 800",
    image: "./images/food-chicken.jpg",
    isSignature: true,
  },
  {
    id: "drinks-1",
    category: "drinks",
    name: "Drinks",
    tagline: "Artisanal Mocktails & Refreshers",
    description: "Full Menu in Final Version",
    price: 350,
    displayPrice: "PKR 350",
    image: "./images/food-drinks.jpg",
    isSignature: true,
  },
];

export const EXPANDED_MENU: MenuItem[] = [
  ...SIGNATURE_MENU,
  {
    id: "shinwari-karahi",
    category: "traditional",
    name: "Shinwari Mutton Karahi",
    tagline: "Peshawari Heritage Masterpiece",
    description: "Cooked purely in its own lamb fat, Himalayan rock salt, fresh whole tomatoes and green chilies. No excessive spices, pure meat excellence.",
    price: 2600,
    displayPrice: "PKR 2,600 / KG",
    image: "./images/food-bbq.jpg",
  },
  {
    id: "chapli-kabab",
    category: "traditional",
    name: "Peshawari Chapli Kabab",
    tagline: "Authentic Khyber Recipe",
    description: "Minced beef infused with crushed pomegranate seeds, dry coriander, chopped mint, onions and grilled to juicy crisp perfection.",
    price: 950,
    displayPrice: "PKR 950 (2 Pcs)",
    image: "./images/food-bbq.jpg",
  },
  {
    id: "kabuli-pulao",
    category: "traditional",
    name: "Khyber Kabuli Pulao",
    tagline: "Fragrant Saffron Long Grain",
    description: "Steamed basmati rice crowned with caramelized julienned carrots, golden sultanas and tender slow-cooked beef shank.",
    price: 1400,
    displayPrice: "PKR 1,400",
    image: "./images/food-bbq.jpg",
  },
  {
    id: "pizza-special",
    category: "pizza",
    name: "Tribe Supreme Pizza",
    tagline: "Chef's Special 14-Inch",
    description: "Double smoked chicken fajita, beef pepperoni, black olives, bell peppers, jalapeños and signature creamy garlic herb drizzle.",
    price: 1950,
    displayPrice: "PKR 1,950",
    image: "./images/food-pizza.jpg",
  },
  {
    id: "burger-smash",
    category: "fastfood",
    name: "Double Tribal Smash Burger",
    tagline: "Crispy Edge Angus Beef",
    description: "Two smashed beef patties, double melted cheddar, caramelized onions, homemade secret tribal relish in toasted brioche bun.",
    price: 1650,
    displayPrice: "PKR 1,650",
    image: "./images/food-burger.jpg",
  },
  {
    id: "drink-kahwa",
    category: "drinks",
    name: "Traditional Peshawari Kahwa",
    tagline: "Authentic Green Tea",
    description: "Brewed with premium green tea leaves, green cardamom, saffron threads, served steaming with crystallised Afghan rock sugar.",
    price: 250,
    displayPrice: "PKR 250",
    image: "./images/food-drinks.jpg",
  },
  {
    id: "drink-margarita",
    category: "drinks",
    name: "Mint Margarita Cooler",
    tagline: "Icy Fresh Lemon & Mint",
    description: "Fresh crushed spearmint, zesty lemon juice, Himalayan pink salt and sparkling ice blend.",
    price: 350,
    displayPrice: "PKR 350",
    image: "./images/food-drinks.jpg",
  },
];

export const MURALS: MuralItem[] = [
  {
    id: "mural-1",
    title: "Horse Mural",
    subtitle: "Cultural Heritage Wall",
    description: "Symbolizes the noble steeds of the historic Khyber Pass, adorned in traditional Pashtun bridle and vibrant hand-woven textile geometric motifs.",
    image: "./images/mural-horse.jpg",
    details: "This signature centerpiece on our main dining hall wall is painted onto genuine textured stone masonry. It celebrates centuries of Pashtun chivalry and the caravans connecting Central Asia to the Peshawar Valley.",
  },
  {
    id: "mural-2",
    title: "Geometric Mural",
    subtitle: "Cultural Heritage Wall",
    description: "An intricate symphony of traditional tribal Kilim patterns, diamond motifs and architectural mosaic art of Khyber Pakhtunkhwa.",
    image: "./images/mural-geometric.jpg",
    details: "Inspired by centuries-old Pashtun carpet weavers and nomad tent decorations, each diamond tile represents tribal unity, hospitality, and celebration.",
  },
  {
    id: "mural-3",
    title: "Deer Mural",
    subtitle: "Wilderness Elegance",
    description: "Opulent golden arabesque damask motifs interwoven with the graceful wilderness fauna of the northern mountains.",
    image: "./images/mural-deer-gold.jpg",
    details: "Hand-finished in metallic gold leaf over deep midnight teal. It brings ancient Gandhara botanical heritage and palace court elegance into modern dining.",
  },
  {
    id: "mural-4",
    title: "Deer Mural",
    subtitle: "Wilderness Elegance",
    description: "A majestic golden stag amidst enchanted mountain foliage and sacred flora under starlit Khyber skies.",
    image: "./images/mural-deer-forest.jpg",
    details: "Captures the serenity of the Hindu Kush foothills and the enduring majesty of wildlife in Khyber Pakhtunkhwa.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    quote: "“Absolutely loved the ambiance and the pizza was amazing! Service was warm and welcoming, felt true to Pashtun hospitality.”",
    author: "Ayesha K.",
    city: "Peshawar",
    rating: 5,
  },
  {
    id: "review-2",
    quote: "“The BBQ is perfectly grilled and full of flavor. Cozy place, great for family dinner. Will come again!”",
    author: "Bilal R.",
    city: "Islamabad",
    rating: 5,
  },
  {
    id: "review-3",
    quote: "“Best fast food in the area! The cheeseburger and fries were crispy and delicious, staff were very friendly.”",
    author: "Sara M.",
    city: "Peshawar",
    rating: 5,
  },
  {
    id: "review-4",
    quote: "“Beautiful decor and excellent hospitality. The atmosphere is cozy and traditional. Highly recommend!”",
    author: "Hassan T.",
    city: "Lahore",
    rating: 5,
  },
];
