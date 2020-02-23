const preview = document.querySelector('iframe.output').contentWindow.document;
const codeInput = Array.from(document.getElementsByClassName(`code__input`));



codeInput.forEach((input) => {
    input.addEventListener('change', (e) => {
        const language = e.target.dataset.language;
        const code = e.target.value
        switch(language) {
            case 'html':
                if (preview.querySelector('.rendered-html')) {
                    preview.querySelector('.rendered-html').remove();
                }
                const htmlCode = preview.createElement('div');
                htmlCode.classList.add('rendered-html');
                htmlCode.innerHTML = code;
                try {
                    preview.body.insertBefore(htmlCode, querySelector('.rendered-js'));
                } catch(err) {
                    preview.body.appendChild(htmlCode);
                }
                break;
            case 'css':
                if (preview.querySelector('.rendered-css')) {
                    preview.querySelector('.rendered-css').remove();
                }
                const cssCode = preview.createElement('style');
                cssCode.classList.add('rendered-css');
                cssCode.appendChild(preview.createTextNode(code));
                preview.head.appendChild(cssCode);
                break;
            case 'js':
                if (preview.querySelector('.rendered-js')) {
                    preview.querySelector('.rendered-js').remove();
                }
                const jsCode = preview.createElement('script');
                jsCode.classList.add('rendered-js');
                jsCode.appendChild(preview.createTextNode(code));
                preview.body.appendChild(jsCode);
                break;
            default:
                console.log('Language is not defined');
                break;
        }
    });
});