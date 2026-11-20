import React from 'react';
import { Scale, Building2, Flame, TrendingDown, Info, AlertTriangle } from 'lucide-react';
import { PROJECT_METADATA } from '../data/initialData';

export default function KpiCards({ 
  totalWeightGrams, 
  totalItems, 
  topCulprit, 
  groupMemberCount = 3,
  campusPopulation = 500,
  activeSavingsKg = 0,
  activeSavingsInr = 0
}) {
  const weeklyWeightKg = (totalWeightGrams / 1000).toFixed(2);
  const perStudentGramsPerDay = (totalWeightGrams / groupMemberCount / 7).toFixed(1);
  
  // Campus Extrapolation:
  // (Weekly weight per student) * (campus population) * (40 academic weeks)
  const perStudentWeeklyKg = totalWeightGrams / 1000 / groupMemberCount;
  const yearlyCampusKg = Math.round(perStudentWeeklyKg * campusPopulation * PROJECT_METADATA.weeksPerAcademicYear);
  const yearlyCampusTonnes = (yearlyCampusKg / 1000).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      
      {/* Card 1: Weekly Plastic Weight */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
        <div className="flex items-center justify-between mb-3 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Weekly Plastic Weight
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Scale className="w-4 h-4" />
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#1E3A2F] tracking-tight">
              {totalWeightGrams.toLocaleString()}
            </span>
            <span className="text-sm font-semibold text-slate-500">grams</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
            <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              ≈ {weeklyWeightKg} kg / group of {groupMemberCount}
            </span>
            <span className="text-slate-500">
              ~{perStudentGramsPerDay}g/day per student
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Projected Yearly Campus Waste */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
        <div className="flex items-center justify-between mb-3 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Projected Yearly Campus Waste
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
            <Building2 className="w-4 h-4" />
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {yearlyCampusKg.toLocaleString()}
            </span>
            <span className="text-sm font-semibold text-slate-500">kg</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
            <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
              ≈ {yearlyCampusTonnes} Metric Tonnes
            </span>
            <span className="text-slate-500" title="Based on 500 students across 40 academic weeks">
              Across {campusPopulation} students
            </span>
          </div>
        </div>
      </div>

      {/* Card 3: Top Culprit Item */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
        <div className="flex items-center justify-between mb-3 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Top Culprit Item
          </span>
          <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
            <Flame className="w-4 h-4" />
          </div>
        </div>
        <div className="relative z-10">
          <div className="truncate">
            <span className="text-xl font-bold text-rose-950 block truncate" title={topCulprit ? topCulprit.name : 'N/A'}>
              {topCulprit ? topCulprit.name : 'Loading...'}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
            <span className="font-medium text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
              {topCulprit ? `${topCulprit.count} units (${topCulprit.percentage}% of total)` : '0 units'}
            </span>
            <span className="text-slate-500 font-medium">
              {topCulprit ? `${topCulprit.totalGrams}g discarded` : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Card 4: Action Potential / Savings (Bonus 4th KPI) */}
      <div className="bg-gradient-to-br from-[#1E3A2F] to-[#2D5A46] text-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
            Simulated Student Impact
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-300 flex items-center justify-center">
            <TrendingDown className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {activeSavingsKg.toFixed(1)}
            </span>
            <span className="text-sm font-semibold text-emerald-200">kg/yr reduced</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-emerald-100 border-t border-emerald-600/50 pt-2">
            <span className="font-bold text-amber-300">
              ₹{activeSavingsInr.toLocaleString()} saved / student
            </span>
            <span className="text-emerald-300">
              via Active Swaps
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
