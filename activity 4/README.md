# EcoFlow Campus: Nature-Based Wastewater Treatment Simulator
> **College Environmental Studies (EVS) Project — Activity No. 4: Build a Nature-Based Solution for Wastewater Treatment**

A clean, scientific, and modern interactive web application that models a decentralized, nature-based wastewater treatment system (DEWATS) tailored for Indian college campuses. It combines physical sedimentation, media filtration, sub-surface phytoremediation wetlands, and solar UV polishing.

---

## 🌊 Core Modules

### 1. Campus Wastewater Source & Volume Calculator (Input Panel)
- **Campus Source Presets**:
  - **Hostel Wing Greywater (Showers & Washbasins)**: BOD 160 mg/L, TSS 140 mg/L, Turbidity 85 NTU, Oil & Grease 24 mg/L.
  - **Campus Canteen & Mess Wastewater**: BOD 480 mg/L, TSS 380 mg/L, Turbidity 260 NTU, Oil & Grease 110 mg/L.
  - **Combined Campus Block (Hostel + Academic)**: BOD 290 mg/L, TSS 230 mg/L, Turbidity 160 NTU, Oil & Grease 55 mg/L.
- **Interactive Hydraulic Sliders**:
  - Daily Students / Occupants: 20 to 500 (default: 100).
  - Average Greywater Generated per Person/Day: 10 L to 100 L (default: 45 L).
- **Dynamic Outputs**: Daily inflow ($L/\text{day}$), monthly volume ($kL/\text{month}$), and raw baseline chemistry.

### 2. Interactive 4-Stage Treatment Flow Diagram (Visual Cross-Section)
- **Animated SVG Engineering Cross-Section**:
  - **Stage 1: Grit Chamber & Baffled Grease Trap**: Underflow and overflow baffles, floating oil scum skimmer, and bottom grit hopper (HRT: 2.5h).
  - **Stage 2: Multi-Layer Bio-Sand & Hardwood Charcoal Filter**: Fine silica sand ($40\,\text{cm}$), activated wood charcoal ($25\,\text{cm}$), coarse sand ($20\,\text{cm}$), and gravel underdrain ($25\,\text{cm}$) (HRT: 6.0h).
  - **Stage 3: Horizontal Subsurface Flow Constructed Wetland (HSSF-CW)**: Washed crushed basalt gravel bed with water level maintained $5\text{--}10\,\text{cm}$ below gravel surface (preventing mosquito breeding and odor). Planted with native Indian phytoremediation macrophytes (*Canna indica*, *Chrysopogon zizanioides*, *Typha latifolia*) (HRT: 48h).
  - **Stage 4: Solar UV Polishing & Reuse Storage Tank**: Reflective shallow solar UV disinfection weir and final clarified storage cistern with submersible reuse pump (HRT: 12h).
- **Interactive Side Inspector**: Click any stage to view exact layer depths, media materials, biological/physical mechanisms, and maintenance checklists.

### 3. Water Quality & Efficiency Analytics
- **Native Phytoremediation Macrophyte Selector**:
  - *Canna Lily (Canna indica)*: Robust detergent tolerance, aesthetic floral canopy (-88% BOD).
  - *Vetiver Grass / Khus (Chrysopogon zizanioides)*: Deep 60cm+ fibrous root sponge (-93% BOD).
  - *Cattails / Reed (Typha latifolia)*: Internal aerenchyma oxygen pump (-89% BOD).
  - *Mixed Polyculture Matrix*: Optimal multi-tier root niche synergy (-95% BOD).
- **Grouped Bar Chart (Recharts)**: Side-by-side comparison of Raw Greywater vs. Treated Effluent vs. CPCB Thresholds across BOD, TSS, Turbidity, and Oil & Grease.
- **CPCB Compliance Badge**: Real-time regulatory certification against Central Pollution Control Board (India) non-potable reuse standards for irrigation and dual-toilet flushing.
- **3 Top KPI Summary Cards**:
  1. *Daily Water Recovered (L/day)* (factoring in 6% wetland evapotranspiration)
  2. *Average BOD Reduction (%)*
  3. *Estimated Annual Freshwater Saved (kL/year)*

### 4. Campus Reuse & Print-Ready Blueprint View
- **Campus Non-Potable Water Allocation**:
  - Campus Gardens, Lawns & Botanical Arboretum (65%)
  - Dual-Plumbed Toilet Flushing Network (25%)
  - Floor Mopping & Pavement Washing (10%)
- **Wetland Sizing Formula**:
  $$A_s = \frac{Q \times \text{HRT}}{d \times \epsilon}$$
  Calculates required wetland surface area ($m^2$), bed length, and width based on daily inflow $Q$.
- **Print-Ready Engineering Report**: Full academic submission view with `@media print` styling for one-click PDF generation via `window.print()`.

---

## 🚀 Running Locally

From inside the `activity 4/` directory:

```bash
# Start local development server
npm run dev

# Or build for production
npm run build
```
