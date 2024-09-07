const contentStart = `<br><br><br>`;
const contentEnd = ``;

export function postend() {
    const articleContainer = document.querySelector('#article-container');
    const links = document.querySelectorAll('#article-container.post-content a');
    const postend = document.createElement('div');
    postend.classList.add('postend');
    postend.innerHTML = `<p>${contentStart}</p>`;

    links.forEach(link => {
        const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
        const isImageLink = imageExtensions.test(link.href);
        const isNotFromCurrentDomain = !link.href.startsWith(window.location.origin);
        
        if (link.textContent !== undefined && isNotFromCurrentDomain) {
            // filter if link is duplicated
            if (postend.querySelector(`a[href="${link.href}"]`)) return;

            const siteTitle = isImageLink ? '圖片來源' : `網站來源：${link.textContent}`;
            const siteDescription = link.href;
            const icon = isImageLink ? 'fas fa-image' : 'fas fa-globe';
            const card = createLinkCard(link, siteTitle, siteDescription, icon);
            postend.appendChild(card);
            articleContainer.appendChild(postend);
        }
    });

    postend.innerHTML += `<p>${contentEnd}</p>`;
}

function createLinkCard(link, siteTitle, siteDescription, icon) {
    const card = document.createElement('div');
    card.classList.add('anzhiyu-tag-link');
    card.innerHTML = `
        <a class="tag-Link" target="_blank" href="${link.href}" rel="external nofollow noreferrer">
            <div class="tag-link-bottom">
                <div class="tag-link-left">
                    <i class='${icon}'></i>
                </div>
                <div class="tag-link-right">
                    <div class="tag-link-title">${siteTitle}</div>
                    <div class="tag-link-sitename">${siteDescription}</div>
                </div>
                <i class="fas fa-angle-right"></i>
            </div>
        </a>
    `;
    return card;
}