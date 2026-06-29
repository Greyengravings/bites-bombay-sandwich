import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
Menu as MenuIcon, X
} from 'lucide-react';
import { categories, products, offers } from './data/menu';

// Configurable Outlet Data
const outlets = [
{
id: 1,
name: "Bombay Sandwich - Vesu",
address: "D-202, Canal Road, Vesu, Surat, Gujarat 395007",
lat: 21.1415,
lng: 72.7758
},
{
id: 2,
name: "Bombay Sandwich - Adajan",
address: "G-15, Prime Shoppers, Adajan, Surat, Gujarat 395009",
lat: 21.1925,
lng: 72.7997
},
{
id: 3,
name: "Bombay Sandwich - Varachha",
address: "L-102, Apple Square, Varachha, Surat, Gujarat 395006",
lat: 21.2120,
lng: 72.8633
}
];

// Haversine Distance Formula (km)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
const R = 6371;
const dLat = (lat2 - lat1) * Math.PI / 180;
const dLon = (lon2 - lon1) * Math.PI / 180;
const a =
Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
return R * c;
};

const categoryImages = {
all: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80",
jain: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
grill: "https://images.unsplash.com/photo-1539252554452-da6aec9d11f4?auto=format&fit=crop&w=400&q=80",
'special-grill': "https://images.unsplash.com/photo-1481061742414-aebb192e9dc7?auto=format&fit=crop&w=400&q=80",
'jumbo-grill': "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
paratha: "https://images.unsplash.com/photo-1626776876729-bab4369a5a54?auto=format&fit=crop&w=400&q=80",
khulcha: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
frankie: "https://images.unsplash.com/photo-1589135398309-1144c5b16e15?auto=format&fit=crop&w=400&q=80",
'hot-dog': "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=400&q=80",
'french-fries': "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80",
'garlic-bread': "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=400&q=80",
juices: "https://images.unsplash.com/photo-1600271886342-ad92c39b95a9?auto=format&fit=crop&w=400&q=80",
beverages: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=400&q=80",
extras: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80",
};

const filterChips = [
  { id: 'all', label: 'All Items' },
  { id: 'popular', label: '🔥 Popular' },
  { id: 'under-99', label: 'Under ₹ 99' },
  { id: 'cheese', label: '🧀 Cheesy Special' },
];

const App = () => {
const [activeCategory, setActiveCategory] = useState('all');
const [activeFilterChip, setActiveFilterChip] = useState('all');
const [sandwichOnly, setSandwichOnly] = useState(false);
const [showSandwichAlert, setShowSandwichAlert] = useState(false);
const [cart, setCart] = useState({});
const [searchQuery, setSearchQuery] = useState('');
const [scrolled, setScrolled] = useState(false);
const [activeOffer, setActiveOffer] = useState(0);

// Flying Item Animations State
const [flyingItems, setFlyingItems] = useState([]);

// Location, Drawer & Sheets UI states
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const [isOutletSheetOpen, setIsOutletSheetOpen] = useState(false);
const [isOrderBookOpen, setIsOrderBookOpen] = useState(false);
const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false);

const [userCoords, setUserCoords] = useState(null);
const [selectedOutlet, setSelectedOutlet] = useState(() => {
const saved = localStorage.getItem('selectedOutletId');
return saved ? outlets.find(o => o.id === parseInt(saved)) : outlets[0];
});

const offerRef = useRef(null);
const orderButtonRef = useRef(null);

// References map dynamically built for scrolling down onto products section
const categoryRefs = useRef({});

// Scroll Listener
useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 150);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
// Auto-slide and Sync logic
useEffect(() => {
  const timer = setInterval(() => {
    const nextIndex = (activeOffer + 1) % offers.length;

    if (offerRef.current) {
      const container = offerRef.current;
      const cardWidth = container.offsetWidth;

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
      // Note: setActiveOffer is called by the onScroll handler below
    }
  }, 4000);

  return () => clearInterval(timer);
}, [activeOffer]); // Recalculate when activeOffer changes
// Track Sandwich mode toggle to pop standard sheet layout
useEffect(() => {
  if (sandwichOnly) {
    setShowSandwichAlert(true);
  } else {
    setShowSandwichAlert(false);
  }
}, [sandwichOnly]);

// Location Detection
useEffect(() => {
const savedId = localStorage.getItem('selectedOutletId');

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
(position) => {
const { latitude, longitude } = position.coords;
setUserCoords({ latitude, longitude });

if (!savedId) {
let nearest = outlets[0];
let minDistance = Infinity;

outlets.forEach(outlet => {
const dist = calculateDistance(latitude, longitude, outlet.lat, outlet.lng);
if (dist < minDistance) {
minDistance = dist;
nearest = outlet;
}
});

setSelectedOutlet(nearest);
localStorage.setItem('selectedOutletId', nearest.id);
}
},
() => {
console.log("Geolocation permission denied.");
if (!savedId) setSelectedOutlet(outlets[0]);
}
);
}
}, []);

// Auto-slide offers
useEffect(() => {
const timer = setInterval(() => {
setActiveOffer((prev) => (prev + 1) % offers.length);
}, 4000);
return () => clearInterval(timer);
}, []);

useEffect(() => {
if (offerRef.current) {
offerRef.current.scrollTo({
left: activeOffer * (offerRef.current.offsetWidth - 40),
behavior: 'smooth'
});
}
}, [activeOffer]);

const filteredProducts = useMemo(() => {
return products.filter(product => {
const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
const isSandwichRelated = ['sandwich', 'grill', 'special-grill', 'jumbo-grill'].includes(product.category);
const matchesSandwichToggle = !sandwichOnly || isSandwichRelated;

// Dynamic Filter Chip logic evaluation
let matchesChip = true;
if (activeFilterChip === 'popular') {
  matchesChip = product.rating >= 4.5;
} else if (activeFilterChip === 'under-99') {
  matchesChip = product.price < 99;
} else if (activeFilterChip === 'cheese') {
  matchesChip = product.name.toLowerCase().includes('cheese');
}

return matchesCategory && matchesSearch && matchesSandwichToggle && matchesChip;
});
}, [activeCategory, searchQuery, sandwichOnly, activeFilterChip]);

// Grouped products to cleanly allow targeted section scrolling
const productGroups = useMemo(() => {
const groups = {};
filteredProducts.forEach(product => {
if (!groups[product.category]) {
groups[product.category] = [];
}
groups[product.category].push(product);
});
return groups;
}, [filteredProducts]);

// Update Cart + Trigger Fly Animation
const updateCart = (id, delta, event) => {
if (delta > 0 && event) {
const rect = event.currentTarget.getBoundingClientRect();
const flyId = Date.now();

let targetX = 48;
let targetY = window.innerHeight - 56;

if (orderButtonRef.current) {
const btnRect = orderButtonRef.current.getBoundingClientRect();
targetX = btnRect.left + btnRect.width / 2;
targetY = btnRect.top + btnRect.height / 2;
}

setFlyingItems(prev => [...prev, {
id: flyId,
startX: rect.left + rect.width / 2,
startY: rect.top + rect.height / 2,
endX: targetX,
endY: targetY
}]);

setTimeout(() => {
setFlyingItems(prev => prev.filter(item => item.id !== flyId));
}, 850);
}

setCart(prev => {
const newQty = (prev[id] || 0) + delta;
if (newQty <= 0) {
const { [id]: _, ...rest } = prev;
return rest;
}
return { ...prev, [id]: newQty };
});
};

const orderBookCount = useMemo(() => {
return Object.values(cart).reduce((a, b) => a + b, 0);
}, [cart]);

const outletsWithDistance = useMemo(() => {
const list = outlets.map(o => {
const dist = userCoords ? calculateDistance(userCoords.latitude, userCoords.longitude, o.lat, o.lng) : null;
return { ...o, distance: dist };
});

if (userCoords) {
return [...list].sort((a, b) => a.distance - b.distance);
}
return list;
}, [userCoords]);

const nearestOutletId = userCoords ? outletsWithDistance[0]?.id : null;

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleCategorySelect = (catId) => {
setActiveCategory(catId);
setIsMiniMenuOpen(false);

setTimeout(() => {
const targetElement = categoryRefs.current[catId] || categoryRefs.current['grid-start'];
if (targetElement) {
const offset = 140;
const bodyRect = document.body.getBoundingClientRect().top;
const elementRect = targetElement.getBoundingClientRect().top;
const elementPosition = elementRect - bodyRect;
const offsetPosition = elementPosition - offset;

window.scrollTo({
top: offsetPosition,
behavior: 'smooth'
});
}
}, 100);
};

return (
<div className="w-full max-w-[480px] mx-auto min-h-[100vh] bg-background pb-36 selection:bg-primary/20 font-sans antialiased text-slate-900 relative">

{/* 1. FIXED HEADER */}
<header className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-[60] transition-all duration-500 ${
scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-5'
}`}>
<div className="w-full px-4 sm:px-5 flex items-center justify-between gap-4">
<div className="flex-shrink-0">
<motion.img
initial={false}
animate={{ height: scrolled ? 42 : 50 }}
src="/logo.webp"
alt="Bites Logo"
className="w-auto object-contain"
/>
</div>

<button
onClick={() => setIsOutletSheetOpen(true)}
className="flex-1 flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer group"
>
<div className="flex items-center gap-1 text-slate-800 transition-colors group-hover:text-primary">
<span className="font-bold text-sm truncate max-w-[150px]">{selectedOutlet?.name}</span>
<ChevronDown size={14} className="text-primary group-hover:translate-y-0.5 transition-transform" strokeWidth={3} />
</div>
<p className="text-[10px] text-slate-400 font-medium truncate w-full px-2">
{selectedOutlet?.address}
</p>
</button>

<motion.button
whileTap={{ scale: 0.9 }}
onClick={() => setIsDrawerOpen(true)}
className="flex-shrink-0 p-2 text-slate-800"
>
<MenuIcon size={24} />
</motion.button>
</div>
</header>

{/* RIGHT SIDE DRAWER (Menu) */}
<AnimatePresence>
{isDrawerOpen && (
<>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={() => setIsDrawerOpen(false)}
className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
/>
<motion.div
initial={{ x: '100%' }}
animate={{ x: 0 }}
exit={{ x: '100%' }}
transition={{ type: 'spring', damping: 25, stiffness: 200 }}
className="fixed right-0 top-0 bottom-0 w-[280px] bg-white z-[110] shadow-2xl flex flex-col"
>
{/* RIGHT SIDE DRAWER (Menu) */}
<div className="p-6 border-b border-slate-50 flex items-center justify-between bg-primary/0">
  {/* Replaced text with the logo image */}
  <img
    src="/logo.webp"
    alt="Bites Logo"
    className="h-30 w-auto object-contain"
  />

  <button onClick={() => setIsDrawerOpen(false)} className="p-2 -mr-2 text-slate-400">
    <X size={24} />
  </button>
</div>

<div className="flex-1 py-8 px-6 space-y-2 overflow-y-auto">
{[
{ icon: Home, label: 'Home', active: true },
{ icon: Tag, label: 'Offers & Deals' },
{ icon: Info, label: 'About Us' },
{ icon: MessageSquare, label: 'Help & Support' },
{ icon: Phone, label: 'Contact Us' },
].map((item) => (
<button
key={item.label}
className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-colors font-bold text-sm ${
item.active ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'
}`}
>
<item.icon size={20} className={item.active ? 'text-primary' : 'text-slate-400'} />
<span>{item.label}</span>
</button>
))}
</div>

<div className="p-6 border-t border-slate-50 space-y-4">
<button className="w-full flex items-center gap-4 p-4 text-slate-600 font-bold">
<Moon size={20} className="text-slate-400" />
<span className="text-sm">Dark Theme</span>
</button>
</div>
</motion.div>
</>
)}
</AnimatePresence>

{/* OUTLET SELECTION (Bottom Sheet) */}
<AnimatePresence>
{isOutletSheetOpen && (
<>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={() => setIsOutletSheetOpen(false)}
className="fixed inset-0 bg-black/60 z-[120]"
/>

<div className="fixed bottom-0 left-0 right-0 z-[130] flex justify-center p-0 sm:p-4 pointer-events-none">
<motion.div
initial={{ y: '100%' }}
animate={{ y: 0 }}
exit={{ y: '100%' }}
transition={{ type: 'spring', damping: 25, stiffness: 200 }}
className="pointer-events-auto w-full max-w-[480px] bg-white rounded-t-[40px] sm:rounded-[32px] p-6 pb-12 max-h-[85vh] overflow-y-auto shadow-2xl"
>
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8 shrink-0" />

<h2 className="text-2xl font-black text-slate-800 mb-6 px-2">Select Your Outlet</h2>

<div className="space-y-4">
{outletsWithDistance.map((outlet) => {
const isSelected = selectedOutlet?.id === outlet.id;
const isNearest = outlet.id === nearestOutletId;

return (
<motion.div
key={outlet.id}
whileTap={{ scale: 0.98 }}
className={`p-5 rounded-[28px] border-2 transition-all duration-300 relative ${
isSelected
? 'bg-primary/5 border-primary shadow-lg shadow-primary/5'
: 'bg-white border-slate-100 shadow-sm'
}`}
>
<div className="flex items-start justify-between mb-3">
<div className="flex-1 pr-4">
<h3 className="font-bold text-slate-800 text-lg mb-1">{outlet.name}</h3>
<p className="text-xs text-slate-400 font-medium leading-relaxed">
{outlet.address}
</p>
</div>
{isNearest && (
<div className="bg-emerald-500 text-white text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1 shadow-sm shadow-emerald-200">
<MapPin size={8} fill="white" />
Nearest Outlet
</div>
)}
</div>

<div className="flex items-center justify-between mt-4">
<div className="flex-1 flex items-center gap-1.5 text-slate-500 font-bold text-xs">
{outlet.distance !== null && (
<>
<MapPin size={12} className="text-primary shrink-0" />
<span className="truncate">{outlet.distance.toFixed(1)} km away</span>
</>
)}
</div>

{isSelected ? (
<div className="flex items-center gap-1.5 text-emerald-600 font-black text-xs uppercase tracking-widest shrink-0">
<Check size={18} strokeWidth={4} />
Currently Selected
</div>
) : (
<button
onClick={() => {
setSelectedOutlet(outlet);
localStorage.setItem('selectedOutletId', outlet.id);
setIsOutletSheetOpen(false);
}}
className="bg-primary text-white text-xs font-black py-2.5 px-6 rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform shrink-0"
>
SELECT
</button>
)}
</div>
</motion.div>
);
})}
</div>
</motion.div>
</div>
</>
)}
</AnimatePresence>

{/* PANEL: ORDER BOOK SHEET DRAWDOWN */}
<AnimatePresence>
{isOrderBookOpen && (
<>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={() => setIsOrderBookOpen(false)}
className="fixed inset-0 bg-black/60 z-[140]"
/>
<div className="fixed bottom-0 left-0 right-0 z-[150] flex justify-center p-0 sm:p-4 pointer-events-none">
<motion.div
initial={{ y: '100%' }}
animate={{ y: 0 }}
exit={{ y: '100%' }}
transition={{ type: 'spring', damping: 28, stiffness: 220 }}
className="pointer-events-auto w-full max-w-[480px] bg-white rounded-t-[40px] sm:rounded-[32px] p-6 pb-8 max-h-[80vh] overflow-y-auto shadow-2xl"
>
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 shrink-0" />
<div className="flex items-center gap-2.5 mb-6 px-1">
<ClipboardList className="text-primary" size={24} />
<h2 className="text-2xl font-black text-slate-800 tracking-tight">Active Order Sheet</h2>
</div>

{orderBookCount === 0 ? (
<div className="py-12 flex flex-col items-center justify-center text-center px-4">
<div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
<BookOpen size={28} />
</div>
<h4 className="text-base font-bold text-slate-700 mb-1">Your Order Sheet is Empty</h4>
<p className="text-xs text-slate-400 max-w-[240px]">Browse through categories and punch the "+" button to draft items here.</p>
</div>
) : (
<div className="space-y-3 max-h-[45vh] overflow-y-auto pr-1">
{products.filter(p => cart[p.id] > 0).map((product) => (
<div key={product.id} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100/80 rounded-2xl">
<div className="flex-1 min-w-0 pr-3">
<h4 className="font-bold text-slate-800 text-sm truncate">{product.name}</h4>
<span className="text-xs font-black text-primary">₹{product.price * cart[product.id]}</span>
</div>
<div className="flex items-center bg-primary text-white rounded-full h-8 p-0.5 shadow-md shadow-primary/10 shrink-0">
<button
onClick={(e) => updateCart(product.id, -1, e)}
className="w-7 h-7 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
>
<Minus size={11} strokeWidth={3} />
</button>
<span className="w-6 text-center font-bold text-xs">{cart[product.id]}</span>
<button
onClick={(e) => updateCart(product.id, 1, e)}
className="w-7 h-7 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
>
<Plus size={11} strokeWidth={3} />
</button>
</div>
</div>
))}

<div className="pt-4 mt-4 border-t border-dashed border-slate-200 flex justify-between items-center px-1">
<div>
<span className="text-xs font-medium text-slate-400 block">Draft Total</span>
<span className="text-lg font-black text-slate-800">
₹{products.reduce((acc, p) => acc + (cart[p.id] || 0) * p.price, 0)}
</span>
</div>
<button className="bg-primary text-white font-black text-xs uppercase tracking-wider py-3 px-6 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-transform">
Confirm Sheet
</button>
</div>
</div>
)}
</motion.div>
</div>
</>
)}
</AnimatePresence>

{/* DISH POPUP FLYING ANIMATIONS PORTAL */}
<div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
{flyingItems.map(item => (
<motion.div
key={item.id}
initial={{
x: item.startX - 18,
y: item.startY - 18,
scale: 0.4,
opacity: 1,
rotate: 0
}}
animate={{
x: item.endX - 18,
y: item.endY - 18,
scale: [0.4, 1.4, 1.0, 0.2],
opacity: [1, 1, 0.9, 0],
rotate: 420
}}
transition={{
duration: 0.75,
ease: [0.34, 1.56, 0.64, 1]
}}
className="absolute w-9 h-9 bg-gradient-to-tr from-primary to-orange-400 rounded-full flex items-center justify-center shadow-2xl border border-white"
>
<ClipboardList size={14} className="text-white" />
</motion.div>
))}
</div>

<main className="pt-24 px-4 sm:px-5 w-full">

{/* PREMIUM SEARCH SECTION */}
<section className="mb-10 flex gap-4 items-stretch">
<div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
<motion.div whileFocus={{ scale: 1.01 }} className="relative group w-full">
<div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
<Search size={22} />
</div>
<input
type="text"
placeholder="Search for 'Bombay Sandwich'..."
className="w-full bg-white h-[64px] pl-14 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-transparent focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all outline-none text-slate-700 font-semibold placeholder:text-slate-400 text-sm"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
</motion.div>
<p className="text-[12px] text-slate-400 font-medium px-4 flex items-center gap-1 truncate">
Looking only for sandwiches? Enable the toggle →
</p>
</div>

{/* Sandwich Only Toggle Card */}
<motion.div
whileTap={{ scale: 0.95 }}
onClick={() => setSandwichOnly(!sandwichOnly)}
className={`w-[85px] shrink-0 bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border flex flex-col overflow-hidden transition-all duration-300 cursor-pointer ${
  sandwichOnly ? 'border-primary ring-4 ring-primary/5' : 'border-slate-100'
}`}
>
<div className="h-[40px] bg-slate-50 relative overflow-hidden group">
<motion.img
animate={{ scale: sandwichOnly ? 1.15 : 1 }}
transition={{ type: 'spring', stiffness: 300, damping: 20 }}
src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=200&q=80"
className="w-full h-full object-cover"
/>
</div>
<div className="flex-1 flex flex-col items-center justify-center gap-1.5 p-1.5 bg-white">
<span className={`text-[9px] font-black uppercase tracking-tighter text-center leading-[1.1] transition-colors duration-300 ${
  sandwichOnly ? 'text-primary' : 'text-slate-500'
}`}>
Sandwich<br/>Only
</span>
<div className={`w-12 h-6 rounded-full relative transition-colors duration-300 shadow-inner flex items-center ${
  sandwichOnly ? 'bg-primary' : 'bg-slate-100 border border-slate-200'
}`}>
<motion.div
initial={false}
animate={{
  x: sandwichOnly ? 20 : 0
}}
transition={{
  type: 'spring',
  stiffness: 500,
  damping: 30
}}
className="w-4 h-4 bg-white rounded-full shadow-md absolute left-1"
/>
</div>
</div>
</motion.div>
</section>

{/* OFFERS HERO SECTION */}
<section className="mb-10 -mx-4 sm:-mx-5 overflow-hidden">
  <div
    ref={offerRef}
    onScroll={(e) => {
      // 1. Logic to sync dots with manual user scroll
      const scrollLeft = e.currentTarget.scrollLeft;
      const width = e.currentTarget.offsetWidth;
      const index = Math.round(scrollLeft / width);
      if (index !== activeOffer) setActiveOffer(index);
    }}
    className="flex gap-4 overflow-x-auto no-scrollbar px-4 sm:px-5 py-2 scroll-smooth snap-x snap-mandatory"
  >
    {offers.map((offer) => (
      <motion.div
        key={offer.id}
        whileTap={{ scale: 0.97 }}
        className="min-w-[88%] xs:min-w-[85%] h-44 rounded-3xl relative overflow-hidden shadow-xl snap-center shrink-0"
      >
        <img src={offer.image} alt={offer.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-r ${offer.color.replace('bg-', 'from-')}/80 to-transparent flex flex-col justify-center px-8`}>
          <h3 className="text-white font-black text-2xl leading-none mb-1">{offer.title}</h3>
          <p className="text-white/90 text-sm font-bold">{offer.subtitle}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Dots Indicator */}
  <div className="flex justify-center gap-2 mt-5">
    {offers.map((_, i) => (
      <motion.div
        key={i}
        animate={{
          width: i === activeOffer ? 24 : 8,
          opacity: i === activeOffer ? 1 : 0.4
        }}
        onClick={() => {
          // Allow clicking dots to scroll to the card
          const container = offerRef.current;
          if (container) {
            const width = container.offsetWidth;
            container.scrollTo({ left: width * i, behavior: 'smooth' });
          }
        }}
        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
          i === activeOffer ? 'bg-primary' : 'bg-slate-300'
        }`}
      />
    ))}
  </div>
</section>

{/* CATEGORY SECTION */}
<section className="mb-4">
<div className="flex items-center justify-between mb-4 px-1">
<h2 className="font-bold text-xl text-slate-800 tracking-tight">Top Categories</h2>
<button className="text-primary text-xs font-bold uppercase tracking-widest">See All</button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar -mx-4 sm:-mx-5 px-4 sm:px-5 h-[165px] items-start snap-x snap-mandatory pt-2">
{categories.map((cat) => (
<motion.button
key={cat.id}
whileTap={{ scale: 0.96 }}
onClick={() => handleCategorySelect(cat.id)}
className={`flex flex-col items-center justify-end min-w-[115px] h-[145px] rounded-[24px] transition-all duration-300 snap-center border overflow-hidden relative shadow-sm ${
activeCategory === cat.id
? 'border-primary ring-2 ring-primary/20 scale-105 z-10'
: 'border-slate-100'
}`}
>
<img
src={categoryImages[cat.id] || categoryImages.all}
alt={cat.name}
className="absolute inset-0 w-full h-full object-cover"
loading="lazy"
/>
<div className="relative w-full p-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center">
<span className={`text-[10px] font-black uppercase tracking-widest text-center leading-tight text-white`}>
{cat.name}
</span>
{activeCategory === cat.id && (
<motion.div layoutId="activeCategoryDot" className="w-1 h-1 bg-primary rounded-full mt-1 shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
)}
</div>
</motion.button>
))}
</div>
</section>

{/* WORKABLE STICKY FILTER CHIPS STRIP */}
<div ref={el => categoryRefs.current['grid-start'] = el} className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md -mx-4 sm:-mx-5 px-4 sm:px-5 py-2 mb-6 flex gap-2 overflow-x-auto no-scrollbar border-y border-slate-100/40">
{filterChips.map((chip) => {
  const isChipSelected = activeFilterChip === chip.id;
  return (
    <motion.button
      key={chip.id}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveFilterChip(chip.id)}
      className={`px-5 py-3 border rounded-full whitespace-nowrap text-sm font-extrabold shadow-sm transition-all ${
        isChipSelected
          ? 'bg-primary border-primary text-white'
          : 'bg-white border-slate-100 text-slate-700'
      }`}
    >
      {chip.label}
    </motion.button>
  );
})}
</div>

{/* PRODUCT LIST GRID */}
<div className="space-y-12 mb-10">
{Object.keys(productGroups).map((catKey) => {
const currentCat = categories.find(c => c.id === catKey);
return (
<div
key={catKey}
ref={el => categoryRefs.current[catKey] = el}
className="scroll-mt-36"
>
<h3 className="text-lg font-black text-slate-800 mb-4 px-1 uppercase tracking-wider flex items-center gap-2 border-l-4 border-primary pl-3">
{currentCat ? currentCat.name : catKey}
</h3>
<section className="grid grid-cols-2 gap-x-4 gap-y-10 w-full">
<AnimatePresence mode='popLayout'>
{productGroups[catKey].map((product) => {
  const isPopularItem = product.rating >= 4.5;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      key={product.id}
      className={`bg-transparent transition-all duration-300 flex flex-col h-full group w-full relative p-2 rounded-[32px] border-2 ${
        isPopularItem ? 'border-primary bg-orange-50/10' : 'border-transparent'
      }`}
    >
      {/* CARD BODY IMAGE BOX WITH CUSTOM FLOATING CORNER DESIGN CHIPS */}
      <div className="relative aspect-square rounded-[24px] overflow-hidden mb-3 bg-slate-100 shadow-sm border border-slate-100/50 w-full z-10">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={`https://images.unsplash.com/photo-${1500000000000 + product.id}?auto=format&fit=crop&w=400&q=80`}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80";
          }}
        />

        {/* PILL-PERFECT FLOATING CORNER RATING CHIP */}
        <div className="absolute bottom-0 left-0 bg-white pt-2.5 pr-2.5 rounded-tr-[20px] flex items-center justify-center pl-2 pb-1.5 shadow-sm">
          <div className="text-primary font-black text-[14px] flex items-center gap-1 px-0.5">
            <Star size={13} className="fill-current text-primary" strokeWidth={3} />
            <span className="leading-none pt-[1px] font-extrabold">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* POPULAR TAG WITH CORNER EDGES PERFECTLY MATCHED TO PHOTO INNER RADIUS */}
        <div className="absolute top-0 left-0 flex flex-col gap-1 items-start">
          {isPopularItem && (
            <span className="bg-primary text-white text-[10px] font-black px-3.5 py-1.5 rounded-tl-[24px] rounded-br-[16px] uppercase tracking-wider shadow-md shadow-orange-500/10">
              Popular
            </span>
          )}
        </div>

        <button className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-300 hover:text-red-500 transition-colors shadow-sm">
          <Heart size={14} />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-1 z-10">
        <h3 className="font-semibold text-[16px] text-slate-800 line-clamp-2 leading-tight mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-[12px] text-slate-400 line-clamp-2 leading-tight mb-3 font-medium">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-1">
          <span className="font-bold text-slate-900 text-[18px]">₹{product.price}</span>

          <div className="relative flex-shrink-0">
            <AnimatePresence mode='wait'>
              {cart[product.id] ? (
                <motion.div
                  key="qty"
                  layout
                  className="flex items-center bg-primary text-white rounded-full h-9 p-0.5 shadow-lg shadow-primary/20"
                >
                  <button
                    onClick={(e) => updateCart(product.id, -1, e)}
                    className="w-7 h-7 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                  >
                    <Minus size={12} strokeWidth={3} />
                  </button>
                  <span className="w-5 text-center font-bold text-xs">{cart[product.id]}</span>
                  <button
                    onClick={(e) => updateCart(product.id, 1, e)}
                    className="w-7 h-7 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                  >
                    <Plus size={12} strokeWidth={3} />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  key="add"
                  layout
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => updateCart(product.id, 1, e)}
                  className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  <Plus size={20} strokeWidth={3} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
})}
</AnimatePresence>
</section>
</div>
);
})}
</div>

{filteredProducts.length === 0 && (
<div className="text-center py-12">
<p className="text-slate-400 text-sm font-medium">No products match your current setup.</p>
</div>
)}

<div className="h-24 flex flex-col items-center justify-center opacity-30">
<Info size={18} className="mb-2" />
<p className="text-[10px] font-bold uppercase tracking-[0.3em]">End of Menu</p>
</div>
</main>

{/* MINI CARD POPUP FOR CATEGORY SELECTION */}
<AnimatePresence>
{isMiniMenuOpen && (
<>
<div
className="fixed inset-0 z-[140] bg-black/10 backdrop-blur-[1px]"
onClick={() => setIsMiniMenuOpen(false)}
/>
<motion.div
initial={{ opacity: 0, scale: 0.9, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.9, y: 20 }}
className="fixed bottom-36 right-4 w-52 bg-white rounded-2xl p-3 shadow-2xl z-[150] border border-slate-100 max-h-[320px] overflow-y-auto no-scrollbar"
>
<div className="text-[10px] font-black tracking-widest text-slate-400 px-2 pb-2 mb-1 border-b border-slate-100 uppercase">
Jump to Category
</div>
<div className="space-y-0.5">
{categories.map((cat) => (
<button
key={cat.id}
onClick={() => handleCategorySelect(cat.id)}
className={`w-full text-left px-2 py-2 rounded-xl text-xs font-bold transition-colors truncate block ${
activeCategory === cat.id
? 'bg-primary/10 text-primary'
: 'text-slate-700 hover:bg-slate-50'
}`}
>
{cat.name}
</button>
))}
</div>
</motion.div>
</>
)}
</AnimatePresence>

{/* WHITE 25% HIGH & 75% WIDE CENTERED BOTTOM CARD OVERLAY */}
<AnimatePresence>
{showSandwichAlert && (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[240]"
    />
    <div className="fixed bottom-4 left-0 right-0 z-[250] flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '110%', opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 180 }}
        className="pointer-events-auto w-[75%] max-w-[360px] h-[25vh] bg-white rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-slate-100 p-4 flex flex-col justify-between items-center text-center"
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-primary shrink-0" />
            <h3 className="text-base font-black tracking-tight text-slate-800">
              Sandwich Mode Active! 🥪
            </h3>
          </div>
          <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-[220px]">
            Viewing <span className="text-primary font-bold">only sandwiches</span>. Turn off the toggle button anytime to reveal the full menu.
          </p>
        </div>
        <div className="pt-1 pb-2 shrink-0">
          <span
            onClick={() => setShowSandwichAlert(false)}
            className="text-primary hover:text-orange-600 font-black text-xs uppercase tracking-widest cursor-pointer transition-colors duration-200 active:scale-95 inline-block border-b-2 border-primary/20 pb-0.5"
          >
            Got it!
          </span>
        </div>
      </motion.div>
    </div>
  </>
)}
</AnimatePresence>

{/* FIXED BOTTOM ACTION HUB - CENTERED NAV BAR */}
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] pointer-events-none">
  <div className="pointer-events-auto flex items-center gap-2 p-2 bg-white/70 backdrop-blur-md rounded-[28px] border border-white/20 shadow-2xl shadow-black/10">

    {/* Order Button */}
    <motion.button
      ref={orderButtonRef}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOrderBookOpen(true)}
      className="w-14 h-14 bg-primary hover:bg-orange-600 text-white rounded-[20px] flex flex-col items-center justify-center shadow-lg transition-all relative"
    >
      <ClipboardList size={20} strokeWidth={2.5} />
      <span className="text-[9px] font-black uppercase mt-0.5">Order</span>
      {orderBookCount > 0 && (
        <motion.span
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-white text-primary font-black text-[9px] min-w-[18px] h-4.5 px-1 rounded-full flex items-center justify-center shadow-md border border-primary/10"
        >
          {orderBookCount}
        </motion.span>
      )}
    </motion.button>

    {/* Scroll To Top Button (Conditional) */}
    <AnimatePresence>
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, width: 0, x: 20 }}
          animate={{ opacity: 1, width: 56, x: 0 }}
          exit={{ opacity: 0, width: 0, x: 20 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-[20px] flex items-center justify-center shadow-lg overflow-hidden"
        >
          <ChevronUp size={24} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>

    {/* Menu Button */}
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsMiniMenuOpen(!isMiniMenuOpen)}
      className={`w-14 h-14 text-white rounded-[20px] flex flex-col items-center justify-center shadow-lg transition-all ${
        isMiniMenuOpen ? 'bg-orange-700' : 'bg-primary hover:bg-orange-600'
      }`}
    >
      <BookOpen size={20} strokeWidth={2.5} />
      <span className="text-[9px] font-black uppercase mt-0.5">Menu</span>
    </motion.button>

  </div>
</div>

{/* TEXTURE OVERLAY */}
<div className="fixed inset-0 pointer-events-none z-[200]">
<div className="w-full h-full opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
</div>
</div>
);
};

export default App;