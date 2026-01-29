const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let lastClickTime = Date.now();

cookie.onclick = function() {
    let clicks = parseInt(clickerCounter.textContent);
    clickerCounter.textContent = clicks + 1;
    
    if (cookie.width === 200) {
        cookie.width = 220;
        cookie.height = 140;
    } else {
        cookie.width = 200;
        cookie.height = 133;
    }
    
    const now = Date.now();
    const timeDiff = (now - lastClickTime) / 1000;
    const speed = 1 / timeDiff;
    
    clickerSpeed.textContent = speed.toFixed(2);
    lastClickTime = now;
};
