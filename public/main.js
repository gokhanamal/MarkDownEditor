
const textEditor = document.querySelector('.text-editor');
const preview = document.querySelector('.preview');

const converter = new showdown.Converter()

textEditor.addEventListener('keyup', ({ keyCode, target }) => {
    renderView(target.value);
    window.localStorage.setItem('textEditor', target.value);
})

const renderView = (value) => {
    const html = converter.makeHtml(value);
    preview.innerHTML = html;
}

const storedTextEditor = window.localStorage.getItem('textEditor');

if(storedTextEditor && storedTextEditor != '') {
    textEditor.value = storedTextEditor;
    renderView(storedTextEditor);
}
