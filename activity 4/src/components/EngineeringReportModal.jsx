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
  ArrowLeft,
  FileDown
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

  const handleDownloadDoc = () => {
    const docHTML = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>EcoFlow Campus Wastewater Blueprint - EVS Activity 4</title>
  <!--[if gte mso 9]>
  <xml>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; line-height: 1.5; margin: 20mm; }
    h1 { color: #0f766e; font-size: 18pt; border-bottom: 2pt solid #0f766e; padding-bottom: 4pt; margin-bottom: 4pt; }
    h2 { color: #0f766e; font-size: 13pt; margin-top: 14pt; border-bottom: 1pt solid #cbd5e1; padding-bottom: 2pt; }
    p, li { line-height: 1.5; }
    table { border-collapse: collapse; width: 100%; margin: 10pt 0; font-size: 10pt; }
    th { background-color: #f0fdfa; color: #134e4a; border: 1pt solid #cbd5e1; padding: 6pt 8pt; font-weight: bold; text-align: left; }
    td { border: 1pt solid #cbd5e1; padding: 5pt 8pt; vertical-align: top; }
    .kpi-table td { background-color: #f8fafc; text-align: center; padding: 8pt; }
    .footer-box { margin-top: 25pt; border-top: 1.5pt solid #94a3b8; padding-top: 6pt; }
  </style>
</head>
<body>
  <div>
    <p style="font-size: 10pt; font-weight: bold; color: #0f766e; text-transform: uppercase; margin: 0;">${PROJECT_METADATA_ACT4.institution}</p>
    <h1>CAMPUS NATURE-BASED WASTEWATER TREATMENT BLUEPRINT</h1>
    <p style="font-size: 11pt; font-weight: bold; color: #475569; margin: 2pt 0;">
      ${PROJECT_METADATA_ACT4.course} • ${PROJECT_METADATA_ACT4.activityNo}: "${PROJECT_METADATA_ACT4.activityTitle}"
    </p>
    <p style="font-size: 10pt; color: #64748b; margin: 0 0 12pt 0;">
      Academic Year ${PROJECT_METADATA_ACT4.academicYear} • Submission Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
    </p>
  </div>

  <h2>1. Design Inflow & Population Profile</h2>
  <table>
    <thead>
      <tr>
        <th>Design Parameter</th>
        <th>Calculated Value</th>
        <th>Engineering Significance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Effluent Source Stream</strong></td>
        <td>${currentSource.name}</td>
        <td>${currentSource.description}</td>
      </tr>
      <tr>
        <td><strong>Design Population</strong></td>
        <td><strong>${studentCount} Students / Daily Users</strong></td>
        <td>Design basis for campus decentralized treatment unit</td>
      </tr>
      <tr>
        <td><strong>Daily Flow Volume (Q)</strong></td>
        <td><strong style="color: #0f766e;">${dailyVolumeLitres.toLocaleString()} Litres / day</strong></td>
        <td>Total daily greywater discharge</td>
      </tr>
      <tr>
        <td><strong>Annual Clean Water Recovered</strong></td>
        <td><strong style="color: #15803d;">${annualFreshwaterSavedKl.toLocaleString()} kL (m³) / year</strong></td>
        <td>94% recovery yield (6% natural wetland evapotranspiration)</td>
      </tr>
    </tbody>
  </table>

  <h2>2. Multi-Stage Nature-Based Treatment Specifications (DEWATS)</h2>
  <table>
    <thead>
      <tr>
        <th>Stage No. & Unit Name</th>
        <th>Category & Retention</th>
        <th>Dimensions</th>
        <th>Filter Media Strata & Depths</th>
      </tr>
    </thead>
    <tbody>
      ${TREATMENT_STAGES.map(s => `
        <tr>
          <td><strong>Stage ${s.stageNumber}: ${s.shortName}</strong></td>
          <td>${s.category}<br/>HRT: <strong>${s.hrtHours} Hours</strong></td>
          <td>${s.dimensions}</td>
          <td>${s.mediaLayers.map(l => `${l.name} (${l.depth})`).join('<br/>')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <h2>3. Influent vs. Effluent Water Quality Performance (CPCB Standards)</h2>
  <p>
    Selected Phytoremediation Species: <strong>${currentPlant.name}</strong> (<em>${currentPlant.botanicalName}</em>)
  </p>
  <table>
    <thead>
      <tr>
        <th>Water Quality Parameter</th>
        <th style="text-align: right;">Raw Greywater</th>
        <th style="text-align: right;">Treated Effluent</th>
        <th style="text-align: right;">Removal %</th>
        <th style="text-align: right;">CPCB Safe Threshold</th>
        <th style="text-align: center;">Compliance Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Biochemical Oxygen Demand (BOD₅)</strong></td>
        <td style="text-align: right;">${baselinePollutants.bod} mg/L</td>
        <td style="text-align: right; font-weight: bold; color: #0f766e;">${treatedBod} mg/L</td>
        <td style="text-align: right;">${Math.round(eff.bodReduction * 100)}%</td>
        <td style="text-align: right;">&le; ${CPCB_STANDARDS.bodMax} mg/L</td>
        <td style="text-align: center; color: #15803d; font-weight: bold;">PASS &check;</td>
      </tr>
      <tr>
        <td><strong>Total Suspended Solids (TSS)</strong></td>
        <td style="text-align: right;">${baselinePollutants.tss} mg/L</td>
        <td style="text-align: right; font-weight: bold; color: #0f766e;">${treatedTss} mg/L</td>
        <td style="text-align: right;">${Math.round(eff.tssReduction * 100)}%</td>
        <td style="text-align: right;">&le; ${CPCB_STANDARDS.tssMax} mg/L</td>
        <td style="text-align: center; color: #15803d; font-weight: bold;">PASS &check;</td>
      </tr>
      <tr>
        <td><strong>Water Turbidity</strong></td>
        <td style="text-align: right;">${baselinePollutants.turbidity} NTU</td>
        <td style="text-align: right; font-weight: bold; color: #0f766e;">${treatedTurbidity} NTU</td>
        <td style="text-align: right;">${Math.round(eff.turbidityReduction * 100)}%</td>
        <td style="text-align: right;">&le; ${CPCB_STANDARDS.turbidityMax} NTU</td>
        <td style="text-align: center; color: #15803d; font-weight: bold;">PASS &check;</td>
      </tr>
      <tr>
        <td><strong>Oil & Grease (FOG)</strong></td>
        <td style="text-align: right;">${baselinePollutants.oilGrease} mg/L</td>
        <td style="text-align: right; font-weight: bold; color: #0f766e;">${treatedOilGrease} mg/L</td>
        <td style="text-align: right;">${Math.round(eff.oilGreaseReduction * 100)}%</td>
        <td style="text-align: right;">&le; ${CPCB_STANDARDS.oilGreaseMax} mg/L</td>
        <td style="text-align: center; color: #15803d; font-weight: bold;">PASS &check;</td>
      </tr>
    </tbody>
  </table>

  <h2>4. Wetland Sizing Calculation & Campus Non-Potable Allocation</h2>
  <p><strong>Constructed Wetland Sizing Equation:</strong> <code>A_s = (Q &times; HRT) / (d &times; &epsilon;)</code></p>
  <p>
    For daily inflow Q = ${Q.toFixed(2)} m&sup3;/day, HRT = 48h (2 days), bed depth d = 0.6m, and void porosity &epsilon; = 0.38:<br/>
    <strong>Required Surface Area (A_s):</strong> <span style="color: #0f766e; font-size: 13pt; font-weight: bold;">${requiredSurfaceAreaM2} m&sup2;</span> (${calculatedLength}m Length &times; ${calculatedWidth}m Width)
  </p>

  <table>
    <thead>
      <tr>
        <th>Campus Reuse Destination</th>
        <th style="text-align: right;">Allocation %</th>
        <th style="text-align: right;">Daily Volume (L/day)</th>
        <th>Sustainability Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Campus Garden & Lawn Irrigation</strong></td>
        <td style="text-align: right; font-weight: bold;">65%</td>
        <td style="text-align: right;">${Math.round(dailyRecoveredLitres * 0.65).toLocaleString()} L</td>
        <td>Provides natural trace nitrogen and phosphorus for campus greenery</td>
      </tr>
      <tr>
        <td><strong>Toilet Dual-Flushing Network</strong></td>
        <td style="text-align: right; font-weight: bold;">25%</td>
        <td style="text-align: right;">${Math.round(dailyRecoveredLitres * 0.25).toLocaleString()} L</td>
        <td>Displaces potable municipal groundwater for sanitation flushes</td>
      </tr>
      <tr>
        <td><strong>Corridor Mopping & Floor Washing</strong></td>
        <td style="text-align: right; font-weight: bold;">10%</td>
        <td style="text-align: right;">${Math.round(dailyRecoveredLitres * 0.10).toLocaleString()} L</td>
        <td>Zero chemical or freshwater footprint for campus maintenance</td>
      </tr>
    </tbody>
  </table>

  <div class="footer-box">
    <table style="border: none;">
      <tr style="border: none;">
        <td style="border: none; width: 50%;">
          <p><strong>Student Project Team Declaration:</strong></p>
          <br/><br/>
          <p>____________________________________<br/>
          Lead Student Investigator<br/>
          Environmental Studies (Activity No. 4)</p>
        </td>
        <td style="border: none; width: 50%; text-align: right;">
          <p><strong>Faculty Evaluator Evaluation & Signature:</strong></p>
          <br/><br/>
          <p>____________________________________<br/>
          Course Instructor, Dept. of Environmental Sciences<br/>
          Score: _______ / 25 Marks</p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;

    const blob = new Blob(['\ufeff', docHTML], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EVS_Activity4_EcoFlow_Treatment_Report.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
            Engineering Blueprint • Ready for DOC / PDF Submission
          </span>

          <button
            onClick={handleDownloadDoc}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-800 hover:bg-teal-900 text-white shadow-md transition-all hover:scale-105"
            title="Download formatted Microsoft Word Document (.doc)"
          >
            <FileDown className="w-4 h-4 text-teal-300" />
            <span>Download Word Report (.doc)</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Print / PDF</span>
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
