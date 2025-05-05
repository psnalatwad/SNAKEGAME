const musicSound = new Audio('music/music.mp3');
musicSound.play();

document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'game.html';
});


document.getElementById('exitButton').addEventListener('click', function() {
    window.close();
});