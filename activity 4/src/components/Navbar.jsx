import React from 'react';
import { 
  Droplet, 
  RotateCcw, 
  Printer, 
  FileText, 
  Sliders, 
  Activity, 
  Trees, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { PROJECT_METADATA_ACT4 } from '../data/treatmentData';

export default function Navbar({ 
  onResetDefaults, 
  onOpenReport, 
  dailyVolumeLitres,
  efficiencyPercent = 94
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Academic Identification Banner */}
      <div className="bg-[#0F172A] text-slate-300 px-4 py-1 text-xs font-medium flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="bg-teal-600 text-white px-2 py-0.5 rounded text-[11px] font-bold tracking-wide">
            {PROJECT_METADATA_ACT4.activityNo}
          </span>
          <span className="hidden sm:inline text-teal-200">
            {PROJECT_METADATA_ACT4.course} • Nature-Based Wastewater Treatment
          </span>
          <span className="sm:hidden text-teal-200">EVS Activity No. 4</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="hidden md:inline font-mono">CPCB Non-Potable Reuse Norms Compliant</span>
          <span className="text-teal-400 font-bold">AY 2026–27</span>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center shadow-md">
              <Droplet className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight font-heading">
                  EcoFlow Campus
                </h1>
                <span className="bg-teal-50 text-teal-800 text-[11px] font-bold px-2 py-0.5 rounded-full border border-teal-200">
                  DEWATS Simulator
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Nature-Based Phytoremediation & Multi-Stage Greywater Treatment System
              </p>
            </div>
          </div>

          {/* Quick Stats Badges & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-mono">
              <span className="text-slate-500">Flow:</span>
              <strong className="text-teal-700">{dailyVolumeLitres.toLocaleString()} L/day</strong>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">BOD Cleared:</span>
              <strong className="text-emerald-700">~{efficiencyPercent}%</strong>
            </div>

            <button
              onClick={onResetDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              title="Reset parameters to initial campus defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={onOpenReport}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-sm transition-all hover:scale-105"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Engineering Report</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
