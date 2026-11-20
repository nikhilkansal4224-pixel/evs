export const INITIAL_MEMBERS = [
  { id: 'm1', name: 'Aarav Sharma', roll: '24ENV014', role: 'Group Leader / Hostelite' },
  { id: 'm2', name: 'Priya Patel', roll: '24ENV029', role: 'Day Scholar / Commuter' },
  { id: 'm3', name: 'Rohan Verma', roll: '24ENV042', role: 'Hostelite (Block C)' }
];

export const ITEM_DEFINITIONS = {
  // Food & Canteen
  'PET water bottles': {
    category: 'Food & Canteen',
    weightGrams: 18.0,
    unit: 'bottle',
    desc: '500ml / 1L packaged mineral water bottles (PET)',
    icon: 'Bottle',
    ecoImpact: 'Takes 450+ years to decompose; high virgin petroleum footprint'
  },
  'Disposable tea cups': {
    category: 'Food & Canteen',
    weightGrams: 4.5,
    unit: 'cup',
    desc: 'Polypropylene plastic chai cups or plastic-lined paper cups',
    icon: 'Coffee',
    ecoImpact: 'Non-recyclable due to polymer lining; releases microplastics into hot tea'
  },
  'Snack wrappers': {
    category: 'Food & Canteen',
    weightGrams: 4.0,
    unit: 'packet',
    desc: 'Chips, biscuits, maggi, and wafer multilayer metallized film (BOPP)',
    icon: 'Cookie',
    ecoImpact: 'Multi-layer plastic (MLP) cannot be mechanically recycled by municipal bodies'
  },
  'Food delivery containers': {
    category: 'Food & Canteen',
    weightGrams: 24.0,
    unit: 'container',
    desc: 'Zomato/Swiggy meal boxes, biryani handis, plastic bowls & lids',
    icon: 'Box',
    ecoImpact: 'Thick PP #5 plastic; frequently contaminated with grease and discarded in landfills'
  },
  'Polythene bags': {
    category: 'Food & Canteen',
    weightGrams: 6.0,
    unit: 'bag',
    desc: 'Single-use HDPE/LDPE carry bags from canteens, grocery, fruit stalls',
    icon: 'ShoppingBag',
    ecoImpact: 'Chokes campus drainage systems and harms stray cattle if ingested'
  },

  // Hostel & Stationery
  'Shampoo/detergent sachets': {
    category: 'Hostel & Stationery',
    weightGrams: 2.5,
    unit: 'sachet',
    desc: '₹2-₹10 single-use multi-layer plastic shampoo, conditioner & washing powder packets',
    icon: 'Sparkles',
    ecoImpact: 'Extremely thin laminated foils with zero scrap value for ragpickers'
  },
  'Ballpoint pens': {
    category: 'Hostel & Stationery',
    weightGrams: 6.0,
    unit: 'pen',
    desc: 'Disposable ₹5-₹10 use-and-throw clear polystyrene/polypropylene pens',
    icon: 'PenTool',
    ecoImpact: 'Contains non-biodegradable barrels and toxic ink residue discarded after a week'
  },
  'Toothbrush/toothpaste tubes': {
    category: 'Hostel & Stationery',
    weightGrams: 15.0,
    unit: 'item',
    desc: 'Multi-material plastic toothbrushes and aluminum-plastic laminate toothpaste tubes',
    icon: 'Smile',
    ecoImpact: 'Nylon bristles and fused aluminum laminate impossible to separate locally'
  },
  'Online shopping poly mailers': {
    category: 'Hostel & Stationery',
    weightGrams: 12.0,
    unit: 'mailer',
    desc: 'Courier parcel sleeves, bubble wrap & plastic adhesive tape',
    icon: 'Package',
    ecoImpact: 'Low-density polyethylene with strong adhesive glue strips'
  }
};

export const CATEGORIES = ['Food & Canteen', 'Hostel & Stationery'];

export const INITIAL_AUDIT_LOGS = [
  // Day 1
  { id: 'log-1', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 1', date: '2026-11-14', location: 'Canteen tapri (morning & post-class chai)' },
  { id: 'log-2', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'PET water bottles', category: 'Food & Canteen', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Purchased near sports ground during football' },
  { id: 'log-3', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Blue Lays chips packet from tuck shop' },
  { id: 'log-4', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Nescafe stall near Library' },
  { id: 'log-5', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Polythene bags', category: 'Food & Canteen', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Bought photocopy notes & fruit from campus gate' },
  { id: 'log-6', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Ballpoint pens', category: 'Hostel & Stationery', quantity: 1, day: 'Day 1', date: '2026-11-14', location: '₹10 pen ran out during 2-hour lecture' },
  { id: 'log-7', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Shampoo/detergent sachets', category: 'Hostel & Stationery', quantity: 2, day: 'Day 1', date: '2026-11-14', location: 'Morning bath in Hostel Block C' },
  { id: 'log-8', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Food delivery containers', category: 'Food & Canteen', quantity: 1, day: 'Day 1', date: '2026-11-14', location: 'Late night paneer roll delivery box' },
  { id: 'log-9', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 1', date: '2026-11-14', location: 'Hostel gate chai adda' },

  // Day 2
  { id: 'log-12', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 3, day: 'Day 2', date: '2026-11-15', location: 'Group study session at main canteen' },
  { id: 'log-13', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Polythene bags', category: 'Food & Canteen', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Carried samosas from campus bakery' },
  { id: 'log-14', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 2', date: '2026-11-15', location: 'Academic block cafeteria' },
  { id: 'log-15', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Kurkure packet shared with friends' },
  { id: 'log-16', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 2', date: '2026-11-15', location: 'Tea break between lab experiments' },
  { id: 'log-17', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'PET water bottles', category: 'Food & Canteen', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Forgot steel bottle in hostel' },
  { id: 'log-18', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Online shopping poly mailers', category: 'Hostel & Stationery', quantity: 1, day: 'Day 2', date: '2026-11-15', location: 'Amazon courier delivery (phone charger)' },

  // Day 3
  { id: 'log-21', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Food delivery containers', category: 'Food & Canteen', quantity: 1, day: 'Day 3', date: '2026-11-16', location: 'Swiggy biryani meal bowl' },
  { id: 'log-22', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 3', date: '2026-11-16', location: 'Canteen tapri' },
  { id: 'log-23', memberId: 'm2', memberName: 'Priya Patel', itemType: 'PET water bottles', category: 'Food & Canteen', quantity: 1, day: 'Day 3', date: '2026-11-16', location: 'Bus stop shop while commuting' },
  { id: 'log-24', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 1, day: 'Day 3', date: '2026-11-16', location: 'Oreo packet during library break' },
  { id: 'log-25', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 3, day: 'Day 3', date: '2026-11-16', location: 'Project discussion near canteen' },
  { id: 'log-26', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 2, day: 'Day 3', date: '2026-11-16', location: 'Bingo Mad Angles + 5 Star chocolate' },

  // Day 4
  { id: 'log-29', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Shampoo/detergent sachets', category: 'Hostel & Stationery', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Hostel shower' },
  { id: 'log-30', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 4', date: '2026-11-17', location: 'Morning chai & lab break chai' },
  { id: 'log-31', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Canteen Nescafe cup' },
  { id: 'log-32', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Polythene bags', category: 'Food & Canteen', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Stationery shop file folder bag' },
  { id: 'log-33', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Food delivery containers', category: 'Food & Canteen', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Midnight fried rice container' },
  { id: 'log-34', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Polythene bags', category: 'Food & Canteen', quantity: 1, day: 'Day 4', date: '2026-11-17', location: 'Hostel canteen tuck bag' },

  // Day 5
  { id: 'log-37', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'PET water bottles', category: 'Food & Canteen', quantity: 1, day: 'Day 5', date: '2026-11-18', location: 'Sports day hydration' },
  { id: 'log-38', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 5', date: '2026-11-18', location: 'Faculty corridor stall' },
  { id: 'log-39', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 2, day: 'Day 5', date: '2026-11-18', location: 'Hide & Seek biscuits + chocolate bar' },
  { id: 'log-40', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 3, day: 'Day 5', date: '2026-11-18', location: 'Hostel common room group work' },
  { id: 'log-41', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Shampoo/detergent sachets', category: 'Hostel & Stationery', quantity: 2, day: 'Day 5', date: '2026-11-18', location: 'Weekend laundry prep' },

  // Day 6
  { id: 'log-44', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Ballpoint pens', category: 'Hostel & Stationery', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'Drafting assignment graphs' },
  { id: 'log-45', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 6', date: '2026-11-19', location: 'Hostel gate tea stall' },
  { id: 'log-46', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 6', date: '2026-11-19', location: 'Main cafeteria' },
  { id: 'log-47', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'PET water bottles', category: 'Food & Canteen', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'Gym session hydration' },
  { id: 'log-48', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 1, day: 'Day 6', date: '2026-11-19', location: 'Haldiram bhujia pouch' },

  // Day 7
  { id: 'log-51', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Food delivery containers', category: 'Food & Canteen', quantity: 1, day: 'Day 7', date: '2026-11-20', location: 'Sunday group lunch parcel' },
  { id: 'log-52', memberId: 'm1', memberName: 'Aarav Sharma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 7', date: '2026-11-20', location: 'Sunday evening gathering' },
  { id: 'log-53', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 1, day: 'Day 7', date: '2026-11-20', location: 'Sunday project meeting' },
  { id: 'log-54', memberId: 'm2', memberName: 'Priya Patel', itemType: 'Snack wrappers', category: 'Food & Canteen', quantity: 1, day: 'Day 7', date: '2026-11-20', location: 'Potato chips snack' },
  { id: 'log-55', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Disposable tea cups', category: 'Food & Canteen', quantity: 2, day: 'Day 7', date: '2026-11-20', location: 'Hostel quad chai' },
  { id: 'log-56', memberId: 'm3', memberName: 'Rohan Verma', itemType: 'Shampoo/detergent sachets', category: 'Hostel & Stationery', quantity: 1, day: 'Day 7', date: '2026-11-20', location: 'Sunday hair wash' }
];

export const STUDENT_SWAPS = [
  {
    id: 'swap-shampoo',
    title: 'Shared 1L Refill Bottle vs ₹10 Sachets',
    category: 'Hostel & Personal Care',
    culpritItem: 'Shampoo/detergent sachets',
    currentHabit: 'Buying 3-4 sachets/week @ ₹3 each (~150 sachets/year)',
    greenAlternative: 'Roommates pool ₹280 to buy 1L pump dispenser bottle; refill from local bulk mart',
    weightSavedPerYearKg: 0.38,
    moneySavedPerYearInr: 220,
    paybackPeriod: 'Immediate (Week 1)',
    feasibility: 'High (Standard hostel practice)',
    impactNote: 'Eliminates 150+ unrecyclable aluminized multi-layer plastic (MLP) sachets that otherwise enter municipal drains.',
    defaultActive: true
  },
  {
    id: 'swap-chai',
    title: 'Personal Steel Mug / Kulhad vs Disposable Tea Cups',
    category: 'Food & Canteen',
    culpritItem: 'Disposable tea cups',
    currentHabit: 'Drinking 2-3 cups of tapri chai/coffee per day in plastic/wax cups (~600 cups/academic year)',
    greenAlternative: 'Carry a ₹60 pocket-friendly stainless steel camp mug or choose terracotta earthen kulhads',
    weightSavedPerYearKg: 2.70,
    moneySavedPerYearInr: 300,
    paybackPeriod: '3 weeks',
    feasibility: 'Very High (Canteens happily pour into personal tumblers)',
    impactNote: 'Stops 2.7 kg of polypropylene plastic from entering campus trash bins and prevents hot microplastic leaching into your drink.',
    defaultActive: true
  },
  {
    id: 'swap-jhola',
    title: 'Foldable Cotton Jhola vs Single-Use Polythene Bags',
    category: 'Shopping & Essentials',
    culpritItem: 'Polythene bags',
    currentHabit: 'Accepting 3-4 polythene carry bags/week at local fruit carts, tuck shops & pharmacies (~160 bags/year)',
    greenAlternative: 'Keep a washable, compact foldable cotton cloth jhola in your college backpack',
    weightSavedPerYearKg: 0.96,
    moneySavedPerYearInr: 450,
    paybackPeriod: '2 weeks (Cloth bag costs ~₹40 or repurpose old tote)',
    feasibility: 'High (Zero habit friction once kept in backpack)',
    impactNote: 'Eliminates nearly 1 kg of thin-film carry bags that choke college rainwater stormwater drains during monsoon.',
    defaultActive: true
  },
  {
    id: 'swap-pen',
    title: 'Refillable Ink/Metal Pen vs Use-and-Throw Plastic Pens',
    category: 'Stationery & Exams',
    culpritItem: 'Ballpoint pens',
    currentHabit: 'Discarding 15-20 disposable ₹10 plastic ballpens per academic year',
    greenAlternative: '1 refillable fountain pen (or click ballpoint with metal refills) + ₹35 Camlin royal blue ink bottle',
    weightSavedPerYearKg: 0.12,
    moneySavedPerYearInr: 140,
    paybackPeriod: '1 month',
    feasibility: 'High (Produces smoother exam handwriting too!)',
    impactNote: 'Prevents 20 non-biodegradable pen barrels and toxic ink cartridges from rotting in campus landfills.',
    defaultActive: false
  },
  {
    id: 'swap-water',
    title: 'Reusable Steel Bottle + Campus RO vs Packaged Water',
    category: 'Food & Canteen',
    culpritItem: 'PET water bottles',
    currentHabit: 'Buying 2 packaged PET water bottles/week (₹20 Kinley/Bisleri) on hot days (~80 bottles/year)',
    greenAlternative: 'Carry personal 1L insulated stainless steel bottle and refill at free campus RO filtration stations',
    weightSavedPerYearKg: 1.44,
    moneySavedPerYearInr: 1600,
    paybackPeriod: '1 month (covers ₹250 steel bottle cost easily)',
    feasibility: 'Very High (Campus has verified RO water coolers)',
    impactNote: 'Saves ₹1,600/year while stopping 80 PET bottles that consume 3x their volume of water to manufacture.',
    defaultActive: true
  },
  {
    id: 'swap-delivery',
    title: 'Hostelite Steel Dabba / "No Cutlery" vs Meal Containers',
    category: 'Food & Canteen',
    culpritItem: 'Food delivery containers',
    currentHabit: 'Late night Zomato/canteen takeaway in thick plastic bowls 2x/week (~70 containers + plastic spoons)',
    greenAlternative: 'Select "Don\'t send cutlery" in food delivery apps; carry hostel stainless steel dabba for canteen takeaways',
    weightSavedPerYearKg: 1.68,
    moneySavedPerYearInr: 850,
    paybackPeriod: 'Immediate',
    feasibility: 'Moderate (Requires carrying dabba to canteen counter)',
    impactNote: 'Averts 1.68 kg of greasy, food-contaminated plastic that municipal recyclers refuse to process.',
    defaultActive: false
  }
];

export const PROJECT_METADATA = {
  course: 'Environmental Studies (EVS) - Semester IV',
  activityNo: 'Activity No. 3',
  activityTitle: 'Track Your Plastic Consumption & Develop Practical Alternatives to Single-Use Plastics',
  institution: 'Department of Environmental Sciences & Engineering',
  academicYear: '2026 - 2027',
  campusStudentPopulation: 500,
  weeksPerAcademicYear: 40
};
