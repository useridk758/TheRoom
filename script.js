const input = document.getElementById('entry-field');
const btn = document.getElementById('open-btn');

btn.addEventListener('click', () => {
    const destination = input.value;
    if (destination) {
        // Uses the internal engine to navigate without trigger words
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(destination);
    }
});

function loadItem(path) {
    const display = document.createElement('iframe');
    display.src = path;
    display.className = "full-view";
    document.body.innerHTML = '';
    document.body.appendChild(display);
}
