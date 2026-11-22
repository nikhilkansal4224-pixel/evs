const { webkit } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const screenshotDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function capture() {
  const browser = await webkit.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 950 },
    deviceScaleFactor: 1.5
  });
  const page = await context.newPage();

  console.log('1. Navigating to Master Portal Home...');
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(screenshotDir, '01_portal_home.png') });

  console.log('2. Navigating to Activity 3 (Week 1 Audit)...');
  // Click on Activity 3 in nav or hero
  await page.click('button:has-text("Activity 3: Plastic Tracker")');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(screenshotDir, '02_activity3_week1_audit.png') });

  console.log('3. Loading Week 2 Challenge in Activity 3...');
  const week2Btn = page.locator('button:has-text("Week 2 Challenge (45)")').first();
  if (await week2Btn.count() > 0) {
    await week2Btn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotDir, '03_activity3_week2_challenge.png') });
  }

  console.log('4. Navigating to Activity 3 Visual Analytics...');
  await page.click('button:has-text("2. Visual Analytics")');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(screenshotDir, '04_activity3_analytics.png') });

  console.log('5. Navigating to Activity 3 Action Simulator...');
  await page.click('button:has-text("3. Zero-Budget Action Simulator")');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(screenshotDir, '05_activity3_action_simulator.png') });

  console.log('6. Navigating to Activity 4 (EcoFlow)...');
  // Click on Activity 4 tab in top global header
  await page.click('header button:has-text("Activity 4")');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(screenshotDir, '06_activity4_source_and_diagram.png') });

  console.log('7. Inspecting Stage 2 in Activity 4...');
  const stage2Pill = page.locator('button:has-text("Stage 2")').first();
  if (await stage2Pill.count() > 0) {
    await stage2Pill.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(screenshotDir, '07_activity4_stage2_inspect.png') });
  }

  console.log('8. Scrolling to Activity 4 Water Quality Analytics...');
  const analyticsSection = page.locator('#module-analytics');
  if (await analyticsSection.count() > 0) {
    await analyticsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotDir, '08_activity4_water_analytics.png') });
  }

  console.log('9. Scrolling to Activity 4 Campus Reuse & Blueprint...');
  const blueprintSection = page.locator('#module-blueprint');
  if (await blueprintSection.count() > 0) {
    await blueprintSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotDir, '09_activity4_campus_blueprint.png') });
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
