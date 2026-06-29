export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'sandwich', name: 'Sandwich', icon: '🥪' },
  { id: 'jain', name: 'Jain/Swami', icon: '🙏' },
  { id: 'grill', name: 'Grill', icon: '🔥' },
  { id: 'special-grill', name: 'Special Grill', icon: '✨' },
  { id: 'jumbo-grill', name: 'Jumbo Grill', icon: '📏' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'paratha', name: 'Paratha', icon: '🫓' },
  { id: 'khulcha', name: 'Khulcha', icon: '🍞' },
  { id: 'frankie', name: 'Frankie', icon: '🌯' },
  { id: 'hot-dog', name: 'Hot Dog', icon: '🌭' },
  { id: 'french-fries', name: 'Fries', icon: '🍟' },
  { id: 'garlic-bread', name: 'Garlic Bread', icon: '🧄' },
  { id: 'juices', name: 'Juices', icon: '🥤' },
  { id: 'beverages', name: 'Beverages', icon: '🍹' },
  { id: 'extras', name: 'Extras', icon: '➕' },
];

export const products = [
  // SANDWICH
  { id: 1, name: 'Bombay Sandwich', category: 'sandwich', price: 80, rating: 4.5, description: 'Classic Bombay style sandwich with green chutney.', veg: true },
  { id: 2, name: 'Veg Cheese Sandwich', category: 'sandwich', price: 100, rating: 4.6, description: 'Fresh vegetables and loaded with cheese.', veg: true },
  { id: 3, name: 'Veg Sandwich', category: 'sandwich', price: 70, rating: 4.2, description: 'Simple healthy veg sandwich.', veg: true },
  { id: 4, name: 'Plain Cheese Sandwich', category: 'sandwich', price: 90, rating: 4.4, description: 'Pure cheese goodness.', veg: true },
  { id: 5, name: 'Cheese Chatni Sandwich', category: 'sandwich', price: 90, rating: 4.3, description: 'Zesty chutney with melted cheese.', veg: true },
  { id: 6, name: 'Samosa Veg Sandwich', category: 'sandwich', price: 110, rating: 4.7, description: 'Crunchy samosa inside a sandwich.', veg: true },
  { id: 7, name: 'Chocolate Sandwich', category: 'sandwich', price: 120, rating: 4.8, description: 'Melted chocolate between bread.', veg: true },
  { id: 8, name: 'Bread Butter Jam', category: 'sandwich', price: 50, rating: 4.1, description: 'Classic snack.', veg: true },

  // JAIN / SWAMINARAYAN
  { id: 50, name: 'Veg Swaminarayan Sandwich', category: 'jain', price: 110, rating: 4.5, description: 'No onion, no garlic traditional sandwich.', veg: true },
  { id: 51, name: 'Veg Cheese Swaminarayan', category: 'jain', price: 130, rating: 4.6, description: 'Swaminarayan style with extra cheese.', veg: true },
  { id: 52, name: 'Veg Jain Sandwich', category: 'jain', price: 100, rating: 4.4, description: 'Strictly Jain ingredients.', veg: true },

  // GRILL SANDWICH
  { id: 101, name: 'Grill Sandwich', category: 'grill', price: 120, rating: 4.5, description: 'Perfectly grilled vegetables and spices.', veg: true },
  { id: 102, name: 'Bombay Toasted Sandwich', category: 'grill', price: 130, rating: 4.6, description: 'Traditional Bombay toast grill.', veg: true },
  { id: 103, name: 'Samosa Veg Cheese Grill', category: 'grill', price: 150, rating: 4.7, description: 'Grilled samosa with extra cheese.', veg: true },
  { id: 104, name: 'Plain Cheese Grill', category: 'grill', price: 130, rating: 4.4, description: 'Crispy grilled cheese.', veg: true },
  
  // SPECIAL GRILL
  { id: 201, name: 'Tandoori Paneer Grill', category: 'special-grill', price: 180, rating: 4.9, description: 'Marinated paneer with tandoori spices.', veg: true },
  { id: 202, name: 'Chilli Cheese Grill', category: 'special-grill', price: 160, rating: 4.8, description: 'Spicy chillies with gooey cheese.', veg: true },
  { id: 203, name: 'Jalapeno Corn Grill', category: 'special-grill', price: 170, rating: 4.7, description: 'Sweet corn and tangy jalapenos.', veg: true },
  { id: 204, name: 'Club Bombay Sandwich', category: 'special-grill', price: 190, rating: 4.8, description: 'The ultimate Bombay club grill.', veg: true },
  { id: 205, name: 'Mushroom Mayo Grill', category: 'special-grill', price: 185, rating: 4.6, description: 'Fresh mushrooms in creamy mayo.', veg: true },
  
  // 3 LAYER JUMBO GRILL
  { id: 301, name: 'Tandoori Paneer Jumbo', category: 'jumbo-grill', price: 240, rating: 4.9, description: '3 layers of tandoori paneer madness.', veg: true },
  { id: 302, name: 'Kolhapuri Cheese Grill', category: 'jumbo-grill', price: 250, rating: 4.8, description: 'Spicy Kolhapuri style triple decker.', veg: true },
  { id: 303, name: 'Bites Special Jumbo', category: 'jumbo-grill', price: 260, rating: 5.0, description: 'Our signature triple decker grill.', veg: true },

  // PARATHA
  { id: 401, name: 'Tandoori Paneer Paratha', category: 'paratha', price: 140, rating: 4.6, description: 'Spiced paneer stuffed paratha.', veg: true },
  { id: 402, name: 'Cheese Corn Paratha', category: 'paratha', price: 130, rating: 4.5, description: 'Sweet corn and cheese stuffing.', veg: true },
  { id: 403, name: 'Veg Cheese Paratha', category: 'paratha', price: 120, rating: 4.4, description: 'Assorted veg and cheese.', veg: true },

  // PIZZA
  { id: 501, name: 'Veg Cheese Pizza', category: 'pizza', price: 150, rating: 4.4, description: 'Classic veg cheese pizza.', veg: true },
  { id: 502, name: 'Margherita', category: 'pizza', price: 140, rating: 4.5, description: 'Pure mozzarella and tomato sauce.', veg: true },
  { id: 503, name: 'Italian Cheese Pizza', category: 'pizza', price: 190, rating: 4.7, description: 'Authentic Italian herbs and cheese.', veg: true },
  { id: 504, name: 'Bites Bombay Special', category: 'pizza', price: 230, rating: 4.9, description: 'Chef\'s special bombay style pizza.', veg: true },

  // KHULCHA
  { id: 601, name: 'Paneer Pudina Khulcha', category: 'khulcha', price: 120, rating: 4.4, description: 'Minty paneer stuffed khulcha.', veg: true },
  { id: 602, name: 'Mushroom Cheese Khulcha', category: 'khulcha', price: 140, rating: 4.5, description: 'Sautéed mushrooms and cheese.', veg: true },

  // BURGER
  { id: 701, name: 'Veg Burger', category: 'burger', price: 90, rating: 4.3, description: 'Crispy veg patty burger.', veg: true },
  { id: 702, name: 'Veg Cheese Burger', category: 'burger', price: 110, rating: 4.6, description: 'Veg burger with extra cheese slice.', veg: true },
  { id: 703, name: 'Cheese Paneer Tandoori', category: 'burger', price: 150, rating: 4.8, description: 'Tandoori paneer patty with cheese.', veg: true },

  // FRENCH FRIES
  { id: 801, name: 'French Fries', category: 'french-fries', price: 80, rating: 4.2, description: 'Classic salted fries.', veg: true },
  { id: 802, name: 'Cheese Mayo Fries', category: 'french-fries', price: 120, rating: 4.7, description: 'Fries loaded with cheese and mayo.', veg: true },
  { id: 803, name: 'Peri Peri Fries', category: 'french-fries', price: 100, rating: 4.5, description: 'Fries tossed in spicy peri peri mix.', veg: true },

  // HOT DOG
  { id: 901, name: 'Veg Hot Dog', category: 'hot-dog', price: 90, rating: 4.2, description: 'Soft bun with veg sausage and sauces.', veg: true },
  { id: 902, name: 'Tandoori Cheese Hot Dog', category: 'hot-dog', price: 130, rating: 4.6, description: 'Spiced hot dog with melted cheese.', veg: true },
  { id: 903, name: 'Corn Cheese Hot Dog', category: 'hot-dog', price: 120, rating: 4.5, description: 'Golden corn and cheese combo.', veg: true },

  // FRANKIE
  { id: 1001, name: 'Veg Frankie', category: 'frankie', price: 70, rating: 4.2, description: 'Spicy veg roll.', veg: true },
  { id: 1002, name: 'Paneer Frankie', category: 'frankie', price: 100, rating: 4.5, description: 'Frankie stuffed with paneer cubes.', veg: true },
  { id: 1003, name: 'Peri Peri Cheese Frankie', category: 'frankie', price: 110, rating: 4.6, description: 'Spicy peri peri with cheese.', veg: true },

  // GARLIC BREAD
  { id: 1101, name: 'Cheese Garlic Bread', category: 'garlic-bread', price: 120, rating: 4.4, description: 'Toasted bread with garlic butter and cheese.', veg: true },
  { id: 1102, name: 'Paneer Tandoori Cheese', category: 'garlic-bread', price: 150, rating: 4.7, description: 'Topped with tandoori paneer.', veg: true },

  // JUICES
  { id: 1201, name: 'Orange Juice', category: 'juices', price: 90, rating: 4.5, description: 'Freshly squeezed oranges.', veg: true },
  { id: 1202, name: 'Watermelon Juice', category: 'juices', price: 70, rating: 4.4, description: 'Hydrating fresh watermelon.', veg: true },
  { id: 1203, name: 'Ganga Jamuna', category: 'juices', price: 95, rating: 4.6, description: 'Orange and Sweet Lime blend.', veg: true },

  // BEVERAGES
  { id: 1301, name: 'Cold Drinks', category: 'beverages', price: 40, rating: 4.1, description: 'Chilled soft drink.', veg: true },
  { id: 1302, name: 'Water Bottle', category: 'beverages', price: 20, rating: 4.0, description: 'Packed mineral water.', veg: true },

  // EXTRAS
  { id: 1401, name: 'Extra Cheese', category: 'extras', price: 30, rating: 4.0, description: 'Add extra cheese to any item.', veg: true },
  { id: 1402, name: 'Cheese Wafer', category: 'extras', price: 60, rating: 4.3, description: 'Crispy wafers with cheese dip.', veg: true },
];

export const offers = [
  { id: 1, title: 'Buy 1 Get 1', subtitle: 'On all Sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', color: 'bg-orange-500' },
  { id: 2, title: 'Flat ₹100 OFF', subtitle: 'On orders above ₹499', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=800&q=80', color: 'bg-blue-600' },
  { id: 3, title: 'Free Drink', subtitle: 'With any Jumbo Grill', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', color: 'bg-green-600' },
  { id: 4, title: 'Combo Offers', subtitle: 'Save up to 20%', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', color: 'bg-purple-600' },
  { id: 5, title: 'Today\'s Bestseller', subtitle: 'Tandoori Paneer Grill', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', color: 'bg-red-500' },
];
