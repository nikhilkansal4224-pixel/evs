import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import KpiCards from './components/KpiCards';
import AuditLogger from './components/AuditLogger';
import AnalyticsPanel from './components/AnalyticsPanel';
import AlternativesSimulator from './components/AlternativesSimulator';
import PrintReportView from './components/PrintReportView';
import LogItemModal from './components/LogItemModal';
import MemberModal from './components/MemberModal';
import { 
  INITIAL_MEMBERS, 
  INITIAL_AUDIT_LOGS, 
  WEEK2_CHALLENGE_LOGS,
  ITEM_DEFINITIONS, 
  STUDENT_SWAPS,
  PROJECT_METADATA 
} from './data/initialData';

const LOCAL_STORAGE_LOGS_KEY = 'campus_plastic_tracker_logs_v3';
const LOCAL_STORAGE_MEMBERS_KEY = 'campus_plastic_tracker_members_v3';
const LOCAL_STORAGE_SWAPS_KEY = 'campus_plastic_tracker_swaps_v3';
const LOCAL_STORAGE_SEED_KEY = 'campus_plastic_tracker_seed_v3';
const CURRENT_SEED_VERSION = 'real_upes_week1_v3.4';

export default function App() {
  // Navigation tab: 'audit' | 'analytics' | 'simulator' | 'report'
  const [activeTab, setActiveTab] = useState('audit');

  // Active week dataset tracking: 'week1' (46 items) | 'week2' (45 items)
  const [activeWeek, setActiveWeek] = useState('week1');

  // Helper to check if stored data needs to be seeded with real group data
  const isSeedOutdated = () => {
    try {
      const seed = localStorage.getItem(LOCAL_STORAGE_SEED_KEY);
      const savedMembers = localStorage.getItem(LOCAL_STORAGE_MEMBERS_KEY);
      if (seed !== CURRENT_SEED_VERSION) return true;
      if (!savedMembers || !savedMembers.includes('Atul Raushan')) return true;
      return false;
    } catch {
      return true;
    }
  };

  // Members state (seeds Atul, Nikhil, Arnav if outdated or uninitialized)
  const [members, setMembers] = useState(() => {
    try {
      if (isSeedOutdated()) {
        localStorage.setItem(LOCAL_STORAGE_MEMBERS_KEY, JSON.stringify(INITIAL_MEMBERS));
        localStorage.setItem(LOCAL_STORAGE_SEED_KEY, CURRENT_SEED_VERSION);
        return INITIAL_MEMBERS;
      }
      const saved = localStorage.getItem(LOCAL_STORAGE_MEMBERS_KEY);
      return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
    } catch {
      return INITIAL_MEMBERS;
    }
  });

  // Logs state (seeds 46 items Week 1 audit if outdated or uninitialized)
  const [logs, setLogs] = useState(() => {
    try {
      if (isSeedOutdated()) {
        localStorage.setItem(LOCAL_STORAGE_LOGS_KEY, JSON.stringify(INITIAL_AUDIT_LOGS));
        localStorage.setItem(LOCAL_STORAGE_SEED_KEY, CURRENT_SEED_VERSION);
        return INITIAL_AUDIT_LOGS;
      }
      const saved = localStorage.getItem(LOCAL_STORAGE_LOGS_KEY);
      return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
    } catch {
      return INITIAL_AUDIT_LOGS;
    }
  });

  // Active swaps state
  const [activeSwaps, setActiveSwaps] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_SWAPS_KEY);
      if (saved) return JSON.parse(saved);
      const defaults = {};
      STUDENT_SWAPS.forEach((s) => {
        defaults[s.id] = s.defaultActive;
      });
      return defaults;
    } catch {
      const defaults = {};
      STUDENT_SWAPS.forEach((s) => {
        defaults[s.id] = s.defaultActive;
      });
      return defaults;
    }
  });

  // Modals state
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_MEMBERS_KEY, JSON.stringify(members));
    } catch (e) {
      console.error(e);
    }
  }, [members]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_LOGS_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error(e);
    }
  }, [logs]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_SWAPS_KEY, JSON.stringify(activeSwaps));
    } catch (e) {
      console.error(e);
    }
  }, [activeSwaps]);

  // Calculations
  const { totalWeightGrams, totalItems, topCulprit } = useMemo(() => {
    let weight = 0;
    let items = 0;
    const countMap = {};
    const weightMap = {};

    logs.forEach((log) => {
      const def = ITEM_DEFINITIONS[log.itemType];
      const unitGrams = def ? def.weightGrams : 5.0;
      const w = log.quantity * unitGrams;
      
      weight += w;
      items += log.quantity;

      countMap[log.itemType] = (countMap[log.itemType] || 0) + log.quantity;
      weightMap[log.itemType] = (weightMap[log.itemType] || 0) + w;
    });

    let topName = null;
    let maxCount = 0;
    Object.entries(countMap).forEach(([name, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topName = name;
      }
    });

    const topCulpritObj = topName
      ? {
          name: topName,
          count: maxCount,
          totalGrams: Math.round(weightMap[topName] || 0),
          percentage: items > 0 ? Math.round((maxCount / items) * 100) : 0
        }
      : null;

    return {
      totalWeightGrams: Math.round(weight),
      totalItems: items,
      topCulprit: topCulpritObj
    };
  }, [logs]);

  // Savings calculation from active swaps
  const { activeSavingsKg, activeSavingsInr } = useMemo(() => {
    const activeList = STUDENT_SWAPS.filter((s) => activeSwaps[s.id]);
    const kg = activeList.reduce((acc, curr) => acc + curr.weightSavedPerYearKg, 0);
    const inr = activeList.reduce((acc, curr) => acc + curr.moneySavedPerYearInr, 0);
    return {
      activeSavingsKg: kg,
      activeSavingsInr: inr
    };
  }, [activeSwaps]);

  // Handlers
  const handleAddLog = (newLog) => {
    const entry = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ...newLog
    };
    setLogs((prev) => [entry, ...prev]);
  };

  const handleDeleteLog = (logId) => {
    setLogs((prev) => prev.filter((item) => item.id !== logId));
  };

  const handleSaveMembers = (updatedMembers) => {
    setMembers(updatedMembers);
    // Also update memberName in logs for consistency
    setLogs((prevLogs) =>
      prevLogs.map((log) => {
        const matching = updatedMembers.find((m) => m.id === log.memberId);
        return matching ? { ...log, memberName: matching.name } : log;
      })
    );
  };

  // Week Presets
  const handleLoadWeek1 = () => {
    setLogs(INITIAL_AUDIT_LOGS);
    setActiveWeek('week1');
  };

  const handleLoadWeek2 = () => {
    setLogs(WEEK2_CHALLENGE_LOGS);
    setActiveWeek('week2');
  };

  const handleResetData = () => {
    if (window.confirm('Reset all audit logs and member names to Week 1 Baseline Audit (46 items)?')) {
      setMembers(INITIAL_MEMBERS);
      setLogs(INITIAL_AUDIT_LOGS);
      setActiveWeek('week1');
      const defaults = {};
      STUDENT_SWAPS.forEach((s) => {
        defaults[s.id] = s.defaultActive;
      });
      setActiveSwaps(defaults);
      localStorage.setItem(LOCAL_STORAGE_SEED_KEY, CURRENT_SEED_VERSION);
    }
  };

  const handleToggleSwap = (swapId) => {
    setActiveSwaps((prev) => ({
      ...prev,
      [swapId]: !prev[swapId]
    }));
  };

  const handleSelectAllSwaps = () => {
    const allOn = {};
    STUDENT_SWAPS.forEach((s) => {
      allOn[s.id] = true;
    });
    setActiveSwaps(allOn);
  };

  const handleDeselectAllSwaps = () => {
    const allOff = {};
    STUDENT_SWAPS.forEach((s) => {
      allOff[s.id] = false;
    });
    setActiveSwaps(allOff);
  };

  // CSV Export
  const handleExportCsv = () => {
    const headers = [
      'Log ID',
      'Day',
      'Date',
      'Student Name',
      'Category',
      'Plastic Item Type',
      'Quantity',
      'Unit Weight (g)',
      'Total Weight (g)',
      'Resin Code',
      'Location / Note'
    ];

    const rows = logs.map((l) => {
      const def = ITEM_DEFINITIONS[l.itemType];
      const unitW = def ? def.weightGrams : 5.0;
      const totalW = (l.quantity * unitW).toFixed(1);
      const resin = def ? def.resinCode : 'Other';
      return [
        `"${l.id}"`,
        `"${l.day}"`,
        `"${l.date}"`,
        `"${l.memberName}"`,
        `"${l.category}"`,
        `"${l.itemType}"`,
        l.quantity,
        unitW,
        totalW,
        `"${resin}"`,
        `"${(l.location || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `evs_activity3_${activeWeek}_audit_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-slate-800 flex flex-col justify-between">
      
      <div>
        {/* Navigation bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenMembers={() => setIsMemberModalOpen(true)}
          onResetData={handleResetData}
          onExportCsv={handleExportCsv}
          totalItems={totalItems}
          totalWeightGrams={totalWeightGrams}
          activeWeek={activeWeek}
          onLoadWeek1={handleLoadWeek1}
          onLoadWeek2={handleLoadWeek2}
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Always show top KPI Summary cards on Dashboard (Audit, Analytics, Simulator tabs) */}
          {activeTab !== 'report' && (
            <KpiCards
              totalWeightGrams={totalWeightGrams}
              totalItems={totalItems}
              topCulprit={topCulprit}
              groupMemberCount={members.length}
              campusPopulation={PROJECT_METADATA.campusStudentPopulation}
              activeSavingsKg={activeSavingsKg}
              activeSavingsInr={activeSavingsInr}
              activeWeek={activeWeek}
            />
          )}

          {/* Tab 1: Group Plastic Audit Logger */}
          {activeTab === 'audit' && (
            <AuditLogger
              logs={logs}
              members={members}
              onAddLog={handleAddLog}
              onDeleteLog={handleDeleteLog}
              onOpenLogModal={() => setIsLogModalOpen(true)}
              totalWeightGrams={totalWeightGrams}
              totalItems={totalItems}
              activeWeek={activeWeek}
              onLoadWeek1={handleLoadWeek1}
              onLoadWeek2={handleLoadWeek2}
            />
          )}

          {/* Tab 2: Visual Analytics Panel */}
          {activeTab === 'analytics' && (
            <AnalyticsPanel
              logs={logs}
              members={members}
              totalWeightGrams={totalWeightGrams}
              totalItems={totalItems}
              activeWeek={activeWeek}
            />
          )}

          {/* Tab 3: Zero-Budget Student Alternatives & Action Simulator */}
          {activeTab === 'simulator' && (
            <AlternativesSimulator
              activeSwaps={activeSwaps}
              onToggleSwap={handleToggleSwap}
              onSelectAllSwaps={handleSelectAllSwaps}
              onDeselectAllSwaps={handleDeselectAllSwaps}
            />
          )}

          {/* Tab 4: Print-Ready Report View */}
          {activeTab === 'report' && (
            <PrintReportView
              logs={logs}
              members={members}
              activeSwaps={activeSwaps}
              totalWeightGrams={totalWeightGrams}
              totalItems={totalItems}
              topCulprit={topCulprit}
              onBack={() => setActiveTab('audit')}
              onExportCsv={handleExportCsv}
              activeWeek={activeWeek}
            />
          )}

        </main>
      </div>

      {/* Modals */}
      <LogItemModal
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
        onSave={handleAddLog}
        members={members}
      />

      <MemberModal
        isOpen={isMemberModalOpen}
        onClose={() => setIsMemberModalOpen(false)}
        members={members}
        onSaveMembers={handleSaveMembers}
      />

      {/* Footer */}
      <footer className="no-print mt-12 border-t border-slate-200/80 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            <span className="font-semibold text-slate-800">
              Campus Plastic Footprint Tracker & Action Simulator
            </span>{' '}
            • {PROJECT_METADATA.course} ({PROJECT_METADATA.activityNo}) • {PROJECT_METADATA.institution}
          </div>
          <div className="flex items-center gap-4">
            <span>UPES Dehradun Case Study</span>
            <span className="font-mono text-emerald-800 font-bold">100% Client-Side • LocalStorage Active</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
