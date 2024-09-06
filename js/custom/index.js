import { onSiteLoaded } from './utils.js';
import { disableDevTools } from './disable-devtools.js';
import { tocNumber } from './toc-number.js';
import { codePreview } from './code-preview.js';
import { codeLangTranslator } from './code-lang-translator.js';
import { imageCaption } from './image-caption.js';
import { postend } from './postend.js';

onSiteLoaded(() => {
    tocNumber();
    codePreview();
    codeLangTranslator();
    imageCaption();
    postend();

    if (location.hostname === "localhost") {
        console.log(`DevTools enabled for ${location.hostname}.`);
    } else {
        disableDevTools();
        console.log("DevTools disabled.");
    }
})
