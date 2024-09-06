export function codePreview() {
    // 獲取所有的 hljs 代碼塊
    const codeBlocks = document.querySelectorAll('figure.highlight');

    codeBlocks.forEach(block => {
        // const codeFileName = block.querySelector('figcaption span');

        // 檢查是否為 html 語言的代碼塊
        if (block.classList.contains('html')) {
            const codeLines = block.querySelectorAll('td.code span.line');
            let codeContent = '';

            codeLines.forEach(line => {
                codeContent += line.innerText + '\n';
            });

            if (codeContent.trim() === '') {
                return; // 如果內容為空，則不添加預覽
            }

            // 創建一個預覽的 iframe
            const previewIframe = document.createElement('iframe');
            previewIframe.className = 'html-preview'; // 可以給 iframe 加上類別，用來設置樣式
            previewIframe.style.width = '100%'; // 設置寬度
            previewIframe.style.maxHeight = '600px'; // 設置最大高度
            previewIframe.style.borderTop = '0px';
            previewIframe.style.borderBottom = 'var(--style-border-always)'
            previewIframe.style.borderLeft = 'var(--style-border-always)'
            previewIframe.style.borderRight = 'var(--style-border-always)'
            previewIframe.style.borderRadius = '0 0 12px 12px';
            previewIframe.style.margin = '0';
            previewIframe.style.overflow = 'hidden'; // 隱藏溢出的內容
            previewIframe.style.background = 'white';

            // 將 iframe 添加到代碼塊下方
            block.insertAdjacentElement('afterend', previewIframe); // 將這一行保留在後面
            
            // 獲取 iframe 的文檔並寫入 HTML 內容
            const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            margin: 0;
                            padding: 10px;
                        }
                    </style>
                </head>
                <body>
                    ${codeContent
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&amp;/g, '&')}
                </body>
                </html>
            `);
            iframeDoc.close();

            // 自動調整 iframe 高度
            previewIframe.onload = function () {
                // const body = iframeDoc.body;
                // const html = iframeDoc.documentElement;

                // 計算內容高度
                // const height = Math.min(Math.max(body.scrollHeight, html.scrollHeight), 600);
                // previewIframe.style.height = height + 'px'; // 設置 iframe 高度

                previewIframe.style.height = previewIframe.contentWindow.document.documentElement.scrollHeight + 'px';
            };
        }
    });
}