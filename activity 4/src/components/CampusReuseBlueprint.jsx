import React from 'react';
import { 
  Trees, 
  Droplets, 
  Building, 
  Compass, 
  Layers, 
  Scale, 
  MapPin, 
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Ruler
} from 'lucide-react';
import { REUSE_DESTINATIONS } from '../data/treatmentData';

export default function CampusReuseBlueprint({
  dailyVolumeLitres,
  onOpenReport
}) {
  // Sizing calculations for Horizontal Subsurface Flow Constructed Wetland:
  // Q in m3/day
  const Q = dailyVolumeLitres / 1000;
  // HRT = 2 days (48 hours)
  const hrtDays = 2.0;
  // Depth d = 0.6 m
  const bedDepth = 0.6;
  // Porosity epsilon = 0.38 (washed crushed gravel)
  const porosity = 0.38;

  // Surface Area As = (Q * HRT) / (depth * porosity)
  const requiredSurfaceAreaM2 = Math.max(8, +( (Q * hrtDays) / (bedDepth * porosity) ).toFixed(1));
  
  // Aspect ratio typical 2.5:1 (Length : Width)
  // Area = L * W = 2.5 * W^2 => W = sqrt(Area / 2.5)
  const calculatedWidth = +(Math.sqrt(requiredSurfaceAreaM2 / 2.5)).toFixed(1);
  const calculatedLength = +(calculatedWidth * 2.5).toFixed(1);

  // Daily Recovered volume
  const recoveredLitres = Math.round(dailyVolumeLitres * 0.94);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-1">
            <span>Module 4 • Campus Blueprint & Spatial Sizing</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            Campus Treated Water Allocation & Wetland Spatial Footprint Sizing
          </h2>
          <p className="text-xs text-slate-500">
            Civil engineering sizing parameters and decentralized campus circular water recycling layout
          </p>
        </div>

        <button
          onClick={onOpenReport}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all self-start sm:self-center"
        >
          <span>View Full PDF Report</span>
        </button>
      </div>

      {/* Two Columns: Left = Wetland Sizing Sheet, Right = Campus Reuse Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Sizing Calculation Card (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal-700" />
              <span>Constructed Wetland Hydraulic Sizing Equation</span>
            </h3>
            <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
              HSSF-CW Design Model
            </span>
          </div>

          {/* Formula Callout */}
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
              Governing Sizing Formula:
            </span>
            <div className="font-mono text-sm font-bold text-slate-900 py-1">
              A_s = (Q × HRT) / (d × ε)
            </div>
            <p className="text-[11px] text-slate-500">
              Where <strong>Q</strong> = {Q.toFixed(2)} m³/day influent, <strong>HRT</strong> = 48 hours (2 days), <strong>d</strong> = 0.6m bed depth, and <strong>ε</strong> = 0.38 gravel void porosity.
            </p>
          </div>

          {/* Calculated Dimensions Output */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white p-3 rounded-xl border border-teal-200 shadow-sm">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                Required Surface Area
              </span>
              <span className="text-xl sm:text-2xl font-black text-teal-800 font-mono">
                {requiredSurfaceAreaM2}
              </span>
              <span className="text-xs text-slate-500 ml-0.5">m²</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                Bed Length (L)
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                {calculatedLength}
              </span>
              <span className="text-xs text-slate-500 ml-0.5">meters</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                Bed Width (W)
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                {calculatedWidth}
              </span>
              <span className="text-xs text-slate-500 ml-0.5">meters</span>
            </div>
          </div>

          {/* Campus Location Feasibility */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950">
            <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block">Campus Spatial Feasibility:</strong>
              <span>
                A {calculatedLength}m × {calculatedWidth}m surface area ({requiredSurfaceAreaM2} m²) can be seamlessly integrated behind the Hostel lawn courtyard or adjacent to the Canteen bio-garden without displacing academic infrastructure.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Campus Reuse Breakdown (5 cols) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-teal-700" />
              <span>Campus Non-Potable Water Allocation</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Displacing costly borewell / tanker water with recycled effluent
            </p>

            <div className="space-y-3">
              {REUSE_DESTINATIONS.map((dest) => {
                const allocatedLiters = Math.round((dest.sharePercent / 100) * recoveredLitres);
                return (
                  <div key={dest.id} className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-teal-600" />
                        {dest.name}
                      </span>
                      <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {dest.sharePercent}%
                      </span>
                    </div>
                    
                    {/* Progress visual bar */}
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-teal-600 h-full rounded-full"
                        style={{ width: `${dest.sharePercent}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                      <span>Daily Allotment: <strong className="font-mono text-slate-700">{allocatedLiters.toLocaleString()} L/day</strong></span>
                      <span className="text-[10px] text-slate-400">Zero groundwater used</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financial Dividend Card */}
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-3 rounded-xl border border-teal-200/80 text-xs">
            <div className="flex justify-between items-center text-teal-950 font-bold mb-1">
              <span>Annual Water Tariff Savings:</span>
              <span className="font-mono text-sm text-teal-800">
                ≈ ₹{Math.round((recoveredLitres * 365 / 1000) * 45).toLocaleString()} / yr
              </span>
            </div>
            <p className="text-[11px] text-slate-600">
              Based on standard commercial tanker water rates of ₹45 per 1,000 Litres (kL).
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
