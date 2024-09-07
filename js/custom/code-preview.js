export function codePreview() {
    const codeBlocks = document.querySelectorAll('figure.highlight');

    codeBlocks.forEach(block => {
        // const codeFileName = block.querySelector('figcaption span');

        if (block.classList.contains('html')) {
            const codeLines = block.querySelectorAll('td.code span.line');
            let codeContent = '';

            codeLines.forEach(line => {
                codeContent += line.innerText + '\n';
            });

            if (codeContent.trim() === '') {
                return;
            }

            const previewIframe = document.createElement('iframe');
            previewIframe.className = 'html-preview';
            previewIframe.style.width = '100%';
            previewIframe.style.maxHeight = '600px';
            previewIframe.style.borderTop = '0px';
            previewIframe.style.borderBottom = 'var(--style-border-always)'
            previewIframe.style.borderLeft = 'var(--style-border-always)'
            previewIframe.style.borderRight = 'var(--style-border-always)'
            previewIframe.style.borderRadius = '0 0 12px 12px';
            previewIframe.style.margin = '0';
            previewIframe.style.overflow = 'hidden';
            previewIframe.style.background = 'white';

            block.insertAdjacentElement('afterend', previewIframe);
            
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

            previewIframe.onload = function () {
                previewIframe.style.height = previewIframe.contentWindow.document.documentElement.scrollHeight + 'px';
            };
        }
    });
}