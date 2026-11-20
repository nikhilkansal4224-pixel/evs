export const SOURCE_PRESETS = {
  hostel: {
    id: 'hostel',
    name: 'Hostel Wing Greywater (Showers & Washbasins)',
    icon: 'Bath',
    defaultLitresPerPerson: 45,
    baseline: {
      bod: 160,        // mg/L
      tss: 140,        // mg/L
      turbidity: 85,   // NTU
      oilGrease: 24,   // mg/L
      cod: 280,        // mg/L
      ph: 7.2
    },
    description: 'Low-to-moderate strength greywater rich in personal care surfactants, skin lipids, and hair particulates. Ideal for rapid biological assimilation.',
    keyContaminants: 'Sodium lauryl sulfate (SLS), triclosan, micro-dust, skin sebum'
  },
  canteen: {
    id: 'canteen',
    name: 'Campus Canteen & Mess Wastewater',
    icon: 'UtensilsCrossed',
    defaultLitresPerPerson: 25,
    baseline: {
      bod: 480,        // mg/L
      tss: 380,        // mg/L
      turbidity: 260,  // NTU
      oilGrease: 110,  // mg/L
      cod: 850,        // mg/L
      ph: 6.5
    },
    description: 'High-strength wastewater laden with food solids, cooking oils, gravies, and kitchen detergents. Demands efficient upfront grease trapping.',
    keyContaminants: 'Triglycerides, emulsified oils, vegetable starch, biodegradable food waste'
  },
  combined: {
    id: 'combined',
    name: 'Combined Campus Block (Hostel + Academic)',
    icon: 'Building2',
    defaultLitresPerPerson: 40,
    baseline: {
      bod: 290,        // mg/L
      tss: 230,        // mg/L
      turbidity: 160,  // NTU
      oilGrease: 55,   // mg/L
      cod: 510,        // mg/L
      ph: 7.0
    },
    description: 'Composite campus effluent blending washroom basins, hostel laundry rinse, and departmental pantry sinks.',
    keyContaminants: 'Surfactants, particulate grit, laundry detergents, light culinary oils'
  }
};

export const TREATMENT_STAGES = [
  {
    id: 'stage-1',
    stageNumber: 1,
    title: 'Grit Chamber & Baffled Grease Trap',
    shortName: 'Grit & Grease Trap',
    category: 'Primary Physical Treatment',
    color: '#D97706',
    hrtHours: 2.5,
    dimensions: '1.8m (L) × 0.9m (W) × 1.2m (D)',
    mediaLayers: [
      { name: 'Surface Baffle Skimmer', depth: '25 cm clearance', material: 'Corrosion-resistant FRP/PVC baffle plate to trap floating oil scum' },
      { name: 'Dual Chamber Settling Basin', depth: '75 cm water column', material: 'Quiescent zone for heavy sediment and food particulate gravity settling' },
      { name: 'Sludge & Grit Sump', depth: '20 cm bottom basin', material: 'Inverted pyramidal hopper for concentrated grit manual clearing' }
    ],
    mechanisms: [
      'Stokes Law gravity sedimentation of inert grit (>0.2mm diameter).',
      'Phase separation: Free oils and fats float to surface due to density differential (specific gravity < 0.92).',
      'Dual underflow-overflow baffles prevent scum carryover into downstream filters.'
    ],
    removalContribution: {
      bod: 25,       // %
      tss: 45,       // %
      turbidity: 40, // %
      oilGrease: 85  // %
    },
    maintenanceProtocol: 'Bi-weekly surface skimming of grease crust; monthly bottom grit flushing via drain valve.'
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    title: 'Multi-Layer Bio-Sand & Wood Charcoal Filter',
    shortName: 'Bio-Sand & Charcoal Filter',
    category: 'Secondary Physical-Adsorption Media',
    color: '#0D9488',
    hrtHours: 6.0,
    dimensions: '2.4m (L) × 1.2m (W) × 1.5m (D)',
    mediaLayers: [
      { name: 'Fine Silica Sand Layer (0.2–0.5 mm)', depth: '40 cm', material: 'Retains fine suspended matter, lint, and develops a surface biolayer (Schmutzdecke)' },
      { name: 'Hardwood Charcoal / Activated Carbon', depth: '25 cm', material: 'Adsorbs micropollutants, odors, trace surfactants, dyes, and residual volatile fatty acids' },
      { name: 'Coarse Quartz Sand (1–2 mm)', depth: '20 cm', material: 'Intermediate transition filter preventing media downward migration' },
      { name: 'Graded River Gravel (6–12 mm & 20 mm)', depth: '25 cm', material: 'Underdrain support bed encasing perforated PVC collection manifold' }
    ],
    mechanisms: [
      'Deep-bed mechanical straining of fine colloids.',
      'Surface adsorption on porous hardwood charcoal (internal surface area > 350 m²/g).',
      'Early biofilm attachment breaking down soluble organic carbohydrates.'
    ],
    removalContribution: {
      bod: 40,       // % (incremental)
      tss: 65,       // %
      turbidity: 70, // %
      oilGrease: 60  // %
    },
    maintenanceProtocol: 'Quarterly surface sand scraping (top 2cm); annual charcoal replenishment or solar backwash reactivation.'
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    title: 'Horizontal Subsurface Flow Constructed Wetland (HSSF-CW)',
    shortName: 'Constructed Wetland Bed',
    category: 'Tertiary Biological Phytoremediation',
    color: '#15803D',
    hrtHours: 48.0,
    dimensions: 'Calculated dynamically based on campus daily flow volume (0.6m bed depth, 1% hydraulic slope)',
    mediaLayers: [
      { name: 'Root Zone / Rhizosphere Matrix', depth: 'Top 30–45 cm', material: 'Dense root network of emergent Indian wetland macrophytes hosting aerobic bacterial colonies' },
      { name: 'Washed Crushed Basalt Gravel (10–20 mm)', depth: '45 cm', material: 'Clean gravel providing high hydraulic conductivity (Ks ≈ 1000 m/d) and void fraction (0.38)' },
      { name: 'Impermeable Geomembrane Liner', depth: '1.2 mm thick', material: 'Heavy-duty HDPE liner preventing any subterranean seepage into campus ground aquifers' }
    ],
    mechanisms: [
      'Rhizospheric Oxygen Transfer: Wetland plants pump atmospheric oxygen through aerenchyma tissue into roots, sustaining aerobic bacterial micro-zones in an otherwise anaerobic matrix.',
      'Phytoremediation: Direct plant uptake of dissolved nitrates (NO3-) and phosphates (PO4 3-).',
      'Microbial nitrification-denitrification and enzymatic hydrolysis of complex organics.'
    ],
    removalContribution: {
      bod: 80,       // % (cumulative overall)
      tss: 85,       // %
      turbidity: 88, // %
      oilGrease: 92  // %
    },
    maintenanceProtocol: 'Semi-annual foliage harvesting to stimulate new vegetative shoots; continuous sub-surface level monitoring.'
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    title: 'Solar UV Polishing & Treated Water Sump',
    shortName: 'Solar UV Polishing Tank',
    category: 'Disinfection & Reuse Distribution',
    color: '#0284C7',
    hrtHours: 12.0,
    dimensions: 'Deep underground masonry sump with polished reflective quartz solar exposure weir',
    mediaLayers: [
      { name: 'Shallow Solar Disinfection Weir', depth: '10 cm water depth', material: 'UV-A (320–400nm) natural germicidal sunlight exposure deck with reflective white tiles' },
      { name: 'Final Clarification Still Basin', depth: '1.8 m storage', material: 'Reinforced concrete / food-grade polyethylene cistern with submersible delivery pump' },
      { name: 'Suction Screen & Inline Micron Strainer', depth: '100 mesh', material: 'Guards campus drip-irrigation emitters and dual-flush cistern valves against stray particles' }
    ],
    mechanisms: [
      'Natural solar UV photolysis: Solar UV irradiance disrupts bacterial DNA/RNA base pairing.',
      'Dissolved oxygen re-aeration cascading into the final storage cistern.',
      'Residual settling of any sloughed wetland biofilm.'
    ],
    removalContribution: {
      bod: 92,       // % (final cumulative)
      tss: 94,       // %
      turbidity: 96, // %
      oilGrease: 98  // %
    },
    maintenanceProtocol: 'Bi-annual tank desiltation; quarterly inspection of solar weir glass cover and pressure pump.'
  }
];

export const PHYTOREMEDIATION_PLANTS = {
  canna: {
    id: 'canna',
    name: 'Canna Lily',
    botanicalName: 'Canna indica',
    indianName: 'Sarbajaya / Indian Shot',
    avatar: '🌺',
    rootDepthCm: 35,
    growthRate: 'Fast (tropical perennial)',
    flowering: 'Vibrant red/yellow blossoms year-round',
    characteristics: 'Broad leaf canopy, robust tuberous rhizomes, extreme tolerance to soap greywater.',
    efficiencies: {
      bodReduction: 0.88,
      tssReduction: 0.91,
      turbidityReduction: 0.92,
      oilGreaseReduction: 0.94,
      nitrogenRemoval: 0.78,
      phosphorusRemoval: 0.72
    },
    aestheticRating: '5/5 (Transforms campus wastewater area into a lush ornamental garden)',
    studentNote: 'Highly resilient to sudden shock loads of laundry detergents; ideal for hostel greywater treatment.'
  },
  vetiver: {
    id: 'vetiver',
    name: 'Vetiver Grass',
    botanicalName: 'Chrysopogon zizanioides',
    indianName: 'Khus / Khas',
    avatar: '🌾',
    rootDepthCm: 60,
    growthRate: 'Deep-rooting, exceptionally hardy',
    flowering: 'Dense aromatic fibrous root clumps',
    characteristics: 'Massive vertical sponge-like root system (up to 2m in field conditions); natural insect repelling fragrance.',
    efficiencies: {
      bodReduction: 0.93,
      tssReduction: 0.95,
      turbidityReduction: 0.96,
      oilGreaseReduction: 0.96,
      nitrogenRemoval: 0.86,
      phosphorusRemoval: 0.81
    },
    aestheticRating: '4/5 (Clean architectural grass hedge; emits fragrant Khus aroma)',
    studentNote: 'World Bank-endorsed bio-engineering grass; unparallelled heavy root surface area for microbial biofilm density.'
  },
  typha: {
    id: 'typha',
    name: 'Cattails / Reed',
    botanicalName: 'Typha latifolia',
    indianName: 'Patera / Gondi',
    avatar: '🌿',
    rootDepthCm: 45,
    growthRate: 'Aggressive colonizer',
    flowering: 'Cylindrical velvety brown spikes',
    characteristics: 'Massive internal air channels (aerenchyma) that continuously pump atmospheric oxygen into root micro-environments.',
    efficiencies: {
      bodReduction: 0.89,
      tssReduction: 0.92,
      turbidityReduction: 0.93,
      oilGreaseReduction: 0.93,
      nitrogenRemoval: 0.84,
      phosphorusRemoval: 0.79
    },
    aestheticRating: '3.5/5 (Natural lake wetland look; requires periodic pruning)',
    studentNote: 'Exceptional oxygen transfer efficiency; maximizes aerobic decomposition of tricky canteen organics.'
  },
  polyculture: {
    id: 'polyculture',
    name: 'Mixed Polyculture (Canna + Vetiver + Typha)',
    botanicalName: 'Ecological Consortium Matrix',
    indianName: 'Multi-Species Symbiotic Bed',
    avatar: '✨',
    rootDepthCm: 55,
    growthRate: 'Balanced multi-tier ecology',
    flowering: 'Multi-seasonal blossoms with lush textural foliage',
    characteristics: 'Layered niche occupation: Vetiver anchors the deep zone (40-60cm), Canna filters the middle zone (20-40cm), and Typha hyper-aerates the inlet.',
    efficiencies: {
      bodReduction: 0.95,
      tssReduction: 0.97,
      turbidityReduction: 0.97,
      oilGreaseReduction: 0.98,
      nitrogenRemoval: 0.90,
      phosphorusRemoval: 0.85
    },
    aestheticRating: '5/5 (Top ecological recommendation: eliminates single-species pest vulnerability)',
    studentNote: 'Recommended by environmental engineers. Multi-species root architecture prevents preferential flow channeling.'
  }
};

export const CPCB_STANDARDS = {
  // Central Pollution Control Board (India) General Standards for Non-Potable Reuse / Irrigation
  bodMax: 30.0,       // mg/L (for surface irrigation)
  bodUrbanReuse: 10.0,// mg/L (for unrestricted urban reuse / flushing)
  tssMax: 50.0,       // mg/L
  turbidityMax: 5.0,  // NTU
  oilGreaseMax: 10.0, // mg/L
  phMin: 6.5,
  phMax: 8.5
};

export const REUSE_DESTINATIONS = [
  {
    id: 'irrigation',
    name: 'Campus Gardens, Lawns & Botanical Arboretum',
    icon: 'Trees',
    sharePercent: 65,
    rationale: 'Treated effluent contains trace organic Nitrogen & Phosphorus, functioning as free bio-fertilizer for campus flora.'
  },
  {
    id: 'flushing',
    name: 'Hostel & Academic Block Dual-Plumbed Toilet Flushing',
    icon: 'Toilet',
    sharePercent: 25,
    rationale: 'Replaces expensive potable municipal / groundwater pumped for non-potable sanitation flushes.'
  },
  {
    id: 'cleaning',
    name: 'Ground Floor Corridor Mopping & Campus Pavement Washing',
    icon: 'Droplets',
    sharePercent: 10,
    rationale: 'Eliminates reliance on fresh borewell water for daily facility maintenance.'
  }
];

export const PROJECT_METADATA_ACT4 = {
  course: 'Environmental Studies (EVS) - Semester IV',
  activityNo: 'Activity No. 4',
  activityTitle: 'Build a Nature-Based Solution for Wastewater Treatment (Campus EcoFlow Model)',
  institution: 'Department of Environmental Sciences & Green Campus Committee',
  academicYear: '2026 - 2027',
  guidelineStandard: 'CPCB / MoEFCC Guidelines for Decentralized Wastewater Treatment Systems (DEWATS)'
};
