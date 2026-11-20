import React, { useState } from 'react';
import { 
  Sparkles, 
  IndianRupee, 
  Scale, 
  Check, 
  HelpCircle, 
  Users, 
  ShieldCheck, 
  Leaf, 
  ArrowRight,
  TrendingDown,
  Building2,
  Sliders
} from 'lucide-react';
import { STUDENT_SWAPS, PROJECT_METADATA } from '../data/initialData';

export default function AlternativesSimulator({ 
  activeSwaps, 
  onToggleSwap, 
  onSelectAllSwaps, 
  onDeselectAllSwaps 
}) {
  const [campusStudents, setCampusStudents] = useState(PROJECT_METADATA.campusStudentPopulation);

  // Calculate dynamic savings per student
  const activeList = STUDENT_SWAPS.filter((s) => activeSwaps[s.id]);
  
  const studentAnnualPlasticKg = activeList.reduce((acc, curr) => acc + curr.weightSavedPerYearKg, 0);
  const studentAnnualRupees = activeList.reduce((acc, curr) => acc + curr.moneySavedPerYearInr, 0);

  // Group of 3 savings
  const groupAnnualPlasticKg = studentAnnualPlasticKg * 3;
  const groupAnnualRupees = studentAnnualRupees * 3;

  // Campus-wide projected impact
  const campusAnnualPlasticKg = studentAnnualPlasticKg * campusStudents;
  const campusAnnualPlasticTonnes = (campusAnnualPlasticKg / 1000).toFixed(2);
  const campusAnnualRupees = studentAnnualRupees * campusStudents;

  return (
    <div className="space-y-6">
      
      {/* Hero Impact Banner */}
      <div className="bg-gradient-to-br from-[#1E3A2F] via-[#244537] to-[#142720] text-white rounded-2xl p-6 shadow-md border border-emerald-900/40 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 text-emerald-200 border border-emerald-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Module 3 • Action Simulator & Zero-Budget Student Alternatives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              "Swap & Save" Impact Simulator
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Everyday low-cost and zero-budget habit changes designed for Indian college hostelites and day scholars. 
              Toggle the alternatives below to witness instant environmental and financial dividends.
            </p>
          </div>

          {/* Real-time Savings KPI Pod */}
          <div className="grid grid-cols-2 gap-3 bg-[#142720]/90 p-4 rounded-xl border border-emerald-700/50 backdrop-blur-sm sm:min-w-[340px]">
            
            <div className="bg-emerald-900/60 p-3 rounded-lg border border-emerald-800">
              <span className="block text-[11px] font-medium text-emerald-300 uppercase tracking-wider">
                Plastic Eliminated
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-white">
                  {studentAnnualPlasticKg.toFixed(2)}
                </span>
                <span className="text-xs text-emerald-300 font-semibold">kg / student / yr</span>
              </div>
              <span className="text-[11px] text-emerald-200/80 block mt-1">
                ≈ {groupAnnualPlasticKg.toFixed(1)} kg for our group of 3
              </span>
            </div>

            <div className="bg-emerald-900/60 p-3 rounded-lg border border-emerald-800">
              <span className="block text-[11px] font-medium text-amber-300 uppercase tracking-wider">
                Money Saved
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-amber-400">
                  ₹{studentAnnualRupees.toLocaleString()}
                </span>
                <span className="text-xs text-emerald-300 font-semibold">/ student / yr</span>
              </div>
              <span className="text-[11px] text-amber-200/80 block mt-1">
                ≈ ₹{groupAnnualRupees.toLocaleString()} group pocket money
              </span>
            </div>

            {/* Campus Extrapolation Strip */}
            <div className="col-span-2 bg-[#1E3A2F] p-2.5 rounded-lg border border-emerald-600/40 flex items-center justify-between text-xs">
              <span className="text-emerald-200 font-medium flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Across {campusStudents} Students:
              </span>
              <span className="font-bold text-white font-mono">
                {campusAnnualPlasticTonnes} Tonnes Plastic Averted & ₹{(campusAnnualRupees / 100000).toFixed(2)} Lakhs Saved!
              </span>
            </div>

          </div>

        </div>

        {/* Action Toggle controls */}
        <div className="mt-5 pt-4 border-t border-emerald-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-200 font-medium">Quick Presets:</span>
            <button
              onClick={onSelectAllSwaps}
              className="px-2.5 py-1 rounded-md bg-emerald-700/70 hover:bg-emerald-600 text-white font-semibold transition-colors"
            >
              Select All 6 Swaps
            </button>
            <button
              onClick={onDeselectAllSwaps}
              className="px-2.5 py-1 rounded-md bg-emerald-900/70 hover:bg-emerald-800 text-emerald-300 transition-colors"
            >
              Reset Swaps
            </button>
          </div>

          {/* Interactive Campus Slider */}
          <div className="flex items-center gap-2 bg-[#142720]/80 px-3 py-1.5 rounded-lg border border-emerald-800/60">
            <Sliders className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-emerald-200 text-xs font-medium">Campus Scaler:</span>
            <input 
              type="range" 
              min="50" 
              max="2000" 
              step="50" 
              value={campusStudents} 
              onChange={(e) => setCampusStudents(Number(e.target.value))}
              className="w-24 accent-emerald-400 cursor-pointer"
            />
            <span className="font-bold text-white text-xs">{campusStudents} students</span>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {STUDENT_SWAPS.map((swap) => {
          const isActive = !!activeSwaps[swap.id];

          return (
            <div
              key={swap.id}
              className={`rounded-2xl p-5 border transition-all relative flex flex-col justify-between ${
                isActive
                  ? 'bg-white border-[#1E3A2F] shadow-md ring-1 ring-[#1E3A2F]/20'
                  : 'bg-slate-50/70 border-slate-200/80 opacity-75 hover:opacity-100 hover:bg-white'
              }`}
            >
              <div>
                
                {/* Card Header & Toggle Switch */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mb-1">
                      {swap.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {swap.title}
                    </h3>
                  </div>

                  {/* Toggle Button */}
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={() => onToggleSwap(swap.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1E3A2F]"></div>
                  </label>
                </div>

                {/* Culprit vs Alternative */}
                <div className="space-y-2.5 my-3 text-xs">
                  <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-2.5">
                    <span className="block font-bold text-rose-900 text-[11px] mb-0.5">
                      ❌ Current Single-Use Habit:
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {swap.currentHabit}
                    </p>
                  </div>

                  <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-2.5">
                    <span className="block font-bold text-[#1E3A2F] text-[11px] mb-0.5">
                      ✅ Zero-Budget / Low-Cost Swap:
                    </span>
                    <p className="text-slate-800 leading-relaxed font-medium">
                      {swap.greenAlternative}
                    </p>
                  </div>
                </div>

                {/* Eco & Feasibility Note */}
                <div className="text-[11px] text-slate-500 mb-3 italic">
                  "{swap.impactNote}"
                </div>

              </div>

              {/* Card Footer: Metrics & Feasibility */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">
                      Plastic Saved
                    </span>
                    <span className="text-xs font-extrabold text-[#1E3A2F]">
                      -{swap.weightSavedPerYearKg} kg/yr
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">
                      Student Savings
                    </span>
                    <span className="text-xs font-extrabold text-amber-700">
                      +₹{swap.moneySavedPerYearInr}/yr
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Payback: <strong className="text-slate-700">{swap.paybackPeriod}</strong></span>
                  <span className="text-emerald-700 font-semibold">{swap.feasibility}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Action Plan Implementation Guide Table */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <span>Implementation Feasibility & Campus Policy Recommendations</span>
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Practical roadmap submitted for college campus green cell & student union adoption
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <th className="py-2.5 px-3">Campus Zone</th>
                <th className="py-2.5 px-3">Target Single-Use Plastic</th>
                <th className="py-2.5 px-3">Institutional Policy Intervention</th>
                <th className="py-2.5 px-3">Student Benefit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Main Canteen & Tapris</td>
                <td className="py-2.5 px-3">Disposable polypropylene chai cups</td>
                <td className="py-2.5 px-3">Introduce ₹1 "Bring Your Own Mug" discount or mandate traditional clay kulhads.</td>
                <td className="py-2.5 px-3 font-medium text-emerald-800">Saves ~₹300/yr & prevents toxic polymer ingestion.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Hostels & Convenience Stores</td>
                <td className="py-2.5 px-3">Shampoo & personal care sachets</td>
                <td className="py-2.5 px-3">Zero-waste bulk liquid refill stations at campus tuck shops and solid shampoo bar incentives.</td>
                <td className="py-2.5 px-3 font-medium text-emerald-800">Eliminates 150+ unrecyclable MLP sachets per student/yr.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Campus Entry & Stationery</td>
                <td className="py-2.5 px-3">Thin single-use polythene bags</td>
                <td className="py-2.5 px-3">Campus "Jhola Bank" at library / stationery store with refundable ₹10 deposit.</td>
                <td className="py-2.5 px-3 font-medium text-emerald-800">Eliminates ₹3-₹5 per-bag tuck shop penalty.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Food Courts & Academic Blocks</td>
                <td className="py-2.5 px-3">Packaged 1L PET water bottles</td>
                <td className="py-2.5 px-3">Prohibit single-use packaged PET bottles at food courts, leveraging certified campus RO stations with BYOB hydration incentives.</td>
                <td className="py-2.5 px-3 font-medium text-emerald-800">Saves up to ₹1,600/yr per student while eliminating virgin plastic bottles.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
