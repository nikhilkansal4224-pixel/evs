# Campus Environmental Studies (EVS) Project Portal
> **Semester IV Master Portfolio: Activity No. 3 & Activity No. 4 Unified Dashboard**

A modern, comprehensive web portal combining two flagship college Environmental Studies projects:
1. **Activity No. 3**: Campus Plastic Footprint Tracker & Action Simulator
2. **Activity No. 4**: EcoFlow Campus: Nature-Based Wastewater Treatment Simulator

---

## 🌟 Architecture Overview

```
evs/
├── activity 3/               # Activity 3 standalone app (Plastic Tracker)
│   ├── src/
│   ├── package.json
│   └── vite.config.js (port 3000)
├── activity 4/               # Activity 4 standalone app (EcoFlow Wastewater)
│   ├── src/
│   ├── package.json
│   └── vite.config.js (port 3001)
├── src/                      # Master Dashboard Portal
│   ├── components/
│   │   ├── PortalHome.jsx
│   │   └── MasterEvaluationModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json              # Unified root scripts
└── vite.config.js            # Unified portal dev server (port 3000)
```

---

## 🚀 Quick Start: Running the Unified Dashboard

From the root directory (`/Users/nikhil/Documents/GitHub/evs`):

```bash
# Start the Master Portal (Access both Activity 3 & 4 seamlessly)
npm run dev
```

Visit **`http://localhost:3000`** in your browser. From here you can:
- View the **Portal Home** overview, team roster, and key impact statistics.
- Launch **Activity 3 (Plastic Footprint Tracker)** with 1 click.
- Launch **Activity 4 (EcoFlow Wastewater Treatment Simulator)** with 1 click.
- Switch back and forth between activities instantly via the persistent top navigation bar.
- Generate and print the combined **Master LMS Evaluation Report** (`window.print()`).

---

## 📂 Standalone Execution (Optional)

Each activity can also be run independently inside its own folder:

### Activity 3 (Plastic Tracker)
```bash
cd "activity 3"
npm run dev
```

### Activity 4 (EcoFlow Wastewater Simulator)
```bash
cd "activity 4"
npm run dev
```
