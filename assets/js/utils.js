export const onSiteLoaded = function (callback) {
    document.addEventListener('pjax:complete', () => {
        callback();
    });
    window.onload = function () {
        callback();
    }
}