export const categories = [
  { id: 'sandwich', name: 'SANDWICH', icon: '🥪' },
  { id: 'jain', name: 'JAIN / SWAMI NARAYAN', icon: '🙏' },
  { id: 'grill', name: 'GRILL SANDWICH', icon: '🔥' },
  { id: 'special-grill', name: 'SPECIAL GRILL', icon: '✨' },
  { id: 'jumbo-grill', name: '3 LAYERS JUMBO GRILL', icon: '📏' },
  { id: 'paratha', name: 'STUFF BUN PARATHA', icon: '🫓' },
  { id: 'pizza', name: 'PIZZA', icon: '🍕' },
  { id: 'khulcha', name: 'STUFF GRILLED KHULCHA', icon: '🍞' },
  { id: 'burger', name: 'BURGERS', icon: '🍔' },
  { id: 'garlic-bread', name: 'GARLIC BREAD', icon: '🧄' },
  { id: 'french-fries', name: 'FRENCH FRIES', icon: '🍟' },
  { id: 'hot-dog', name: 'HOT DOG', icon: '🌭' },
  { id: 'frankie', name: 'FRANKIE', icon: '🌯' },
  { id: 'extras', name: 'EXTRAS', icon: '➕' },
  { id: 'juice', name: 'JUICE', icon: '🥤' },
  { id: 'beverages', name: 'BEVERAGES', icon: '🍹' },
];

export const products = [
  // SANDWICH
  { id: 1, name: 'Bombay Sandwich', category: 'sandwich', price: 130, rating: 5.0, description: 'Classic Bombay style sandwich.', popular: true, veg: true },
  { id: 2, name: 'Veg Cheese Sandwich', category: 'sandwich', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 3, name: 'Veg Sandwich', category: 'sandwich', price: 90, rating: 4.4, description: '', popular: false, veg: true },
  { id: 4, name: 'Plain Cheese Sandwich', category: 'sandwich', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 5, name: 'Cheese Chatni Sandwich', category: 'sandwich', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 6, name: 'Cheese Jam Sandwich', category: 'sandwich', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 7, name: 'Samosa Veg Sandwich', category: 'sandwich', price: 90, rating: 4.4, description: '', popular: false, veg: true },
  { id: 8, name: 'Samosa Veg Cheese Sandwich', category: 'sandwich', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 9, name: 'Chocolate Sandwich', category: 'sandwich', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 10, name: 'Bread Butter', category: 'sandwich', price: 90, rating: 4.4, description: '', popular: false, veg: true },
  { id: 11, name: 'Bread Butter Jam', category: 'sandwich', price: 90, rating: 4.4, description: '', popular: false, veg: true },
  { id: 12, name: 'Chatni Butter', category: 'sandwich', price: 90, rating: 4.4, description: '', popular: false, veg: true },

  // JAIN / SWAMINARAYAN
  { id: 50, name: 'Veg Swaminarayan Sandwich', category: 'jain', price: 90, rating: 5.0, description: '', popular: true, veg: true },
  { id: 51, name: 'Veg Cheese Swaminarayan Sandwich', category: 'jain', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 52, name: 'Veg Jain Sandwich', category: 'jain', price: 90, rating: 4.4, description: '', popular: false, veg: true },
  { id: 53, name: 'Veg Cheese Jain Sandwich', category: 'jain', price: 110, rating: 4.4, description: '', popular: false, veg: true },

  // EXTRAS
  { id: 100, name: 'Extra Wafer', category: 'extras', price: 50, rating: 4.4, description: '', popular: false, veg: true },
  { id: 101, name: 'Cheese Wafer', category: 'extras', price: 170, rating: 5.0, description: '', popular: true, veg: true },
  { id: 102, name: 'Brown Bread Extra', category: 'extras', price: 20, rating: 4.4, description: '', popular: false, veg: true },

  // GRILL SANDWICH
  { id: 200, name: 'Grill Sandwich', category: 'grill', price: 130, rating: 5.0, description: '', popular: true, veg: true },
  { id: 201, name: 'Bombay Toasted Sandwich', category: 'grill', price: 130, rating: 5.0, description: '', popular: true, veg: true },
  { id: 202, name: 'Samosa Veg Grill Sandwich', category: 'grill', price: 130, rating: 4.4, description: '', popular: false, veg: true },
  { id: 203, name: 'Samosa Veg Cheese Grill Sandwich', category: 'grill', price: 130, rating: 4.4, description: '', popular: false, veg: true },
  { id: 204, name: 'Chocolate Grill Sandwich', category: 'grill', price: 170, rating: 4.4, description: '', popular: false, veg: true },
  { id: 205, name: 'Plain Cheese Grill Sandwich', category: 'grill', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 206, name: 'Cheese Chatni Grill', category: 'grill', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 207, name: 'Cheese Jam Grill', category: 'grill', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 208, name: 'Bread Butter Toasted', category: 'grill', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 209, name: 'Chatni Butter Toasted', category: 'grill', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 210, name: 'Jam Butter Toasted', category: 'grill', price: 110, rating: 4.4, description: '', popular: false, veg: true },

  // SPECIAL GRILL
  { id: 300, name: 'Tandoori Paneer Grill', category: 'special-grill', price: 170, rating: 5.0, description: 'Onion, Capsicum, Cheese, Parcer', popular: true, veg: true },
  { id: 301, name: 'Chilli Cheese Grill', category: 'special-grill', price: 160, rating: 4.4, description: 'Onion, Capsicum, Cheese, Mayo', popular: false, veg: true },
  { id: 302, name: 'Mayogrill', category: 'special-grill', price: 160, rating: 4.4, description: 'Cabbage, Tomato, Cheese', popular: false, veg: true },
  { id: 303, name: 'Tangi Cheese Tomato Grill', category: 'special-grill', price: 160, rating: 4.4, description: 'Onion, Capsicum, Tomato, Cheese', popular: false, veg: true },
  { id: 304, name: 'Cheese Chili Corn', category: 'special-grill', price: 170, rating: 4.4, description: 'Mayo, Cheese, Corn', popular: false, veg: true },
  { id: 305, name: 'Jalapeno Corn', category: 'special-grill', price: 190, rating: 5.0, description: 'Jalapeno, Corn, Mayo, Cheese', popular: true, veg: true },
  { id: 306, name: 'Club Bombay Sandwich (3 Layer)', category: 'special-grill', price: 200, rating: 4.4, description: 'Cucumber, Tomato, Potato, Cheese, Mayo', popular: false, veg: true },
  { id: 307, name: 'Allo Mutter', category: 'special-grill', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 308, name: 'Kolhapuri Grill', category: 'special-grill', price: 180, rating: 4.4, description: '', popular: false, veg: true },
  { id: 309, name: 'Paneer Masala Grill Sandwich', category: 'special-grill', price: 180, rating: 4.4, description: '', popular: false, veg: true },
  { id: 310, name: 'Paneer Pudina Grill', category: 'special-grill', price: 170, rating: 4.4, description: '', popular: false, veg: true },
  { id: 311, name: 'Mushroom Mayo Grill', category: 'special-grill', price: 200, rating: 4.4, description: '', popular: false, veg: true },
  { id: 312, name: 'Paneer Mushroom Mayo Grill (3 Layers)', category: 'special-grill', price: 250, rating: 5.0, description: '', popular: true, veg: true },

  // 3 LAYERS JUMBO GRILL SANDWICH
  { id: 400, name: 'Tandoori Paneer Grill', category: 'jumbo-grill', price: 300, rating: 5.0, description: '', popular: true, veg: true },
  { id: 401, name: 'Kolapuri Cheese Grill', category: 'jumbo-grill', price: 250, rating: 4.4, description: '', popular: false, veg: true },
  { id: 402, name: 'Chili Cheese Grill', category: 'jumbo-grill', price: 250, rating: 4.4, description: '', popular: false, veg: true },
  { id: 403, name: 'Special Mayo Grill', category: 'jumbo-grill', price: 250, rating: 4.4, description: '', popular: false, veg: true },
  { id: 404, name: 'Jalapeno Corn Grill', category: 'jumbo-grill', price: 250, rating: 4.4, description: '', popular: false, veg: true },
  { id: 405, name: 'Club Bombay Sandwich', category: 'jumbo-grill', price: 300, rating: 4.4, description: '', popular: false, veg: true },
  { id: 406, name: 'Aloo Mutter', category: 'jumbo-grill', price: 230, rating: 4.4, description: '', popular: false, veg: true },
  { id: 407, name: 'Paneer Mashroom Thy Grill', category: 'jumbo-grill', price: 250, rating: 4.4, description: '', popular: false, veg: true },
  { id: 408, name: 'Bites Special', category: 'jumbo-grill', price: 350, rating: 5.0, description: '', popular: true, veg: true },

  // STUFF BUN PARATHA
  { id: 500, name: 'Veg Cheese Paratha', category: 'paratha', price: 150, rating: 5.0, description: '', popular: true, veg: true },
  { id: 501, name: 'Cheese Chatni Paratha', category: 'paratha', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 502, name: 'Chatpata Paratha', category: 'paratha', price: 160, rating: 4.4, description: '', popular: false, veg: true },
  { id: 503, name: 'Cheese Corn Paratha', category: 'paratha', price: 160, rating: 4.4, description: '', popular: false, veg: true },
  { id: 504, name: 'Mashroom Paratha', category: 'paratha', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 505, name: 'Tandoori Paneer Paratha', category: 'paratha', price: 180, rating: 4.4, description: '', popular: false, veg: true },
  { id: 506, name: 'Chocolate Cheese Paratha', category: 'paratha', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 507, name: 'Plain Cheese Paratha', category: 'paratha', price: 180, rating: 4.4, description: '', popular: false, veg: true },
  { id: 508, name: 'Bites Bombay Special Paratha', category: 'paratha', price: 150, rating: 4.4, description: '', popular: false, veg: true },

  // PIZZA
  { 
    id: 600, 
    name: 'Veg Cheese Pizza', 
    category: 'pizza', 
    price: 150, 
    rating: 5.0, 
    description: '', 
    popular: true, 
    veg: true,
    variants: [
      { label: '6”', price: 150 },
      { label: '9”', price: 200 }
    ]
  },
  { 
    id: 601, 
    name: 'Marchereita Pizza', 
    category: 'pizza', 
    price: 200, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 200 },
      { label: '9”', price: 250 }
    ]
  },
  { 
    id: 602, 
    name: 'Hot & Spicy Marcherita Pizza', 
    category: 'pizza', 
    price: 200, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 200 },
      { label: '9”', price: 250 }
    ]
  },
  { 
    id: 603, 
    name: 'Italian Cheese Pizza', 
    category: 'pizza', 
    price: 220, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 220 },
      { label: '9”', price: 270 }
    ]
  },
  { 
    id: 604, 
    name: 'Mexican Cheese Pizza', 
    category: 'pizza', 
    price: 220, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 220 },
      { label: '9”', price: 270 }
    ]
  },
  { 
    id: 605, 
    name: 'Tandoori Paneer Pizza', 
    category: 'pizza', 
    price: 230, 
    rating: 5.0, 
    description: '', 
    popular: true, 
    veg: true,
    variants: [
      { label: '6”', price: 230 },
      { label: '9”', price: 280 }
    ]
  },
  { 
    id: 606, 
    name: 'Paneer Chatpata Pizza', 
    category: 'pizza', 
    price: 230, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 230 },
      { label: '9”', price: 280 }
    ]
  },
  { 
    id: 607, 
    name: 'Cheese and Corn Pizza', 
    category: 'pizza', 
    price: 200, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 200 },
      { label: '9”', price: 230 }
    ]
  },
  { 
    id: 608, 
    name: 'Bites Bombay Special Pizza', 
    category: 'pizza', 
    price: 250, 
    rating: 4.4, 
    description: '', 
    popular: false, 
    veg: true,
    variants: [
      { label: '6”', price: 250 },
      { label: '9”', price: 300 }
    ]
  },

  // STUFF GRILL KHULCHA
  { id: 700, name: 'Panner Pudina Khulcha', category: 'khulcha', price: 130, rating: 5.0, description: '', popular: true, veg: true },
  { id: 701, name: 'Veg Cheese Pudina Khulcha', category: 'khulcha', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 702, name: 'Cheese Tomato Khulcha', category: 'khulcha', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 703, name: 'Panner Corn Khulcha', category: 'khulcha', price: 130, rating: 4.4, description: '', popular: false, veg: true },
  { id: 704, name: 'Mushroom Cheese Khulcha', category: 'khulcha', price: 130, rating: 4.4, description: '', popular: false, veg: true },
  { id: 705, name: 'Tandoori Cheese Khulcha', category: 'khulcha', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 706, name: 'Bites Special Khulcha', category: 'khulcha', price: 200, rating: 4.4, description: '', popular: false, veg: true },

  // BURGER
  { id: 800, name: 'Veg Burger', category: 'burger', price: 80, rating: 5.0, description: '', popular: true, veg: true },
  { id: 801, name: 'Veg Cheese Burger', category: 'burger', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 802, name: 'Chili Cheese Burger', category: 'burger', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 803, name: 'Italian Cheese Burger', category: 'burger', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 804, name: 'Paneer Stuff Burger', category: 'burger', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 805, name: 'Cheese Creamy Burger', category: 'burger', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 806, name: 'Cheese Paneer Tandoori Burger', category: 'burger', price: 130, rating: 4.4, description: '', popular: false, veg: true },
  { id: 807, name: 'Bites Special Burger', category: 'burger', price: 150, rating: 4.4, description: '', popular: false, veg: true },

  // GARLIC BREAD
  { id: 1400, name: 'Cheese Garlic Bread', category: 'garlic-bread', price: 130, rating: 5.0, description: '', popular: true, veg: true },
  { id: 1401, name: 'Veg Thousand Garlic Bread', category: 'garlic-bread', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1402, name: 'Paneer Tandoori Cheese Garlic Bread', category: 'garlic-bread', price: 170, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1403, name: 'Cheese Corn Garlic Bread', category: 'garlic-bread', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1404, name: 'Cheese Chilli Garlic Bread', category: 'garlic-bread', price: 150, rating: 4.4, description: '', popular: false, veg: true },

  // FRENCH FRIES
  { id: 900, name: 'French Fries', category: 'french-fries', price: 130, rating: 5.0, description: '', popular: true, veg: true },
  { id: 901, name: 'Mayo French Fries', category: 'french-fries', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 902, name: 'Cheese Mayo French Fries', category: 'french-fries', price: 180, rating: 4.4, description: '', popular: false, veg: true },
  { id: 903, name: 'Cheese French Fries', category: 'french-fries', price: 180, rating: 4.4, description: '', popular: false, veg: true },
  { id: 904, name: 'Perry Perry French Fries', category: 'french-fries', price: 180, rating: 4.4, description: '', popular: false, veg: true },

  // HOT DOG
  { id: 1000, name: 'Veg. Hot Dog', category: 'hot-dog', price: 80, rating: 5.0, description: '', popular: true, veg: true },
  { id: 1001, name: 'Veg. Cheese Hot Dog', category: 'hot-dog', price: 100, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1002, name: 'Cheese Roll', category: 'hot-dog', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1003, name: 'Chill Veg. Hot Dog', category: 'hot-dog', price: 80, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1004, name: 'Chill Veg. Cheese Hot Dog', category: 'hot-dog', price: 100, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1005, name: 'Veg. Italian Hot Dog', category: 'hot-dog', price: 80, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1006, name: 'Veg. Cheese Italian Hot Dog', category: 'hot-dog', price: 100, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1007, name: 'Tandoori Cheese Hot Dog', category: 'hot-dog', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1008, name: 'Tandoori Veg Hot Dog', category: 'hot-dog', price: 100, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1009, name: 'Corn Cheese Hot Dog', category: 'hot-dog', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1010, name: 'Mayo Cheese Chatni Hot Dog', category: 'hot-dog', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1011, name: 'Bite’s Special Hot Dog', category: 'hot-dog', price: 150, rating: 4.4, description: '', popular: false, veg: true },

  // FRANKIE
  { id: 1100, name: 'Veg. Frankie', category: 'frankie', price: 100, rating: 5.0, description: '', popular: true, veg: true },
  { id: 1101, name: 'Veg. Cheese Frankie', category: 'frankie', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1102, name: 'Peri Peri Cheese Frankie', category: 'frankie', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1103, name: 'Chilli Cheese Frankie', category: 'frankie', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1104, name: 'Italian Cheese Frankie', category: 'frankie', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1105, name: 'Paneer Frankie', category: 'frankie', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1106, name: 'Tandoori Paneer Frankie', category: 'frankie', price: 150, rating: 4.4, description: '', popular: false, veg: true },

  // JUICE
  { id: 1200, name: 'Orange', category: 'juice', price: 110, rating: 5.0, description: '', popular: true, veg: true },
  { id: 1201, name: 'Fresh Sweet Lime', category: 'juice', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1202, name: 'Pineapple', category: 'juice', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1203, name: 'Watermelon', category: 'juice', price: 110, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1204, name: 'Ganga-Jamuna', category: 'juice', price: 130, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1205, name: 'Mix Fruit', category: 'juice', price: 150, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1206, name: 'Apple', category: 'juice', price: 140, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1207, name: 'Black Grapes', category: 'juice', price: 120, rating: 4.4, description: '', popular: false, veg: true },
  { id: 1208, name: 'Guava Juice', category: 'juice', price: 150, rating: 4.4, description: '', popular: false, veg: true },

  // BEVERAGES
  { id: 1300, name: 'Coldrinks', category: 'beverages', price: 'Market Price', rating: 5.0, description: '', popular: true, veg: true },
  { id: 1301, name: 'Water', category: 'beverages', price: 'Market Price', rating: 4.4, description: '', popular: false, veg: true },
];

export const offers = [
  { id: 1, title: 'Buy 1 Get 1', subtitle: 'On all Sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', color: 'bg-orange-500' },
  { id: 2, title: 'Flat ₹100 OFF', subtitle: 'On orders above ₹499', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=800&q=80', color: 'bg-blue-600' },
  { id: 3, title: 'Free Drink', subtitle: 'With any Jumbo Grill', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', color: 'bg-green-600' },
  { id: 4, title: 'Combo Offers', subtitle: 'Save up to 20%', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', color: 'bg-purple-600' },
  { id: 5, title: 'Today\'s Bestseller', subtitle: 'Tandoori Paneer Grill', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', color: 'bg-red-500' },
];
