import React, { useState } from 'react';
import { X, Users, Check, RotateCcw } from 'lucide-react';
import { INITIAL_MEMBERS } from '../data/initialData';

export default function MemberModal({ isOpen, onClose, members, onSaveMembers }) {
  if (!isOpen) return null;

  const [localMembers, setLocalMembers] = useState([...members]);

  const handleChange = (index, field, value) => {
    const updated = [...localMembers];
    updated[index] = { ...updated[index], [field]: value };
    setLocalMembers(updated);
  };

  const handleReset = () => {
    setLocalMembers([...INITIAL_MEMBERS]);
  };

  const handleSave = () => {
    onSaveMembers(localMembers);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Group Member Roster ({members.length} Students)
              </h3>
              <p className="text-xs text-slate-500">
                Customize student names and roll numbers for your team's project report
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member list */}
        <div className="mt-4 space-y-3">
          {localMembers.map((member, idx) => (
            <div key={member.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1E3A2F] uppercase tracking-wide">
                  Student {idx + 1}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  ID: {member.id}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => handleChange(idx, 'name', e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    placeholder="Student name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                    Roll / Enrollment No.
                  </label>
                  <input
                    type="text"
                    value={member.roll}
                    onChange={(e) => handleChange(idx, 'roll', e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 font-mono text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    placeholder="e.g. 24ENV001"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                    Role / Category
                  </label>
                  <input
                    type="text"
                    value={member.role}
                    onChange={(e) => handleChange(idx, 'role', e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    placeholder="Hostelite / Day Scholar"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-slate-500 hover:text-red-700 flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default 3 Members</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-1.5 text-xs font-bold text-white bg-[#1E3A2F] hover:bg-[#142720] rounded-lg shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Save & Update All Logs</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
