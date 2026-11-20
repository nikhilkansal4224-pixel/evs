import React, { useState } from 'react';
import PortalHome from './components/PortalHome';
import MasterEvaluationModal from './components/MasterEvaluationModal';
import Activity3App from '../activity 3/src/App.jsx';
import Activity4App from '../activity 4/src/App.jsx';
import { 
  Leaf, 
  Droplet, 
  LayoutDashboard, 
  ArrowLeft, 
  FileText, 
  Sparkles,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export default function App() {
  // Navigation view: 'home' | 'activity3' | 'activity4'
  const [currentView, setCurrentView] = useState('home');
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col justify-between selection:bg-teal-600 selection:text-white">
      
      {/* Persistent Global Portal Header */}
      <header className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Logo / Portal Title */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-2.5 text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 text-emerald-100" />
                </div>
                <div>
                  <span className="text-sm font-black tracking-tight text-white block font-heading">
                    Campus EVS Project Portal
                  </span>
                  <span className="text-[10px] text-slate-400 block -mt-0.5">
                    Activity 3 & 4 Master Dashboard • Sem IV
                  </span>
                </div>
              </button>

              {/* Breadcrumb if inside an activity */}
              {currentView !== 'home' && (
                <div className="hidden md:flex items-center gap-2 text-xs font-medium pl-3 border-l border-slate-700 text-slate-400">
                  <span>/</span>
                  <span className="text-emerald-400 font-semibold">
                    {currentView === 'activity3' ? 'Activity 3: Plastic Footprint' : 'Activity 4: EcoFlow Wastewater'}
                  </span>
                </div>
              )}
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setCurrentView('home')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'home'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Portal Home</span>
              </button>

              <button
                onClick={() => setCurrentView('activity3')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'activity3'
                    ? 'bg-[#1E3A2F] text-emerald-300 shadow-sm border border-emerald-600/60'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Activity 3 (Plastic)</span>
              </button>

              <button
                onClick={() => setCurrentView('activity4')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === 'activity4'
                    ? 'bg-teal-700 text-teal-100 shadow-sm border border-teal-500/60'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Droplet className="w-3.5 h-3.5 text-teal-300" />
                <span>Activity 4 (Wastewater)</span>
              </button>

              <button
                onClick={() => setIsEvaluationOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/80 hover:bg-emerald-600 text-white transition-colors ml-1"
                title="Master Evaluation Portfolio Report"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Master Report</span>
              </button>
            </div>

          </div>
        </div>

        {/* Quick Context Sub-bar when inside an activity */}
        {currentView !== 'home' && (
          <div className="bg-[#142720] border-t border-slate-800 px-4 py-1 text-xs text-emerald-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentView('home')}
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Master Portal Hub</span>
            </button>
            <span className="text-[11px] text-emerald-400 font-mono">
              Currently active: {currentView === 'activity3' ? 'Activity No. 3 Simulator' : 'Activity No. 4 Simulator'}
            </span>
          </div>
        )}
      </header>

      {/* Main Container */}
      <div className="flex-1">
        {currentView === 'home' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <PortalHome
              onSelectActivity={setCurrentView}
              onOpenEvaluation={() => setIsEvaluationOpen(true)}
            />
          </main>
        )}

        {currentView === 'activity3' && (
          <div>
            <Activity3App />
          </div>
        )}

        {currentView === 'activity4' && (
          <div>
            <Activity4App />
          </div>
        )}
      </div>

      {/* Master Evaluation Modal */}
      <MasterEvaluationModal
        isOpen={isEvaluationOpen}
        onClose={() => setIsEvaluationOpen(false)}
      />

    </div>
  );
}
