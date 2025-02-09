// Connect Wallet (Solana)
async function connectWallet() {
    if (window.solana) {
        try {
            const response = await window.solana.connect();
            alert(`Connected: ${response.publicKey.toString()}`);
        } catch (err) {
            console.error(err);
        }
    } else {
        alert("Solana wallet not found! Install Phantom Wallet.");
    }
}

// Fetch Live Price from DexScreener API
async function fetchPrice() {
    const response = await fetch("https://api.dexscreener.io/latest/dex/pairs/solana/YOUR-TOKEN-ADDRESS");
    const data = await response.json();
    document.getElementById("price").innerText = `$${data.pairs[0].priceUsd}`;
}

// Load Roadmap from JSON
const roadmapData = [
    "🚀 Launch on Pump.fun",
    "🔥 First Meme Contest",
    "📈 CEX Listing",
    "🏛️ DAO Governance"
];

document.addEventListener("DOMContentLoaded", function() {
    fetchPrice();
    const roadmapList = document.getElementById("roadmap-list");
    roadmapData.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        roadmapList.appendChild(li);
    });
});
