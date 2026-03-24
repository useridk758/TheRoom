const input = document.getElementById('main-input');
const btn = document.getElementById('launch-btn');
const ownerPanel = document.getElementById('owner-panel');
const exitBtn = document.getElementById('exit-panel');

// Portal Launch Logic
btn.addEventListener('click', () => {
    const url = input.value;
    if (url && typeof __uv$config !== 'undefined') {
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else {
        alert("Enter a valid target.");
    }
});

// Secret Key Combination (Ctrl + B)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        
        // Simple authentication check
        const access = prompt("Enter Administration Key:");
        if (access === "1234") { // Replace '1234' with your actual secret password
            ownerPanel.classList.remove('hidden');
        } else {
            alert("Access Denied.");
        }
    }
});

// Close Console
exitBtn.addEventListener('click', () => {
    ownerPanel.classList.add('hidden');
});

function adminCmd(type) {
    console.log(`Executing admin command: ${type}`);
    alert(`Command [${type}] sent to local service.`);
}
