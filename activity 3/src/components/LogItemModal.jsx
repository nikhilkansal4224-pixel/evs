import React, { useState } from 'react';
import { X, Plus, Sparkles, Scale, AlertCircle } from 'lucide-react';
import { ITEM_DEFINITIONS, CATEGORIES } from '../data/initialData';

export default function LogItemModal({ isOpen, onClose, onSave, members }) {
  if (!isOpen) return null;

  const [memberId, setMemberId] = useState(members[0]?.id || 'm1');
  const [category, setCategory] = useState(CATEGORIES[0]);
  
  // Available item types based on category
  const availableItems = Object.entries(ITEM_DEFINITIONS).filter(
    ([_, val]) => val.category === category
  );

  const [selectedItemName, setSelectedItemName] = useState(availableItems[0]?.[0] || 'Disposable tea cups');
  const [quantity, setQuantity] = useState(1);
  const [day, setDay] = useState('Day 1');
  const [location, setLocation] = useState('');

  const currentItemDef = ITEM_DEFINITIONS[selectedItemName] || availableItems[0]?.[1];
  const calculatedWeight = currentItemDef ? currentItemDef.weightGrams * quantity : 0;

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    setCategory(newCat);
    const newItems = Object.entries(ITEM_DEFINITIONS).filter(([_, val]) => val.category === newCat);
    if (newItems.length > 0) {
      setSelectedItemName(newItems[0][0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const chosenMember = members.find(m => m.id === memberId) || members[0];
    
    onSave({
      memberId: chosenMember.id,
      memberName: chosenMember.name,
      itemType: selectedItemName,
      category: category,
      quantity: Number(quantity),
      day: day,
      date: new Date().toISOString().split('T')[0],
      location: location.trim() || 'Campus area'
    });
    
    // Reset defaults
    setQuantity(1);
    setLocation('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Log Single-Use Plastic Item
              </h3>
              <p className="text-xs text-slate-500">
                Record single-use plastic consumed during college routine
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          
          {/* Member & Day selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Student Member
              </label>
              <select
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              >
                {members.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.roll})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Day of Audit
              </label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              >
                {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'].map((d) => (
                  <option key={d} value={d}>
                    {d} (Audit Week)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    const newItems = Object.entries(ITEM_DEFINITIONS).filter(([_, val]) => val.category === cat);
                    if (newItems.length > 0) setSelectedItemName(newItems[0][0]);
                  }}
                  className={`text-xs py-2 px-3 rounded-lg font-medium border text-left transition-all ${
                    category === cat
                      ? 'border-[#1E3A2F] bg-[#1E3A2F] text-white shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Item Type selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Plastic Item Type
            </label>
            <select
              value={selectedItemName}
              onChange={(e) => setSelectedItemName(e.target.value)}
              className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            >
              {availableItems.map(([name, def]) => (
                <option key={name} value={name}>
                  {name} (≈ {def.weightGrams}g per {def.unit})
                </option>
              ))}
            </select>
            {currentItemDef && (
              <p className="mt-1 text-[11px] text-slate-500 italic">
                {currentItemDef.desc}
              </p>
            )}
          </div>

          {/* Quantity stepper */}
          <div className="grid grid-cols-2 gap-3 items-center">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Quantity Consumed
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-slate-300 rounded-l-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-base"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-9 border-y border-slate-300 text-center font-bold text-slate-900 focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-slate-300 rounded-r-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-base"
                >
                  +
                </button>
                <span className="ml-2 text-xs text-slate-500">
                  {currentItemDef ? currentItemDef.unit + '(s)' : 'units'}
                </span>
              </div>
            </div>

            {/* Calculated weight preview */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2.5 flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <div>
                <span className="block text-[11px] font-medium text-emerald-800">
                  Added Plastic Weight
                </span>
                <span className="text-base font-extrabold text-[#1E3A2F]">
                  +{calculatedWeight.toFixed(1)} grams
                </span>
              </div>
            </div>
          </div>

          {/* Location / Note */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Context / Location <span className="font-normal text-slate-400">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Canteen chai tapri, Hostel B-204, Library tuck shop"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#1E3A2F] hover:bg-[#142720] rounded-lg shadow-sm transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Audit Log</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
