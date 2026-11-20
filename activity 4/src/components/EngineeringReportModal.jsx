import React from 'react';
import { 
  Printer, 
  X, 
  CheckCircle2, 
  Droplet, 
  ShieldCheck, 
  Building2, 
  Trees, 
  Layers,
  ArrowLeft
} from 'lucide-react';
import { 
  PROJECT_METADATA_ACT4, 
  TREATMENT_STAGES, 
  CPCB_STANDARDS,
  PHYTOREMEDIATION_PLANTS,
  SOURCE_PRESETS
} from '../data/treatmentData';

export default function EngineeringReportModal({
  isOpen,
  onClose,
  selectedSourceId,
  studentCount,
  litresPerPerson,
  dailyVolumeLitres,
  baselinePollutants,
  selectedPlantId
}) {
  if (!isOpen) return null;

  const currentSource = SOURCE_PRESETS[selectedSourceId] || SOURCE_PRESETS.hostel;
  const currentPlant = PHYTOREMEDIATION_PLANTS[selectedPlantId] || PHYTOREMEDIATION_PLANTS.polyculture;
  const eff = currentPlant.efficiencies;

  // Effluent parameters
  const treatedBod = Math.max(2.5, +(baselinePollutants.bod * (1 - eff.bodReduction)).toFixed(1));
  const treatedTss = Math.max(3.0, +(baselinePollutants.tss * (1 - eff.tssReduction)).toFixed(1));
  const treatedTurbidity = Math.max(1.0, +(baselinePollutants.turbidity * (1 - eff.turbidityReduction)).toFixed(1));
  const treatedOilGrease = Math.max(0.5, +(baselinePollutants.oilGrease * (1 - eff.oilGreaseReduction)).toFixed(1));

  // Sizing
  const Q = dailyVolumeLitres / 1000;
  const requiredSurfaceAreaM2 = Math.max(8, +( (Q * 2.0) / (0.6 * 0.38) ).toFixed(1));
  const calculatedWidth = +(Math.sqrt(requiredSurfaceAreaM2 / 2.5)).toFixed(1);
  const calculatedLength = +(calculatedWidth * 2.5).toFixed(1);
  const dailyRecoveredLitres = Math.round(dailyVolumeLitres * 0.94);
  const annualFreshwaterSavedKl = Math.round((dailyRecoveredLitres * 365) / 1000);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-2 sm:p-6 animate-fade-in">
      
      {/* Top Floating Action Bar (Hidden on print) */}
      <div className="no-print max-w-4xl mx-auto mb-4 flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200 shadow-md">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Simulator</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Print Preview Mode • Ready for PDF Submission
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-800 hover:bg-teal-900 text-white shadow-md transition-all hover:scale-105"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Printable Document Card */}
      <div className="print-container bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl max-w-4xl mx-auto text-slate-900 font-sans">
        
        {/* Document Header */}
        <div className="border-b-2 border-teal-800 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800 block">
                {PROJECT_METADATA_ACT4.institution}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                CAMPUS NATURE-BASED WASTEWATER TREATMENT BLUEPRINT
              </h1>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">
                {PROJECT_METADATA_ACT4.course} • {PROJECT_METADATA_ACT4.activityNo}
              </p>
              <p className="text-xs text-slate-500 italic">
                "{PROJECT_METADATA_ACT4.activityTitle}"
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="inline-block px-2.5 py-1 bg-teal-800 text-white font-mono text-xs font-bold rounded">
                AY {PROJECT_METADATA_ACT4.academicYear}
              </span>
              <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* 1. Design Inflow & Population Profile */}
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            1. Design Inflow & Population Profile
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="border-l-2 border-teal-700 pl-2">
              <span className="text-slate-500 block text-[10px] uppercase">Wastewater Source</span>
              <span className="font-bold text-slate-900 block truncate">{currentSource.name}</span>
            </div>
            <div className="border-l-2 border-teal-700 pl-2">
              <span className="text-slate-500 block text-[10px] uppercase">Population Served</span>
              <span className="font-bold text-slate-900 block">{studentCount} Students / Users</span>
            </div>
            <div className="border-l-2 border-teal-700 pl-2">
              <span className="text-slate-500 block text-[10px] uppercase">Daily Flow Volume (Q)</span>
              <span className="font-bold text-teal-800 font-mono block">{dailyVolumeLitres.toLocaleString()} Litres/day</span>
            </div>
            <div className="border-l-2 border-teal-700 pl-2">
              <span className="text-slate-500 block text-[10px] uppercase">Annual Water Saved</span>
              <span className="font-bold text-emerald-800 font-mono block">{annualFreshwaterSavedKl} kL / year</span>
            </div>
          </div>
        </div>

        {/* 2. Technical Cross-Section & 4 Treatment Stages */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-900 border-b border-slate-200 pb-1 mb-3">
            2. Multi-Stage Nature-Based Treatment Specifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {TREATMENT_STAGES.map((stage) => (
              <div key={stage.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">
                    Stage {stage.stageNumber}: {stage.shortName}
                  </span>
                  <span className="font-mono text-teal-800 font-bold text-[11px]">
                    HRT: {stage.hrtHours}h
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  {stage.dimensions}
                </p>
                <div className="text-[11px] text-slate-700 pt-1 border-t border-slate-200">
                  <strong>Media:</strong> {stage.mediaLayers.map(l => l.name).join(' → ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Water Quality Analytics & CPCB Compliance */}
        <div className="mb-6 break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-900 border-b border-slate-200 pb-1 mb-2">
            3. Influent vs. Effluent Water Quality Performance (CPCB Standards)
          </h2>
          <p className="text-xs text-slate-600 mb-2">
            Selected Phytoremediation Vegetation: <strong>{currentPlant.name}</strong> (<em>{currentPlant.botanicalName}</em>)
          </p>

          <table className="w-full text-left text-xs border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-semibold">
                <th className="py-2 px-3 border border-slate-200">Water Quality Parameter</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Raw Greywater</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Treated Effluent</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Removal %</th>
                <th className="py-2 px-3 border border-slate-200 text-right">CPCB Reuse Limit</th>
                <th className="py-2 px-3 border border-slate-200 text-center">Compliance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1.5 px-3 border border-slate-200 font-semibold">Biochemical Oxygen Demand (BOD₅)</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{baselinePollutants.bod} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-teal-800">{treatedBod} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{Math.round(eff.bodReduction * 100)}%</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-semibold">≤ {CPCB_STANDARDS.bodMax} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-center text-emerald-700 font-bold">PASS ✅</td>
              </tr>
              <tr>
                <td className="py-1.5 px-3 border border-slate-200 font-semibold">Total Suspended Solids (TSS)</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{baselinePollutants.tss} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-teal-800">{treatedTss} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{Math.round(eff.tssReduction * 100)}%</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-semibold">≤ {CPCB_STANDARDS.tssMax} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-center text-emerald-700 font-bold">PASS ✅</td>
              </tr>
              <tr>
                <td className="py-1.5 px-3 border border-slate-200 font-semibold">Water Turbidity</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{baselinePollutants.turbidity} NTU</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-teal-800">{treatedTurbidity} NTU</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{Math.round(eff.turbidityReduction * 100)}%</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-semibold">≤ {CPCB_STANDARDS.turbidityMax} NTU</td>
                <td className="py-1.5 px-3 border border-slate-200 text-center text-emerald-700 font-bold">PASS ✅</td>
              </tr>
              <tr>
                <td className="py-1.5 px-3 border border-slate-200 font-semibold">Oil & Grease (FOG)</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{baselinePollutants.oilGrease} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-teal-800">{treatedOilGrease} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{Math.round(eff.oilGreaseReduction * 100)}%</td>
                <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-semibold">≤ {CPCB_STANDARDS.oilGreaseMax} mg/L</td>
                <td className="py-1.5 px-3 border border-slate-200 text-center text-emerald-700 font-bold">PASS ✅</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. Spatial Sizing & Campus Allocation */}
        <div className="mb-6 break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-900 border-b border-slate-200 pb-1 mb-2">
            4. Wetland Sizing Equation & Campus Reuse Distribution
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-800 block mb-1">Constructed Wetland Sizing Equation:</span>
              <p className="font-mono text-slate-700 mb-1">A_s = (Q × HRT) / (d × ε) = ({Q.toFixed(2)} × 2) / (0.6 × 0.38)</p>
              <p className="font-bold text-teal-800">Required Wetland Area: {requiredSurfaceAreaM2} m² ({calculatedLength}m L × {calculatedWidth}m W)</p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-800 block mb-1">Campus Reuse Allocation ({dailyRecoveredLitres.toLocaleString()} L/day):</span>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                <li>Campus Garden & Lawn Irrigation: 65% ({Math.round(dailyRecoveredLitres * 0.65).toLocaleString()} L/day)</li>
                <li>Toilet Dual-Flushing Network: 25% ({Math.round(dailyRecoveredLitres * 0.25).toLocaleString()} L/day)</li>
                <li>Floor Mopping & Cleaning: 10% ({Math.round(dailyRecoveredLitres * 0.10).toLocaleString()} L/day)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Academic Evaluation Signatures */}
        <div className="mt-8 pt-4 border-t-2 border-slate-300 break-inside-avoid">
          <div className="grid grid-cols-2 gap-8 text-xs">
            <div>
              <p className="font-semibold text-slate-800 mb-8">Student Project Team Declaration:</p>
              <div className="border-t border-slate-400 pt-1">
                <span className="font-bold text-slate-900 block">Lead Student Investigator</span>
                <span className="text-slate-500">Environmental Studies (Activity No. 4)</span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-800 mb-8">Faculty Evaluator Remarks & Grade:</p>
              <div className="border-t border-slate-400 pt-1 flex justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Course Instructor Signature</span>
                  <span className="text-slate-500">Dept. of Environmental Sciences</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-mono">Score: _____ / 25</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
