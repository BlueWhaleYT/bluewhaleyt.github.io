export function codeLangTranslator() {
    const codeBlocks = document.querySelectorAll('figure.highlight');
    codeBlocks.forEach(block => {
        const toolbar = block.querySelector('.highlight-tools');
        const codeLang = toolbar.querySelector('.code-lang');
        let lang;

        switch (codeLang.textContent.toLowerCase()) {
            case 'js':
            case 'javascript':
                lang = 'JavaScript';
                break;
            case 'ts':
            case 'typescript':
                lang = 'TypeScript';
                break;
            case 'md':
            case 'mdx':
            case 'markdown':
                lang = 'Markdown';
                break;
            case 'htm':
            case 'html':
                lang = 'HTML';
                break;
            case 'kt':
            case 'kotlin':
                lang = 'Kotlin';
                break;
            case 'jav':
            case 'java':
                lang = 'Java';
                break;
            case 'py':
            case 'python':
                lang = 'Python';
                break;
            default:
                lang = codeLang.textContent.toUpperCase();
        }

        codeLang.innerHTML = `<i class="fa-solid fa-code"></i> ${lang}`;
    });
}