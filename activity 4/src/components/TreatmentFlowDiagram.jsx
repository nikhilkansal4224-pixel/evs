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
  MousePointer
} from 'lucide-react';
import { TREATMENT_STAGES } from '../data/treatmentData';

export default function TreatmentFlowDiagram({ selectedStageId, onSelectStage }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-1">
            <span>Module 2 • Engineering Visual Cross-Section</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            Interactive 4-Stage Nature-Based Treatment Flow Diagram
          </h2>
          <p className="text-xs text-slate-500">
            Horizontal hydraulic profile: click any treatment unit below to inspect media strata, depths, and biochemical mechanisms
          </p>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 self-start sm:self-center font-medium">
          <MousePointer className="w-3.5 h-3.5" />
          <span>Interactive: Click any stage to inspect</span>
        </div>
      </div>

      {/* SVG Cross-Section Engineering Diagram */}
      <div className="w-full overflow-x-auto bg-slate-950 rounded-2xl p-4 sm:p-6 shadow-inner border border-slate-800">
        <svg 
          viewBox="0 0 1000 480" 
          className="w-full min-w-[760px] h-auto select-none font-sans"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="rawWaterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78716C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A8A29E" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="stage1WaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#78716C" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="stage2WaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0F766E" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="wetlandWaterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="cleanWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="sunbeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FDE047" stopOpacity="0.0" />
            </linearGradient>

            {/* Pattern for sand & charcoal */}
            <pattern id="sandDots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#CA8A04" opacity="0.6" />
              <circle cx="7" cy="7" r="1.2" fill="#CA8A04" opacity="0.5" />
            </pattern>

            <pattern id="charcoalTexture" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#1E293B" />
              <circle cx="3" cy="3" r="1.5" fill="#0F172A" />
              <circle cx="9" cy="8" r="1.8" fill="#334155" />
            </pattern>

            <pattern id="gravelPebbles" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="3" fill="#64748B" opacity="0.7" />
              <circle cx="12" cy="11" r="3.5" fill="#475569" opacity="0.8" />
            </pattern>
          </defs>

          {/* Background Technical Grid */}
          <g opacity="0.12">
            {[...Array(20)].map((_, i) => (
              <line key={`grid-x-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="480" stroke="#94A3B8" strokeWidth="0.5" />
            ))}
            {[...Array(10)].map((_, i) => (
              <line key={`grid-y-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#94A3B8" strokeWidth="0.5" />
            ))}
          </g>

          {/* INLET PIPE */}
          <g>
            <rect x="10" y="160" width="60" height="24" rx="4" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <text x="35" y="145" fill="#94A3B8" fontSize="11" fontWeight="bold" textAnchor="middle">INLET</text>
            <text x="35" y="200" fill="#CBD5E1" fontSize="9" textAnchor="middle">Raw Greywater</text>
            {/* Animated Flow Stream */}
            <line x1="15" y1="172" x2="70" y2="172" stroke="#A8A29E" strokeWidth="6" className="animate-water-flow" />
          </g>

          {/* ========================================================= */}
          {/* STAGE 1: GRIT & GREASE TRAP */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-1')}
            className="cursor-pointer group"
          >
            {/* Chamber Basin */}
            <rect 
              x="70" y="120" width="170" height="230" rx="8" 
              fill="#1E293B" 
              stroke={selectedStageId === 'stage-1' ? '#D97706' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-1' ? '3' : '1.5'}
              className="transition-all"
            />
            {/* Water body */}
            <rect x="75" y="150" width="160" height="190" fill="url(#stage1WaterGrad)" rx="4" />
            
            {/* Floating Grease Scum Layer */}
            <rect x="75" y="150" width="160" height="22" fill="#B45309" opacity="0.85" rx="2" />
            <text x="155" y="164" fill="#FEF3C7" fontSize="10" fontWeight="bold" textAnchor="middle">
              Floating Oil & Grease Scum
            </text>

            {/* Baffles */}
            {/* Hanging Underflow Baffle */}
            <rect x="135" y="140" width="8" height="120" fill="#94A3B8" rx="2" />
            {/* Bottom Overflow Baffle */}
            <rect x="185" y="210" width="8" height="100" fill="#94A3B8" rx="2" />

            {/* Settled Grit Sludge Hopper at Bottom */}
            <polygon points="85,340 225,340 180,365 130,365" fill="#78716C" opacity="0.9" />
            <text x="155" y="358" fill="#F5F5F4" fontSize="9" textAnchor="middle">
              Settled Grit Hopper
            </text>

            {/* Flow arrows */}
            <path d="M 105,200 Q 115,280 155,280 T 215,200" fill="none" stroke="#FDE68A" strokeWidth="2.5" className="animate-water-flow" />

            {/* Label Badge */}
            <rect x="75" y="90" width="160" height="24" rx="6" fill={selectedStageId === 'stage-1' ? '#D97706' : '#334155'} />
            <text x="155" y="106" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 1: Grit & Grease Trap
            </text>
          </g>

          {/* PIPE 1 -> 2 */}
          <line x1="240" y1="200" x2="280" y2="200" stroke="#0D9488" strokeWidth="6" className="animate-water-flow" />

          {/* ========================================================= */}
          {/* STAGE 2: MULTI-LAYER BIO-SAND & CHARCOAL FILTER */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-2')}
            className="cursor-pointer group"
          >
            {/* Column Vessel */}
            <rect 
              x="280" y="100" width="170" height="260" rx="8" 
              fill="#1E293B" 
              stroke={selectedStageId === 'stage-2' ? '#0D9488' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-2' ? '3' : '1.5'}
              className="transition-all"
            />

            {/* Layer 1: Fine Sand (40cm equivalent) */}
            <rect x="285" y="130" width="160" height="65" fill="#EAB308" opacity="0.85" rx="2" />
            <rect x="285" y="130" width="160" height="65" fill="url(#sandDots)" />
            <text x="365" y="165" fill="#422006" fontSize="10" fontWeight="bold" textAnchor="middle">
              1. Fine Sand (40 cm)
            </text>

            {/* Layer 2: Hardwood Charcoal (25cm) */}
            <rect x="285" y="195" width="160" height="50" fill="url(#charcoalTexture)" rx="2" />
            <text x="365" y="224" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">
              2. Wood Charcoal (25 cm)
            </text>

            {/* Layer 3: Coarse Sand (20cm) */}
            <rect x="285" y="245" width="160" height="45" fill="#CA8A04" opacity="0.75" rx="2" />
            <text x="365" y="272" fill="#422006" fontSize="10" fontWeight="bold" textAnchor="middle">
              3. Coarse Sand (20 cm)
            </text>

            {/* Layer 4: Graded Gravel Underdrain (25cm) */}
            <rect x="285" y="290" width="160" height="60" fill="url(#gravelPebbles)" rx="2" />
            <text x="365" y="325" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">
              4. Graded Gravel (25 cm)
            </text>

            {/* Perforated manifold collector */}
            <circle cx="365" cy="335" r="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="365" cy="335" r="3" fill="#38BDF8" />

            {/* Downward percolation arrows */}
            <line x1="320" y1="135" x2="320" y2="310" stroke="#67E8F9" strokeWidth="2" strokeDasharray="4,4" className="animate-water-flow" />
            <line x1="410" y1="135" x2="410" y2="310" stroke="#67E8F9" strokeWidth="2" strokeDasharray="4,4" className="animate-water-flow" />

            {/* Label Badge */}
            <rect x="280" y="70" width="170" height="24" rx="6" fill={selectedStageId === 'stage-2' ? '#0D9488' : '#334155'} />
            <text x="365" y="86" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 2: Bio-Sand & Charcoal
            </text>
          </g>

          {/* PIPE 2 -> 3 */}
          <line x1="450" y1="335" x2="490" y2="310" stroke="#10B981" strokeWidth="6" className="animate-water-flow" />

          {/* ========================================================= */}
          {/* STAGE 3: CONSTRUCTED WETLAND (HSSF-CW) */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-3')}
            className="cursor-pointer group"
          >
            {/* Wetland Bed Excavation with 1% slope */}
            <polygon 
              points="490,200 750,215 745,360 495,355" 
              fill="#1E293B" 
              stroke={selectedStageId === 'stage-3' ? '#15803D' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-3' ? '3' : '1.5'}
              className="transition-all"
            />

            {/* Impermeable HDPE Liner border */}
            <polyline points="488,198 493,358 747,363 752,213" fill="none" stroke="#047857" strokeWidth="3" />

            {/* Crushed Basalt Gravel Matrix */}
            <polygon points="492,210 748,225 743,356 497,351" fill="url(#gravelPebbles)" opacity="0.9" />

            {/* Subsurface Water Level (Kept 5-10cm below top gravel to prevent odors) */}
            <polygon points="492,235 748,248 743,356 497,351" fill="url(#wetlandWaterGrad)" opacity="0.65" />
            <line x1="492" y1="235" x2="748" y2="248" stroke="#34D399" strokeWidth="2" strokeDasharray="5,3" />
            <text x="620" y="244" fill="#A7F3D0" fontSize="8" fontWeight="bold" textAnchor="middle">
              Subsurface Water Table (5cm below surface)
            </text>

            {/* Indian Wetland Plants (Canna, Vetiver, Typha) */}
            {/* Plant 1: Canna Lily (left) */}
            <g transform="translate(525, 205)">
              {/* Deep Root Rhizosphere */}
              <path d="M 0,0 Q -10,35 -5,75 M 0,0 Q 8,40 12,85 M 0,0 Q -15,50 -20,95" stroke="#FDE68A" strokeWidth="2.5" fill="none" opacity="0.85" />
              {/* Green Stem & Broad Leaves */}
              <path d="M 0,0 Q -15,-40 -25,-60 Q -5,-35 0,0" fill="#15803D" />
              <path d="M 0,0 Q 15,-45 30,-65 Q 10,-35 0,0" fill="#16A34A" />
              <line x1="0" y1="0" x2="0" y2="-75" stroke="#15803D" strokeWidth="3" />
              {/* Canna Red Blossom */}
              <circle cx="0" cy="-80" r="8" fill="#DC2626" />
              <circle cx="-5" cy="-84" r="6" fill="#EF4444" />
              <circle cx="5" cy="-84" r="6" fill="#F87171" />
              <text x="0" y="-95" fill="#FECACA" fontSize="9" fontWeight="bold" textAnchor="middle">Canna</text>
            </g>

            {/* Plant 2: Vetiver Grass / Khus (middle) */}
            <g transform="translate(615, 212)">
              {/* Massive Vetiver Deep Fibrous Root System */}
              <path d="M 0,0 L -15,120 M 0,0 L -8,135 M 0,0 L 0,140 M 0,0 L 8,135 M 0,0 L 15,120 M 0,0 L 22,105" stroke="#FEF08A" strokeWidth="2" fill="none" opacity="0.9" />
              {/* Tall Architectural Grass Blades */}
              <path d="M 0,0 L -12,-90 M 0,0 L -6,-105 M 0,0 L 0,-115 M 0,0 L 6,-105 M 0,0 L 12,-90" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
              <text x="0" y="-123" fill="#BBF7D0" fontSize="9" fontWeight="bold" textAnchor="middle">Vetiver (Khus)</text>
            </g>

            {/* Plant 3: Cattails / Typha (right) */}
            <g transform="translate(705, 218)">
              {/* Root Network with Aerenchyma O2 transfer */}
              <path d="M 0,0 Q -12,40 -8,90 M 0,0 Q 15,45 10,95 M 0,0 Q 0,60 0,110" stroke="#FDE68A" strokeWidth="2" fill="none" opacity="0.85" />
              {/* Cattail Reed Spikes */}
              <line x1="0" y1="0" x2="0" y2="-95" stroke="#15803D" strokeWidth="3" />
              <rect x="-4" y="-85" width="8" height="28" rx="4" fill="#78350F" />
              <line x1="-10" y1="0" x2="-18" y2="-75" stroke="#16A34A" strokeWidth="2" />
              <line x1="10" y1="0" x2="18" y2="-75" stroke="#16A34A" strokeWidth="2" />
              <text x="0" y="-103" fill="#FED7AA" fontSize="9" fontWeight="bold" textAnchor="middle">Typha</text>
            </g>

            {/* Horizontal flow line through gravel */}
            <line x1="510" y1="300" x2="730" y2="310" stroke="#6EE7B7" strokeWidth="3" className="animate-water-flow" />

            {/* Label Badge */}
            <rect x="525" y="45" width="190" height="24" rx="6" fill={selectedStageId === 'stage-3' ? '#15803D' : '#334155'} />
            <text x="620" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 3: Subsurface Wetland
            </text>
          </g>

          {/* PIPE 3 -> 4 */}
          <line x1="750" y1="310" x2="790" y2="280" stroke="#0284C7" strokeWidth="6" className="animate-water-flow" />

          {/* ========================================================= */}
          {/* STAGE 4: SOLAR UV POLISHING & STORAGE */}
          {/* ========================================================= */}
          <g 
            onClick={() => onSelectStage('stage-4')}
            className="cursor-pointer group"
          >
            {/* Storage Tank */}
            <rect 
              x="790" y="150" width="170" height="210" rx="8" 
              fill="#1E293B" 
              stroke={selectedStageId === 'stage-4' ? '#0284C7' : '#475569'} 
              strokeWidth={selectedStageId === 'stage-4' ? '3' : '1.5'}
              className="transition-all"
            />

            {/* Clear Treated Water Body */}
            <rect x="795" y="190" width="160" height="165" fill="url(#cleanWaterGrad)" rx="4" />

            {/* Shallow Solar UV Exposure Weir */}
            <rect x="795" y="180" width="160" height="15" fill="#E0F2FE" opacity="0.9" rx="2" />
            <text x="875" y="191" fill="#0369A1" fontSize="9" fontWeight="bold" textAnchor="middle">
              Solar UV-A Polishing Weir
            </text>

            {/* Sun Rays Shining Down */}
            <g transform="translate(875, 95)">
              <circle cx="0" cy="0" r="14" fill="#FACC15" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line 
                  key={`ray-${i}`}
                  x1="0" y1="0" 
                  x2={Math.cos(angle * Math.PI / 180) * 22} 
                  y2={Math.sin(angle * Math.PI / 180) * 22} 
                  stroke="#FACC15" 
                  strokeWidth="2" 
                />
              ))}
            </g>
            {/* Sunbeam cone */}
            <polygon points="850,115 900,115 950,180 800,180" fill="url(#sunbeamGrad)" pointerEvents="none" />

            {/* Submersible Pump & Suction Filter */}
            <rect x="850" y="300" width="30" height="35" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <text x="865" y="322" fill="#E0F2FE" fontSize="8" fontWeight="bold" textAnchor="middle">PUMP</text>

            {/* Outlet Pipe */}
            <rect x="960" y="270" width="35" height="16" fill="#38BDF8" rx="2" />
            <line x1="880" y1="300" x2="960" y2="278" stroke="#38BDF8" strokeWidth="4" />
            
            <text x="975" y="260" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">REUSE</text>
            <text x="975" y="300" fill="#94A3B8" fontSize="8" textAnchor="middle">Campus</text>

            {/* Label Badge */}
            <rect x="790" y="120" width="170" height="24" rx="6" fill={selectedStageId === 'stage-4' ? '#0284C7' : '#334155'} />
            <text x="875" y="136" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              Stage 4: Solar UV & Storage
            </text>
          </g>
        </svg>
      </div>

      {/* Stage Selector Pills (Bottom Quick Controls) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {TREATMENT_STAGES.map((stage) => {
          const isSelected = selectedStageId === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-teal-500/40'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  Stage {stage.stageNumber}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {stage.hrtHours}h HRT
                </span>
              </div>
              <span className="text-xs font-bold block truncate mt-0.5">
                {stage.shortName}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
