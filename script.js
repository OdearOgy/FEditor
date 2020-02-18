const jseditor = document.querySelector(`textarea[name='js-input']`);


jseditor.addEventListener('change', () => {
    let jscode = jseditor.value;

    const preview = document.getElementById('out');

    preview.textContent = jscode;

})