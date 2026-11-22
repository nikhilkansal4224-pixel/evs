export const INITIAL_MEMBERS = [
  { 
    id: 'm1', 
    name: 'Atul', 
    roll: '26010102834', 
    sap: '590036858',
    batch: '3',
    role: 'Group Coordinator, Daily Data Tracking, Calculations & Report Compilation',
    week1Count: 11,
    week2Count: 15
  },
  { 
    id: 'm2', 
    name: 'Nikhil', 
    roll: '26010101498', 
    sap: '590039697',
    batch: '3',
    role: 'Collection Box Management, Resin Code Sorting & Photo Documentation',
    week1Count: 15,
    week2Count: 15
  },
  { 
    id: 'm3', 
    name: 'Aarnav Gulati', 
    roll: '26010102692', 
    sap: '590038927',
    batch: '3',
    role: 'UPI Payment Cross-Checking, Campus Pricing Audit & Daily Carry Kit Setup',
    week1Count: 20,
    week2Count: 15
  }
];

export const ITEM_DEFINITIONS = {
  'PET Water Bottles': {
    category: 'Beverages & Hydration',
    weightGrams: 18.0,
    unit: 'bottle',
    resinCode: '#1 PET',
    recyclable: true,
    desc: 'Packaged 500ml/1L mineral water bottles (Resin Code #1 PET, Recyclable)',
    icon: 'Bottle',
    ecoImpact: 'Takes 450+ years to decompose; high virgin petroleum footprint. 100% recyclable when segregated dry.'
  },
  'Chips Packets': {
    category: 'Packaged Snacks',
    weightGrams: 4.0,
    unit: 'packet',
    resinCode: 'Multilayer Film (Other #7)',
    recyclable: false,
    desc: 'Lays, Kurkure, Bingo metallized multi-layer film (BOPP/foil, Non-Recyclable)',
    icon: 'Cookie',
    ecoImpact: 'Fused plastic-aluminum foil cannot be mechanically recycled by municipalities; ends up in landfills.'
  },
  'Chocolate Wrappers': {
    category: 'Confectionery & Treats',
    weightGrams: 2.5,
    unit: 'wrapper',
    resinCode: 'Multilayer Film (Other #7)',
    recyclable: false,
    desc: 'Cadbury Dairy Milk, 5 Star, KitKat multilayer plastic wrappers (Non-Recyclable)',
    icon: 'Sparkles',
    ecoImpact: 'Ultra-thin metallized film with zero scrap value for waste pickers.'
  },
  // Backward-compatible fallback aliases for quick additions
  'PET water bottles': {
    category: 'Beverages & Hydration',
    weightGrams: 18.0,
    unit: 'bottle',
    resinCode: '#1 PET',
    recyclable: true,
    desc: '500ml / 1L packaged mineral water bottles (PET #1)',
    icon: 'Bottle',
    ecoImpact: 'Recyclable Resin #1'
  },
  'Disposable tea cups': {
    category: 'Beverages & Hydration',
    weightGrams: 4.5,
    unit: 'cup',
    resinCode: 'PP #5',
    recyclable: false,
    desc: 'Polypropylene plastic chai cups or plastic-lined paper cups',
    icon: 'Coffee',
    ecoImpact: 'Non-recyclable due to polymer lining'
  },
  'Snack wrappers': {
    category: 'Packaged Snacks',
    weightGrams: 4.0,
    unit: 'packet',
    resinCode: 'MLP #7',
    recyclable: false,
    desc: 'Chips and wafer multilayer metallized film (BOPP)',
    icon: 'Cookie',
    ecoImpact: 'Multi-layer plastic'
  },
  'Food delivery containers': {
    category: 'Food & Canteen',
    weightGrams: 24.0,
    unit: 'container',
    resinCode: 'PP #5',
    recyclable: true,
    desc: 'Zomato/Swiggy meal boxes, biryani handis & lids',
    icon: 'Box',
    ecoImpact: 'Thick PP #5 plastic'
  },
  'Polythene bags': {
    category: 'Shopping & Bags',
    weightGrams: 6.0,
    unit: 'bag',
    resinCode: 'LDPE #4',
    recyclable: false,
    desc: 'Single-use HDPE/LDPE carry bags',
    icon: 'ShoppingBag',
    ecoImpact: 'Chokes campus drainage systems'
  }
};

export const CATEGORIES = ['Beverages & Hydration', 'Packaged Snacks', 'Confectionery & Treats'];

// ==========================================
// WEEK 1 AUDIT DATASET (Exact 46 items)
// Bottles: 19, Chips: 15, Chocolate: 12
// Member totals: Atul: 11, Nikhil: 15, Arnav: 20
// UPI Transactions: 18 (2.6 items / payment)
// ==========================================
export const INITIAL_AUDIT_LOGS = [
  // --- Day 1 (Total = 13: Bottles 6, Chips 4, Chocolate 3 | Atul 2, Nikhil 4, Arnav 7) ---
  { id: 'w1-d1-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Canteen hydration during morning lectures' },
  { id: 'w1-d1-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Blue Lays chips packet from tuck shop' },
  { id: 'w1-d1-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 2, day: 'Day 1', date: '2026-11-14', location: 'Purchased near sports field & department' },
  { id: 'w1-d1-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Kurkure packet during library break' },
  { id: 'w1-d1-5', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Dairy Milk post-lunch treat' },
  { id: 'w1-d1-6', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 3, day: 'Day 1', date: '2026-11-14', location: 'Hostel commute and food court bottles' },
  { id: 'w1-d1-7', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 2, day: 'Day 1', date: '2026-11-14', location: 'Bingo Mad Angles shared with peers' },
  { id: 'w1-d1-8', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 2, day: 'Day 1', date: '2026-11-14', location: '5 Star & KitKat wrappers' },

  // --- Day 2 (Total = 5: Bottles 2, Chips 2, Chocolate 1 | Atul 1, Nikhil 2, Arnav 2) ---
  { id: 'w1-d2-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Academic block cafeteria water' },
  { id: 'w1-d2-2', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Cream & Onion chips from tuck shop' },
  { id: 'w1-d2-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Perk chocolate bar during project work' },
  { id: 'w1-d2-4', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Forgot reusable flask in room; bought bottle' },
  { id: 'w1-d2-5', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Evening snack at food court' },

  // --- Day 3 (Total = 6: Bottles 1, Chips 5, Chocolate 0 | Atul 1, Nikhil 1, Arnav 4) ---
  { id: 'w1-d3-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 3', date: '2026-11-16', location: 'Hostel tuck shop snack run' },
  { id: 'w1-d3-2', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 3', date: '2026-11-16', location: 'Sports field hydration' },
  { id: 'w1-d3-3', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 4, day: 'Day 3', date: '2026-11-16', location: 'Group study session snack packs (Lays & Kurkure)' },

  // --- Day 4 (Total = 6: Bottles 3, Chips 0, Chocolate 3 | Atul 1, Nikhil 3, Arnav 2) ---
  { id: 'w1-d4-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Morning lecture hall hydration' },
  { id: 'w1-d4-2', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Gym session Kinley bottle' },
  { id: 'w1-d4-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 2, day: 'Day 4', date: '2026-11-17', location: 'Snickers & Dairy Milk Silk share' },
  { id: 'w1-d4-4', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Bus stop shop while commuting' },
  { id: 'w1-d4-5', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 4', date: '2026-11-17', location: '5 Star bar between classes' },

  // --- Day 5 (Total = 3: Bottles 1, Chips 0, Chocolate 2 | Atul 1, Nikhil 1, Arnav 1) ---
  { id: 'w1-d5-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 5', date: '2026-11-18', location: 'Munch chocolate bar during lab session' },
  { id: 'w1-d5-2', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 5', date: '2026-11-18', location: 'Main cafeteria bottled water' },
  { id: 'w1-d5-3', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 5', date: '2026-11-18', location: 'Evening library snack chocolate' },

  // --- Day 6 (Total = 13: Bottles 6, Chips 4, Chocolate 3 | Atul 5, Nikhil 4, Arnav 4) ---
  { id: 'w1-d6-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 2, day: 'Day 6', date: '2026-11-19', location: 'Weekend project research hydration' },
  { id: 'w1-d6-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 2, day: 'Day 6', date: '2026-11-19', location: 'Doritos and Uncle Chipps snacks' },
  { id: 'w1-d6-3', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'KitKat break treat' },
  { id: 'w1-d6-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 2, day: 'Day 6', date: '2026-11-19', location: 'Sports day & afternoon outing' },
  { id: 'w1-d6-5', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'Lays classic salted' },
  { id: 'w1-d6-6', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'Dairy Milk bar' },
  { id: 'w1-d6-7', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 2, day: 'Day 6', date: '2026-11-19', location: 'Campus gate tuck shop bottles' },
  { id: 'w1-d6-8', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'Kurkure chilli chatka' },
  { id: 'w1-d6-9', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 6', date: '2026-11-19', location: '5 Star bar' }

  // --- Day 7 (Total = 0: Zero Waste Sunday) ---
];

// ==========================================
// WEEK 2 CHALLENGE DATASET (Exact 45 items)
// Bottles: 8 (-57.9%), Chips: 18 (+20.0%), Chocolate: 19 (+58.3%)
// Member totals: Atul: 15, Nikhil: 15, Arnav: 15
// UPI Transactions: 32 (1.4 items / payment, -45.0% per payment)
// ==========================================
export const WEEK2_CHALLENGE_LOGS = [
  // Day 1 (Total = 8: Bottles 2, Chips 3, Chocolate 3 | Atul 3, Nikhil 2, Arnav 3)
  { id: 'w2-d1-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'Carried steel flask; only 1 emergency bottle bought' },
  { id: 'w2-d1-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'Tuck shop chips' },
  { id: 'w2-d1-3', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'Dairy Milk treat' },
  { id: 'w2-d1-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'Kurkure packet' },
  { id: 'w2-d1-5', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 1', date: '2026-11-21', location: '5 Star bar' },
  { id: 'w2-d1-6', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'Single emergency bottle' },
  { id: 'w2-d1-7', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'Lays packet' },
  { id: 'w2-d1-8', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 1', date: '2026-11-21', location: 'KitKat bar' },

  // Day 2 (Total = 7: Bottles 1, Chips 3, Chocolate 3 | Atul 2, Nikhil 3, Arnav 2)
  { id: 'w2-d2-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Cafeteria snack' },
  { id: 'w2-d2-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Chocolate snack' },
  { id: 'w2-d2-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Gym session hydration' },
  { id: 'w2-d2-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Bingo snack' },
  { id: 'w2-d2-5', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Munch bar' },
  { id: 'w2-d2-6', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Evening snack' },
  { id: 'w2-d2-7', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 2', date: '2026-11-22', location: 'Perk bar' },

  // Day 3 (Total = 7: Bottles 1, Chips 3, Chocolate 3 | Atul 2, Nikhil 2, Arnav 3)
  { id: 'w2-d3-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 3', date: '2026-11-23', location: 'Library break snack' },
  { id: 'w2-d3-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 3', date: '2026-11-23', location: 'Dairy Milk snack' },
  { id: 'w2-d3-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 3', date: '2026-11-23', location: 'Hostel tuck shop' },
  { id: 'w2-d3-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 3', date: '2026-11-23', location: '5 Star' },
  { id: 'w2-d3-5', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 3', date: '2026-11-23', location: 'Bought bottle' },
  { id: 'w2-d3-6', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 3', date: '2026-11-23', location: 'Chips pack' },
  { id: 'w2-d3-7', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 3', date: '2026-11-23', location: 'Chocolate' },

  // Day 4 (Total = 6: Bottles 1, Chips 2, Chocolate 3 | Atul 2, Nikhil 2, Arnav 2)
  { id: 'w2-d4-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 4', date: '2026-11-24', location: 'Lecture hall bottle' },
  { id: 'w2-d4-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 4', date: '2026-11-24', location: 'Snack bar' },
  { id: 'w2-d4-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 4', date: '2026-11-24', location: 'Lays packet' },
  { id: 'w2-d4-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 4', date: '2026-11-24', location: 'KitKat bar' },
  { id: 'w2-d4-5', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 4', date: '2026-11-24', location: 'Kurkure' },
  { id: 'w2-d4-6', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 4', date: '2026-11-24', location: 'Dairy Milk' },

  // Day 5 (Total = 6: Bottles 1, Chips 2, Chocolate 3 | Atul 2, Nikhil 2, Arnav 2)
  { id: 'w2-d5-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 5', date: '2026-11-25', location: 'Tuck shop snack' },
  { id: 'w2-d5-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 5', date: '2026-11-25', location: 'Perk bar' },
  { id: 'w2-d5-3', memberId: 'm2', memberName: 'Nikhil', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 5', date: '2026-11-25', location: 'Campus walk bottle' },
  { id: 'w2-d5-4', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 5', date: '2026-11-25', location: '5 Star' },
  { id: 'w2-d5-5', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 5', date: '2026-11-25', location: 'Chips' },
  { id: 'w2-d5-6', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 5', date: '2026-11-25', location: 'KitKat' },

  // Day 6 (Total = 11: Bottles 2, Chips 5, Chocolate 4 | Atul 4, Nikhil 4, Arnav 3)
  { id: 'w2-d6-1', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Weekend study snack' },
  { id: 'w2-d6-2', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Chocolate' },
  { id: 'w2-d6-3', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Evening chips' },
  { id: 'w2-d6-4', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Late night chocolate' },
  { id: 'w2-d6-5', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Hostel chips' },
  { id: 'w2-d6-6', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Doritos' },
  { id: 'w2-d6-7', memberId: 'm2', memberName: 'Nikhil', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 2, day: 'Day 6', date: '2026-11-26', location: '2 Cadbury chocolates' },
  { id: 'w2-d6-8', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Sports day bottle' },
  { id: 'w2-d6-9', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chips Packets', category: 'Packaged Snacks', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Lays' },
  { id: 'w2-d6-10', memberId: 'm3', memberName: 'Arnav Gulati', itemType: 'Chocolate Wrappers', category: 'Confectionery & Treats', quantity: 1, day: 'Day 6', date: '2026-11-26', location: '5 Star' },
  { id: 'w2-d6-11', memberId: 'm1', memberName: 'Atul Raushan', itemType: 'PET Water Bottles', category: 'Beverages & Hydration', quantity: 1, day: 'Day 6', date: '2026-11-26', location: 'Food court water' }
  // Day 7: 0 items (Zero Waste Sunday)
];

// ==========================================
// STUDENT ACTION SIMULATOR: "DAILY CARRY KIT"
// Part A: Backpack Kit (Always Carried)
// Part B: Hostel Room Kit (Planned Food Runs)
// ==========================================
export const STUDENT_SWAPS = [
  // --- Part A: Backpack Kit (Always Carried) ---
  {
    id: 'swap-steel-bottle',
    part: 'Part A: Backpack Kit (Always Carried)',
    title: 'Reusable 1L Steel Bottle (Backpack Kit)',
    category: 'Beverages & Hydration',
    culpritItem: 'PET Water Bottles',
    kitType: 'Part A — Backpack Kit',
    costRange: '₹250–₹400',
    breakEven: 'Breaks even after 13–20 bottles',
    currentHabit: 'Buying packaged Kinley/Bisleri PET bottles on campus (~80 bottles/year @ ₹20 each)',
    greenAlternative: 'Always carry a durable 1L insulated stainless steel bottle; refill at campus RO water coolers for free',
    weightSavedPerYearKg: 1.44, // 80 bottles * 18g
    moneySavedPerYearInr: 1600, // 80 * ₹20
    paybackPeriod: '3 weeks (13–20 bottles break-even)',
    feasibility: 'Proven: Cut our group bottle consumption by 57.9% in Week 2!',
    impactNote: 'Directly verified in our Week 2 challenge: bottle count dropped from 19 down to 8 bottles (-57.9%).',
    defaultActive: true
  },
  {
    id: 'swap-cloth-bag',
    part: 'Part A: Backpack Kit (Always Carried)',
    title: 'Foldable Cloth Bag / Jhola (Backpack Kit)',
    category: 'Shopping & Essentials',
    culpritItem: 'Polythene carry bags',
    kitType: 'Part A — Backpack Kit',
    costRange: '₹30–₹60',
    breakEven: 'Breaks even after 5–10 shopping trips',
    currentHabit: 'Accepting single-use polythene bags at campus stationery, fruit stalls, and pharmacy (~150 bags/year)',
    greenAlternative: 'Keep a washable, ultra-compact foldable cotton cloth bag permanently tucked inside college backpack',
    weightSavedPerYearKg: 0.90, // 150 bags * 6g
    moneySavedPerYearInr: 450, // avoided ₹3–₹5 carry bag charges
    paybackPeriod: '2 weeks (5–10 shopping trips)',
    feasibility: 'Very High: Zero friction once made a permanent backpack item',
    impactNote: 'Eliminates thin LDPE/HDPE bags that clog campus stormwater drains during rains.',
    defaultActive: true
  },
  {
    id: 'swap-steel-spoon',
    part: 'Part A: Backpack Kit (Always Carried)',
    title: 'Steel Spoon in Cloth Pouch (Backpack Kit)',
    category: 'Canteen & Food Runs',
    culpritItem: 'Disposable plastic spoons & forks',
    kitType: 'Part A — Backpack Kit',
    costRange: '₹20–₹40',
    breakEven: 'Breaks even immediately',
    currentHabit: 'Using disposable polystyrene spoons and forks with takeaway maggi, chaat, and food truck snacks',
    greenAlternative: 'Carry a personal stainless steel spoon inside a washable cloth pouch in backpack stationery pocket',
    weightSavedPerYearKg: 0.35,
    moneySavedPerYearInr: 180,
    paybackPeriod: 'Immediate (1 month)',
    feasibility: 'High: Fits easily in pen pencil case / backpack compartment',
    impactNote: 'Eliminates brittle PS cutlery that breaks into sharp plastic fragments in campus bins.',
    defaultActive: true
  },

  // --- Part B: Hostel Room Kit (Planned Food Runs) ---
  {
    id: 'swap-steel-tiffin',
    part: 'Part B: Hostel Room Kit (Planned Food Runs)',
    title: 'Steel Tiffin Box / Dabba (Hostel Room Kit)',
    category: 'Takeaways & Meals',
    culpritItem: 'Plastic meal containers & bowls',
    kitType: 'Part B — Hostel Room Kit',
    costRange: '₹100–₹200',
    breakEven: 'Breaks even after 10–15 takeaway orders',
    currentHabit: 'Ordering canteen & food truck takeout meals in thick polypropylene plastic boxes and foil containers',
    greenAlternative: 'Carry your personal 2-tier stainless steel tiffin dabba when going for planned evening takeaway food runs',
    weightSavedPerYearKg: 1.68,
    moneySavedPerYearInr: 850,
    paybackPeriod: '1.5 months (saves container charges)',
    feasibility: 'High for hostelites during dinner and late-night food runs',
    impactNote: 'Averts 70+ greasy plastic meal boxes that municipal recyclers refuse to process.',
    defaultActive: true
  },
  {
    id: 'swap-steel-tumbler',
    part: 'Part B: Hostel Room Kit (Planned Food Runs)',
    title: 'Steel Tumbler / Camp Mug (Hostel Room Kit)',
    category: 'Beverages & Chai',
    culpritItem: 'Disposable chai cups (PP & Paper)',
    kitType: 'Part B — Hostel Room Kit',
    costRange: '₹60–₹100',
    breakEven: 'Breaks even after 30 cups of chai',
    currentHabit: 'Drinking 2–3 cups of tapri chai/coffee per day in plastic/poly-lined disposable cups (~500 cups/year)',
    greenAlternative: 'Carry a personal stainless steel camp mug or choose traditional terracotta kulhads at the tapri',
    weightSavedPerYearKg: 2.25,
    moneySavedPerYearInr: 300,
    paybackPeriod: '3 weeks',
    feasibility: 'Very High: Canteen vendors happily serve directly into student tumblers',
    impactNote: 'Prevents hot microplastic ingestion and eliminates over 2.2 kg of contaminated cup waste.',
    defaultActive: true
  },
  {
    id: 'swap-bulk-snack-box',
    part: 'Part B: Hostel Room Kit (Planned Food Runs)',
    title: 'Large Bulk Snack Box (Hostel Room Kit)',
    category: 'Packaged Snacks & Treats',
    culpritItem: 'Small Chips & Chocolate Foil Wrappers',
    kitType: 'Part B — Hostel Room Kit',
    costRange: '₹80–₹150',
    breakEven: 'Breaks even in 1 month via bulk wholesale discounts',
    currentHabit: 'Buying frequent small ₹5 and ₹10 chips packets and chocolate bars (our audit found 27 wrappers/week!)',
    greenAlternative: 'Keep a large airtight stainless steel/glass snack container in hostel room; buy 500g bulk snacks, makhanas or family packs',
    weightSavedPerYearKg: 1.20,
    moneySavedPerYearInr: 520,
    paybackPeriod: '1 month (family packs are 20–30% cheaper per gram)',
    feasibility: 'High: Roommates share snack tins; avoids constant micro-purchases',
    impactNote: 'Directly tackles our group’s #2 and #3 top culprits (chips packets and chocolate wrappers).',
    defaultActive: false
  }
];

export const PROJECT_METADATA = {
  course: 'Environmental Studies (EVS) - Semester IV',
  activityNo: 'Activity No. 3',
  activityTitle: 'Track Your Plastic Consumption & Develop Practical Alternatives to Single-Use Plastics',
  institution: 'University of Petroleum and Energy Studies (UPES), Dehradun',
  department: 'Department of Environmental Studies & Green Campus Committee',
  academicYear: '2026 - 2027',
  campusStudentPopulation: 500,
  weeksPerAcademicYear: 40,
  week1Audit: {
    name: 'Week 1 Baseline Audit',
    totalItems: 46,
    totalWeightGrams: 432.0,
    bottles: 19,
    chips: 15,
    chocolate: 12,
    upiTransactions: 18,
    itemsPerPayment: 2.6,
    atulCount: 11,
    nikhilCount: 15,
    arnavCount: 20
  },
  week2Challenge: {
    name: 'Week 2 Carry Kit Challenge',
    totalItems: 45,
    totalWeightGrams: 263.5,
    bottles: 8,
    chips: 18,
    chocolate: 19,
    upiTransactions: 32,
    itemsPerPayment: 1.4,
    itemsPerPaymentReduction: 45.0, // -45%
    bottleReduction: 57.9,          // -57.9%
    massReduction: 39.0,            // -39.0%
    atulCount: 15,
    nikhilCount: 15,
    arnavCount: 15
  }
};
