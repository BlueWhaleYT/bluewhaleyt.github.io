export function imageCaption() {
    const links = document.querySelectorAll('#article-container.post-content a');

    links.forEach(link => {
        const isNotFromCurrentDomain = !link.href.startsWith(window.location.origin);
        if (isNotFromCurrentDomain) {
            const caption = ` - <a href="${link.href}">外部圖片</a>`;
            const currentCaption = link.getAttribute('data-caption');
            const newCaption = currentCaption + caption;
            link.setAttribute('data-caption', newCaption);
    
            const img = link.querySelector('img');
            const imgAltDiv = document.querySelector('.img-alt');
            if (img) {
                img.alt = newCaption;
                imgAltDiv.innerHTML = newCaption;
            }
        }
    });
}