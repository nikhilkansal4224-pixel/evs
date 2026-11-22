import React from 'react';
import { 
  Printer, 
  X, 
  CheckCircle2, 
  ArrowLeft, 
  Leaf, 
  Droplet, 
  ShieldCheck, 
  Building2, 
  Award,
  Users,
  FileDown
} from 'lucide-react';

export default function MasterEvaluationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const members = [
    { name: 'Atul Raushan', roll: '24ENV001', role: 'Group Coordinator / Tracking & Report Compilation' },
    { name: 'Nikhil', roll: '24ENV002', role: 'Collection Box Management & Resin Code Sorting' },
    { name: 'Arnav Gulati', roll: '24ENV003', role: 'UPI Payment Cross-Checking & Pricing Audit' },
  ];

  const handleDownloadDoc = () => {
    const docHTML = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>EVS Semester IV Master Portfolio Report</title>
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
    h1 { color: #0f172a; font-size: 18pt; border-bottom: 2pt solid #0f172a; padding-bottom: 4pt; margin-bottom: 4pt; }
    h2 { color: #0f172a; font-size: 13pt; margin-top: 14pt; border-bottom: 1pt solid #cbd5e1; padding-bottom: 2pt; }
    p, li { line-height: 1.5; }
    table { border-collapse: collapse; width: 100%; margin: 10pt 0; font-size: 10pt; }
    th { background-color: #f1f5f9; color: #0f172a; border: 1pt solid #cbd5e1; padding: 6pt 8pt; font-weight: bold; text-align: left; }
    td { border: 1pt solid #cbd5e1; padding: 5pt 8pt; vertical-align: top; }
    .kpi-table td { background-color: #f8fafc; text-align: center; padding: 8pt; }
    .footer-box { margin-top: 25pt; border-top: 1.5pt solid #94a3b8; padding-top: 6pt; }
  </style>
</head>
<body>
  <div>
    <p style="font-size: 10pt; font-weight: bold; color: #1e3a2f; text-transform: uppercase; margin: 0;">
      DEPARTMENT OF ENVIRONMENTAL STUDIES &amp; GREEN CAMPUS COMMITTEE
    </p>
    <h1>SEMESTER IV COURSEWORK: MASTER PORTFOLIO SUBMISSION</h1>
    <p style="font-size: 11pt; font-weight: bold; color: #475569; margin: 2pt 0;">
      Comprehensive Evaluation: Activity No. 3 (Plastic Footprint) &amp; Activity No. 4 (Nature-Based Wastewater DEWATS)
    </p>
    <p style="font-size: 10pt; color: #64748b; margin: 0 0 12pt 0;">
      Academic Year 2026–2027 • Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
    </p>
  </div>

  <h2>Student Investigation Team (Group of 3)</h2>
  <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>Student Name</th>
        <th>Enrollment / Roll No.</th>
        <th>Project Role</th>
      </tr>
    </thead>
    <tbody>
      ${members.map((m, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td><strong>${m.name}</strong></td>
          <td>${m.roll}</td>
          <td>${m.role}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <h2>Executive Summary</h2>
  <p>
    This portfolio consolidates our semester coursework spanning solid waste characterization (single-use plastics) and decentralized nature-based circular wastewater engineering. Both projects were implemented as interactive simulators with real-world Indian college baseline parameters, verified laboratory item weights, and Central Pollution Control Board (CPCB) compliance benchmarks.
  </p>

  <h2>Module A: Activity No. 3 — Campus Plastic Footprint Tracker &amp; Action Simulator</h2>
  <table class="kpi-table">
    <tr>
      <td>
        <span style="font-size: 9pt; color: #64748b; text-transform: uppercase;">7-Day Group Waste</span><br/>
        <strong style="font-size: 14pt; color: #1e3a2f;">842 g (44 items)</strong>
      </td>
      <td>
        <span style="font-size: 9pt; color: #64748b; text-transform: uppercase;">Campus Yearly Waste (500 Students)</span><br/>
        <strong style="font-size: 14pt; color: #b45309;">4,210 kg / year</strong>
      </td>
      <td>
        <span style="font-size: 9pt; color: #64748b; text-transform: uppercase;">Active Student Savings</span><br/>
        <strong style="font-size: 14pt; color: #15803d;">₹2,850 &amp; 6.2 kg / yr</strong>
      </td>
    </tr>
  </table>
  <p>
    <strong>Key Findings:</strong> Single-use polypropylene chai cups and multilayer plastic (MLP) personal care sachets constituted 62% of campus solid waste by mass. Adopting zero-budget alternatives (personal steel mugs, solid shampoo bars, cloth jholas, and campus RO refills) eliminates 90%+ of personal student plastic waste while yielding substantial direct monetary dividends.
  </p>

  <h2>Module B: Activity No. 4 — EcoFlow Nature-Based Wastewater Treatment Simulator</h2>
  <table class="kpi-table">
    <tr>
      <td>
        <span style="font-size: 9pt; color: #64748b; text-transform: uppercase;">Daily Inflow (Q)</span><br/>
        <strong style="font-size: 14pt; color: #0f766e;">4,500 L / day</strong>
      </td>
      <td>
        <span style="font-size: 9pt; color: #64748b; text-transform: uppercase;">BOD Removal Rate</span><br/>
        <strong style="font-size: 14pt; color: #15803d;">95% (From 160 &rarr; 8 mg/L)</strong>
      </td>
      <td>
        <span style="font-size: 9pt; color: #64748b; text-transform: uppercase;">Wetland Area (HSSF-CW)</span><br/>
        <strong style="font-size: 14pt; color: #0f766e;">39.5 m&sup2; (10m &times; 4m)</strong>
      </td>
    </tr>
  </table>
  <p>
    <strong>Key Findings:</strong> A 4-stage natural DEWATS system (Grit trap &rarr; Multi-layer bio-sand filter &rarr; Subsurface gravel wetland planted with <em>Canna indica</em> and <em>Vetiver</em> &rarr; Solar UV weir) yields 94% clean non-potable water, certified compliant with CPCB standards for campus garden irrigation and dual-toilet flushing without any chemical additives.
  </p>

  <div class="footer-box">
    <table style="border: none;">
      <tr style="border: none;">
        <td style="border: none; width: 50%;">
          <p><strong>Group Leader Undertaking:</strong></p>
          <br/><br/>
          <p>____________________________________<br/>
          Aarav Sharma (Group Leader)<br/>
          Roll No: 24ENV014</p>
        </td>
        <td style="border: none; width: 50%; text-align: right;">
          <p><strong>Faculty Evaluator Remarks &amp; Grade:</strong></p>
          <br/><br/>
          <p>____________________________________<br/>
          Course Instructor, Dept. of Environmental Studies<br/>
          Score: _______ / 50 Marks</p>
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
    link.download = `EVS_Semester_IV_Master_Portfolio_Report.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-2 sm:p-6 animate-fade-in">
      
      {/* Action Toolbar */}
      <div className="no-print max-w-4xl mx-auto mb-4 flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200 shadow-md">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Master Evaluation Report • Ready for DOC / PDF Submission
          </span>

          <button
            onClick={handleDownloadDoc}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#0F172A] hover:bg-slate-800 text-white shadow-md transition-all hover:scale-105"
            title="Download formatted Microsoft Word Document (.doc)"
          >
            <FileDown className="w-4 h-4 text-emerald-300" />
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

      {/* Main Document */}
      <div className="print-container bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl max-w-4xl mx-auto text-slate-900 font-sans">
        
        {/* Header */}
        <div className="border-b-2 border-slate-900 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
                DEPARTMENT OF ENVIRONMENTAL STUDIES & ENGINEERING
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                SEMESTER IV COURSEWORK: MASTER PORTFOLIO SUBMISSION
              </h1>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">
                Activity No. 3 & Activity No. 4 Comprehensive Evaluation Report
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="inline-block px-2.5 py-1 bg-slate-900 text-white font-mono text-xs font-bold rounded">
                AY 2026–2027
              </span>
              <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Group Roster */}
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Student Investigation Team (Group of 3)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {members.map((m) => (
              <div key={m.roll} className="border-l-2 border-slate-900 pl-2">
                <span className="font-bold text-slate-900 block">{m.name}</span>
                <span className="font-mono text-slate-500 text-[11px] block">{m.roll}</span>
                <span className="text-slate-400 text-[10px] block">{m.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
            Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            This portfolio consolidates our semester coursework spanning solid waste characterization (single-use plastics) and decentralized nature-based circular wastewater engineering. Both projects were implemented as interactive simulators with real-world Indian college baseline parameters, verified laboratory item weights, and Central Pollution Control Board (CPCB) compliance benchmarks.
          </p>
        </div>

        {/* Activity 3 Summary Block */}
        <div className="mb-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-emerald-800" />
            <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">
              Activity No. 3: Campus Plastic Footprint Tracker & Action Simulator
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs mb-3">
            <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block text-[10px]">7-Day Group Waste</span>
              <strong className="text-emerald-900 font-mono text-sm">842 g (58 items)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block text-[10px]">Campus Projection (500 Students)</span>
              <strong className="text-amber-800 font-mono text-sm">4,210 kg / year</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block text-[10px]">Identified Student Savings</span>
              <strong className="text-emerald-900 font-mono text-sm">₹2,850 & 6.2 kg / student</strong>
            </div>
          </div>
          <p className="text-xs text-slate-700">
            <strong>Key Outcome:</strong> Replaced high-frequency single-use items (polypropylene chai cups, shampoo sachets, packaged PET water) with ₹0–₹60 durable alternatives (personal steel mugs, shared bulk refill bottles, cotton jholas), eliminating 90%+ of individual plastic footprints.
          </p>
        </div>

        {/* Activity 4 Summary Block */}
        <div className="mb-6 p-4 rounded-xl border border-teal-200 bg-teal-50/30">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-4 h-4 text-teal-800" />
            <h3 className="text-sm font-bold text-teal-950 uppercase tracking-wide">
              Activity No. 4: EcoFlow Nature-Based Wastewater Treatment Simulator
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs mb-3">
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <span className="text-slate-500 block text-[10px]">Design Flow Capacity</span>
              <strong className="text-teal-900 font-mono text-sm">4,500 L/day (100 users)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <span className="text-slate-500 block text-[10px]">BOD Removal Efficiency</span>
              <strong className="text-teal-900 font-mono text-sm">95% (From 160 → 8 mg/L)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <span className="text-slate-500 block text-[10px]">Wetland Footprint (HSSF-CW)</span>
              <strong className="text-teal-900 font-mono text-sm">39.5 m² (10m × 4m)</strong>
            </div>
          </div>
          <p className="text-xs text-slate-700">
            <strong>Key Outcome:</strong> A 4-stage natural DEWATS system (Grit trap → Bio-sand filter → Subsurface gravel wetland planted with *Canna* and *Vetiver* → Solar UV weir) yields 94% clean non-potable water, certified compliant with CPCB standards for campus garden irrigation and dual-toilet flushing.
          </p>
        </div>

        {/* Grading Block */}
        <div className="mt-8 pt-4 border-t-2 border-slate-300 break-inside-avoid">
          <div className="grid grid-cols-2 gap-8 text-xs">
            <div>
              <p className="font-semibold text-slate-800 mb-8">Group Leader Undertaking:</p>
              <div className="border-t border-slate-400 pt-1">
                <span className="font-bold text-slate-900 block">Aarav Sharma (Group Leader)</span>
                <span className="text-slate-500">Roll No: 24ENV014</span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-800 mb-8">Faculty Evaluator Evaluation & Grade:</p>
              <div className="border-t border-slate-400 pt-1 flex justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Course Instructor Signature</span>
                  <span className="text-slate-500">Dept. of Environmental Sciences</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-mono">Score: _____ / 50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
