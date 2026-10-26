/**
 * CHEESY MOMENTS KAITHAL - MASTER MENU DATABASE
 * Verified against official printed menus (Menu 1, Menu 2, Menu 3) & Instagram profile
 * Address: Booth No. 182, Sector 20 HUDA, Kaithal, Haryana – 136027
 * Contact: +91 8685000092
 */

const RESTAURANT_INFO = {
  brandName: "CHEESY MOMENTS",
  brandSubtitle: "Authentic Neapolitan Style Pizza Dough",
  tagline: "GOOD FOOD. GREAT MOOD. CHEESY MOMENTS.",
  category: "Italian Restaurant",
  speciality: "Authentic Neapolitan Style Pizza Dough & Personal Giant Slices",
  address: "Booth No. 182, Sector 20 HUDA, Kaithal, Haryana – 136027",
  phone: "+91 8685000092",
  phoneRaw: "918685000092",
  whatsapp: "+91 8685000092",
  whatsappRaw: "918685000092",
  email: "cheesymomentsktl@gmail.com",
  instagram: "cheesymomentsktl",
  instagramUrl: "https://www.instagram.com/cheesymomentsktl/",
  googleMapsUrl: "https://maps.google.com/?q=Cheesy+Moments+Booth+No+182+Sector+20+HUDA+Kaithal+Haryana+136027",
  googleBusinessUrl: "https://share.google/hkNM1ZXJNPZogR8GN",
  openingHours: "10:30 AM – 10:45 PM",
  openingDays: "Open All 7 Days",
  deliveryRadius: "All Kaithal City",
  pureVeg: true
};

const MENU_CATEGORIES = [
  { id: "pizza-classic", name: "Classic Pizzas", icon: "🍕", count: 3, description: "Authentic Neapolitan dough topped with 100% real mozzarella" },
  { id: "pizza-premium", name: "Premium Pizzas", icon: "⭐", count: 4, description: "Loaded with fresh gourmet veggies & rich mozzarella" },
  { id: "pizza-paneer", name: "Ultimate Paneer Series", icon: "🧀", count: 4, description: "Cheesy delight with marinated fresh cottage cheese cubes" },
  { id: "pizza-custom", name: "Create Your Own Pizza", icon: "✨", count: 1, description: "Craft your dream pizza with unlimited fresh toppings" },
  { id: "pizza-budget", name: "Flavours Under ₹99", icon: "🔥", count: 8, description: "Pocket-friendly piping hot single & duo topping pizzas" },
  { id: "burgers", name: "Burgers", icon: "🍔", count: 7, description: "Crispy patties, melting cheese & toasted sesame brioche buns" },
  { id: "sandwiches", name: "Sandwiches", icon: "🥪", count: 3, description: "Grilled crusty bread loaded with Italian & Tandoori fillings" },
  { id: "tortillas", name: "Tortillas", icon: "🌮", count: 4, description: "Mexican toasted tortilla rolls loaded with cheese & veggies" },
  { id: "wraps", name: "Wraps", icon: "🌯", count: 5, description: "Crisp flaky roll loaded with fresh veggies & paneer" },
  { id: "fries", name: "Fries", icon: "🍟", count: 4, description: "Golden crispy french fries tossed in signature seasonings" },
  { id: "nachos", name: "Nachos", icon: "🧀", count: 2, description: "Crispy tortilla chips smothered in warm cheese sauce & salsa" },
  { id: "wheat-momos", name: "Wheat Momos", icon: "🥟", count: 7, description: "Healthy 100% whole wheat steamed dumplings with spicy chutney" },
  { id: "maida-momos", name: "Maida Momos", icon: "🥟", count: 3, description: "Classic Darjeeling style thin-wrapper momos" },
  { id: "momo-platters", name: "Momo Platters", icon: "🍱", count: 1, description: "Steamed + Kurkure + Fried momo party feast" },
  { id: "chinese", name: "Chinese & Noodles", icon: "🥢", count: 10, description: "Wok-tossed noodles, crispy chilli potatoes & manchurian" },
  { id: "rolls", name: "Rolls", icon: "🥖", count: 4, description: "Crispy spring rolls & golden crunchy cheese corn rolls" },
  { id: "pasta", name: "Pasta", icon: "🍝", count: 5, description: "Penne tossed in creamy Alfredo, tangy Marinara & Makhani sauces" },
  { id: "garlic-bread", name: "Garlic Bread", icon: "🥖", count: 3, description: "Freshly baked herb butter bread sticks with rich dip" },
  { id: "bombay-chaska", name: "Bombay Chaska", icon: "🌶️", count: 2, description: "Authentic Mumbai style Vada Pav with spicy garlic chutney" },
  { id: "salads", name: "Salads", icon: "🥗", count: 4, description: "Fresh tossed veggies, roasted corn & paneer tikka salads" },
  { id: "waffwich", name: "Waffle Waffwich", icon: "🧇", count: 4, description: "Crispy Belgian waffle sandwich oozing with chocolate & Oreo" },
  { id: "desserts", name: "Desserts", icon: "🍨", count: 2, description: "Warm waffles served with creamy vanilla or chocolate ice cream" },
  { id: "drinks", name: "Drinks & Shakes", icon: "🥤", count: 11, description: "Refreshing fruit mojitos, thick milkshakes & cold coffee" }
];

const MASTER_MENU_ITEMS = [
  // ===================== 1. CLASSIC RANGE (PIZZA) =====================
  {
    id: "cm-piz-01",
    name: "Cheesy Margherita",
    category: "pizza-classic",
    veg: true,
    bestseller: true,
    description: "Cheesy Loaded Pizza with 100% Real Mozzarella Cheese on authentic Neapolitan dough.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 99 },
      { name: "Small 7\"", price: 109 },
      { name: "Medium 10\"", price: 199 }
    ],
    defaultPrice: 99,
    image: "assets/images/hero-pizza.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-02",
    name: "Cheese n Corn",
    category: "pizza-classic",
    veg: true,
    bestseller: true,
    description: "Cheesy Loaded Pizza with 100% Real Mozzarella Cheese and Sweet Corns.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 99 },
      { name: "Small 7\"", price: 119 },
      { name: "Medium 10\"", price: 209 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/pizza-pull.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-03",
    name: "Country Side",
    category: "pizza-classic",
    veg: true,
    bestseller: false,
    description: "Onions, Capsicum, Sweet Corn and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 109 },
      { name: "Small 7\"", price: 129 },
      { name: "Medium 10\"", price: 219 }
    ],
    defaultPrice: 109,
    image: "assets/images/hero-pizza.jpg",
    addOnGroup: "pizza"
  },

  // ===================== 2. PREMIUM RANGE (PIZZA) =====================
  {
    id: "cm-piz-04",
    name: "Cheese Corn n Jalapeno",
    category: "pizza-premium",
    veg: true,
    bestseller: false,
    description: "Sweet Corn, Baby Corn, Jalapeno and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 139 },
      { name: "Small 7\"", price: 159 },
      { name: "Medium 10\"", price: 259 }
    ],
    defaultPrice: 139,
    image: "assets/images/hero-pizza.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-05",
    name: "Farmer's Choice",
    category: "pizza-premium",
    veg: true,
    bestseller: true,
    description: "Onions, Capsicum, Sweet Corn, Mushroom and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 139 },
      { name: "Small 7\"", price: 159 },
      { name: "Medium 10\"", price: 259 }
    ],
    defaultPrice: 139,
    image: "assets/images/authentic/pizza-pan.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-06",
    name: "Deluxe Veggie",
    category: "pizza-premium",
    veg: true,
    bestseller: false,
    description: "Onions, Capsicum, Baby Corn, Red Paprika, Mushroom and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 149 },
      { name: "Small 7\"", price: 179 },
      { name: "Medium 10\"", price: 299 }
    ],
    defaultPrice: 149,
    image: "assets/images/hero-pizza.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-07",
    name: "Burn to Hell",
    category: "pizza-premium",
    veg: true,
    spicy: true,
    bestseller: true,
    description: "Jalapeno, Red Paprika, Mushroom, Black Olives, Capsicum and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 169 },
      { name: "Small 7\"", price: 199 },
      { name: "Medium 10\"", price: 319 }
    ],
    defaultPrice: 169,
    image: "assets/images/hero-pizza.jpg",
    addOnGroup: "pizza"
  },

  // ===================== 3. ULTIMATE PANEER SERIES (PIZZA) =====================
  {
    id: "cm-piz-08",
    name: "Achari Paneer Pizza",
    category: "pizza-paneer",
    veg: true,
    bestseller: false,
    description: "Achari Paneer Chunks, Onion, Capsicum, Jalapeno and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 189 },
      { name: "Small 7\"", price: 209 },
      { name: "Medium 10\"", price: 349 }
    ],
    defaultPrice: 189,
    image: "assets/images/paneer-pizza.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-09",
    name: "Paneer Tikka Pizza",
    category: "pizza-paneer",
    veg: true,
    bestseller: true,
    description: "Paneer Tikka Chunks, Capsicum, Red Paprika and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 189 },
      { name: "Small 7\"", price: 209 },
      { name: "Medium 10\"", price: 349 }
    ],
    defaultPrice: 189,
    image: "assets/images/paneer-pizza.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-10",
    name: "Makhani Paneer Pizza",
    category: "pizza-paneer",
    veg: true,
    bestseller: true,
    description: "Makhani Paneer Chunks, Onion, Sweet Corns, Black Olives and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 189 },
      { name: "Small 7\"", price: 209 },
      { name: "Medium 10\"", price: 349 }
    ],
    defaultPrice: 189,
    image: "assets/images/paneer-pizza.jpg",
    addOnGroup: "pizza"
  },
  {
    id: "cm-piz-11",
    name: "Tandoori Paneer Pizza",
    category: "pizza-paneer",
    veg: true,
    bestseller: false,
    description: "Tandoori Paneer Chunks, Onion, Capsicum, Baby Corn and 100% Real Mozzarella Cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 189 },
      { name: "Small 7\"", price: 209 },
      { name: "Medium 10\"", price: 349 }
    ],
    defaultPrice: 189,
    image: "assets/images/paneer-pizza.jpg",
    addOnGroup: "pizza"
  },

  // ===================== 4. CREATE YOUR OWN PIZZA =====================
  {
    id: "cm-piz-12",
    name: "Create Your Own Pizza",
    category: "pizza-custom",
    veg: true,
    bestseller: true,
    description: "Choose Unlimited Toppings! Handcrafted on authentic Neapolitan dough with real mozzarella.",
    pricingType: "sizes",
    sizes: [
      { name: "Personal Giant Slice", price: 199 },
      { name: "Small 7\"", price: 249 },
      { name: "Medium 10\"", price: 399 }
    ],
    defaultPrice: 199,
    image: "assets/images/hero-pizza.jpg",
    addOnGroup: "pizza"
  },

  // ===================== 5. BLASTING FLAVOURS UNDER 99 =====================
  {
    id: "cm-piz-13",
    name: "Onion Pizza",
    category: "pizza-budget",
    veg: true,
    bestseller: true,
    description: "Classic crunchy onion on rich tomato sauce and bubbling mozzarella cheese.",
    pricingType: "fixed",
    price: 69,
    defaultPrice: 69,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-14",
    name: "Capsicum Pizza",
    category: "pizza-budget",
    veg: true,
    bestseller: false,
    description: "Crispy green capsicum slices over melted cheese and tangy herb sauce.",
    pricingType: "fixed",
    price: 85,
    defaultPrice: 85,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-15",
    name: "Sweet Corn Pizza",
    category: "pizza-budget",
    veg: true,
    bestseller: true,
    description: "Golden juicy sweet corns with rich mozzarella on crispy base.",
    pricingType: "fixed",
    price: 89,
    defaultPrice: 89,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-16",
    name: "Onion and Capsicum Pizza",
    category: "pizza-budget",
    veg: true,
    bestseller: false,
    description: "Flavourful duo of fresh diced onions and crispy green capsicum.",
    pricingType: "fixed",
    price: 89,
    defaultPrice: 89,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-17",
    name: "Pizza Al Funghi (Mushroom Pizza)",
    category: "pizza-budget",
    veg: true,
    bestseller: true,
    description: "Fresh sliced button mushrooms with aromatic Italian herbs and mozzarella.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-18",
    name: "Sweet and Tangy",
    category: "pizza-budget",
    veg: true,
    bestseller: false,
    description: "Sweet Corn and Tangy Jalapeno with melted mozzarella cheese.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-19",
    name: "Fiery Paprika and Jalapeno",
    category: "pizza-budget",
    veg: true,
    spicy: true,
    bestseller: false,
    description: "Spicy red paprika, sliced pickled jalapenos, and mozzarella.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/pizza-pan.jpg"
  },
  {
    id: "cm-piz-20",
    name: "Paneer and Corn",
    category: "pizza-budget",
    veg: true,
    bestseller: true,
    description: "Soft paneer cubes and sweet corns loaded with real mozzarella.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/pizza-pan.jpg"
  },

  // ===================== 6. BURGERS =====================
  {
    id: "cm-bgr-01",
    name: "Crispy Potato Burger",
    category: "burgers",
    veg: true,
    bestseller: true,
    description: "Golden fried seasoned potato patty with secret sauces in a soft toasted bun.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 35 },
      { name: "Meal (Fries + Coke)", price: 105 }
    ],
    defaultPrice: 35,
    image: "assets/images/authentic/burger.jpg"
  },
  {
    id: "cm-bgr-02",
    name: "Crunchy Veggie Burger",
    category: "burgers",
    veg: true,
    bestseller: false,
    description: "Mixed vegetable patty crusted to perfection with lettuce and cream mayo.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 49 },
      { name: "Meal (Fries + Coke)", price: 119 }
    ],
    defaultPrice: 49,
    image: "assets/images/authentic/burger.jpg"
  },
  {
    id: "cm-bgr-03",
    name: "Veggie Cheesy Burger",
    category: "burgers",
    veg: true,
    bestseller: true,
    description: "Crunchy vegetable patty crowned with a thick melted cheese slice.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 69 },
      { name: "Meal (Fries + Coke)", price: 139 }
    ],
    defaultPrice: 69,
    image: "assets/images/cheesy-burger.jpg"
  },
  {
    id: "cm-bgr-04",
    name: "Double Decker Burger",
    category: "burgers",
    veg: true,
    bestseller: false,
    description: "Two crispy patties stacked high with special dressings and veggies.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 79 },
      { name: "Meal (Fries + Coke)", price: 149 }
    ],
    defaultPrice: 79,
    image: "assets/images/cheesy-burger.jpg"
  },
  {
    id: "cm-bgr-05",
    name: "Double Decker Cheesy Burger",
    category: "burgers",
    veg: true,
    bestseller: true,
    description: "Double the patties, double the melted cheese layers, maximum satisfaction.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 95 },
      { name: "Meal (Fries + Coke)", price: 165 }
    ],
    defaultPrice: 95,
    image: "assets/images/cheesy-burger.jpg"
  },
  {
    id: "cm-bgr-06",
    name: "Farm Spicy Paneer Burger",
    category: "burgers",
    veg: true,
    spicy: true,
    bestseller: false,
    description: "Marinated spicy cottage cheese patty with farm fresh lettuce and spicy mayo.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 109 },
      { name: "Meal (Fries + Coke)", price: 179 }
    ],
    defaultPrice: 109,
    image: "assets/images/cheesy-burger.jpg"
  },
  {
    id: "cm-bgr-07",
    name: "Paneer Cheesy Burger",
    category: "burgers",
    veg: true,
    bestseller: true,
    description: "Crispy fried paneer block dripping with liquid melted cheese.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 125 },
      { name: "Meal (Fries + Coke)", price: 195 }
    ],
    defaultPrice: 125,
    image: "assets/images/cheesy-burger.jpg"
  },

  // ===================== 7. SANDWICH =====================
  {
    id: "cm-sdw-01",
    name: "Italiano Sandwich",
    category: "sandwiches",
    veg: true,
    bestseller: false,
    description: "Grilled sandwich infused with Italian herbs, crunchy vegetables and melted cheese.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 79 },
      { name: "Meal (Fries + Coke)", price: 149 }
    ],
    defaultPrice: 79,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-sdw-02",
    name: "Tandoori Sandwich",
    category: "sandwiches",
    veg: true,
    bestseller: true,
    description: "Smoky tandoori sauce with grilled fillings and mozzarella cheese.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 89 },
      { name: "Meal (Fries + Coke)", price: 159 }
    ],
    defaultPrice: 89,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-sdw-03",
    name: "Corn 'n' Cheese Sandwich",
    category: "sandwiches",
    veg: true,
    bestseller: true,
    description: "Loaded sweet corn kernels and overflowing melted cheese blend.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 99 },
      { name: "Meal (Fries + Coke)", price: 169 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/wrap.jpg"
  },

  // ===================== 8. TORTILLAS =====================
  {
    id: "cm-trt-01",
    name: "Veggie Mexican Tortillas",
    category: "tortillas",
    veg: true,
    bestseller: false,
    description: "Toasted flour tortilla folded with Mexican seasoned vegetables and salsa.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 85 },
      { name: "Meal (Fries + Coke)", price: 155 }
    ],
    defaultPrice: 85,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-trt-02",
    name: "Mexican Cheesy Tortillas",
    category: "tortillas",
    veg: true,
    bestseller: true,
    description: "Spicy Mexican vegetable mix blanketed in generous melted cheese.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 99 },
      { name: "Meal (Fries + Coke)", price: 169 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-trt-03",
    name: "Paneer King Tortillas",
    category: "tortillas",
    veg: true,
    bestseller: false,
    description: "Charred paneer chunks, chipotle dressing, onions and crisp capsicum.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 129 },
      { name: "Meal (Fries + Coke)", price: 199 }
    ],
    defaultPrice: 129,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-trt-04",
    name: "Paneer Cheesy Tortillas",
    category: "tortillas",
    veg: true,
    bestseller: true,
    description: "Royal paneer cubes smothered in rich melted cheese and Mexican sauce.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 145 },
      { name: "Meal (Fries + Coke)", price: 215 }
    ],
    defaultPrice: 145,
    image: "assets/images/authentic/wrap.jpg"
  },

  // ===================== 9. WRAPS =====================
  {
    id: "cm-wrp-01",
    name: "Crispy Aloo Tikki Wrap",
    category: "wraps",
    veg: true,
    bestseller: false,
    description: "Crunchy potato tikki rolled with onions, lettuce and tangy mint sauce.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 85 },
      { name: "Meal (Fries + Coke)", price: 155 }
    ],
    defaultPrice: 85,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-wrp-02",
    name: "Veggie Maddie Wrap",
    category: "wraps",
    veg: true,
    bestseller: false,
    description: "Special seasoned vegetable cutlet with garlic mayo and shredded greens.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 99 },
      { name: "Meal (Fries + Coke)", price: 169 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-wrp-03",
    name: "Veggie Cheesy Wrap",
    category: "wraps",
    veg: true,
    bestseller: true,
    description: "Golden fried vegetable patty rolled with molten cheese sauce and crisp veggies.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 115 },
      { name: "Meal (Fries + Coke)", price: 185 }
    ],
    defaultPrice: 115,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-wrp-04",
    name: "Fiery Paneer Wrap",
    category: "wraps",
    veg: true,
    spicy: true,
    bestseller: false,
    description: "Spicy marinated paneer strips rolled with hot schezwan sauce and onions.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 135 },
      { name: "Meal (Fries + Coke)", price: 205 }
    ],
    defaultPrice: 135,
    image: "assets/images/authentic/wrap.jpg"
  },
  {
    id: "cm-wrp-05",
    name: "Paneer Cheesy Wrap",
    category: "wraps",
    veg: true,
    bestseller: true,
    description: "Succulent paneer with double cheese layer and creamy Italian dressing.",
    pricingType: "portion",
    portions: [
      { name: "Single", price: 149 },
      { name: "Meal (Fries + Coke)", price: 219 }
    ],
    defaultPrice: 149,
    image: "assets/images/authentic/wrap.jpg"
  },

  // ===================== 10. FRIES =====================
  {
    id: "cm-frs-01",
    name: "Classic Salted Fries",
    category: "fries",
    veg: true,
    bestseller: false,
    description: "Golden crisp french fries seasoned with sea salt.",
    pricingType: "fixed",
    price: 75,
    defaultPrice: 75,
    image: "assets/images/authentic/fries.jpg"
  },
  {
    id: "cm-frs-02",
    name: "Peri Peri Fries",
    category: "fries",
    veg: true,
    spicy: true,
    bestseller: true,
    description: "Crispy french fries tossed in spicy African Peri Peri seasoning.",
    pricingType: "fixed",
    price: 85,
    defaultPrice: 85,
    image: "assets/images/authentic/fries.jpg"
  },
  {
    id: "cm-frs-03",
    name: "Cheesy Fries",
    category: "fries",
    veg: true,
    bestseller: true,
    description: "Golden fries drizzled with hot melted cheddar and mozzarella cheese sauce.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/fries.jpg"
  },
  {
    id: "cm-frs-04",
    name: "Peri Peri Cheesy Fries",
    category: "fries",
    veg: true,
    spicy: true,
    bestseller: true,
    description: "Spicy Peri Peri fries drenched in molten cheese. Absolute customer favourite!",
    pricingType: "fixed",
    price: 109,
    defaultPrice: 109,
    image: "assets/images/authentic/fries.jpg"
  },

  // ===================== 11. BOMBAY CHASKA =====================
  {
    id: "cm-bmb-01",
    name: "Classic Vada Pav (2Pc.)",
    category: "bombay-chaska",
    veg: true,
    bestseller: false,
    description: "2 Pieces of authentic Mumbai style batata vada inside soft pav with dry garlic chutney.",
    pricingType: "fixed",
    price: 89,
    defaultPrice: 89,
    image: "assets/images/authentic/vadapav.jpg"
  },
  {
    id: "cm-bmb-02",
    name: "Cheesy Vada Pav (2Pc.)",
    category: "bombay-chaska",
    veg: true,
    bestseller: true,
    description: "2 Pieces of crispy spiced potato vada layered with melted cheese slice in buttery toasted pav.",
    pricingType: "fixed",
    price: 119,
    defaultPrice: 119,
    image: "assets/images/authentic/vadapav.jpg"
  },

  // ===================== 12. NACHOS =====================
  {
    id: "cm-nch-01",
    name: "Nachos With Salsa",
    category: "nachos",
    veg: true,
    bestseller: false,
    description: "Crispy golden corn tortilla chips served with spicy fresh tomato salsa dip.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/nachos.jpg"
  },
  {
    id: "cm-nch-02",
    name: "Nachos Overloaded",
    category: "nachos",
    veg: true,
    bestseller: true,
    description: "Crispy tortilla chips smothered in warm cheese sauce, diced veggies, jalapenos and salsa.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/loaded-nachos.jpg"
  },

  // ===================== 13. WHEAT MOMO =====================
  {
    id: "cm-wmo-01",
    name: "Veggie Momo (Wheat)",
    category: "wheat-momos",
    veg: true,
    bestseller: true,
    description: "100% whole wheat outer layer filled with finely chopped garden fresh veggies.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 89 },
      { name: "9 Pc", price: 119 }
    ],
    defaultPrice: 89,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },
  {
    id: "cm-wmo-02",
    name: "Paneer Momo (Wheat)",
    category: "wheat-momos",
    veg: true,
    bestseller: true,
    description: "Steamed whole wheat dumplings stuffed with spiced cottage cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 99 },
      { name: "9 Pc", price: 129 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },
  {
    id: "cm-wmo-03",
    name: "Mushroom Momo (Wheat)",
    category: "wheat-momos",
    veg: true,
    bestseller: false,
    description: "Juicy minced mushrooms and herbs encased in healthy wheat wrapping.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 99 },
      { name: "9 Pc", price: 129 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },
  {
    id: "cm-wmo-04",
    name: "Spinach Corn Momo (Wheat)",
    category: "wheat-momos",
    veg: true,
    bestseller: false,
    description: "Nutritious fresh spinach leaves and sweet corn in whole wheat dumpling.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 109 },
      { name: "9 Pc", price: 139 }
    ],
    defaultPrice: 109,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },
  {
    id: "cm-wmo-05",
    name: "Steamed Cheese Mushroom Momo",
    category: "wheat-momos",
    veg: true,
    bestseller: true,
    description: "Tender whole wheat momos bursting with sauteed mushrooms and molten cheese.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 109 },
      { name: "9 Pc", price: 139 }
    ],
    defaultPrice: 109,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },
  {
    id: "cm-wmo-06",
    name: "Steamed Tandoori Paneer Momo",
    category: "wheat-momos",
    veg: true,
    bestseller: true,
    description: "Tandoori seasoned paneer chunks with aromatic spices in whole wheat casing.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 109 },
      { name: "9 Pc", price: 139 }
    ],
    defaultPrice: 109,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },
  {
    id: "cm-wmo-07",
    name: "Veg Exotic Sampler (Choose Any)",
    category: "wheat-momos",
    veg: true,
    bestseller: true,
    description: "Mix & match your favourite whole wheat momo flavours in one platter.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 119 },
      { name: "9 Pc", price: 149 }
    ],
    defaultPrice: 119,
    image: "assets/images/authentic/momos.jpg",
    addOnGroup: "wheat-momo"
  },

  // ===================== 14. MAIDA MOMO =====================
  {
    id: "cm-mmo-01",
    name: "Veg Darjeeling Momo",
    category: "maida-momos",
    veg: true,
    bestseller: true,
    description: "Authentic Darjeeling street style steamed momos with spicy red chilli garlic chutney.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 89 },
      { name: "9 Pc", price: 119 }
    ],
    defaultPrice: 89,
    image: "assets/images/authentic/steamed-momos.jpg",
    addOnGroup: "maida-momo"
  },
  {
    id: "cm-mmo-02",
    name: "Paneer Darjeeling Momo",
    category: "maida-momos",
    veg: true,
    bestseller: true,
    description: "Darjeeling style thin wrapper dumplings stuffed with crumbled paneer and herbs.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 99 },
      { name: "9 Pc", price: 129 }
    ],
    defaultPrice: 99,
    image: "assets/images/authentic/steamed-momos.jpg",
    addOnGroup: "maida-momo"
  },
  {
    id: "cm-mmo-03",
    name: "Peri Peri Paneer Darjeeling Momo",
    category: "maida-momos",
    veg: true,
    spicy: true,
    bestseller: false,
    description: "Steamed paneer momos dusted with fiery peri peri seasoning.",
    pricingType: "sizes",
    sizes: [
      { name: "6 Pc", price: 109 },
      { name: "9 Pc", price: 139 }
    ],
    defaultPrice: 109,
    image: "assets/images/authentic/steamed-momos.jpg",
    addOnGroup: "maida-momo"
  },

  // ===================== 15. MOMO PLATTER =====================
  {
    id: "cm-mmo-plt",
    name: "Momo Platter (12 Pcs)",
    category: "momo-platters",
    veg: true,
    bestseller: true,
    description: "Mega celebration platter: 4 Steamed Momo + 4 Kurkure Momo + 4 Fried Momo served with dips.",
    pricingType: "fixed",
    price: 249,
    defaultPrice: 249,
    image: "assets/images/authentic/momos.jpg"
  },

  // ===================== 16. CHINESE & NOODLES =====================
  {
    id: "cm-chn-01",
    name: "Veg. Noodles",
    category: "chinese",
    veg: true,
    bestseller: false,
    description: "Stir fried noodles with crunchy shredded vegetables and aromatic soy seasoning.",
    pricingType: "fixed",
    price: 90,
    defaultPrice: 90,
    image: "assets/images/authentic/noodles.jpg"
  },
  {
    id: "cm-chn-02",
    name: "Chilly Garlic Noodles",
    category: "chinese",
    veg: true,
    spicy: true,
    bestseller: true,
    description: "Wok-tossed noodles with roasted garlic and spicy red chilli paste.",
    pricingType: "fixed",
    price: 120,
    defaultPrice: 120,
    image: "assets/images/authentic/noodles.jpg"
  },
  {
    id: "cm-chn-03",
    name: "Hakka Noodles",
    category: "chinese",
    veg: true,
    bestseller: true,
    description: "Classic Indo-Chinese street style tossed noodles with cabbage, carrots and bell peppers.",
    pricingType: "fixed",
    price: 150,
    defaultPrice: 150,
    image: "assets/images/authentic/noodles.jpg"
  },
  {
    id: "cm-chn-04",
    name: "Chilly Potato",
    category: "chinese",
    veg: true,
    spicy: true,
    bestseller: false,
    description: "Crispy fried potato fingers glazed in spicy chilli garlic sauce with onions and capsicum.",
    pricingType: "fixed",
    price: 100,
    defaultPrice: 100,
    image: "assets/images/authentic/noodles.jpg"
  },
  {
    id: "cm-chn-05",
    name: "Honey Chilly Potato",
    category: "chinese",
    veg: true,
    bestseller: true,
    description: "Crispy sesame coated potato fingers tossed in a sweet and spicy honey chilli glaze.",
    pricingType: "fixed",
    price: 120,
    defaultPrice: 120,
    image: "assets/images/authentic/noodles.jpg"
  },
  {
    id: "cm-chn-06",
    name: "Crispy Corn",
    category: "chinese",
    veg: true,
    bestseller: false,
    description: "Crunchy batter fried sweet corn kernels tossed with peppers and chatpata spices.",
    pricingType: "fixed",
    price: 120,
    defaultPrice: 120,
    image: "assets/images/authentic/noodles.jpg"
  },
  {
    id: "cm-chn-07",
    name: "Manchurian Dry",
    category: "chinese",
    veg: true,
    bestseller: true,
    description: "Crispy vegetable dumplings tossed in dark soya, garlic and scallion sauce.",
    pricingType: "fixed",
    price: 130,
    defaultPrice: 130,
    image: "assets/images/authentic/manchurian.jpg"
  },
  {
    id: "cm-chn-08",
    name: "Manchurian Gravy",
    category: "chinese",
    veg: true,
    bestseller: false,
    description: "Vegetable dumplings simmering in a savoury, tangy Indo-Chinese gravy.",
    pricingType: "fixed",
    price: 150,
    defaultPrice: 150,
    image: "assets/images/authentic/manchurian.jpg"
  },
  {
    id: "cm-chn-09",
    name: "Cheese Chilly",
    category: "chinese",
    veg: true,
    spicy: true,
    bestseller: true,
    description: "Batter-fried paneer cubes tossed with diced capsicum, onions and fiery green chillies.",
    pricingType: "fixed",
    price: 200,
    defaultPrice: 200,
    image: "assets/images/authentic/manchurian.jpg"
  },
  {
    id: "cm-chn-10",
    name: "Noodles with Manchurian (Combo)",
    category: "chinese",
    veg: true,
    bestseller: true,
    description: "Popular meal combo: steaming Hakka noodles served with rich vegetable Manchurian.",
    pricingType: "fixed",
    price: 170,
    defaultPrice: 170,
    image: "assets/images/authentic/noodles.jpg"
  },

  // ===================== 17. ROLLS =====================
  {
    id: "cm-rol-01",
    name: "Veg. Spring Rolls",
    category: "rolls",
    veg: true,
    bestseller: false,
    description: "Golden fried crispy pastry rolls packed with stir fried Chinese veggies.",
    pricingType: "fixed",
    price: 90,
    defaultPrice: 90,
    image: "assets/images/authentic/spring-rolls.jpg"
  },
  {
    id: "cm-rol-02",
    name: "Kurkure Veg. Spring Rolls",
    category: "rolls",
    veg: true,
    bestseller: true,
    description: "Ultra-crispy coated spring rolls with a crunchy outer crust.",
    pricingType: "fixed",
    price: 130,
    defaultPrice: 130,
    image: "assets/images/authentic/spring-rolls.jpg"
  },
  {
    id: "cm-rol-03",
    name: "Cheese Corn Roll",
    category: "rolls",
    veg: true,
    bestseller: false,
    description: "Crispy rolls stuffed with gooey melted cheese and sweet corns.",
    pricingType: "fixed",
    price: 120,
    defaultPrice: 120,
    image: "assets/images/authentic/spring-rolls.jpg"
  },
  {
    id: "cm-rol-04",
    name: "Kurkure Cheese Corn Rolls",
    category: "rolls",
    veg: true,
    bestseller: true,
    description: "Cornflakes/kurkure crusted rolls loaded with cheese and sweet corn.",
    pricingType: "fixed",
    price: 160,
    defaultPrice: 160,
    image: "assets/images/authentic/spring-rolls.jpg"
  },

  // ===================== 18. PASTA =====================
  {
    id: "cm-pst-01",
    name: "Alfredo Pasta (White Sauce)",
    category: "pasta",
    veg: true,
    bestseller: true,
    description: "Penne pasta tossed in rich, creamy parmesan & mozzarella white cheese sauce with Italian herbs.",
    pricingType: "fixed",
    price: 150,
    defaultPrice: 150,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-pst-02",
    name: "Marinara Pasta (Red Sauce)",
    category: "pasta",
    veg: true,
    bestseller: false,
    description: "Penne pasta simmered in authentic tangy Italian tomato-basil marinara sauce.",
    pricingType: "fixed",
    price: 150,
    defaultPrice: 150,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-pst-03",
    name: "Pink Sauce Masta (Mix Sauce)",
    category: "pasta",
    veg: true,
    bestseller: true,
    description: "Best of both worlds: silky blend of creamy Alfredo and tangy Marinara with fresh veggies.",
    pricingType: "fixed",
    price: 180,
    defaultPrice: 180,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-pst-04",
    name: "Tandoori Gravy Pasta",
    category: "pasta",
    veg: true,
    spicy: true,
    bestseller: false,
    description: "Indian fusion penne pasta tossed in smoky tandoori spiced cheese gravy.",
    pricingType: "fixed",
    price: 180,
    defaultPrice: 180,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-pst-05",
    name: "Makhani Gravy Pasta",
    category: "pasta",
    veg: true,
    bestseller: false,
    description: "Rich buttery makhani sauce infused with Italian pasta and sweet corn.",
    pricingType: "fixed",
    price: 180,
    defaultPrice: 180,
    image: "assets/images/authentic/pasta.jpg"
  },

  // ===================== 19. GARLIC BREAD =====================
  {
    id: "cm-gbd-01",
    name: "Garlic Bread Sticks with Dip",
    category: "garlic-bread",
    veg: true,
    bestseller: false,
    description: "Freshly baked herb butter infused bread sticks served with creamy cheesy dip.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/garlic-bread.jpg"
  },
  {
    id: "cm-gbd-02",
    name: "Cheesy Garlic Bread Sticks with Dip",
    category: "garlic-bread",
    veg: true,
    bestseller: true,
    description: "Freshly baked bread sticks smothered in bubbling mozzarella cheese with dip.",
    pricingType: "fixed",
    price: 119,
    defaultPrice: 119,
    image: "assets/images/authentic/garlic-bread.jpg"
  },
  {
    id: "cm-gbd-03",
    name: "Stuffed Garlic Bread Sticks with Dip",
    category: "garlic-bread",
    veg: true,
    bestseller: true,
    description: "Baked bread stuffed with sweet corn, jalapenos and overflowing mozzarella cheese.",
    pricingType: "fixed",
    price: 139,
    defaultPrice: 139,
    image: "assets/images/authentic/garlic-bread.jpg"
  },

  // ===================== 20. SALADS =====================
  {
    id: "cm-sld-01",
    name: "Fresh Veggies Salad",
    category: "salads",
    veg: true,
    bestseller: false,
    description: "Crispy iceberg lettuce, cucumber, tomatoes, olives and light vinaigrette dressing.",
    pricingType: "fixed",
    price: 120,
    defaultPrice: 120,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-sld-02",
    name: "Roasted Baby Corn Salad",
    category: "salads",
    veg: true,
    bestseller: false,
    description: "Char-roasted baby corn tossed with bell peppers and tangy lime pepper dressing.",
    pricingType: "fixed",
    price: 140,
    defaultPrice: 140,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-sld-03",
    name: "Roasted Mushroom Salad",
    category: "salads",
    veg: true,
    bestseller: false,
    description: "Herb sauteed mushrooms with greens and balsamic herb dressing.",
    pricingType: "fixed",
    price: 150,
    defaultPrice: 150,
    image: "assets/images/authentic/pasta.jpg"
  },
  {
    id: "cm-sld-04",
    name: "Paneer Tikka Salad",
    category: "salads",
    veg: true,
    bestseller: true,
    description: "Grilled tandoori paneer cubes on a bed of crisp greens, onions and mint dressing.",
    pricingType: "fixed",
    price: 160,
    defaultPrice: 160,
    image: "assets/images/paneer-pizza.jpg"
  },

  // ===================== 21. WAFFLE WAFFWICH =====================
  {
    id: "cm-wff-01",
    name: "Chocolate Delight Waffwich",
    category: "waffwich",
    veg: true,
    bestseller: true,
    description: "Crispy Belgian waffle sandwich oozing with melted Belgian milk chocolate.",
    pricingType: "fixed",
    price: 89,
    defaultPrice: 89,
    image: "assets/images/waffle-dessert.jpg"
  },
  {
    id: "cm-wff-02",
    name: "Oreo Waffwich",
    category: "waffwich",
    veg: true,
    bestseller: true,
    description: "Crispy waffle sandwich stuffed with dark chocolate cream and crunchy crushed Oreos.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/waffle-dessert.jpg"
  },
  {
    id: "cm-wff-03",
    name: "Kit-Kat Waffwich",
    category: "waffwich",
    veg: true,
    bestseller: true,
    description: "Golden waffle loaded with chocolate fudge and crunchy Kit-Kat chocolate bars.",
    pricingType: "fixed",
    price: 109,
    defaultPrice: 109,
    image: "assets/images/waffle-dessert.jpg"
  },
  {
    id: "cm-wff-04",
    name: "Ice Cream Waffwich (Vanilla / Chocolate)",
    category: "waffwich",
    veg: true,
    bestseller: true,
    description: "Hot crispy waffle sandwich paired with cold creamy scoop of Vanilla or Chocolate ice cream.",
    pricingType: "fixed",
    price: 119,
    defaultPrice: 119,
    image: "assets/images/waffle-dessert.jpg"
  },

  // ===================== 22. DESSERTS =====================
  {
    id: "cm-dst-01",
    name: "Junior Waffle Dessert (Vanilla / Chocolate)",
    category: "desserts",
    veg: true,
    bestseller: false,
    description: "Single golden waffle topped with melted chocolate sauce and choice of Vanilla or Chocolate ice cream scoop.",
    pricingType: "fixed",
    price: 89,
    defaultPrice: 89,
    image: "assets/images/waffle-dessert.jpg"
  },
  {
    id: "cm-dst-02",
    name: "Jumbo Waffle Dessert",
    category: "desserts",
    veg: true,
    bestseller: true,
    description: "Double Belgian waffle loaded with assorted chocolates, Oreos, Kit-Kat and two scoops of ice cream.",
    pricingType: "fixed",
    price: 149,
    defaultPrice: 149,
    image: "assets/images/waffle-dessert.jpg"
  },

  // ===================== 23. DRINKS & SHAKES =====================
  {
    id: "cm-drk-01",
    name: "Cold Drink",
    category: "drinks",
    veg: true,
    bestseller: false,
    description: "Chilled bottled soft drink served at MRP.",
    pricingType: "fixed",
    price: 40,
    priceLabel: "on MRP (₹40)",
    defaultPrice: 40,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-02",
    name: "Masala Coke",
    category: "drinks",
    veg: true,
    bestseller: false,
    description: "Chilled Coca-Cola infused with roasted cumin, black salt and fresh lemon juice.",
    pricingType: "fixed",
    price: 49,
    defaultPrice: 49,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-03",
    name: "Mojito (Mint / Watermelon / Blueberry)",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Refreshing fizzy mocktail muddled with fresh mint, lime and your choice of flavour.",
    pricingType: "fixed",
    price: 69,
    defaultPrice: 69,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-04",
    name: "Mojito (Mango Spicy / Chilly Guava)",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Zesty tropical mocktail with a chatpata spicy rim. Mint, lime and spicy kick.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-05",
    name: "Spl. Fruit Beer",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Special non-alcoholic fruit beer brewed with sparkling fruit juices and malt flavour.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-06",
    name: "Oreo Shake",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Thick chilled milkshake blended with real Oreo cookies and chocolate drizzle.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-07",
    name: "Strawberry Shake",
    category: "drinks",
    veg: true,
    bestseller: false,
    description: "Creamy milkshake blended with sweet strawberries and rich ice cream.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-08",
    name: "Butterscotch Shake",
    category: "drinks",
    veg: true,
    bestseller: false,
    description: "Rich milkshake with caramelized butterscotch praline and butterscotch sauce.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-09",
    name: "Cold Coffee",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Creamy chilled espresso blended with full-cream milk and vanilla ice cream.",
    pricingType: "fixed",
    price: 79,
    defaultPrice: 79,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-10",
    name: "Cold Coffee (Hazelnut / Caramel)",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Rich cold coffee infused with gourmet roasted Hazelnut or buttery Caramel syrup.",
    pricingType: "fixed",
    price: 89,
    defaultPrice: 89,
    image: "assets/images/authentic/drinks.jpg"
  },
  {
    id: "cm-drk-11",
    name: "Kit-Kat Shake",
    category: "drinks",
    veg: true,
    bestseller: true,
    description: "Decadent thick milkshake loaded with crushed Kit-Kat wafers and fudge sauce.",
    pricingType: "fixed",
    price: 99,
    defaultPrice: 99,
    image: "assets/images/authentic/drinks.jpg"
  }
];

// Add-on options as specified in the original printed menus
const MENU_ADD_ONS = {
  pizza: [
    { id: "ao-piz-base", name: "Buttery Pan Base", smallPrice: 20, mediumPrice: 30, price: 20 },
    { id: "ao-piz-top", name: "Any Toppings", smallPrice: 20, mediumPrice: 30, price: 20 },
    { id: "ao-piz-excheese", name: "Extra Cheese", smallPrice: 40, mediumPrice: 60, price: 40 },
    { id: "ao-piz-burst", name: "Cheese Burst", smallPrice: 60, mediumPrice: 100, price: 60 }
  ],
  "wheat-momo": [
    { id: "ao-wmo-cheese", name: "Cheese Overloaded (Wheat)", p6Price: 30, p9Price: 40, price: 30 },
    { id: "ao-wmo-kurkure", name: "Kurkure (Wheat)", p6Price: 40, p9Price: 50, price: 40 },
    { id: "ao-mmo-fried", name: "Fried (Maida)", p6Price: 20, p9Price: 30, price: 20 },
    { id: "ao-mmo-kurkure", name: "Kurkure (Maida)", p6Price: 40, p9Price: 50, price: 40 }
  ],
  "maida-momo": [
    { id: "ao-mmo-fried", name: "Fried (Maida)", p6Price: 20, p9Price: 30, price: 20 },
    { id: "ao-mmo-kurkure", name: "Kurkure (Maida)", p6Price: 40, p9Price: 50, price: 40 },
    { id: "ao-wmo-cheese", name: "Cheese Overloaded", p6Price: 30, p9Price: 40, price: 30 }
  ]
};

// Promotional offers from reference banner / Instagram
const SPECIAL_OFFERS = [
  {
    id: "off-01",
    tag: "2ND YEAR ANNIVERSARY SPECIAL",
    title: "50% OFF ON ALL MOMOS",
    subtitle: "Dine-in / select days special festival offer",
    desc: "Celebrate with Cheesy Moments! Enjoy 50% discount on any Wheat or Maida momo platter.",
    code: "CHEESY50",
    badge: "50% OFF",
    active: true
  },
  {
    id: "off-02",
    tag: "SUGAR RUSH DELIGHT",
    title: "ANY WAFFLE @ JUST ₹99",
    subtitle: "Crispy Belgian waffle with gourmet chocolate sauce",
    desc: "Treat your sweet tooth! Indulge in warm Oreo, Kit-Kat or Chocolate waffle waffwich at flat ₹99.",
    code: "WAFFLE99",
    badge: "FLAT ₹99",
    active: true
  },
  {
    id: "off-03",
    tag: "KAITHAL FIRST",
    title: "PERSONAL GIANT SLICE FROM ₹99",
    subtitle: "Authentic Neapolitan Dough for the first time in Kaithal",
    desc: "Enjoy an oversized personal artisan slice loaded with 100% real mozzarella cheese.",
    code: "GIANTSLICE",
    badge: "FROM ₹99",
    active: true
  },
  {
    id: "off-04",
    tag: "CHINESE FEAST COMBO",
    title: "NOODLES + MANCHURIAN @ ₹170",
    subtitle: "Wok-tossed noodles with savoury vegetable manchurian",
    desc: "Satisfying Indo-Chinese comfort meal combo for lunch or dinner.",
    code: "COMBO170",
    badge: "BEST VALUE",
    active: true
  }
];

// Data Access Layer with LocalStorage Persistence
const CheesyStorage = {
  STORAGE_KEY_ITEMS: "cheesy_moments_items_v1",
  STORAGE_KEY_INFO: "cheesy_moments_info_v1",
  STORAGE_KEY_OFFERS: "cheesy_moments_offers_v1",
  STORAGE_KEY_CONFIG: "cheesy_moments_config_v1",

  getItems() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY_ITEMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using default", e);
    }
    return MASTER_MENU_ITEMS;
  },

  saveItems(items) {
    try {
      localStorage.setItem(this.STORAGE_KEY_ITEMS, JSON.stringify(items));
      return true;
    } catch (e) {
      console.error("Failed to save items to localStorage", e);
      return false;
    }
  },

  getInfo() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY_INFO);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not load restaurant info, using default", e);
    }
    return RESTAURANT_INFO;
  },

  saveInfo(info) {
    try {
      localStorage.setItem(this.STORAGE_KEY_INFO, JSON.stringify(info));
      return true;
    } catch (e) {
      console.error("Failed to save restaurant info", e);
      return false;
    }
  },

  getOffers() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY_OFFERS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not load offers, using default", e);
    }
    return SPECIAL_OFFERS;
  },

  saveOffers(offers) {
    try {
      localStorage.setItem(this.STORAGE_KEY_OFFERS, JSON.stringify(offers));
      return true;
    } catch (e) {
      console.error("Failed to save offers", e);
      return false;
    }
  },

  resetToDefault() {
    try {
      localStorage.removeItem(this.STORAGE_KEY_ITEMS);
      localStorage.removeItem(this.STORAGE_KEY_INFO);
      localStorage.removeItem(this.STORAGE_KEY_OFFERS);
      return true;
    } catch (e) {
      return false;
    }
  }
};

// Export to window for browser scripts and module.exports for Node
if (typeof window !== "undefined") {
  window.RESTAURANT_INFO = RESTAURANT_INFO;
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.MASTER_MENU_ITEMS = MASTER_MENU_ITEMS;
  window.MENU_ADD_ONS = MENU_ADD_ONS;
  window.SPECIAL_OFFERS = SPECIAL_OFFERS;
  window.CheesyStorage = CheesyStorage;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESTAURANT_INFO, MENU_CATEGORIES, MASTER_MENU_ITEMS, MENU_ADD_ONS, SPECIAL_OFFERS, CheesyStorage };
}
