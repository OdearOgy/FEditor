const preview = document.querySelector('iframe.output').contentWindow.document;
const codeInput = Array.from(document.getElementsByClassName(`code__input`));

codeInput.forEach((input) => {
	input.addEventListener('change', (e) => {
		const language = e.target.dataset.language;
		const code = e.target.value;
		let props = {};

		switch (language) {
			case 'html':
				props = {
					lang: 'html',
					elm: 'div',
					elmParent: 'body',
					doc: preview,
					val: code,
				};
				break;
			case 'css':
				props = {
					lang: 'css',
					elm: 'style',
					elmParent: 'head',
					doc: preview,
					val: code,
				};
				break;
			case 'js':
				props = {
					lang: 'js',
					elm: 'script',
					elmParent: 'body',
					doc: preview,
					val: code,
				};
				break;
			default:
				console.log('Language is not defined');
				break;
		}
		renderCode(props);
	});
});

function renderCode(props) {
	const { lang, elm, elmParent, doc, val } = props;

	if (doc.querySelector(`.rendered-${lang}`)) {
		doc.querySelector(`.rendered-${lang}`).remove();
	}

	const renderedCode = doc.createElement(`${elm}`);
	renderedCode.classList.add(`rendered-${lang}`);

	if (lang === 'html') {
		renderedCode.innerHTML = val;
		try {
			doc[elmParent].insertBefore(renderedCode, doc.querySelector('.rendered-js'));
		} catch (err) {
			doc[elmParent].appendChild(renderedCode);
		}
	} else {
		renderedCode.appendChild(doc.createTextNode(val));
		doc[elmParent].appendChild(renderedCode);
	}
}
