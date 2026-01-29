let deadCounter = 0;
let lostCounter = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function resetGame() {
    deadCounter = 0;
    lostCounter = 0;
    document.getElementById('dead').textContent = deadCounter;
    document.getElementById('lost').textContent = lostCounter;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        if (hole.className.includes('hole_has-mole')) {
            deadCounter++;
            document.getElementById('dead').textContent = deadCounter;
            hole.classList.remove('hole_has-mole');
        } else {
            lostCounter++;
            document.getElementById('lost').textContent = lostCounter;
        }
        
        if (deadCounter === 10) {
            alert('Победа! Вы убили 10 кротов!');
            resetGame();
        }
        
        if (lostCounter === 5) {
            alert('Вы проиграли! 5 промахов.');
            resetGame();
        }
    };
}
