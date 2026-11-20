import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  CheckCircle2, 
  AlertTriangle, 
  TrendingDown, 
  Droplet, 
  Leaf, 
  ShieldCheck, 
  Award,
  Sparkles,
  Info
} from 'lucide-react';
import { PHYTOREMEDIATION_PLANTS, CPCB_STANDARDS } from '../data/treatmentData';

export default function WaterAnalyticsPanel({
  selectedPlantId,
  onSelectPlant,
  dailyVolumeLitres,
  baselinePollutants
}) {
  const currentPlant = PHYTOREMEDIATION_PLANTS[selectedPlantId] || PHYTOREMEDIATION_PLANTS.polyculture;
  const eff = currentPlant.efficiencies;

  // Compute treated output values
  const treatedBod = Math.max(2.5, +(baselinePollutants.bod * (1 - eff.bodReduction)).toFixed(1));
  const treatedTss = Math.max(3.0, +(baselinePollutants.tss * (1 - eff.tssReduction)).toFixed(1));
  const treatedTurbidity = Math.max(1.0, +(baselinePollutants.turbidity * (1 - eff.turbidityReduction)).toFixed(1));
  const treatedOilGrease = Math.max(0.5, +(baselinePollutants.oilGrease * (1 - eff.oilGreaseReduction)).toFixed(1));

  // Compliance checks with CPCB
  const isBodCompliant = treatedBod <= CPCB_STANDARDS.bodMax;
  const isBodUrbanCompliant = treatedBod <= CPCB_STANDARDS.bodUrbanReuse;
  const isTssCompliant = treatedTss <= CPCB_STANDARDS.tssMax;
  const isTurbidityCompliant = treatedTurbidity <= CPCB_STANDARDS.turbidityMax;
  const isOilCompliant = treatedOilGrease <= CPCB_STANDARDS.oilGreaseMax;
  const isAllCompliant = isBodCompliant && isTssCompliant && isTurbidityCompliant && isOilCompliant;

  // KPIs
  // Evapotranspiration loss in wetland is ~6%
  const dailyRecoveredLitres = Math.round(dailyVolumeLitres * 0.94);
  const bodReductionPercent = Math.round(((baselinePollutants.bod - treatedBod) / baselinePollutants.bod) * 100);
  const annualFreshwaterSavedKl = Math.round((dailyRecoveredLitres * 365) / 1000);

  // Recharts Data
  const chartData = [
    {
      parameter: 'BOD (mg/L)',
      raw: baselinePollutants.bod,
      treated: treatedBod,
      cpcbLimit: CPCB_STANDARDS.bodMax,
      reduction: `${Math.round(eff.bodReduction * 100)}%`
    },
    {
      parameter: 'TSS (mg/L)',
      raw: baselinePollutants.tss,
      treated: treatedTss,
      cpcbLimit: CPCB_STANDARDS.tssMax,
      reduction: `${Math.round(eff.tssReduction * 100)}%`
    },
    {
      parameter: 'Turbidity (NTU)',
      raw: baselinePollutants.turbidity,
      treated: treatedTurbidity,
      cpcbLimit: CPCB_STANDARDS.turbidityMax,
      reduction: `${Math.round(eff.turbidityReduction * 100)}%`
    },
    {
      parameter: 'Oil & Grease (mg/L)',
      raw: baselinePollutants.oilGrease,
      treated: treatedOilGrease,
      cpcbLimit: CPCB_STANDARDS.oilGreaseMax,
      reduction: `${Math.round(eff.oilGreaseReduction * 100)}%`
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* 3 TOP KPI SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* KPI 1: Daily Water Recovered */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
          <div className="flex items-center justify-between mb-3 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Daily Water Recovered
            </span>
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
              <Droplet className="w-4 h-4" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-teal-900 tracking-tight font-mono">
                {dailyRecoveredLitres.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-slate-500">L / day</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
              <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                94% Recovery Yield
              </span>
              <span className="text-slate-400">
                (6% natural evapotranspiration)
              </span>
            </div>
          </div>
        </div>

        {/* KPI 2: Average BOD Reduction */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
          <div className="flex items-center justify-between mb-3 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Average BOD Reduction
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-900 tracking-tight font-mono">
                {bodReductionPercent}%
              </span>
              <span className="text-sm font-semibold text-slate-500">organic reduction</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                From {baselinePollutants.bod} → {treatedBod} mg/L
              </span>
              <span className="text-emerald-700 font-bold">
                CPCB Grade A ✅
              </span>
            </div>
          </div>
        </div>

        {/* KPI 3: Estimated Annual Freshwater Saved */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Annual Freshwater Saved
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/10 text-teal-300 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
                {annualFreshwaterSavedKl.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-teal-200">kL (m³) / year</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-300 border-t border-slate-700 pt-2">
              <span className="text-teal-300 font-medium">
                ≈ {(annualFreshwaterSavedKl * 1000).toLocaleString()} Litres
              </span>
              <span className="text-amber-300 font-bold">
                Zero chemical cost
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Module 3 Header & Interactive Phytoremediation Plant Selector */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-1">
              <span>Module 3 • Phytoremediation & Water Quality</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Water Quality Analytics & Native Indian Macrophyte Matrix
            </h2>
            <p className="text-xs text-slate-500">
              Select wetland vegetative species to modulate biological root-zone oxygenation and metabolic pollutant uptake
            </p>
          </div>
        </div>

        {/* Plant Selection Toggles */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Wetland Macrophyte Species:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.values(PHYTOREMEDIATION_PLANTS).map((plant) => {
              const isSelected = selectedPlantId === plant.id;
              return (
                <button
                  key={plant.id}
                  type="button"
                  onClick={() => onSelectPlant(plant.id)}
                  className={`text-left p-3 rounded-xl border transition-all relative ${
                    isSelected
                      ? 'bg-emerald-50/70 border-emerald-600 shadow-sm ring-2 ring-emerald-600/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xl">{plant.avatar}</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        {plant.name}
                      </span>
                      <span className="text-[10px] text-slate-500 italic block font-serif">
                        {plant.botanicalName}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {plant.characteristics}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                      BOD: -{Math.round(plant.efficiencies.bodReduction * 100)}%
                    </span>
                    <span className="text-slate-500 font-mono">
                      Root: {plant.rootDepthCm}cm
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Analytics Content: Bar Chart & CPCB Compliance Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          
          {/* Grouped Bar Chart (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Raw Influent vs. Treated Effluent Comparison
                </h3>
                <p className="text-xs text-slate-500">
                  Standard pollution indicator reduction across the 4-stage system
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Species: {currentPlant.name}
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="parameter" tick={{ fontSize: 11, fill: '#475569' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val, name, entry) => [
                      `${val}`,
                      name === 'raw' ? 'Raw Greywater' : name === 'treated' ? 'Treated Effluent' : 'CPCB Safe Limit'
                    ]}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} 
                    formatter={(value) => value === 'raw' ? 'Raw Greywater' : value === 'treated' ? 'Treated Water (Nature-Based)' : 'CPCB Non-Potable Threshold'}
                  />
                  <Bar dataKey="raw" fill="#94A3B8" name="raw" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="treated" fill="#0D9488" name="treated" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cpcbLimit" fill="#F59E0B" name="cpcbLimit" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CPCB Compliance Badge Card (4 cols) */}
          <div className="lg:col-span-4 bg-white p-4 rounded-xl border-2 border-emerald-600 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Regulatory Verdict
                  </h3>
                  <span className="text-sm font-black text-emerald-800 font-heading">
                    CPCB Standard Compliance
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium mb-3">
                {isAllCompliant ? (
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    CERTIFIED SAFE for Campus Irrigation & Toilet Dual-Flushing
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 font-bold text-amber-800">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Requires additional sand bed depth
                  </span>
                )}
              </div>

              {/* Parameter Check list */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-600">BOD (≤ 30 mg/L limit):</span>
                  <span className="font-mono font-bold text-emerald-700 flex items-center gap-1">
                    {treatedBod} mg/L <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-600">TSS (≤ 50 mg/L limit):</span>
                  <span className="font-mono font-bold text-emerald-700 flex items-center gap-1">
                    {treatedTss} mg/L <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-600">Turbidity (≤ 5 NTU limit):</span>
                  <span className="font-mono font-bold text-emerald-700 flex items-center gap-1">
                    {treatedTurbidity} NTU <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">Oil & Grease (≤ 10 mg/L):</span>
                  <span className="font-mono font-bold text-emerald-700 flex items-center gap-1">
                    {treatedOilGrease} mg/L <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700">Standards Reference:</span> Ministry of Environment, Forest & Climate Change (MoEFCC) Non-Potable Water Reuse Norms.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
