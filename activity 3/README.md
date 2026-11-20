# Campus Plastic Footprint Tracker & Action Simulator
> **College Environmental Studies (EVS) Project — Activity No. 3: Track Your Plastic Consumption and Develop Practical Alternatives to Single-Use Plastics**

A modern, eco-minimalist interactive web application designed for a 4-member Indian college student group to audit single-use plastic waste, visualize consumption patterns, simulate zero-budget student swaps, and export an LMS-ready PDF report.

---

## 🌿 Core Modules

### 1. Group Plastic Audit Logger & Pre-loaded Dataset
- **Pre-populated 7-Day Audit Data**: 58 realistic field entries tracking plastic consumption across 4 Indian college students (Aarav, Priya, Rohan, Sneha) across hostels, canteens, libraries, and commute routes.
- **Categorization**:
  - **Food & Canteen**: PET water bottles (18g), disposable polypropylene chai cups (4.5g), metallized multi-layer snack wrappers (4g), food delivery containers (24g), polythene carry bags (6g).
  - **Hostel & Stationery**: Shampoo/detergent sachets (2.5g), disposable ballpoint pens (6g), toothbrush/toothpaste tubes (15g), online shopping courier poly mailers (12g).
- **Interactive Logging**:
  - `+ Log Item` modal with dynamic weight calculation.
  - One-click quick-log buttons for high-frequency campus items (+1 Chai cup, +1 Sachet, +1 Bottle, +1 Pen).
  - Search, member filter, category filter, and day-wise filter.
  - Full extrapolation engine calculating group weekly grams, kg, and 500-student campus yearly footprint.

### 2. Visual Analytics Panel
- **Responsive Bar Chart**: Plastic weight and item units generated per student member, decomposed by stream (Food vs. Hostel).
- **Donut / Pie Chart**: Waste breakdown by category (Food & Canteen vs. Hostel & Stationery) with percentage shares.
- **Top Plastic Culprits**: Ranked bar visualization identifying major intervention priorities.
- **Daily Generation Trend**: 7-day accumulation curve highlighting peak consumption on project and lab days.
- **Top 3 KPI Summary Cards**:
  1. *Weekly Plastic Weight (g / kg)*
  2. *Projected Yearly Campus Waste (kg across 500 students)*
  3. *Top Culprit Item with % share*
  4. *Simulated Student Savings (Bonus KPI)*

### 3. Zero-Budget Student Alternatives & Action Simulator
- **"Swap & Save" Comparison Engine**: 6 practical, budget-conscious alternatives tailored for Indian students:
  1. **Shared 1L Refill Bottle vs. ₹10 Sachets**: Saves 0.38 kg plastic & ₹220/yr.
  2. **Personal Steel Mug / Kulhad vs. Disposable Chai Cups**: Saves 2.70 kg plastic & ₹300/yr.
  3. **Foldable Cotton Jhola vs. Polythene Bags**: Saves 0.96 kg plastic & ₹450/yr.
  4. **Refillable Fountain/Metal Pen vs. Disposable Ballpoint Pens**: Saves 0.12 kg plastic & ₹140/yr.
  5. **Reusable Steel Bottle + Campus RO vs. Packaged PET Water**: Saves 1.44 kg plastic & ₹1,600/yr.
  6. **Hostelite Steel Dabba / "No Cutlery" vs. Delivery Containers**: Saves 1.68 kg plastic & ₹850/yr.
- **Real-time Impact Recalculation**: Instant dynamic badges for annual plastic eliminated (kg) and rupees saved (₹ INR).
- **Interactive Campus Scaler Slider**: Simulate campus-wide policy impact (from 50 to 2,000 students).

### 4. Print-Ready Report View
- Formatted specifically for college submission and LMS upload (`@media print` optimized).
- Includes formal institutional header, 4-member group roster, executive summary, life-cycle item weight table, action plan, campus policy recommendations, and evaluation sign-off block.
- Direct **"Print / Save as PDF"** button (`window.print()`).
- Direct **"Export CSV"** button for raw audit data.

---

## 🛠️ Tech Stack & Architecture

- **React 18** with functional components & hooks
- **Tailwind CSS** (Eco-minimalist palette: forest green `#1E3A2F`, off-white `#F8F9F7`, slate `#475569`, amber `#D97706`)
- **Recharts** for charts (BarChart, PieChart, LineChart)
- **Lucide React** for clean icons
- **LocalStorage API**: All edits to group members, logs, and active swaps persist automatically across browser refreshes
- **Zero External API Keys**: 100% client-side privacy-first architecture

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
