import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SourceInputPanel from './components/SourceInputPanel';
import TreatmentFlowDiagram from './components/TreatmentFlowDiagram';
import StageDetailInspector from './components/StageDetailInspector';
import WaterAnalyticsPanel from './components/WaterAnalyticsPanel';
import CampusReuseBlueprint from './components/CampusReuseBlueprint';
import EngineeringReportModal from './components/EngineeringReportModal';
import { 
  SOURCE_PRESETS, 
  TREATMENT_STAGES, 
  PHYTOREMEDIATION_PLANTS, 
  PROJECT_METADATA_ACT4 
} from './data/treatmentData';

export default function App() {
  // Input parameters state
  const [selectedSourceId, setSelectedSourceId] = useState('hostel');
  const [studentCount, setStudentCount] = useState(100);
  const [litresPerPerson, setLitresPerPerson] = useState(45);

  // Inspector & Plant state
  const [selectedStageId, setSelectedStageId] = useState('stage-3');
  const [selectedPlantId, setSelectedPlantId] = useState('polyculture');

  // Report modal state
  const [isReportOpen, setIsReportOpen] = useState(false);

  // Active source preset
  const currentSource = SOURCE_PRESETS[selectedSourceId] || SOURCE_PRESETS.hostel;

  // Handle source preset change
  const handleSelectSource = (sourceId) => {
    setSelectedSourceId(sourceId);
    const preset = SOURCE_PRESETS[sourceId];
    if (preset) {
      setLitresPerPerson(preset.defaultLitresPerPerson);
    }
  };

  // Reset defaults
  const handleResetDefaults = () => {
    setSelectedSourceId('hostel');
    setStudentCount(100);
    setLitresPerPerson(45);
    setSelectedStageId('stage-3');
    setSelectedPlantId('polyculture');
  };

  // Calculations
  const dailyVolumeLitres = useMemo(() => {
    return studentCount * litresPerPerson;
  }, [studentCount, litresPerPerson]);

  const monthlyVolumeKl = useMemo(() => {
    return +( (dailyVolumeLitres * 30) / 1000 ).toFixed(1);
  }, [dailyVolumeLitres]);

  const baselinePollutants = currentSource.baseline;

  // Efficiency
  const currentPlant = PHYTOREMEDIATION_PLANTS[selectedPlantId] || PHYTOREMEDIATION_PLANTS.polyculture;
  const efficiencyPercent = Math.round(currentPlant.efficiencies.bodReduction * 100);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col justify-between selection:bg-teal-600 selection:text-white">
      
      <div>
        {/* Navigation Bar */}
        <Navbar
          onResetDefaults={handleResetDefaults}
          onOpenReport={() => setIsReportOpen(true)}
          dailyVolumeLitres={dailyVolumeLitres}
          efficiencyPercent={efficiencyPercent}
        />

        {/* Single-Page Engineering Dashboard */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          
          {/* Module 1: Campus Wastewater Source & Volume Calculator */}
          <section id="module-source">
            <SourceInputPanel
              selectedSourceId={selectedSourceId}
              onSelectSource={handleSelectSource}
              studentCount={studentCount}
              onStudentCountChange={setStudentCount}
              litresPerPerson={litresPerPerson}
              onLitresPerPersonChange={setLitresPerPerson}
              dailyVolumeLitres={dailyVolumeLitres}
              monthlyVolumeKl={monthlyVolumeKl}
              baselinePollutants={baselinePollutants}
            />
          </section>

          {/* Module 2: Interactive 4-Stage Treatment Flow Diagram & Inspector */}
          <section id="module-diagram" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8">
              <TreatmentFlowDiagram
                selectedStageId={selectedStageId}
                onSelectStage={setSelectedStageId}
              />
            </div>
            <div className="lg:col-span-4">
              <StageDetailInspector
                stageId={selectedStageId}
                onClose={null}
              />
            </div>
          </section>

          {/* Module 3: Water Quality & Efficiency Analytics */}
          <section id="module-analytics">
            <WaterAnalyticsPanel
              selectedPlantId={selectedPlantId}
              onSelectPlant={setSelectedPlantId}
              dailyVolumeLitres={dailyVolumeLitres}
              baselinePollutants={baselinePollutants}
            />
          </section>

          {/* Module 4: Campus Reuse & Blueprint View */}
          <section id="module-blueprint">
            <CampusReuseBlueprint
              dailyVolumeLitres={dailyVolumeLitres}
              onOpenReport={() => setIsReportOpen(true)}
            />
          </section>

        </main>
      </div>

      {/* Engineering Report Print Modal */}
      <EngineeringReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        selectedSourceId={selectedSourceId}
        studentCount={studentCount}
        litresPerPerson={litresPerPerson}
        dailyVolumeLitres={dailyVolumeLitres}
        baselinePollutants={baselinePollutants}
        selectedPlantId={selectedPlantId}
      />

      {/* Scientific Footer */}
      <footer className="no-print mt-12 border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            <span className="font-bold text-slate-900 font-heading">
              EcoFlow Campus Simulator
            </span>{' '}
            • {PROJECT_METADATA_ACT4.course} ({PROJECT_METADATA_ACT4.activityNo})
          </div>
          <div className="flex items-center gap-4">
            <span>Nature-Based Decentralized Wastewater Treatment System (DEWATS)</span>
            <span className="font-mono text-teal-800 font-bold">100% Client-Side • Zero API Keys</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
