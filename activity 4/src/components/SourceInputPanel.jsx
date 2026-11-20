import React from 'react';
import { 
  Building2, 
  Bath, 
  UtensilsCrossed, 
  Users, 
  Gauge, 
  Droplet, 
  Activity, 
  Sparkles,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { SOURCE_PRESETS } from '../data/treatmentData';

export default function SourceInputPanel({
  selectedSourceId,
  onSelectSource,
  studentCount,
  onStudentCountChange,
  litresPerPerson,
  onLitresPerPersonChange,
  dailyVolumeLitres,
  monthlyVolumeKl,
  baselinePollutants
}) {
  const currentSource = SOURCE_PRESETS[selectedSourceId] || SOURCE_PRESETS.hostel;

  const getSourceIcon = (id) => {
    switch (id) {
      case 'hostel': return <Bath className="w-4 h-4 text-teal-600" />;
      case 'canteen': return <UtensilsCrossed className="w-4 h-4 text-amber-600" />;
      case 'combined': return <Building2 className="w-4 h-4 text-indigo-600" />;
      default: return <Droplet className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-5">
      
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-1">
            <span>Module 1 • Input Parameters</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            Campus Wastewater Source & Hydraulic Sizing Calculator
          </h2>
          <p className="text-xs text-slate-500">
            Define effluent origin and user population to simulate influent hydraulic loading rate (HLR)
          </p>
        </div>

        {/* Quick Calculated Volume Pill */}
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white px-4 py-2 rounded-xl text-right shadow-sm self-start sm:self-center">
          <span className="block text-[10px] text-teal-200 font-semibold uppercase tracking-wider">
            Daily Hydraulic Inflow
          </span>
          <div className="flex items-baseline gap-1.5 justify-end">
            <span className="text-xl sm:text-2xl font-black font-mono">
              {dailyVolumeLitres.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-teal-300">L/day</span>
          </div>
          <span className="text-[10px] text-slate-300 block">
            ≈ {monthlyVolumeKl.toFixed(1)} kL (m³) / month
          </span>
        </div>
      </div>

      {/* Preset Source Selector Buttons */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Select Campus Effluent Stream
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.values(SOURCE_PRESETS).map((src) => {
            const isSelected = selectedSourceId === src.id;
            return (
              <button
                key={src.id}
                type="button"
                onClick={() => onSelectSource(src.id)}
                className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                  isSelected
                    ? 'bg-teal-50/70 border-teal-600 shadow-sm ring-2 ring-teal-600/20'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isSelected ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}>
                  {getSourceIcon(src.id)}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    {src.name}
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                    {src.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Volume Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
        
        {/* Slider 1: Number of Students / Users */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-teal-700" />
              Number of Daily Students / Occupants:
            </span>
            <span className="font-mono font-black text-slate-900 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-sm">
              {studentCount} students
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="500"
            step="10"
            value={studentCount}
            onChange={(e) => onStudentCountChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>20 (Single Floor)</span>
            <span>100 (Hostel Wing)</span>
            <span>250 (Full Hostel)</span>
            <span>500 (Campus Block)</span>
          </div>
        </div>

        {/* Slider 2: Average Greywater per Person */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Droplet className="w-4 h-4 text-teal-700" />
              Average Greywater per Person / Day:
            </span>
            <span className="font-mono font-black text-slate-900 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-sm">
              {litresPerPerson} L/day
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={litresPerPerson}
            onChange={(e) => onLitresPerPersonChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>10 L (Washbasins only)</span>
            <span>45 L (Hostel Showers + Sinks)</span>
            <span>100 L (Full Water Use)</span>
          </div>
        </div>

      </div>

      {/* Raw Influent Baseline Pollutants Ribbon */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-teal-700" />
            Baseline Raw Influent Chemistry ({currentSource.name})
          </span>
          <span className="text-[11px] text-slate-400 italic">
            Key Contaminants: {currentSource.keyContaminants}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          {/* BOD */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase">
              Biochemical Oxygen Demand (BOD₅)
            </span>
            <span className="text-xl font-black text-rose-700 font-mono">
              {baselinePollutants.bod}
            </span>
            <span className="text-[11px] text-slate-500 font-medium ml-1">mg/L</span>
            <span className="block text-[10px] text-slate-400 mt-0.5">High organic load</span>
          </div>

          {/* TSS */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase">
              Total Suspended Solids (TSS)
            </span>
            <span className="text-xl font-black text-amber-700 font-mono">
              {baselinePollutants.tss}
            </span>
            <span className="text-[11px] text-slate-500 font-medium ml-1">mg/L</span>
            <span className="block text-[10px] text-slate-400 mt-0.5">Particulate matter</span>
          </div>

          {/* Turbidity */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase">
              Water Turbidity
            </span>
            <span className="text-xl font-black text-slate-800 font-mono">
              {baselinePollutants.turbidity}
            </span>
            <span className="text-[11px] text-slate-500 font-medium ml-1">NTU</span>
            <span className="block text-[10px] text-slate-400 mt-0.5">Milky / soapy haze</span>
          </div>

          {/* Oil & Grease */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase">
              Oil & Grease (FOG)
            </span>
            <span className="text-xl font-black text-amber-800 font-mono">
              {baselinePollutants.oilGrease}
            </span>
            <span className="text-[11px] text-slate-500 font-medium ml-1">mg/L</span>
            <span className="block text-[10px] text-slate-400 mt-0.5">Lipids & cooking fats</span>
          </div>

        </div>
      </div>

    </div>
  );
}
