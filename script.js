const jseditor = document.querySelector(`textarea[name='js-input']`);
const preview = document.querySelector('.output').contentWindow.document;
jseditor.addEventListener('change', (e) => {
    if (preview.querySelector('.rendered-js')) {
        preview.querySelector('.rendered-js').remove();
    }
    const jscode = preview.createElement('script');
    jscode.classList.add('rendered-js');
    jscode.appendChild(preview.createTextNode(`${e.target.value}`));
    preview.body.appendChild(jscode);
});