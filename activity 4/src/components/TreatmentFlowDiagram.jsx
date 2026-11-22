import React from 'react';
import { 
  Sparkles, 
  Droplet, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  HelpCircle,
  Sun,
  ShieldCheck,
  MousePointer,
  Compass,
  Layers
} from 'lucide-react';
import { TREATMENT_STAGES } from '../data/treatmentData';

export default function TreatmentFlowDiagram({ selectedStageId, onSelectStage }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Module 2 • Engineering Visual Cross-Section</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            Interactive 4-Stage Nature-Based Treatment Hydraulic Profile
          </h2>
          <p className="text-xs text-slate-500">
            Horizontal hydraulic cross-section: click any stage below to inspect filter media layers, depths, and biological mechanisms
          </p>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 self-start sm:self-center font-medium">
          <MousePointer className="w-3.5 h-3.5" />
          <span>Click any stage in schematic to inspect</span>
        </div>
      </div>

      {/* SVG Cross-Section Engineering Diagram */}
      <div className="w-full overflow-x-auto bg-[#0B132B] rounded-2xl p-3 sm:p-5 shadow-2xl border border-slate-800">
        <svg 
          viewBox="0 0 1000 440" 
          className="w-full min-w-[800px] h-auto select-none font-sans"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="rawWaterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78716C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A8A29E" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="stage1WaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B45309" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#451A03" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="stage2WaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0F766E" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="wetlandWaterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="cleanWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="sunbeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FDE047" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id="soilStratumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Pattern for sand & charcoal */}
            <pattern id="fineSandDots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#CA8A04" opacity="0.7" />
              <circle cx="6" cy="6" r="1.2" fill="#CA8A04" opacity="0.6" />
            </pattern>

            <pattern id="coarseSandDots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.8" fill="#A16207" opacity="0.8" />
              <circle cx="9" cy="9" r="2.2" fill="#854D0E" opacity="0.7" />
            </pattern>

            <pattern id="charcoalTexture" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#0F172A" />
              <circle cx="3" cy="3" r="1.5" fill="#334155" />
              <circle cx="9" cy="8" r="2" fill="#1E293B" />
              <path d="M 1,9 L 4,11 M 7,2 L 10,4" stroke="#475569" strokeWidth="0.8" />
            </pattern>

            <pattern id="gravelPebbles" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="3.2" fill="#64748B" opacity="0.7" />
              <circle cx="12" cy="11" r="3.8" fill="#475569" opacity="0.8" />
              <circle cx="12" cy="3" r="2" fill="#94A3B8" opacity="0.5" />
            </pattern>

            {/* Hatching for Concrete Slabs */}
            <pattern id="concreteHatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#334155" strokeWidth="1" />
            </pattern>

            {/* Marker arrow */}
            <marker id="waterArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#38BDF8" />
            </marker>
          </defs>

          {/* Background Technical Grid */}
          <g opacity="0.1">
            {[...Array(21)].map((_, i) => (
              <line key={`grid-x-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="440" stroke="#94A3B8" strokeWidth="0.5" />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={`grid-y-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#94A3B8" strokeWidth="0.5" />
            ))}
          </g>

          {/* Foundation & Ground Stratum Bed (Bottom 365 to 420) */}
          <g>
            <rect x="0" y="370" width="1000" height="55" fill="url(#soilStratumGrad)" />
            <rect x="0" y="370" width="1000" height="55" fill="url(#concreteHatch)" opacity="0.3" />
            <line x1="0" y1="370" x2="1000" y2="370" stroke="#475569" strokeWidth="2" />
            
            {/* Ground Elevation datum labels */}
            <text x="25" y="388" fill="#94A3B8" fontSize="10" fontFamily="monospace" fontWeight="bold">GROUND EL ±0.00m</text>
            <text x="25" y="405" fill="#64748B" fontSize="9">Engineered Sub-base & Compacted Geotextile</text>
            
            {/* Hydraulic Grade Line slope callout */}
            <line x1="80" y1="418" x2="920" y2="418" stroke="#0D9488" strokeWidth="1" strokeDasharray="4,4" />
            <text x="500" y="415" fill="#14B8A6" fontSize="9" fontWeight="bold" textAnchor="middle">
              1.0% Natural Gravity Hydraulic Grade Line (HGL) • Zero Pumping Power Required Across Stages 1–3
            </text>
          </g>

          {/* ========================================================= */}
          {/* UNIFIED STAGE HEADER BANNERS (Row along y=24 to 52) */}
          {/* ========================================================= */}
          
          {/* Stage 1 Header */}
          <g onClick={() => onSelectStage('stage-1')} className="cursor-pointer">
            <rect 
              x="70" y="24" width="170" height="30" rx="8" 
              fill={selectedStageId === 'stage-1' ? '#D97706' : '#1E293B'} 
              stroke={selectedStageId === 'stage-1' ? '#F59E0B' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-1' ? '2' : '1'}
            />
            <text x="155" y="43" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 1: Grit & Grease Trap
            </text>
          </g>

          {/* Stage 2 Header */}
          <g onClick={() => onSelectStage('stage-2')} className="cursor-pointer">
            <rect 
              x="280" y="24" width="170" height="30" rx="8" 
              fill={selectedStageId === 'stage-2' ? '#0D9488' : '#1E293B'} 
              stroke={selectedStageId === 'stage-2' ? '#2DD4BF' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-2' ? '2' : '1'}
            />
            <text x="365" y="43" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 2: Bio-Sand & Charcoal
            </text>
          </g>

          {/* Stage 3 Header */}
          <g onClick={() => onSelectStage('stage-3')} className="cursor-pointer">
            <rect 
              x="490" y="24" width="260" height="30" rx="8" 
              fill={selectedStageId === 'stage-3' ? '#15803D' : '#1E293B'} 
              stroke={selectedStageId === 'stage-3' ? '#4ADE80' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-3' ? '2' : '1'}
            />
            <text x="620" y="43" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 3: Subsurface Wetland (HSSF-CW)
            </text>
          </g>

          {/* Stage 4 Header */}
          <g onClick={() => onSelectStage('stage-4')} className="cursor-pointer">
            <rect 
              x="790" y="24" width="170" height="30" rx="8" 
              fill={selectedStageId === 'stage-4' ? '#0284C7' : '#1E293B'} 
              stroke={selectedStageId === 'stage-4' ? '#38BDF8' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-4' ? '2' : '1'}
            />
            <text x="875" y="43" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 4: Solar UV & Storage
            </text>
          </g>

          {/* ========================================================= */}
          {/* INLET ZONE (x=5 to 70) */}
          {/* ========================================================= */}
          <g>
            <rect x="10" y="145" width="60" height="26" rx="4" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <text x="40" y="132" fill="#94A3B8" fontSize="10" fontWeight="bold" textAnchor="middle">INLET</text>
            <text x="40" y="185" fill="#CBD5E1" fontSize="8" textAnchor="middle">Raw Greywater</text>
            <text x="40" y="196" fill="#64748B" fontSize="8" textAnchor="middle">EL +2.40m</text>
            {/* Animated Stream into Stage 1 */}
            <line x1="10" y1="158" x2="70" y2="158" stroke="#A8A29E" strokeWidth="6" className="animate-water-flow" />
          </g>

          {/* ========================================================= */}
          {/* STAGE 1: GRIT & GREASE TRAP (x=70 to 240) */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-1')}
            className="cursor-pointer group"
          >
            {/* Outer Chamber Basin */}
            <rect 
              x="70" y="70" width="170" height="295" rx="10" 
              fill="#131E2E" 
              stroke={selectedStageId === 'stage-1' ? '#F59E0B' : '#334155'} 
              strokeWidth={selectedStageId === 'stage-1' ? '3' : '1.5'}
              className="transition-all"
            />
            
            {/* Water body in chamber */}
            <rect x="75" y="110" width="160" height="225" fill="url(#stage1WaterGrad)" rx="6" />

            {/* Floating Grease & Oil Scum Layer (Specific Gravity < 0.92) */}
            <rect x="75" y="110" width="160" height="24" fill="#B45309" opacity="0.9" rx="3" />
            <text x="155" y="126" fill="#FEF3C7" fontSize="10" fontWeight="bold" textAnchor="middle">
              Floating Oil & Grease Scum
            </text>

            {/* Underflow Baffle Plate 1 (Hanging from top) */}
            <rect x="135" y="105" width="8" height="135" fill="#94A3B8" rx="2" />
            <text x="139" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">Baffle 1</text>

            {/* Overflow Baffle Plate 2 (Bottom weir) */}
            <rect x="185" y="195" width="8" height="120" fill="#94A3B8" rx="2" />
            <text x="189" y="185" fill="#94A3B8" fontSize="8" textAnchor="middle">Weir 2</text>

            {/* Flow path under Baffle 1 and over Weir 2 */}
            <path 
              d="M 95,170 Q 110,265 145,265 Q 170,265 170,220 T 215,170" 
              fill="none" 
              stroke="#FDE68A" 
              strokeWidth="2.5" 
              strokeDasharray="4,4"
              className="animate-water-flow" 
            />

            {/* Bottom Settled Grit Hopper (Stokes Law settling) */}
            <polygon points="85,335 225,335 180,365 130,365" fill="#57534E" stroke="#78716C" strokeWidth="1" />
            <text x="155" y="354" fill="#F5F5F4" fontSize="9" fontWeight="bold" textAnchor="middle">
              Settled Heavy Grit Sump
            </text>

            {/* Quick Spec Badge */}
            <rect x="80" y="78" width="80" height="18" rx="4" fill="#1E293B" />
            <text x="120" y="90" fill="#F59E0B" fontSize="9" fontWeight="bold" textAnchor="middle">
              HRT: 2.5 Hours
            </text>
          </g>

          {/* PIPE 1 -> 2 (Over-wall Interconnect) */}
          <path 
            d="M 235,160 L 260,160 Q 275,160 275,120 L 280,120" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth="5" 
            className="animate-water-flow" 
          />
          <text x="258" y="150" fill="#5EEAD4" fontSize="8" textAnchor="middle">Gravity Spill</text>

          {/* ========================================================= */}
          {/* STAGE 2: MULTI-LAYER BIO-SAND & CHARCOAL FILTER (x=280 to 450) */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-2')}
            className="cursor-pointer group"
          >
            {/* Filter Column Vessel */}
            <rect 
              x="280" y="70" width="170" height="295" rx="10" 
              fill="#131E2E" 
              stroke={selectedStageId === 'stage-2' ? '#2DD4BF' : '#334155'} 
              strokeWidth={selectedStageId === 'stage-2' ? '3' : '1.5'}
              className="transition-all"
            />

            {/* Top Splash Distributor Plate */}
            <rect x="290" y="80" width="150" height="8" rx="2" fill="#0284C7" />
            <text x="365" y="76" fill="#38BDF8" fontSize="8" textAnchor="middle">Splash Diffuser Pan</text>

            {/* Layer 1: Fine Silica Sand (40cm equivalent) */}
            <rect x="285" y="95" width="160" height="70" fill="#EAB308" opacity="0.85" rx="3" />
            <rect x="285" y="95" width="160" height="70" fill="url(#fineSandDots)" />
            <text x="365" y="128" fill="#422006" fontSize="10" fontWeight="bold" textAnchor="middle">
              1. Fine Silica Sand (40 cm)
            </text>
            <text x="365" y="142" fill="#713F12" fontSize="8" textAnchor="middle">
              Biofilm / Schmutzdecke
            </text>

            {/* Layer 2: Wood Charcoal / Activated Carbon (25cm) */}
            <rect x="285" y="165" width="160" height="55" fill="url(#charcoalTexture)" rx="3" />
            <text x="365" y="196" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">
              2. Wood Charcoal (25 cm)
            </text>
            <text x="365" y="209" fill="#94A3B8" fontSize="8" textAnchor="middle">
              Micropollutant Adsorption
            </text>

            {/* Layer 3: Coarse Quartz Sand (20cm) */}
            <rect x="285" y="220" width="160" height="45" fill="#CA8A04" opacity="0.85" rx="3" />
            <rect x="285" y="220" width="160" height="45" fill="url(#coarseSandDots)" />
            <text x="365" y="247" fill="#422006" fontSize="10" fontWeight="bold" textAnchor="middle">
              3. Coarse Sand (20 cm)
            </text>

            {/* Layer 4: Graded Basalt Gravel Underdrain (25cm) */}
            <rect x="285" y="265" width="160" height="65" fill="url(#gravelPebbles)" rx="3" />
            <text x="365" y="295" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">
              4. Graded Gravel (25 cm)
            </text>

            {/* Perforated Underdrain Manifold pipe */}
            <circle cx="365" cy="342" r="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="365" cy="342" r="4" fill="#38BDF8" />
            <text x="365" y="360" fill="#94A3B8" fontSize="8" textAnchor="middle">Underdrain Manifold</text>

            {/* Downward percolation flow lines */}
            <line x1="315" y1="100" x2="315" y2="330" stroke="#67E8F9" strokeWidth="2" strokeDasharray="4,4" className="animate-water-flow" />
            <line x1="415" y1="100" x2="415" y2="330" stroke="#67E8F9" strokeWidth="2" strokeDasharray="4,4" className="animate-water-flow" />

            {/* Quick Spec Badge */}
            <rect x="290" y="78" width="65" height="14" rx="3" fill="#0F172A" />
            <text x="322" y="88" fill="#2DD4BF" fontSize="8" fontWeight="bold" textAnchor="middle">
              HRT: 6.0 Hours
            </text>
          </g>

          {/* PIPE 2 -> 3 (Underdrain riser to Wetland Inlet Distributor) */}
          <path 
            d="M 377,342 L 465,342 Q 480,342 480,250 L 490,250" 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="5" 
            className="animate-water-flow" 
          />
          <text x="445" y="334" fill="#6EE7B7" fontSize="8" textAnchor="middle">Treated Influent</text>

          {/* ========================================================= */}
          {/* STAGE 3: CONSTRUCTED WETLAND (HSSF-CW) (x=490 to 750) */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-3')}
            className="cursor-pointer group"
          >
            {/* Wetland Bed Excavation Basin with 1% slope */}
            <polygon 
              points="490,175 750,195 745,365 495,365" 
              fill="#131E2E" 
              stroke={selectedStageId === 'stage-3' ? '#4ADE80' : '#334155'} 
              strokeWidth={selectedStageId === 'stage-3' ? '3' : '1.5'}
              className="transition-all"
            />

            {/* Impermeable Heavy-duty HDPE Geomembrane Liner border */}
            <polyline points="488,173 493,367 747,367 752,193" fill="none" stroke="#059669" strokeWidth="3" />
            <text x="620" y="362" fill="#34D399" fontSize="8" textAnchor="middle">1.2mm Impermeable HDPE Liner (Zero Groundwater Leaching)</text>

            {/* Crushed Basalt Gravel Matrix (10-20mm) */}
            <polygon points="492,185 748,205 743,355 497,355" fill="url(#gravelPebbles)" opacity="0.9" />

            {/* Subsurface Water Level (Kept 5-10cm below surface to stop mosquitoes & odors) */}
            <polygon points="492,220 748,238 743,355 497,355" fill="url(#wetlandWaterGrad)" opacity="0.65" />
            <line x1="492" y1="220" x2="748" y2="238" stroke="#34D399" strokeWidth="2.5" strokeDasharray="6,4" />
            <text x="620" y="232" fill="#D1FAE5" fontSize="8" fontWeight="bold" textAnchor="middle">
              Subsurface Water Table (5cm below gravel surface — Odor-Free & No Vector Breeding)
            </text>

            {/* Native Indian Wetland Plants (Canna Lily, Vetiver, Typha) */}
            
            {/* Plant 1: Canna Lily (left) */}
            <g transform="translate(535, 180)">
              {/* Deep Root Rhizosphere Matrix */}
              <path d="M 0,0 Q -10,40 -5,85 M 0,0 Q 10,45 15,95 M 0,0 Q -18,60 -20,110" stroke="#FDE68A" strokeWidth="2.5" fill="none" opacity="0.9" />
              {/* Green Stems & Broad Ornamental Leaves */}
              <path d="M 0,0 Q -15,-45 -28,-65 Q -6,-35 0,0" fill="#15803D" />
              <path d="M 0,0 Q 15,-50 32,-72 Q 8,-35 0,0" fill="#16A34A" />
              <line x1="0" y1="0" x2="0" y2="-82" stroke="#15803D" strokeWidth="3" />
              {/* Crimson Canna Blossom */}
              <circle cx="0" cy="-88" r="8" fill="#DC2626" />
              <circle cx="-5" cy="-92" r="6" fill="#EF4444" />
              <circle cx="5" cy="-92" r="6" fill="#F87171" />
              <text x="0" y="-102" fill="#FECACA" fontSize="9" fontWeight="bold" textAnchor="middle">Canna Lily</text>
            </g>

            {/* Plant 2: Vetiver Grass / Khus (Center - Flagship Indian Phytoremediator) */}
            <g transform="translate(620, 188)">
              {/* Massive Vetiver Deep Fibrous Root Bundle (Penetrates full depth) */}
              <path d="M 0,0 L -18,140 M 0,0 L -9,155 M 0,0 L 0,162 M 0,0 L 9,155 M 0,0 L 18,140 M 0,0 L 26,120" stroke="#FEF08A" strokeWidth="2.5" fill="none" opacity="0.95" />
              
              {/* Tiny Oxygen Micro-bubbles pumped through aerenchyma */}
              <circle cx="-10" cy="65" r="2.5" fill="#E0F2FE" opacity="0.9" />
              <circle cx="12" cy="90" r="2" fill="#E0F2FE" opacity="0.8" />
              <circle cx="-5" cy="115" r="2.5" fill="#E0F2FE" opacity="0.9" />
              <circle cx="6" cy="140" r="2" fill="#E0F2FE" opacity="0.8" />
              <text x="35" y="100" fill="#BAE6FD" fontSize="7" fontWeight="bold">O₂ micro-zones</text>

              {/* Tall Architectural Grass Blades */}
              <path d="M 0,0 L -15,-95 M 0,0 L -8,-115 M 0,0 L 0,-128 M 0,0 L 8,-115 M 0,0 L 15,-95" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
              <text x="0" y="-136" fill="#BBF7D0" fontSize="9" fontWeight="bold" textAnchor="middle">Vetiver (Khus)</text>
            </g>

            {/* Plant 3: Cattails / Typha Reed (Right) */}
            <g transform="translate(705, 195)">
              {/* Root Network with Aerenchyma tissue */}
              <path d="M 0,0 Q -15,45 -8,95 M 0,0 Q 15,50 12,110 M 0,0 Q 0,70 2,125" stroke="#FDE68A" strokeWidth="2.5" fill="none" opacity="0.9" />
              {/* Typha Reed Spikes & Velvet Coronas */}
              <line x1="0" y1="0" x2="0" y2="-100" stroke="#15803D" strokeWidth="3" />
              <rect x="-4.5" y="-90" width="9" height="30" rx="4.5" fill="#78350F" stroke="#92400E" strokeWidth="1" />
              <line x1="-12" y1="0" x2="-20" y2="-80" stroke="#16A34A" strokeWidth="2" />
              <line x1="12" y1="0" x2="20" y2="-80" stroke="#16A34A" strokeWidth="2" />
              <text x="0" y="-108" fill="#FED7AA" fontSize="9" fontWeight="bold" textAnchor="middle">Typha Reed</text>
            </g>

            {/* Horizontal flow line through gravel matrix */}
            <line x1="510" y1="285" x2="730" y2="295" stroke="#6EE7B7" strokeWidth="3.5" className="animate-water-flow" />

            {/* Quick Spec Badge */}
            <rect x="500" y="78" width="105" height="16" rx="4" fill="#0F172A" />
            <text x="552" y="90" fill="#4ADE80" fontSize="9" fontWeight="bold" textAnchor="middle">
              HRT: 48 Hours (2 Days)
            </text>
          </g>

          {/* PIPE 3 -> 4 (Wetland Collector to Solar UV Polishing Weir) */}
          <path 
            d="M 745,295 L 775,295 Q 785,295 785,150 L 795,150" 
            fill="none" 
            stroke="#0284C7" 
            strokeWidth="5" 
            className="animate-water-flow" 
          />
          <text x="770" y="280" fill="#38BDF8" fontSize="8" textAnchor="middle">Effluent Riser</text>

          {/* ========================================================= */}
          {/* STAGE 4: SOLAR UV POLISHING & STORAGE (x=790 to 960) */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-4')}
            className="cursor-pointer group"
          >
            {/* Storage Basin Vessel */}
            <rect 
              x="790" y="110" width="170" height="255" rx="10" 
              fill="#131E2E" 
              stroke={selectedStageId === 'stage-4' ? '#38BDF8' : '#334155'} 
              strokeWidth={selectedStageId === 'stage-4' ? '3' : '1.5'}
              className="transition-all"
            />

            {/* Shallow Solar UV-A Thin Film Weir (10cm depth) */}
            <rect x="795" y="135" width="160" height="20" fill="#E0F2FE" opacity="0.9" rx="3" />
            <text x="875" y="149" fill="#0369A1" fontSize="9" fontWeight="bold" textAnchor="middle">
              Solar UV-A Polishing Cascade Weir
            </text>

            {/* Sun Rays Shining Down onto the shallow weir */}
            <g transform="translate(875, 75)">
              <circle cx="0" cy="0" r="14" fill="#FACC15" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line 
                  key={`ray-${i}`}
                  x1="0" y1="0" 
                  x2={Math.cos(angle * Math.PI / 180) * 22} 
                  y2={Math.sin(angle * Math.PI / 180) * 22} 
                  stroke="#FACC15" 
                  strokeWidth="2.5" 
                />
              ))}
            </g>
            {/* Sunbeam illumination cone */}
            <polygon points="850,92 900,92 955,135 795,135" fill="url(#sunbeamGrad)" pointerEvents="none" />

            {/* Clear Treated Water Basin Body */}
            <rect x="795" y="160" width="160" height="195" fill="url(#cleanWaterGrad)" rx="5" />
            
            {/* Clean water label */}
            <text x="875" y="235" fill="#E0F2FE" fontSize="12" fontWeight="bold" textAnchor="middle">
              Treated Non-Potable Water
            </text>
            <text x="875" y="250" fill="#BAE6FD" fontSize="9" textAnchor="middle">
              BOD &lt; 10 mg/L • CPCB Grade A
            </text>

            {/* Submersible Pump Unit at bottom */}
            <rect x="830" y="300" width="36" height="42" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <text x="848" y="325" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">PUMP</text>

            {/* Pressure Discharge line to Campus Reuse */}
            <path d="M 866,320 L 965,320" stroke="#38BDF8" strokeWidth="5" className="animate-water-flow" />
            
            {/* Outlet Manifold Box */}
            <rect x="965" y="305" width="30" height="30" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <text x="980" y="323" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">OUT</text>

            {/* External Campus Reuse Destinations Labels */}
            <text x="980" y="275" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">REUSE</text>
            <text x="980" y="290" fill="#94A3B8" fontSize="8" textAnchor="middle">Campus Ring</text>

            {/* Quick Spec Badge */}
            <rect x="800" y="115" width="80" height="15" rx="3" fill="#0F172A" />
            <text x="840" y="126" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">
              HRT: 12 Hours
            </text>
          </g>
        </svg>
      </div>

      {/* Stage Selector Pills (Bottom Quick Controls) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
        {TREATMENT_STAGES.map((stage) => {
          const isSelected = selectedStageId === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-teal-500/50 scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style={{ 
                    backgroundColor: isSelected ? stage.color : '#E2E8F0', 
                    color: isSelected ? '#FFFFFF' : '#334155' 
                  }}
                >
                  Stage {stage.stageNumber}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {stage.hrtHours}h HRT
                </span>
              </div>
              <span className="text-xs font-bold block truncate mt-1">
                {stage.shortName}
              </span>
              <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                {stage.category}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
