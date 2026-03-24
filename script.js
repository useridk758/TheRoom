const games = [
    { name: "Slope", url: "https://example.com" },
    { name: "Minecraft", url: "https://example.com" }
];

function loadGames() {
    const container = document.getElementById('game-list');
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h4>${game.name}</h4><button onclick="window.open('${game.url}')">Play</button>`;
        container.appendChild(card);
    });
}

function launchProxy() {
    const url = document.getElementById('proxy-input').value;
    if (url) {
        // Point this to a public Ultraviolet or Rammerhead instance
        window.location.href = `https://your-proxy-instance.com{btoa(url)}`;
    }
}

window.onload = loadGames;
