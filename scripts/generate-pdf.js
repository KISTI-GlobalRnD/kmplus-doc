const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
    console.log('🚀 PDF 생성을 시작합니다...\n');

    const baseUrl = 'https://hwhawork.github.io/kmplus-manual/';
    const outputPath = path.join(__dirname, '..', 'kmplus-manual.pdf');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();

        // 페이지 크기 설정
        await page.setViewport({
            width: 1200,
            height: 800,
            deviceScaleFactor: 2,
        });

        console.log('📄 페이지를 로드하는 중...');
        await page.goto(baseUrl, {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        // 불필요한 요소 숨기기
        await page.evaluate(() => {
            const elementsToHide = [
                '.navbar',
                '.theme-doc-sidebar-container',
                'nav[aria-label="breadcrumbs"]',
                '.breadcrumbs',
                'footer',
                '.theme-doc-footer',
                '.pagination-nav',
                '.theme-back-to-top-button',
            ];

            elementsToHide.forEach((selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((el) => {
                    if (el) el.style.display = 'none';
                });
            });

            // 메인 콘텐츠만 표시
            const article = document.querySelector('article');
            if (article) {
                article.style.maxWidth = '100%';
                article.style.padding = '20px';
            }
        });

        console.log('📑 PDF로 변환하는 중...');

        // PDF 생성
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '15mm',
                bottom: '20mm',
                left: '15mm',
            },
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
                    <span>KnowledgeMatrix Plus Manual</span>
                </div>
            `,
            footerTemplate: `
                <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
                    <span class="pageNumber"></span> / <span class="totalPages"></span>
                </div>
            `,
        });

        console.log(`✅ PDF 생성 완료: ${outputPath}\n`);
    } catch (error) {
        console.error('❌ PDF 생성 중 오류 발생:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

generatePDF();
