import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line 
} from 'recharts';
import { BarChart3, PieChart as PieIcon, TrendingUp, Users, Scale, Info } from 'lucide-react';
import { ITEM_DEFINITIONS, PROJECT_METADATA } from '../data/initialData';

export default function AnalyticsPanel({ logs, members, totalWeightGrams, totalItems }) {
  const [metricMode, setMetricMode] = useState('weight'); // 'weight' or 'count'

  // 1. Data per group member
  const memberData = members.map((member) => {
    const memberLogs = logs.filter((l) => l.memberId === member.id);
    const count = memberLogs.reduce((acc, curr) => acc + curr.quantity, 0);
    const weight = memberLogs.reduce((acc, curr) => {
      const def = ITEM_DEFINITIONS[curr.itemType];
      return acc + (curr.quantity * (def ? def.weightGrams : 5));
    }, 0);
    
    // Split by Food vs Hostel
    const foodWeight = memberLogs
      .filter(l => l.category === 'Food & Canteen')
      .reduce((acc, curr) => acc + (curr.quantity * (ITEM_DEFINITIONS[curr.itemType]?.weightGrams || 5)), 0);
    
    const hostelWeight = memberLogs
      .filter(l => l.category === 'Hostel & Stationery')
      .reduce((acc, curr) => acc + (curr.quantity * (ITEM_DEFINITIONS[curr.itemType]?.weightGrams || 5)), 0);

    return {
      name: member.name.split(' ')[0], // First name for clean X-axis
      fullName: member.name,
      roll: member.roll,
      count: count,
      weightGrams: Math.round(weight),
      foodWeight: Math.round(foodWeight),
      hostelWeight: Math.round(hostelWeight),
      dailyAvgGrams: (weight / 7).toFixed(1)
    };
  });

  // 2. Category Breakdown (Donut Chart)
  const categoryTotals = logs.reduce(
    (acc, curr) => {
      const def = ITEM_DEFINITIONS[curr.itemType];
      const w = curr.quantity * (def ? def.weightGrams : 5);
      if (curr.category === 'Food & Canteen') {
        acc.foodCount += curr.quantity;
        acc.foodWeight += w;
      } else {
        acc.hostelCount += curr.quantity;
        acc.hostelWeight += w;
      }
      return acc;
    },
    { foodCount: 0, foodWeight: 0, hostelCount: 0, hostelWeight: 0 }
  );

  const categoryPieData = [
    {
      name: 'Food & Canteen',
      weightGrams: Math.round(categoryTotals.foodWeight),
      itemCount: categoryTotals.foodCount,
      percentage: totalWeightGrams > 0 ? Math.round((categoryTotals.foodWeight / totalWeightGrams) * 100) : 0,
      color: '#1E3A2F'
    },
    {
      name: 'Hostel & Stationery',
      weightGrams: Math.round(categoryTotals.hostelWeight),
      itemCount: categoryTotals.hostelCount,
      percentage: totalWeightGrams > 0 ? Math.round((categoryTotals.hostelWeight / totalWeightGrams) * 100) : 0,
      color: '#4F46E5'
    }
  ];

  // 3. Top Culprit Items ranking
  const itemTypeMap = {};
  logs.forEach((log) => {
    const def = ITEM_DEFINITIONS[log.itemType];
    const w = log.quantity * (def ? def.weightGrams : 5);
    if (!itemTypeMap[log.itemType]) {
      itemTypeMap[log.itemType] = {
        name: log.itemType,
        count: 0,
        weightGrams: 0,
        category: log.category
      };
    }
    itemTypeMap[log.itemType].count += log.quantity;
    itemTypeMap[log.itemType].weightGrams += w;
  });

  const sortedItems = Object.values(itemTypeMap)
    .sort((a, b) => b.weightGrams - a.weightGrams)
    .map((item) => ({
      ...item,
      weightGrams: Math.round(item.weightGrams)
    }));

  // 4. Daily Generation Trend (Day 1 through Day 7)
  const daysList = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  const dailyData = daysList.map((d) => {
    const dayLogs = logs.filter((l) => l.day === d);
    const weight = dayLogs.reduce((acc, curr) => {
      const def = ITEM_DEFINITIONS[curr.itemType];
      return acc + (curr.quantity * (def ? def.weightGrams : 5));
    }, 0);
    const count = dayLogs.reduce((acc, curr) => acc + curr.quantity, 0);
    return {
      day: d,
      weightGrams: Math.round(weight),
      items: count
    };
  });

  const CATEGORY_COLORS = ['#1E3A2F', '#4F46E5', '#D97706', '#E11D48'];

  return (
    <div className="space-y-6">
      
      {/* Visual Analytics Header & Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#1E3A2F]" />
            <span>Visual Analytics & Waste Partitioning</span>
          </h2>
          <p className="text-xs text-slate-500">
            Comparative group metrics and item-level plastic weight decomposition
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setMetricMode('weight')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              metricMode === 'weight'
                ? 'bg-white text-[#1E3A2F] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            By Weight (Grams)
          </button>
          <button
            onClick={() => setMetricMode('count')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              metricMode === 'count'
                ? 'bg-white text-[#1E3A2F] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            By Item Count (Units)
          </button>
        </div>
      </div>

      {/* Main Two Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Bar Chart per Member (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#1E3A2F]" />
                <span>Plastic Generated per Group Member</span>
              </h3>
              <p className="text-xs text-slate-500">
                {metricMode === 'weight' 
                  ? 'Total grams produced during 7-day monitoring (split by category)' 
                  : 'Total units of single-use plastic logged per student'}
              </p>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
              {members.length} Members
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {metricMode === 'weight' ? (
                <BarChart data={memberData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#475569' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748B' }} unit="g" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val, name) => [`${val} g`, name === 'foodWeight' ? 'Food & Canteen' : 'Hostel & Stationery']}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} 
                    formatter={(value) => value === 'foodWeight' ? 'Food & Canteen' : 'Hostel & Stationery'}
                  />
                  <Bar dataKey="foodWeight" name="foodWeight" stackId="a" fill="#1E3A2F" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="hostelWeight" name="hostelWeight" stackId="a" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              ) : (
                <BarChart data={memberData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#475569' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val) => [`${val} items`, 'Total Items Logged']}
                  />
                  <Bar dataKey="count" fill="#1E3A2F" radius={[6, 6, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Member stats pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100">
            {memberData.map((m) => (
              <div key={m.fullName} className="bg-slate-50 p-2 rounded-lg text-center">
                <span className="block text-xs font-semibold text-slate-800 truncate" title={m.fullName}>
                  {m.name}
                </span>
                <span className="text-xs font-bold text-[#1E3A2F]">
                  {m.weightGrams}g ({m.count} items)
                </span>
                <span className="block text-[10px] text-slate-500">
                  ~{m.dailyAvgGrams}g/day
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: Category Donut / Pie Chart (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <PieIcon className="w-4 h-4 text-indigo-600" />
                  <span>Waste Breakdown by Category</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Food & Canteen vs Hostel & Stationery
                </p>
              </div>
            </div>

            <div className="h-56 w-full flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey={metricMode === 'weight' ? 'weightGrams' : 'itemCount'}
                  >
                    {categoryPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1E293B', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val, name, entry) => [
                      `${val} ${metricMode === 'weight' ? 'g' : 'units'} (${entry.payload.percentage}%)`,
                      entry.payload.name
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Inner Donut Summary Label */}
              <div className="absolute text-center pointer-events-none">
                <span className="text-xs font-bold text-slate-400 block uppercase">Dominant</span>
                <span className="text-base font-extrabold text-[#1E3A2F]">
                  {categoryPieData[0]?.percentage}% Food
                </span>
              </div>
            </div>
          </div>

          {/* Category detail cards */}
          <div className="space-y-2 mt-2">
            {categoryPieData.map((cat) => (
              <div 
                key={cat.name} 
                className="p-2.5 rounded-xl border border-slate-100 flex items-center justify-between"
                style={{ backgroundColor: `${cat.color}08` }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      {cat.name}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {cat.itemCount} items logged
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-900 block font-mono">
                    {cat.weightGrams} g
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {cat.percentage}% share
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Secondary Row: Top Culprit Items & Daily Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Items Table / Visual Ranking (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-800">
                Top Plastic Culprits Ranked by Weight
              </h3>
              <p className="text-xs text-slate-500">
                Identify key intervention targets for campus reduction
              </p>
            </div>
            <span className="text-xs text-slate-500">
              {sortedItems.length} types logged
            </span>
          </div>

          <div className="space-y-2.5 mt-3">
            {sortedItems.slice(0, 5).map((item, idx) => {
              const pct = totalWeightGrams > 0 ? (item.weightGrams / totalWeightGrams) * 100 : 0;
              return (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 text-[10px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      {item.name}
                      <span className="text-[10px] text-slate-400 font-normal">
                        ({item.count} units)
                      </span>
                    </span>
                    <span className="font-mono font-bold text-slate-700">
                      {item.weightGrams} g ({pct.toFixed(0)}%)
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        idx === 0 ? 'bg-rose-500' : idx === 1 ? 'bg-amber-500' : 'bg-[#1E3A2F]'
                      }`}
                      style={{ width: `${Math.max(5, pct)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Accumulation Trend (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>Daily Generation Pattern (7-Day Audit)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Day 1 through Day 7 plastic generation rate
              </p>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748B' }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748B' }} unit="g" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E293B', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val) => [`${val} g`, 'Plastic Logged']}
                />
                <Line 
                  type="monotone" 
                  dataKey="weightGrams" 
                  stroke="#1E3A2F" 
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#2D5A46' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>
              <strong>Key Finding:</strong> Plastic generation peaks on busy campus weekdays (Days 1 & 6 with 13 items each), dominated by PET water bottles (18.0g each, constituting 79.2% of total plastic mass), while dropping significantly on Day 7.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
