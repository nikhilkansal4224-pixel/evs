import React from 'react';
import { 
  Leaf, 
  Droplet, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Building2, 
  Printer, 
  FileCheck,
  ShieldCheck,
  ExternalLink,
  Scale,
  Award
} from 'lucide-react';

export default function PortalHome({ 
  onSelectActivity, 
  onOpenEvaluation,
  members = [
    { id: 'm1', name: 'Atul Raushan', roll: '24ENV001', role: 'Group Coordinator / Tracking & Report' },
    { id: 'm2', name: 'Nikhil', roll: '24ENV002', role: 'Collection Box & Resin Code Sorting' },
    { id: 'm3', name: 'Arnav Gulati', roll: '24ENV003', role: 'UPI Payment Audit & Pricing Analysis' },
  ]
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A3326] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-700/60 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Environmental Studies (EVS) • Semester IV Project Portfolio</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-heading leading-tight">
            Campus Sustainability & Nature-Based Engineering Portal
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Welcome to our group submission portal combining two flagship environmental investigations: 
            <strong> Activity No. 3 (Campus Single-Use Plastic Audit & Action Simulator)</strong> and 
            <strong> Activity No. 4 (EcoFlow: Nature-Based Constructed Wetland Wastewater Treatment)</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectActivity('activity3')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1E3A2F] hover:bg-[#142720] text-emerald-200 border border-emerald-600/50 shadow-md transition-all hover:scale-105"
            >
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Activity 3: Plastic Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onSelectActivity('activity4')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all hover:scale-105"
            >
              <Droplet className="w-4 h-4 text-teal-100" />
              <span>Activity 4: EcoFlow Treatment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenEvaluation}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 transition-colors"
            >
              <FileCheck className="w-4 h-4 text-emerald-300" />
              <span>Master Report (.doc)</span>
            </button>
          </div>
        </div>

        {/* Unified Metrics Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300 text-xs">
          <div>
            <span className="block text-[11px] text-slate-400 font-semibold uppercase">Cohort Size</span>
            <span className="text-lg font-bold text-white font-mono">3 Student Investigators</span>
          </div>
          <div>
            <span className="block text-[11px] text-slate-400 font-semibold uppercase">Plastic Monitored</span>
            <span className="text-lg font-bold text-emerald-400 font-mono">46 Field Logs (Week 1 Audit)</span>
          </div>
          <div>
            <span className="block text-[11px] text-slate-400 font-semibold uppercase">Water Recovery Yield</span>
            <span className="text-lg font-bold text-teal-300 font-mono">94% Daily Effluent</span>
          </div>
          <div>
            <span className="block text-[11px] text-slate-400 font-semibold uppercase">Standards Compliance</span>
            <span className="text-lg font-bold text-amber-300 font-mono">CPCB Grade A Non-Potable</span>
          </div>
        </div>
      </div>

      {/* The Two Main Activity Launchpad Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* CARD 1: ACTIVITY NO. 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-6 -mt-6 pointer-events-none transition-transform group-hover:scale-110" />

          <div>
            {/* Tag & Status */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E5ECE5] text-[#1E3A2F] border border-[#CBDAC8]">
                <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                <span>Activity No. 3</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live Simulator Ready
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1E3A2F] font-heading tracking-tight">
              Campus Plastic Footprint Tracker & Action Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>Objective:</strong> Track your plastic consumption and develop practical, zero-budget alternatives to single-use plastics tailored for college hostelites and day scholars.
            </p>

            {/* Feature List */}
            <div className="mt-4 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                <span><strong>Pre-populated 7-Day Audit:</strong> 58 real-life Indian college student logs.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                <span><strong>Visual Analytics:</strong> Bar chart by student & donut chart by food vs hostel stream.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                <span><strong>"Swap & Save" Simulator:</strong> 6 realistic student alternatives with live ₹ INR savings.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                <span><strong>500-Student Extrapolation:</strong> Projects college-wide yearly waste and savings.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Folder: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">activity 3/</code>
            </span>
            <button
              onClick={() => onSelectActivity('activity3')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#1E3A2F] hover:bg-[#142720] text-white shadow-sm transition-all group-hover:translate-x-1"
            >
              <span>Launch Activity 3</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CARD 2: ACTIVITY NO. 4 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-6 -mt-6 pointer-events-none transition-transform group-hover:scale-110" />

          <div>
            {/* Tag & Status */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
                <Droplet className="w-3.5 h-3.5 text-teal-600" />
                <span>Activity No. 4</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live Simulator Ready
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight">
              EcoFlow Campus: Nature-Based Wastewater Treatment Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>Objective:</strong> Build a nature-based solution (DEWATS) for wastewater treatment utilizing multi-stage physical settling, media filtration, and sub-surface constructed wetlands.
            </p>

            {/* Feature List */}
            <div className="mt-4 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span><strong>Source & Volume Sizer:</strong> Sliders for hostel/canteen flow (20-500 students).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span><strong>Animated Cross-Section:</strong> Clickable 4-stage engineering schematic & inspector.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span><strong>Phytoremediation Matrix:</strong> Canna, Vetiver, and Typha with CPCB compliance checks.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span><strong>Civil Sizing Equation:</strong> Automatically computes required wetland footprint (m²).</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Folder: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">activity 4/</code>
            </span>
            <button
              onClick={() => onSelectActivity('activity4')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-sm transition-all group-hover:translate-x-1"
            >
              <span>Launch Activity 4</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Project Team Roster & Academic Details */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-700" />
            <h3 className="text-base font-bold text-slate-900 font-heading">
              Project Investigation Team (3 Student Members)
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Course: Environmental Studies (EVS) • Sem IV
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {members.map((member, idx) => (
            <div key={member.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block">
                Investigator {idx + 1}
              </span>
              <span className="text-sm font-bold text-slate-900 block">
                {member.name}
              </span>
              <span className="font-mono text-slate-500 block text-xs">
                Roll: {member.roll}
              </span>
              <span className="text-slate-400 block text-[11px] truncate">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
