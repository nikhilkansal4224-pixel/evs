import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Trash2, 
  Coffee, 
  Sparkles, 
  Cookie, 
  PenTool, 
  Package, 
  ShoppingBag, 
  Box, 
  Smile, 
  Droplet,
  Layers,
  ArrowUpDown,
  Building,
  CheckCircle2
} from 'lucide-react';
import { ITEM_DEFINITIONS, CATEGORIES, PROJECT_METADATA } from '../data/initialData';

export default function AuditLogger({ 
  logs, 
  members, 
  onAddLog, 
  onDeleteLog, 
  onOpenLogModal,
  totalWeightGrams,
  totalItems
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedDay, setSelectedDay] = useState('ALL');
  const [sortField, setSortField] = useState('day');
  const [sortDirection, setSortDirection] = useState('asc');

  // Quick log handler for convenient demonstration
  const handleQuickLog = (itemName, category) => {
    const defaultMember = members[0];
    onAddLog({
      memberId: defaultMember.id,
      memberName: defaultMember.name,
      itemType: itemName,
      category: category,
      quantity: 1,
      day: 'Day 7',
      date: new Date().toISOString().split('T')[0],
      location: 'Canteen / Campus quick entry'
    });
  };

  // Filtered and sorted logs
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchSearch = 
        log.itemType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.location && log.location.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchMember = selectedMember === 'ALL' || log.memberId === selectedMember;
      const matchCategory = selectedCategory === 'ALL' || log.category === selectedCategory;
      const matchDay = selectedDay === 'ALL' || log.day === selectedDay;

      return matchSearch && matchMember && matchCategory && matchDay;
    });
  }, [logs, searchTerm, selectedMember, selectedCategory, selectedDay]);

  const filteredWeight = useMemo(() => {
    return filteredLogs.reduce((acc, curr) => {
      const def = ITEM_DEFINITIONS[curr.itemType];
      const unitGrams = def ? def.weightGrams : 5;
      return acc + (curr.quantity * unitGrams);
    }, 0);
  }, [filteredLogs]);

  const getItemIcon = (name) => {
    switch (name) {
      case 'Disposable tea cups': return <Coffee className="w-4 h-4 text-amber-700" />;
      case 'PET water bottles': return <Droplet className="w-4 h-4 text-blue-600" />;
      case 'Snack wrappers': return <Cookie className="w-4 h-4 text-orange-600" />;
      case 'Food delivery containers': return <Box className="w-4 h-4 text-red-600" />;
      case 'Polythene bags': return <ShoppingBag className="w-4 h-4 text-yellow-700" />;
      case 'Shampoo/detergent sachets': return <Sparkles className="w-4 h-4 text-purple-600" />;
      case 'Ballpoint pens': return <PenTool className="w-4 h-4 text-indigo-600" />;
      case 'Toothbrush/toothpaste tubes': return <Smile className="w-4 h-4 text-teal-600" />;
      default: return <Package className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Module Banner with Extrapolation Summary */}
      <div className="bg-[#1E3A2F] text-white rounded-2xl p-5 shadow-sm border border-emerald-900/40">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-800/80 text-emerald-200 border border-emerald-700">
              <Layers className="w-3.5 h-3.5" />
              <span>Module 1 • Pre-loaded 7-Day Field Audit Data</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Group Plastic Audit Logger
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl">
              Tracks actual daily consumption for a 3-member college cohort across 7 days.
              Extrapolated systematically across {PROJECT_METADATA.campusStudentPopulation} students over an academic year.
            </p>
          </div>

          {/* Quick Extrapolation Badges */}
          <div className="flex flex-wrap items-center gap-2 bg-[#142720]/80 p-3 rounded-xl border border-emerald-800/50">
            <div className="text-right px-2">
              <span className="block text-[11px] text-emerald-300 font-medium">Group 7-Day Total</span>
              <span className="text-base sm:text-lg font-extrabold text-white">
                {totalWeightGrams.toLocaleString()} g ({(totalWeightGrams/1000).toFixed(2)} kg)
              </span>
            </div>
            <div className="h-8 w-px bg-emerald-700/60" />
            <div className="text-right px-2">
              <span className="block text-[11px] text-emerald-300 font-medium">500-Student Campus Extrap.</span>
              <span className="text-base sm:text-lg font-extrabold text-amber-300">
                {Math.round((totalWeightGrams / 4000) * 500 * PROJECT_METADATA.weeksPerAcademicYear).toLocaleString()} kg/yr
              </span>
            </div>
            <button
              onClick={onOpenLogModal}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-[#142720] text-xs font-bold rounded-lg shadow-sm transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>+ Log Item</span>
            </button>
          </div>
        </div>

        {/* Quick-Add 1-Click Bar */}
        <div className="mt-4 pt-3 border-t border-emerald-800/60 flex flex-wrap items-center gap-2">
          <span className="text-xs text-emerald-200 font-medium flex items-center gap-1">
            ⚡ Quick-Add Common Item:
          </span>
          <button
            onClick={() => handleQuickLog('Disposable tea cups', 'Food & Canteen')}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 text-emerald-100 transition-colors flex items-center gap-1"
          >
            + 1 Chai Cup (4.5g)
          </button>
          <button
            onClick={() => handleQuickLog('Snack wrappers', 'Food & Canteen')}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 text-emerald-100 transition-colors flex items-center gap-1"
          >
            + 1 Snack Wrapper (4g)
          </button>
          <button
            onClick={() => handleQuickLog('PET water bottles', 'Food & Canteen')}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 text-emerald-100 transition-colors flex items-center gap-1"
          >
            + 1 PET Bottle (18g)
          </button>
          <button
            onClick={() => handleQuickLog('Shampoo/detergent sachets', 'Hostel & Stationery')}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 text-emerald-100 transition-colors flex items-center gap-1"
          >
            + 1 Sachet (2.5g)
          </button>
          <button
            onClick={() => handleQuickLog('Ballpoint pens', 'Hostel & Stationery')}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 text-emerald-100 transition-colors flex items-center gap-1"
          >
            + 1 Ballpoint Pen (6g)
          </button>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by student, item type, or campus location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs sm:text-sm pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-slate-800"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Member filter */}
            <select
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="ALL">All Students ({members.length})</option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>

            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="ALL">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Day filter */}
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="ALL">All 7 Days</option>
              {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {(searchTerm || selectedMember !== 'ALL' || selectedCategory !== 'ALL' || selectedDay !== 'ALL') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedMember('ALL');
                  setSelectedCategory('ALL');
                  setSelectedDay('ALL');
                }}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 py-1"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Active filter count status */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>
            Showing <strong className="text-slate-800">{filteredLogs.length}</strong> of {logs.length} logged events
          </span>
          <span>
            Filtered Weight: <strong className="text-[#1E3A2F] font-bold">{filteredWeight.toFixed(1)} g</strong> ({((filteredWeight / totalWeightGrams) * 100 || 0).toFixed(0)}% of total)
          </span>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                <th className="py-3 px-3 sm:px-4">Audit Day</th>
                <th className="py-3 px-3 sm:px-4">Student Member</th>
                <th className="py-3 px-3 sm:px-4">Category</th>
                <th className="py-3 px-3 sm:px-4">Plastic Item</th>
                <th className="py-3 px-3 sm:px-4 text-center">Qty</th>
                <th className="py-3 px-3 sm:px-4 text-right">Unit Wt.</th>
                <th className="py-3 px-3 sm:px-4 text-right">Total Wt.</th>
                <th className="py-3 px-3 sm:px-4">Campus Location / Note</th>
                <th className="py-3 px-3 sm:px-4 text-center no-print">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-10 text-slate-400 text-sm">
                    No plastic log entries match your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => {
                  const def = ITEM_DEFINITIONS[log.itemType];
                  const unitWeight = def ? def.weightGrams : 5.0;
                  const itemTotalWeight = log.quantity * unitWeight;
                  const isFood = log.category === 'Food & Canteen';

                  return (
                    <tr 
                      key={log.id} 
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      {/* Day & Date */}
                      <td className="py-2.5 px-3 sm:px-4 whitespace-nowrap">
                        <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-xs">
                          {log.day}
                        </span>
                        <span className="block text-[11px] text-slate-400 mt-0.5">
                          {log.date}
                        </span>
                      </td>

                      {/* Member */}
                      <td className="py-2.5 px-3 sm:px-4 whitespace-nowrap">
                        <span className="font-medium text-slate-900 block">
                          {log.memberName}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {members.find(m => m.id === log.memberId)?.role || 'Student'}
                        </span>
                      </td>

                      {/* Category */}
                      <td className="py-2.5 px-3 sm:px-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          isFood 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                            : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                        }`}>
                          {log.category}
                        </span>
                      </td>

                      {/* Item Type */}
                      <td className="py-2.5 px-3 sm:px-4">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-slate-100 flex-shrink-0">
                            {getItemIcon(log.itemType)}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-800 block">
                              {log.itemType}
                            </span>
                            <span className="text-[11px] text-slate-400 hidden sm:block truncate max-w-[200px]" title={def?.desc}>
                              {def?.desc}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="py-2.5 px-3 sm:px-4 text-center whitespace-nowrap font-bold text-slate-800">
                        {log.quantity}
                      </td>

                      {/* Unit Weight */}
                      <td className="py-2.5 px-3 sm:px-4 text-right whitespace-nowrap text-slate-500 font-mono text-xs">
                        {unitWeight.toFixed(1)} g
                      </td>

                      {/* Total Weight */}
                      <td className="py-2.5 px-3 sm:px-4 text-right whitespace-nowrap font-mono font-bold text-emerald-800 text-xs">
                        {itemTotalWeight.toFixed(1)} g
                      </td>

                      {/* Location / Note */}
                      <td className="py-2.5 px-3 sm:px-4 text-slate-600 max-w-[220px] truncate" title={log.location}>
                        {log.location || '—'}
                      </td>

                      {/* Action */}
                      <td className="py-2.5 px-3 sm:px-4 text-center whitespace-nowrap no-print">
                        <button
                          onClick={() => onDeleteLog(log.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete this entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            
            {/* Table Footer Totals */}
            <tfoot>
              <tr className="bg-slate-100/90 border-t-2 border-slate-300 font-bold text-slate-900 text-xs sm:text-sm">
                <td colSpan="4" className="py-3 px-3 sm:px-4 text-slate-700">
                  Total Active Selection ({filteredLogs.length} items logged)
                </td>
                <td className="py-3 px-3 sm:px-4 text-center font-extrabold text-slate-900">
                  {filteredLogs.reduce((acc, curr) => acc + curr.quantity, 0)}
                </td>
                <td className="py-3 px-3 sm:px-4 text-right text-slate-500 text-xs">
                  —
                </td>
                <td className="py-3 px-3 sm:px-4 text-right font-mono font-extrabold text-[#1E3A2F] text-sm">
                  {filteredWeight.toFixed(1)} g
                </td>
                <td colSpan="2" className="py-3 px-3 sm:px-4 text-slate-500 text-xs">
                  ≈ {(filteredWeight / 1000).toFixed(3)} kg total
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
  );
}
