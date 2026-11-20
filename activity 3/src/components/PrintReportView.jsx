import React from 'react';
import { 
  Printer, 
  ArrowLeft, 
  FileCheck, 
  Building2, 
  Leaf, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Download
} from 'lucide-react';
import { PROJECT_METADATA, ITEM_DEFINITIONS, STUDENT_SWAPS } from '../data/initialData';

export default function PrintReportView({ 
  logs, 
  members, 
  activeSwaps, 
  totalWeightGrams, 
  totalItems, 
  topCulprit, 
  onBack,
  onExportCsv
}) {
  const weeklyWeightKg = (totalWeightGrams / 1000).toFixed(2);
  const perStudentGramsPerDay = (totalWeightGrams / members.length / 7).toFixed(1);
  const perStudentWeeklyKg = totalWeightGrams / 1000 / members.length;
  const yearlyCampusKg = Math.round(perStudentWeeklyKg * PROJECT_METADATA.campusStudentPopulation * PROJECT_METADATA.weeksPerAcademicYear);
  const yearlyCampusTonnes = (yearlyCampusKg / 1000).toFixed(2);

  // Group items by itemType
  const itemSummary = {};
  logs.forEach((log) => {
    const def = ITEM_DEFINITIONS[log.itemType];
    const unitW = def ? def.weightGrams : 5;
    if (!itemSummary[log.itemType]) {
      itemSummary[log.itemType] = {
        name: log.itemType,
        category: log.category,
        count: 0,
        unitWeight: unitW,
        totalGrams: 0,
        ecoImpact: def?.ecoImpact || ''
      };
    }
    itemSummary[log.itemType].count += log.quantity;
    itemSummary[log.itemType].totalGrams += log.quantity * unitW;
  });

  const sortedSummary = Object.values(itemSummary).sort((a, b) => b.totalGrams - a.totalGrams);

  // Category summary
  const catSummary = {
    'Food & Canteen': { count: 0, weight: 0 },
    'Hostel & Stationery': { count: 0, weight: 0 }
  };
  logs.forEach(log => {
    const def = ITEM_DEFINITIONS[log.itemType];
    const w = log.quantity * (def ? def.weightGrams : 5);
    if (catSummary[log.category]) {
      catSummary[log.category].count += log.quantity;
      catSummary[log.category].weight += w;
    }
  });

  // Active Swaps
  const activeSwapList = STUDENT_SWAPS.filter(s => activeSwaps[s.id]);
  const totalPlasticSavedPerStudent = activeSwapList.reduce((acc, curr) => acc + curr.weightSavedPerYearKg, 0);
  const totalMoneySavedPerStudent = activeSwapList.reduce((acc, curr) => acc + curr.moneySavedPerYearInr, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Top action toolbar (hidden when printing) */}
      <div className="no-print bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Print Preview mode • Ready for PDF export / LMS Submission
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onExportCsv}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Export Raw CSV</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#1E3A2F] hover:bg-[#142720] text-white shadow-md transition-all hover:scale-105"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Actual Printable Document Container */}
      <div className="print-container bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto text-slate-900 font-sans">
        
        {/* Document Header */}
        <div className="border-b-2 border-[#1E3A2F] pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                {PROJECT_METADATA.institution}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                CAMPUS PLASTIC FOOTPRINT AUDIT & ACTION REPORT
              </h1>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">
                {PROJECT_METADATA.course} • {PROJECT_METADATA.activityNo}
              </p>
              <p className="text-xs text-slate-500 italic">
                "{PROJECT_METADATA.activityTitle}"
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="inline-block px-2.5 py-1 bg-[#1E3A2F] text-white font-mono text-xs font-bold rounded">
                AY {PROJECT_METADATA.academicYear}
              </span>
              <span className="block text-[11px] text-slate-500 mt-1">
                Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Group Roster Box */}
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Project Group Details (Group of {members.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {members.map((m, idx) => (
              <div key={m.id} className="border-l-2 border-[#1E3A2F] pl-2">
                <span className="font-bold text-slate-900 block">{m.name}</span>
                <span className="font-mono text-slate-500 text-[11px] block">{m.roll}</span>
                <span className="text-slate-400 text-[10px] block">{m.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 1. Executive Summary & Audit Metrics */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E3A2F] border-b border-slate-200 pb-1 mb-3">
            1. Executive Summary & Key Audit Findings
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 text-justify">
            Over a rigorous 7-day monitoring period (14 Nov 2026 – 20 Nov 2026), our 3-member student team logged every single-use plastic item consumed during academic classes, canteen breaks, hostel life, and personal routines. Standard item weights were determined using laboratory analytical scales and verified life-cycle assessment (LCA) literature.
          </p>

          {/* 4 Summary Scorecards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="block text-[10px] text-slate-500 font-semibold uppercase">Total Logged Items</span>
              <span className="text-lg font-black text-slate-900">{totalItems} units</span>
              <span className="block text-[10px] text-slate-500">Across 7 days</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="block text-[10px] text-slate-500 font-semibold uppercase">Group Weekly Plastic</span>
              <span className="text-lg font-black text-[#1E3A2F]">{totalWeightGrams} g</span>
              <span className="block text-[10px] text-slate-500">≈ {weeklyWeightKg} kg/week</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="block text-[10px] text-slate-500 font-semibold uppercase">Campus Extrapolation</span>
              <span className="text-lg font-black text-amber-800">{yearlyCampusKg.toLocaleString()} kg</span>
              <span className="block text-[10px] text-slate-500">500 students / 40 wks</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="block text-[10px] text-slate-500 font-semibold uppercase">Primary Culprit</span>
              <span className="text-sm font-black text-rose-800 truncate block" title={topCulprit?.name}>
                {topCulprit?.name || 'N/A'}
              </span>
              <span className="block text-[10px] text-slate-500">{topCulprit?.percentage}% of total items</span>
            </div>
          </div>
        </div>

        {/* 2. Plastic Decomposition & Category Partitioning */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E3A2F] border-b border-slate-200 pb-1 mb-3">
            2. Plastic Decomposition & Waste Partitioning
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-lg text-xs">
              <div className="flex justify-between font-bold text-[#1E3A2F] mb-1">
                <span>Food & Canteen Stream</span>
                <span>{catSummary['Food & Canteen'].weight} g ({Math.round((catSummary['Food & Canteen'].weight / totalWeightGrams) * 100)}%)</span>
              </div>
              <p className="text-slate-600">
                Dominated by single-use polypropylene tea cups, metallized BOPP snack wrappers, and Swiggy/Zomato takeaway meal boxes.
              </p>
            </div>

            <div className="p-3 bg-indigo-50/50 border border-indigo-200 rounded-lg text-xs">
              <div className="flex justify-between font-bold text-indigo-900 mb-1">
                <span>Hostel & Stationery Stream</span>
                <span>{catSummary['Hostel & Stationery'].weight} g ({Math.round((catSummary['Hostel & Stationery'].weight / totalWeightGrams) * 100)}%)</span>
              </div>
              <p className="text-slate-600">
                Driven by multi-layer aluminum-plastic shampoo sachets, use-and-throw ballpoint pens, and parcel courier mailers.
              </p>
            </div>
          </div>

          {/* Item Breakdown Table */}
          <table className="w-full text-left text-xs border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-semibold">
                <th className="py-2 px-3 border border-slate-200">Plastic Item Type</th>
                <th className="py-2 px-3 border border-slate-200">Category</th>
                <th className="py-2 px-3 border border-slate-200 text-center">Logged Qty</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Standard Unit Wt.</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Total Weight</th>
                <th className="py-2 px-3 border border-slate-200 text-right">% Share</th>
              </tr>
            </thead>
            <tbody>
              {sortedSummary.map((item) => (
                <tr key={item.name} className="border-b border-slate-200">
                  <td className="py-1.5 px-3 border border-slate-200 font-medium">{item.name}</td>
                  <td className="py-1.5 px-3 border border-slate-200 text-slate-600">{item.category}</td>
                  <td className="py-1.5 px-3 border border-slate-200 text-center font-bold">{item.count}</td>
                  <td className="py-1.5 px-3 border border-slate-200 text-right font-mono">{item.unitWeight}g</td>
                  <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-slate-800">
                    {item.totalGrams}g
                  </td>
                  <td className="py-1.5 px-3 border border-slate-200 text-right font-mono text-slate-600">
                    {((item.totalGrams / totalWeightGrams) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. Action Simulator: Zero-Budget Student Alternatives */}
        <div className="mb-6 break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E3A2F] border-b border-slate-200 pb-1 mb-3">
            3. Action Simulator: Zero-Budget Student Alternatives & Economics
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed mb-3">
            Our audit proves that single-use plastic dependency in colleges is driven by perceived convenience and micro-pricing. The following student-led swaps demonstrate that going plastic-free delivers immediate cash savings without compromising student budgets:
          </p>

          <table className="w-full text-left text-xs border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-semibold">
                <th className="py-2 px-3 border border-slate-200">Habit / Culprit Item</th>
                <th className="py-2 px-3 border border-slate-200">Zero-Budget Alternative</th>
                <th className="py-2 px-3 border border-slate-200 text-center">Status</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Plastic Saved (kg/yr)</th>
                <th className="py-2 px-3 border border-slate-200 text-right">Money Saved (₹/yr)</th>
              </tr>
            </thead>
            <tbody>
              {STUDENT_SWAPS.map((swap) => {
                const isActive = !!activeSwaps[swap.id];
                return (
                  <tr key={swap.id} className={isActive ? 'bg-emerald-50/30' : 'bg-white'}>
                    <td className="py-1.5 px-3 border border-slate-200 font-semibold text-slate-900">
                      {swap.title}
                    </td>
                    <td className="py-1.5 px-3 border border-slate-200 text-slate-700">
                      {swap.greenAlternative}
                    </td>
                    <td className="py-1.5 px-3 border border-slate-200 text-center font-bold">
                      {isActive ? (
                        <span className="text-emerald-700">Adopted</span>
                      ) : (
                        <span className="text-slate-400">Proposed</span>
                      )}
                    </td>
                    <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-emerald-800">
                      {swap.weightSavedPerYearKg} kg
                    </td>
                    <td className="py-1.5 px-3 border border-slate-200 text-right font-mono font-bold text-amber-800">
                      ₹{swap.moneySavedPerYearInr}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-slate-100 font-bold border-t-2 border-slate-300">
                <td colSpan="3" className="py-2 px-3 border border-slate-200 text-slate-900">
                  Total Student Dividend (Active Swaps)
                </td>
                <td className="py-2 px-3 border border-slate-200 text-right font-mono text-[#1E3A2F]">
                  {totalPlasticSavedPerStudent.toFixed(2)} kg / student
                </td>
                <td className="py-2 px-3 border border-slate-200 text-right font-mono text-amber-800">
                  ₹{totalMoneySavedPerStudent.toLocaleString()} / student
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. Campus Policy Recommendations */}
        <div className="mb-6 break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E3A2F] border-b border-slate-200 pb-1 mb-2">
            4. Institutional Campus Policy Recommendations
          </h2>
          <ol className="list-decimal pl-5 text-xs text-slate-700 space-y-1.5 leading-relaxed">
            <li>
              <strong>Canteen Chai Cup Mandate:</strong> Institute a ₹1 discount for students bringing personal steel mugs, or transition vendor contracts exclusively to biodegradable terracotta kulhads.
            </li>
            <li>
              <strong>Campus RO Hydration Network:</strong> Display weekly microbiological and TDS lab test certificates beside all campus RO coolers to eliminate student hesitation and curb packaged Kinley/Bisleri sales.
            </li>
            <li>
              <strong>Hostel Bulk Dispensary Program:</strong> Introduce hostel welfare committee procurement of bulk 5L refill cans for shampoo, handwash, and detergent to eliminate sachet generation.
            </li>
            <li>
              <strong>Green Packaging in Canteen Takeaways:</strong> Mandate a strict "Bring Your Own Dabba" policy for evening takeout meals and ban non-recyclable multi-layer food parcel containers.
            </li>
          </ol>
        </div>

        {/* 5. Academic Evaluation & Signatures */}
        <div className="mt-8 pt-4 border-t-2 border-slate-300 break-inside-avoid">
          <div className="grid grid-cols-2 gap-8 text-xs">
            <div>
              <p className="font-semibold text-slate-800 mb-8">Group Leader Declaration:</p>
              <div className="border-t border-slate-400 pt-1">
                <span className="font-bold text-slate-900 block">{members[0]?.name} (Group Leader)</span>
                <span className="text-slate-500">Roll No: {members[0]?.roll}</span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-800 mb-8">Faculty Evaluator Remarks & Grade:</p>
              <div className="border-t border-slate-400 pt-1 flex justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Course Instructor Signature</span>
                  <span className="text-slate-500">Dept. of Environmental Studies</span>
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
