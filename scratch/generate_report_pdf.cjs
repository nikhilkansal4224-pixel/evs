const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function generatePDF() {
  const htmlPath = path.resolve(__dirname, '../EVS_Complete_Project_Report_Activity_3_and_4.html');
  const pdfPath = path.resolve(__dirname, '../EVS_Complete_Project_Report_Activity_3_and_4.pdf');

  // Copy .doc to .html if not exists
  const docPath = path.resolve(__dirname, '../EVS_Complete_Project_Report_Activity_3_and_4.doc');
  if (!fs.existsSync(htmlPath)) {
    fs.copyFileSync(docPath, htmlPath);
  }

  console.log('Launching Chromium...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Loading report HTML into page...');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '20mm',
      right: '20mm'
    },
    printBackground: true,
    displayHeaderFooter: false
  });

  console.log('PDF successfully created at:', pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log('File size:', (stats.size / (1024 * 1024)).toFixed(2), 'MB');

  await browser.close();
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
