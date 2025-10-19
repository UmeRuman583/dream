const motivationalQuotes = [
    "Be Unstoppable. Your dreams are the blueprint of your destiny.",
    "Dream Bigger. The universe conspires to make your visions reality.",
    "Stay Fearless. Every great journey begins with a single dream.",
    "Believe Limitlessly. Your imagination is the preview of life's coming attractions.",
    "Rise Higher. Dreams don't work unless you do.",
    "Chase Excellence. The future belongs to those who believe in their dreams.",
    "Create Magic. Your dreams are messages from your soul.",
    "Think Boundless. What you dream, you can achieve.",
    "Ignite Passion. Dreams are today's answers to tomorrow's questions.",
    "Embrace Change. Transformation begins with a dream."
];

function showInputSection() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('inputSection').style.display = 'block';
}

function generateDream() {
    const input = document.getElementById('dreamInput').value.trim();
    if (!input) {
        alert('Please describe your dream first!');
        return;
    }

    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('loadingSection').style.display = 'block';

    setTimeout(() => {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        document.getElementById('motivationalText').textContent = `"${randomQuote}"`;
        document.getElementById('loadingSection').style.display = 'none';
        document.getElementById('resultSection').style.display = 'block';
    }, 3000);
}

function toggleMic() {
    alert('Voice input feature - In production, this would activate speech recognition!');
}

function shareDream() {
    alert('Share functionality - In production, this would open share options!');
}

function downloadDream() {
    alert('Download started! In production, this would save your dream as an image or PDF.');
}

function createNew() {
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('dreamInput').value = '';
}
