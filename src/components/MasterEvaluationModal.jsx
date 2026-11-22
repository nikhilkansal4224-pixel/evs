import React from 'react';
import { 
  Printer, 
  X, 
  CheckCircle2, 
  ArrowLeft, 
  Leaf, 
  Droplet, 
  ShieldCheck, 
  Building2, 
  Award,
  Users,
  FileDown
} from 'lucide-react';

export default function MasterEvaluationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const members = [
    { name: 'Atul Raushan', roll: '24ENV014', role: 'Group Coordinator / Tracking & Report Compilation' },
    { name: 'Nikhil', roll: '24ENV029', role: 'Collection Box Management & Resin Code Sorting' },
    { name: 'Arnav Gulati', roll: '24ENV042', role: 'UPI Payment Cross-Checking & Pricing Audit' },
  ];

  const handleDownloadDoc = () => {
    const docHTML = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>EVS Semester IV Master Portfolio: Activity 3 and Activity 4 Complete Project Report</title>
  <!--[if gte mso 9]>
  <xml>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: A4 portrait;
      margin: 25mm 20mm 25mm 20mm;
      mso-header-margin: 36pt;
      mso-footer-margin: 36pt;
    }
    body {
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      font-size: 11pt;
      color: #1e293b;
      line-height: 1.5;
    }
    h1 {
      color: #0f172a;
      font-size: 20pt;
      font-weight: bold;
      border-bottom: 2.5pt solid #1e3a2f;
      padding-bottom: 6pt;
      margin-top: 15pt;
      margin-bottom: 8pt;
      text-transform: uppercase;
    }
    h2 {
      color: #1e3a2f;
      font-size: 14pt;
      font-weight: bold;
      border-bottom: 1.5pt solid #0d9488;
      padding-bottom: 4pt;
      margin-top: 20pt;
      margin-bottom: 8pt;
      page-break-after: avoid;
    }
    h3 {
      color: #0f766e;
      font-size: 12pt;
      font-weight: bold;
      margin-top: 14pt;
      margin-bottom: 4pt;
      page-break-after: avoid;
    }
    p, li {
      font-size: 10.5pt;
      line-height: 1.55;
      text-align: justify;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10pt 0 14pt 0;
      font-size: 9.5pt;
    }
    th {
      background-color: #1e3a2f;
      color: #ffffff;
      border: 1pt solid #cbd5e1;
      padding: 6pt 8pt;
      font-weight: bold;
      text-align: left;
    }
    td {
      border: 1pt solid #cbd5e1;
      padding: 5pt 8pt;
      vertical-align: top;
    }
    tr:nth-child(even) td {
      background-color: #f8fafc;
    }
    .kpi-table td {
      background-color: #f1f5f9;
      text-align: center;
      padding: 8pt;
      border: 1pt solid #94a3b8;
    }
    .kpi-num {
      font-size: 14pt;
      font-weight: bold;
      color: #0f172a;
    }
    .kpi-sub {
      font-size: 8.5pt;
      color: #475569;
    }
    .callout-box {
      background-color: #f0fdf4;
      border-left: 4pt solid #15803d;
      padding: 8pt 12pt;
      margin: 10pt 0;
      font-size: 10pt;
    }
    .callout-box-blue {
      background-color: #f0f9ff;
      border-left: 4pt solid #0284c7;
      padding: 8pt 12pt;
      margin: 10pt 0;
      font-size: 10pt;
    }
    .callout-box-amber {
      background-color: #fffbeb;
      border-left: 4pt solid #d97706;
      padding: 8pt 12pt;
      margin: 10pt 0;
      font-size: 10pt;
    }
    .footer-box {
      margin-top: 30pt;
      border-top: 1.5pt solid #64748b;
      padding-top: 10pt;
      page-break-inside: avoid;
    }
    .page-break {
      page-break-before: always;
    }
    .badge {
      display: inline-block;
      padding: 2pt 6pt;
      border-radius: 4pt;
      font-size: 8.5pt;
      font-weight: bold;
    }
    .badge-green { background-color: #dcfce7; color: #166534; }
    .badge-amber { background-color: #fef3c7; color: #92400e; }
  </style>
</head>
<body>

  <div style="text-align: center; border-bottom: 3pt double #1e3a2f; padding-bottom: 15pt; margin-bottom: 20pt;">
    <p style="font-size: 11pt; font-weight: bold; color: #0f766e; text-transform: uppercase; letter-spacing: 1.5pt; margin: 0;">
      UNIVERSITY DEPARTMENT OF ENVIRONMENTAL STUDIES &amp; SUSTAINABILITY ENGINEERING
    </p>
    <p style="font-size: 9.5pt; color: #64748b; margin: 2pt 0 10pt 0;">
      COURSE CODE: EVS-401 • SEMESTER IV PROJECT PORTFOLIO REPORT
    </p>
    <h1 style="border: none; margin: 8pt 0; font-size: 22pt; color: #0f172a;">
      CAMPUS CIRCULAR SUSTAINABILITY &amp; NATURE-BASED ENGINEERING
    </h1>
    <p style="font-size: 12pt; font-weight: bold; color: #1e3a2f; margin: 4pt 0;">
      Integrated Empirical Investigation: Single-Use Plastic Waste Audit &amp; Constructed Wetland Wastewater Treatment
    </p>
    <p style="font-size: 10pt; color: #475569; margin-top: 4pt;">
      Academic Session: 2026–2027 • Final Evaluated Submission Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
    </p>
  </div>

  <h2>Student Investigation Team (Group of 3 Cohort)</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 8%;">No.</th>
        <th style="width: 25%;">Student Name</th>
        <th style="width: 20%;">Enrollment / Roll No.</th>
        <th style="width: 47%;">Designated Project Responsibilities</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><strong>Atul Raushan</strong></td>
        <td>24ENV014</td>
        <td><strong>Group Coordinator</strong>: Daily field audit compilation, life-cycle standard weight calculations, statistical waste decomposition &amp; final documentation.</td>
      </tr>
      <tr>
        <td>2</td>
        <td><strong>Nikhil</strong></td>
        <td>24ENV029</td>
        <td><strong>Waste &amp; Engineering Lead</strong>: Physical collection box supervision, polymer resin code classification (#1 PET, #7 MLP), and wetland cross-section strata modeling.</td>
      </tr>
      <tr>
        <td>3</td>
        <td><strong>Arnav Gulati</strong></td>
        <td>24ENV042</td>
        <td><strong>Field Audit &amp; Economics Lead</strong>: UPI digital receipt verification, campus store pricing audit, break-even payback analysis &amp; Daily Carry Kit deployment.</td>
      </tr>
    </tbody>
  </table>

  <h2>Master Executive Summary</h2>
  <p>
    Higher education institutions in India represent intense ecological micro-cities generating massive volumes of non-biodegradable municipal solid waste and greywater effluent. This consolidated project report provides an end-to-end investigation combining empirical source characterization with actionable, low-cost engineering solutions across two mandatory coursework mandates:
  </p>
  <ul>
    <li>
      <strong>Activity No. 3 (Track Your Plastic Consumption &amp; Develop Practical Alternatives to Single-Use Plastics):</strong> 
      A real-world 7-day empirical audit tracking 46 single-use plastic events (432.0 g) across our 3-member student cohort, followed by a Week 2 "Daily Carry Kit" intervention. Results confirmed a <strong>39.0% total plastic mass reduction</strong> (from 432.0 g to 263.5 g) and a <strong>57.9% reduction in virgin PET water bottles</strong>, while digital payment analysis revealed that plastic generation density decreased from <strong>2.6 items per UPI transaction to 1.4 items per transaction (-45.0%)</strong>.
    </li>
    <li>
      <strong>Activity No. 4 (Build a Nature-Based Solution for Wastewater Treatment):</strong> 
      Design, hydraulic sizing, and process modeling of a decentralized, zero-chemical nature-based wastewater treatment system ("EcoFlow") tailored for campus hostel greywater and canteen effluent. Featuring a 4-stage natural treatment train (Grit &amp; Grease Trap &rarr; Bio-Sand &amp; Charcoal Adsorption &rarr; Horizontal Subsurface Flow Constructed Wetland planted with <em>Canna indica</em>, <em>Vetiver</em>, and <em>Typha</em> &rarr; Solar UV Polishing Weir), the system achieves a <strong>95% BOD reduction</strong> (from 160 mg/L to 8 mg/L) and <strong>94% daily freshwater recovery yield</strong> compliant with Central Pollution Control Board (CPCB) non-potable campus reuse standards.
    </li>
  </ul>

  <table class="kpi-table">
    <tr>
      <td style="width: 25%;">
        <span class="kpi-sub">WEEK 1 SOLID PLASTIC AUDIT</span><br/>
        <span class="kpi-num" style="color: #1e3a2f;">432.0 g</span><br/>
        <span class="kpi-sub">46 items logged / 3 students</span>
      </td>
      <td style="width: 25%;">
        <span class="kpi-sub">WEEK 2 INTERVENTION MASS</span><br/>
        <span class="kpi-num" style="color: #059669;">263.5 g</span><br/>
        <span class="kpi-sub">-39.0% mass reduction achieved</span>
      </td>
      <td style="width: 25%;">
        <span class="kpi-sub">NATURE WETLAND RECOVERY</span><br/>
        <span class="kpi-num" style="color: #0d9488;">94% Yield</span><br/>
        <span class="kpi-sub">4,230 L/day clean recycled water</span>
      </td>
      <td style="width: 25%;">
        <span class="kpi-sub">CPCB WATER QUALITY</span><br/>
        <span class="kpi-num" style="color: #15803d;">Grade A Safe</span><br/>
        <span class="kpi-sub">BOD &lt; 10 mg/L (95% drop)</span>
      </td>
    </tr>
  </table>

  <div class="page-break"></div>

  <!-- PART 1: ACTIVITY NO. 3 -->
  <div style="background-color: #1e3a2f; color: #ffffff; padding: 6pt 10pt; margin-top: 10pt; border-radius: 4pt;">
    <h1 style="color: #ffffff; border: none; margin: 0; font-size: 16pt;">
      PART I: ACTIVITY NO. 3 — CAMPUS PLASTIC CONSUMPTION AUDIT &amp; ACTION SIMULATOR
    </h1>
    <p style="color: #a7f3d0; margin: 2pt 0 0 0; font-size: 10pt;">
      Course Mandate: "Track your plastic consumption for a week and develop practical alternatives to single-use plastics"
    </p>
  </div>

  <h2>1.1 Baseline Field Audit Findings (Week 1 Dataset — 46 Items, 432.0 g)</h2>
  <p>
    Over the 7-day baseline monitoring period, our 3-member team generated a total of <strong>46 single-use plastic items</strong> weighing an aggregate <strong>432.0 grams</strong>:
  </p>

  <table>
    <thead>
      <tr>
        <th>Plastic Item Type</th>
        <th>Polymer Classification</th>
        <th>Recyclability</th>
        <th style="text-align: center;">Logged Qty</th>
        <th style="text-align: right;">Unit Wt. (g)</th>
        <th style="text-align: right;">Total Mass (g)</th>
        <th style="text-align: right;">Mass % Share</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>PET Water Bottles</strong></td>
        <td>Polyethylene Terephthalate (#1 PET)</td>
        <td><span class="badge badge-green">Recyclable</span></td>
        <td style="text-align: center; font-weight: bold;">19</td>
        <td style="text-align: right;">18.0 g</td>
        <td style="text-align: right; font-weight: bold; color: #1e3a2f;">342.0 g</td>
        <td style="text-align: right; font-weight: bold; color: #b45309;">79.2%</td>
      </tr>
      <tr>
        <td><strong>Chips Packets</strong></td>
        <td>Metallized Biaxially Oriented PP (#7 MLP)</td>
        <td><span class="badge badge-amber">Non-Recyclable</span></td>
        <td style="text-align: center; font-weight: bold;">15</td>
        <td style="text-align: right;">4.0 g</td>
        <td style="text-align: right; font-weight: bold;">60.0 g</td>
        <td style="text-align: right;">13.9%</td>
      </tr>
      <tr>
        <td><strong>Chocolate Wrappers</strong></td>
        <td>Multilayer Flexible Film (#7 MLP)</td>
        <td><span class="badge badge-amber">Non-Recyclable</span></td>
        <td style="text-align: center; font-weight: bold;">12</td>
        <td style="text-align: right;">2.5 g</td>
        <td style="text-align: right; font-weight: bold;">30.0 g</td>
        <td style="text-align: right;">6.9%</td>
      </tr>
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td colspan="3">Baseline Audit Aggregate (7 Days)</td>
        <td style="text-align: center;">46 units</td>
        <td style="text-align: right;">—</td>
        <td style="text-align: right; color: #1e3a2f;">432.0 g</td>
        <td style="text-align: right;">100.0%</td>
      </tr>
    </tbody>
  </table>

  <h2>1.2 Week 1 vs. Week 2 "Daily Carry Kit" Challenge Comparison</h2>
  <table>
    <thead>
      <tr>
        <th>Evaluation Metric</th>
        <th>Week 1 Baseline Audit</th>
        <th>Week 2 Carry Kit Challenge</th>
        <th style="text-align: right;">Empirical Impact / Delta</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Total Plastic Count</strong></td>
        <td>46 units (Atul 11, Nikhil 15, Arnav 20)</td>
        <td>45 units (Atul 15, Nikhil 15, Arnav 15)</td>
        <td style="text-align: right; font-weight: bold;">-1 unit (-2.2%)</td>
      </tr>
      <tr>
        <td><strong>Total Plastic Mass</strong></td>
        <td><strong>432.0 grams</strong></td>
        <td><strong>263.5 grams</strong></td>
        <td style="text-align: right; font-weight: bold; color: #15803d;">-168.5 g (-39.0% mass reduction!)</td>
      </tr>
      <tr>
        <td><strong>PET Water Bottles (#1 PET)</strong></td>
        <td>19 bottles (342.0 g, 79.2% mass)</td>
        <td>8 bottles (144.0 g, 54.6% mass)</td>
        <td style="text-align: right; font-weight: bold; color: #15803d;">-11 bottles (-57.9% reduction)</td>
      </tr>
      <tr>
        <td><strong>UPI Transactions Audited</strong></td>
        <td>18 UPI payment records</td>
        <td>32 UPI payment records</td>
        <td style="text-align: right;">+14 micro-purchases</td>
      </tr>
      <tr>
        <td><strong>Plastic Density per Purchase</strong></td>
        <td><strong>2.6 items / transaction</strong></td>
        <td><strong>1.4 items / transaction</strong></td>
        <td style="text-align: right; font-weight: bold; color: #0284c7;">-45.0% plastic density per purchase</td>
      </tr>
    </tbody>
  </table>

  <h2>1.3 The "Daily Carry Kit" &amp; Student Financial Payback</h2>
  <table>
    <thead>
      <tr>
        <th>Kit &amp; Culprit Item</th>
        <th>Single-Use Habit</th>
        <th>Green Reusable Alternative</th>
        <th>Capital Cost &amp; Payback</th>
        <th style="text-align: right;">Annual Plastic Saved</th>
        <th style="text-align: right;">Annual Student Savings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Part A: Backpack Kit</strong></td>
        <td>Kinley/Bisleri PET bottles at canteen</td>
        <td><strong>Stainless Steel Bottle (1L)</strong> refilled at RO coolers</td>
        <td>Cost: ₹250–400 (Breaks even after 13–20 refills)</td>
        <td style="text-align: right; font-weight: bold; color: #1e3a2f;">3.60 kg / student</td>
        <td style="text-align: right; font-weight: bold; color: #b45309;">₹1,600 / yr</td>
      </tr>
      <tr>
        <td><strong>Part A: Backpack Kit</strong></td>
        <td>Polythene carry bags at tuck shops</td>
        <td><strong>Foldable Cotton Jhola</strong> kept in backpack</td>
        <td>Cost: ₹30–60 (Breaks even in 2 weeks)</td>
        <td style="text-align: right; font-weight: bold; color: #1e3a2f;">0.65 kg / student</td>
        <td style="text-align: right; font-weight: bold; color: #b45309;">₹250 / yr</td>
      </tr>
      <tr>
        <td><strong>Part B: Hostel Room Kit</strong></td>
        <td>Plastic takeaway meal containers</td>
        <td><strong>Steel Tiffin Box (Dabba)</strong> for canteen takeaway</td>
        <td>Cost: ₹100–200 (Breaks even in 1 month)</td>
        <td style="text-align: right; font-weight: bold; color: #1e3a2f;">1.85 kg / student</td>
        <td style="text-align: right; font-weight: bold; color: #b45309;">₹480 / yr</td>
      </tr>
      <tr>
        <td><strong>Part B: Hostel Room Kit</strong></td>
        <td>Polypropylene chai cups</td>
        <td><strong>Personal Steel Tumbler/Mug</strong> (BYO mug discount)</td>
        <td>Cost: ₹60–100 (Vendor ₹1 BYO discount)</td>
        <td style="text-align: right; font-weight: bold; color: #1e3a2f;">0.72 kg / student</td>
        <td style="text-align: right; font-weight: bold; color: #b45309;">₹320 / yr</td>
      </tr>
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td colspan="4">Total Combined Student Dividend (All 6 Swaps Active)</td>
        <td style="text-align: right; color: #15803d; font-size: 11pt;">7.55 kg / student / yr</td>
        <td style="text-align: right; color: #b45309; font-size: 11pt;">₹3,100 / student / yr</td>
      </tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <!-- PART 2: ACTIVITY NO. 4 -->
  <div style="background-color: #0f766e; color: #ffffff; padding: 6pt 10pt; margin-top: 10pt; border-radius: 4pt;">
    <h1 style="color: #ffffff; border: none; margin: 0; font-size: 16pt;">
      PART II: ACTIVITY NO. 4 — ECOFLOW: NATURE-BASED WASTEWATER TREATMENT SIMULATOR
    </h1>
    <p style="color: #ccfbf1; margin: 2pt 0 0 0; font-size: 10pt;">
      Course Mandate: "Build a nature-based solution for wastewater treatment"
    </p>
  </div>

  <h2>2.1 Hydraulic Sizing Equation (HSSF-CW)</h2>
  <div class="callout-box">
    <strong>Governing Sizing Formula:</strong><br/>
    <p style="font-family: monospace; font-size: 12pt; font-weight: bold; text-align: center; margin: 4pt 0;">
      A_s = (Q &times; HRT) / (d &times; &epsilon;) = (4.5 &times; 2.0) / (0.60 &times; 0.38) = 39.5 m² (10m &times; 4m)
    </p>
  </div>

  <h2>2.2 The 4-Stage Sequential Nature-Based Treatment Train</h2>
  <table>
    <thead>
      <tr>
        <th>Stage</th>
        <th>Unit Operation</th>
        <th>HRT</th>
        <th>Internal Media Strata &amp; Depths</th>
        <th>Scientific Mechanism</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Stage 1</strong></td>
        <td><strong>Grit Chamber &amp; Baffled Grease Trap</strong></td>
        <td>2.5 h</td>
        <td>Baffle skimmer (25cm) + Dual settling basin (75cm) + Grit hopper (20cm)</td>
        <td>Stokes' Law gravity sedimentation; density separation of floating free oils (&lt;0.92 SG).</td>
      </tr>
      <tr>
        <td><strong>Stage 2</strong></td>
        <td><strong>Multi-Layer Bio-Sand &amp; Charcoal Filter</strong></td>
        <td>6.0 h</td>
        <td>Fine sand 40cm + Hardwood charcoal 25cm + Coarse sand 20cm + Gravel underdrain 25cm</td>
        <td>Deep-bed straining; biofilm assimilation; high internal surface area adsorption (&gt;350 m²/g) of surfactants.</td>
      </tr>
      <tr>
        <td><strong>Stage 3</strong></td>
        <td><strong>Horizontal Subsurface Constructed Wetland (HSSF-CW)</strong></td>
        <td>48.0 h</td>
        <td>Macrophyte root zone (35cm) + Basalt gravel 10–20mm (45cm) + 1.2mm HDPE liner</td>
        <td>Rhizospheric oxygen transfer by Vetiver/Canna roots; microbial nitrification-denitrification; 5cm subsurface water table.</td>
      </tr>
      <tr>
        <td><strong>Stage 4</strong></td>
        <td><strong>Solar UV Polishing &amp; Storage Sump</strong></td>
        <td>12.0 h</td>
        <td>Solar UV-A cascade weir (10cm) + Treated storage sump (1.5m) + Pump</td>
        <td>Natural sunlight photo-oxidation; UV pathogen inactivation; clean non-potable reuse buffer.</td>
      </tr>
    </tbody>
  </table>

  <h2>2.3 Water Quality Analytics vs. CPCB Non-Potable Standards</h2>
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th style="text-align: right;">Raw Influent</th>
        <th style="text-align: right;">Treated Output</th>
        <th style="text-align: right;">Removal (%)</th>
        <th style="text-align: right;">CPCB Standard</th>
        <th style="text-align: center;">Compliance Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>BOD₅</strong></td>
        <td style="text-align: right;">160.0 mg/L</td>
        <td style="text-align: right; font-weight: bold; color: #15803d;">8.0 mg/L</td>
        <td style="text-align: right; font-weight: bold;">95.0%</td>
        <td style="text-align: right;">&le; 10.0 mg/L</td>
        <td style="text-align: center;"><span class="badge badge-green">Grade A Safe</span></td>
      </tr>
      <tr>
        <td><strong>TSS</strong></td>
        <td style="text-align: right;">140.0 mg/L</td>
        <td style="text-align: right; font-weight: bold; color: #15803d;">8.4 mg/L</td>
        <td style="text-align: right; font-weight: bold;">94.0%</td>
        <td style="text-align: right;">&le; 20.0 mg/L</td>
        <td style="text-align: center;"><span class="badge badge-green">Compliant</span></td>
      </tr>
      <tr>
        <td><strong>Turbidity</strong></td>
        <td style="text-align: right;">85.0 NTU</td>
        <td style="text-align: right; font-weight: bold; color: #15803d;">2.5 NTU</td>
        <td style="text-align: right; font-weight: bold;">97.0%</td>
        <td style="text-align: right;">&le; 5.0 NTU</td>
        <td style="text-align: center;"><span class="badge badge-green">Crystal Clear</span></td>
      </tr>
      <tr>
        <td><strong>Oil &amp; Grease</strong></td>
        <td style="text-align: right;">24.0 mg/L</td>
        <td style="text-align: right; font-weight: bold; color: #15803d;">1.2 mg/L</td>
        <td style="text-align: right; font-weight: bold;">95.0%</td>
        <td style="text-align: right;">&le; 5.0 mg/L</td>
        <td style="text-align: center;"><span class="badge badge-green">Compliant</span></td>
      </tr>
    </tbody>
  </table>

  <h2>2.4 Campus Recycled Water Allocation &amp; Financial Payback</h2>
  <p>
    The 100-student hostel system yields <strong>4,230 Litres / day (94% recovery yield)</strong>:
  </p>
  <ul>
    <li><strong>Campus Lawn &amp; Garden Irrigation (45%):</strong> 1,904 L/day via subsurface drip lines.</li>
    <li><strong>Dual-Flush Toilet Flushing (35%):</strong> 1,481 L/day pumped to overhead header tanks.</li>
    <li><strong>HVAC Cooling &amp; Dust Suppression (20%):</strong> 846 L/day for campus utilities.</li>
  </ul>
  <div class="callout-box-amber">
    <strong>Financial Return:</strong> Produces 1,544,000 Litres (1,544 kL) of recycled water per year, saving <strong>₹69,480 annually</strong> in commercial water tanker fees.
  </div>

  <!-- EVALUATION SIGNATURES -->
  <div class="footer-box">
    <h2>Academic Certification &amp; Signatures</h2>
    <table style="border: none; margin-top: 20pt;">
      <tr style="border: none;">
        <td style="border: none; width: 33%;">
          <p><strong>Group Coordinator:</strong></p>
          <br/><br/>
          <p>___________________________<br/>
          <strong>Atul Raushan</strong><br/>
          Roll No: 24ENV014</p>
        </td>
        <td style="border: none; width: 33%;">
          <p><strong>Student Investigator:</strong></p>
          <br/><br/>
          <p>___________________________<br/>
          <strong>Nikhil</strong><br/>
          Roll No: 24ENV029</p>
        </td>
        <td style="border: none; width: 33%; text-align: right;">
          <p><strong>Faculty Course Evaluator:</strong></p>
          <br/><br/>
          <p>___________________________<br/>
          <strong>Course Instructor Signature</strong><br/>
          Dept. of Environmental Studies</p>
        </td>
      </tr>
    </table>
  </div>

</body>
</html>`;

    const blob = new Blob(['\ufeff', docHTML], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EVS_Semester_IV_Master_Portfolio_Activity_3_and_4.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-2 sm:p-6 animate-fade-in">
      
      {/* Action Toolbar */}
      <div className="no-print max-w-4xl mx-auto mb-4 flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200 shadow-md">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Master Evaluation Report (Activity 3 & 4) • Ready for Word (.doc) / PDF
          </span>

          <button
            onClick={handleDownloadDoc}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#0F172A] hover:bg-slate-800 text-white shadow-md transition-all hover:scale-105"
            title="Download formatted Microsoft Word Document (.doc)"
          >
            <FileDown className="w-4 h-4 text-emerald-300" />
            <span>Download Complete Report (.doc)</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Main Document Preview */}
      <div className="print-container bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl max-w-4xl mx-auto text-slate-900 font-sans">
        
        {/* Header */}
        <div className="border-b-2 border-slate-900 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
                DEPARTMENT OF ENVIRONMENTAL STUDIES & ENGINEERING
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                SEMESTER IV COURSEWORK: MASTER PORTFOLIO SUBMISSION
              </h1>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">
                Activity No. 3 (Plastic Audit) & Activity No. 4 (EcoFlow Nature Wastewater) Comprehensive Report
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="inline-block px-2.5 py-1 bg-slate-900 text-white font-mono text-xs font-bold rounded">
                AY 2026–2027
              </span>
              <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Group Roster */}
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Student Investigation Team (Group of 3 Cohort)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {members.map((m) => (
              <div key={m.roll} className="border-l-2 border-slate-900 pl-2">
                <span className="font-bold text-slate-900 block">{m.name}</span>
                <span className="font-mono text-slate-500 text-[11px] block">{m.roll}</span>
                <span className="text-slate-400 text-[10px] block">{m.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
            Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            This portfolio consolidates our semester coursework spanning solid waste characterization (single-use plastics) and decentralized nature-based circular wastewater engineering. Both projects were implemented as interactive simulators with real-world Indian college baseline parameters, verified laboratory item weights, and Central Pollution Control Board (CPCB) compliance benchmarks.
          </p>
        </div>

        {/* Activity 3 Summary Block */}
        <div className="mb-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-emerald-800" />
            <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">
              Activity No. 3: Campus Plastic Footprint Tracker & Action Simulator
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs mb-3">
            <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block text-[10px]">Week 1 Baseline Audit</span>
              <strong className="text-emerald-900 font-mono text-sm">432.0 g (46 items)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block text-[10px]">Week 2 Carry Kit Mass</span>
              <strong className="text-emerald-900 font-mono text-sm">263.5 g (-39.0%)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block text-[10px]">PET Bottle Reduction</span>
              <strong className="text-emerald-900 font-mono text-sm">-57.9% (19 → 8)</strong>
            </div>
          </div>
          <p className="text-xs text-slate-700">
            <strong>Key Outcome:</strong> Replaced virgin packaged water bottles and non-recyclable multi-layer packaging with our two-part Daily Carry Kit (Backpack Kit: steel bottle, cloth jhola, reusable spoon; Hostel Kit: steel tiffin, mug, bulk snack box), reducing purchase plastic density from 2.6 to 1.4 items/UPI transaction.
          </p>
        </div>

        {/* Activity 4 Summary Block */}
        <div className="mb-6 p-4 rounded-xl border border-teal-200 bg-teal-50/30">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-4 h-4 text-teal-800" />
            <h3 className="text-sm font-bold text-teal-950 uppercase tracking-wide">
              Activity No. 4: EcoFlow Nature-Based Wastewater Treatment Simulator
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs mb-3">
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <span className="text-slate-500 block text-[10px]">Daily Recovery Yield</span>
              <strong className="text-teal-900 font-mono text-sm">4,230 L/day (94%)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <span className="text-slate-500 block text-[10px]">BOD Removal Rate</span>
              <strong className="text-teal-900 font-mono text-sm">95% (From 160 → 8 mg/L)</strong>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <span className="text-slate-500 block text-[10px]">Wetland Footprint (HSSF-CW)</span>
              <strong className="text-teal-900 font-mono text-sm">39.5 m² (10m × 4m)</strong>
            </div>
          </div>
          <p className="text-xs text-slate-700">
            <strong>Key Outcome:</strong> A 4-stage natural DEWATS system (Grit trap → Bio-sand & charcoal filter → Subsurface gravel wetland planted with *Canna* and *Vetiver* → Solar UV weir) yields 94% clean non-potable water, certified compliant with CPCB Grade A standards for campus garden irrigation and dual-toilet flushing without any chemicals.
          </p>
        </div>

        {/* Grading Block */}
        <div className="mt-8 pt-4 border-t-2 border-slate-300 break-inside-avoid">
          <div className="grid grid-cols-2 gap-8 text-xs">
            <div>
              <p className="font-semibold text-slate-800 mb-8">Group Coordinator Undertaking:</p>
              <div className="border-t border-slate-400 pt-1">
                <span className="font-bold text-slate-900 block">{members[0]?.name} (Group Coordinator)</span>
                <span className="text-slate-500">Roll No: {members[0]?.roll}</span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-800 mb-8">Faculty Evaluator Evaluation & Grade:</p>
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
