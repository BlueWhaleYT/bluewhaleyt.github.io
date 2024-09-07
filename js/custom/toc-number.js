export function tocNumber() {
    addTocNumberForHeadings();
    addNumberingForListItems();

    function addTocNumberForHeadings() {
        const headings = document.querySelectorAll("#article-container :is(h1, h2, h3, h4, h5, h6)");
        numberElements(headings, (heading, level, counter) => {
            const prefix = `<span class='toc-number'>` + counter.slice(0, level).join('.') + '. ' + '</span>';
            heading.innerHTML = prefix + heading.textContent;
        });
    }

    function addNumberingForListItems() {
        const orderedLists = document.querySelectorAll("#toc-content ol.toc");

        orderedLists.forEach(ol => {
            const items = ol.querySelectorAll("li.toc-item");
            numberElements(items, (li, level, levels) => {
                const tocText = li.querySelector('.toc-text');
                if (tocText) {
                    const prefix = `<span class='toc-number'>` + levels.slice(0, level).join('.') + '. ' + `</span>`;
                    tocText.innerHTML = prefix + tocText.textContent;
                }
            }, true);
        });
    }

    function numberElements(elements, callback, isList = false) {
        const counter = isList ? [] : [];

        elements.forEach(element => {
            const level = isList ?
                (Array.from(element.classList).find(cls => cls.startsWith('toc-level-')) ? parseInt(Array.from(element.classList).find(cls => cls.startsWith('toc-level-')).split('-')[2]) : 1) :
                parseInt(element.tagName.charAt(1));

            counter[level - 1] = (counter[level - 1] || 0) + 1;

            callback(element, level, counter);

            for (let i = level; i < counter.length; i++) {
                counter[i] = 0;
            }
        });
    }
}