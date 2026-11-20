import React from 'react';
import { 
  Leaf, 
  Users, 
  RotateCcw, 
  Printer, 
  BarChart3, 
  ClipboardList, 
  Sparkles, 
  FileText,
  Download
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/initialData';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenMembers, 
  onResetData, 
  onExportCsv,
  totalItems,
  totalWeightGrams 
}) {
  return (
    <header className="sticky top-0 z-30 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E3E8E3] shadow-sm">
      {/* Top micro-bar */}
      <div className="bg-[#1E3A2F] text-[#E5ECE5] px-4 py-1 text-xs font-medium flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="bg-[#2D5A46] text-white px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide">
            {PROJECT_METADATA.activityNo}
          </span>
          <span className="hidden sm:inline text-emerald-200">
            {PROJECT_METADATA.course} • {PROJECT_METADATA.activityTitle}
          </span>
          <span className="sm:hidden text-emerald-200">EVS Activity No. 3</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-emerald-300">
          <span>Campus Model: {PROJECT_METADATA.campusStudentPopulation} Students</span>
          <span className="hidden md:inline">• Academic Year {PROJECT_METADATA.academicYear}</span>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          
          {/* Logo & title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A2F] text-emerald-400 flex items-center justify-center shadow-inner">
              <Leaf className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-[#1E3A2F] tracking-tight">
                  Campus Plastic Footprint Tracker
                </h1>
                <span className="bg-[#E5ECE5] text-[#1E3A2F] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#CBDAC8]">
                  v2.0
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Action Simulator & Zero-Budget Student Alternatives
              </p>
            </div>
          </div>

          {/* Action buttons (Right) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenMembers}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm transition-colors"
              title="View & Edit 4 Group Member Details"
            >
              <Users className="w-3.5 h-3.5 text-slate-600" />
              <span>Group Roster</span>
            </button>

            <button
              onClick={onExportCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm transition-colors"
              title="Export Current Audit Log as CSV"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onResetData}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-red-700 hover:bg-red-50 border border-slate-200 transition-colors"
              title="Reset to 7-Day Pre-loaded Dataset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset Sample</span>
            </button>

            <button
              onClick={() => setActiveTab('report')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1E3A2F] hover:bg-[#142720] text-white shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print LMS Report</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-3 flex overflow-x-auto no-scrollbar gap-1 border-b border-slate-200/80 -mb-px">
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'audit'
                ? 'border-[#1E3A2F] text-[#1E3A2F] font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>1. Audit Logger & Dataset</span>
            <span className="bg-[#E5ECE5] text-[#1E3A2F] text-[11px] px-1.5 py-0.2 rounded-full font-bold">
              {totalItems} items
            </span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'analytics'
                ? 'border-[#1E3A2F] text-[#1E3A2F] font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>2. Visual Analytics</span>
            <span className="bg-emerald-100 text-emerald-800 text-[11px] px-1.5 py-0.2 rounded-full font-medium">
              {(totalWeightGrams / 1000).toFixed(2)} kg
            </span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'simulator'
                ? 'border-[#1E3A2F] text-[#1E3A2F] font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>3. Zero-Budget Action Simulator</span>
            <span className="bg-amber-100 text-amber-800 text-[11px] px-1.5 py-0.2 rounded-full font-semibold">
              Swap & Save
            </span>
          </button>

          <button
            onClick={() => setActiveTab('report')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'report'
                ? 'border-[#1E3A2F] text-[#1E3A2F] font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>4. Print-Ready Report</span>
          </button>
        </div>
      </div>
    </header>
  );
}
