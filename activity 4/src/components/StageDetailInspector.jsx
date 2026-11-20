import React from 'react';
import { 
  X, 
  Layers, 
  Clock, 
  Ruler, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  Info,
  Wrench
} from 'lucide-react';
import { TREATMENT_STAGES } from '../data/treatmentData';

export default function StageDetailInspector({ stageId, onClose }) {
  const stage = TREATMENT_STAGES.find((s) => s.id === stageId) || TREATMENT_STAGES[0];

  return (
    <div className="bg-white rounded-2xl p-5 border-2 border-teal-600 shadow-lg space-y-4 animate-fade-in relative">
      
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span 
              className="text-xs font-black text-white px-2 py-0.5 rounded-full"
              style={{ backgroundColor: stage.color }}
            >
              Stage {stage.stageNumber}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {stage.category}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 font-heading">
            {stage.title}
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Engineering Specs Ribbons */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <span className="text-slate-400 text-[10px] uppercase font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3 text-teal-600" />
            Hydraulic Retention Time
          </span>
          <span className="font-mono font-black text-slate-900 text-sm block mt-0.5">
            {stage.hrtHours} Hours
          </span>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <span className="text-slate-400 text-[10px] uppercase font-semibold flex items-center gap-1">
            <Ruler className="w-3 h-3 text-teal-600" />
            Design Dimensions
          </span>
          <span className="font-mono font-bold text-slate-800 text-xs block mt-0.5 truncate" title={stage.dimensions}>
            {stage.dimensions}
          </span>
        </div>
      </div>

      {/* Filter Media Layers / Cross-Sectional Strata */}
      <div>
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-teal-700" />
          Internal Media Strata & Depths (cm)
        </h4>
        <div className="space-y-2">
          {stage.mediaLayers.map((layer, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-0.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  {layer.name}
                </span>
                <span className="font-mono text-teal-800 font-bold bg-teal-50 px-2 py-0.5 rounded text-[11px] border border-teal-200">
                  {layer.depth}
                </span>
              </div>
              <p className="text-slate-600 text-[11px] pl-5 leading-relaxed">
                {layer.material}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment Mechanisms */}
      <div>
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          Scientific Cleaning Mechanisms
        </h4>
        <ul className="space-y-1.5 text-xs text-slate-700">
          {stage.mechanisms.map((mech, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-[11px] leading-relaxed">{mech}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Maintenance Protocol */}
      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
        <Wrench className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold block text-amber-950">Maintenance & Operation Protocol:</strong>
          <span>{stage.maintenanceProtocol}</span>
        </div>
      </div>

    </div>
  );
}
