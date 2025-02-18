// Управление музыкой
const music = document.getElementById('backgroundMusic');
const playButton = document.getElementById('playButton');

// Восстанавливаем состояние музыки и время из localStorage
const musicState = localStorage.getItem('musicState');
const savedTime = localStorage.getItem('savedTime');

if (musicState === 'playing') {
    music.currentTime = savedTime ? parseFloat(savedTime) : 0;
    music.play();
    playButton.textContent = '⏸️ Выключить музыку';
} else {
    music.currentTime = savedTime ? parseFloat(savedTime) : 0;
}

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playButton.textContent = '⏸️ Выключить музыку';
        localStorage.setItem('musicState', 'playing'); // Сохраняем состояние
    } else {
        music.pause();
        playButton.textContent = '▶️ Включить музыку';
        localStorage.setItem('musicState', 'paused'); // Сохраняем состояние
    }
});

// Сохраняем текущее время песни при изменении
music.addEventListener('timeupdate', () => {
    localStorage.setItem('savedTime', music.currentTime); // Сохраняем текущее время
});

// Генерация сердечек
const heartsContainer = document.querySelector('.hearts-container');

if (heartsContainer) {
    // Массив разных сердечек
    const heartsContainer = document.querySelector('.hearts-container');

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = Math.random() * (50 - 20) + 20 + 'px';
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.top = '-50px';
            heart.style.animationTimingFunction = 'linear';
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }

        setInterval(createHeart, 300);


}

// Анимация на валентинке
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const settings = {
    particleGap: isMobile ? 7 : 7,
    particleSize: isMobile ? 2 : 2,
    mouseForce: 5,
    noise: 19,
    layerCount: isMobile ? 3 : 3,
    layerDistance: 5.7,
    heartBeat: true,
    beatStrength: 172
};

const heart = new NextParticle({
    renderer: 'webgl',
    image: document.querySelector('#valentines'),
    width: window.innerWidth,
    height: window.innerHeight,
    particleGap: settings.particleGap,
    particleSize: settings.particleSize,
    mouseForce: settings.mouseForce,
    noise: settings.noise,
    layerCount: settings.layerCount,
    layerDistance: settings.layerDistance
});

function redraw() {
    heart.particleGap = settings.particleGap;
    heart.particleSize = settings.particleSize;
    heart.mouseForce = settings.mouseForce;
    heart.noise = settings.noise;
    heart.layerCount = settings.layerCount;
    heart.layerDistance = settings.layerDistance;
    heart.width = window.innerWidth;
    heart.height = window.innerHeight;

    heart.start({
        initPosition: 'none',
        initDirection: 'none'
    });
};



window.addEventListener('resize', redraw);

setInterval(() => {
    if (settings.heartBeat) {
        const strength = settings.beatStrength;
        heart.origins.map(o => o.z -= strength);
        setTimeout(() => {
            heart.origins.map(o => o.z += strength);
        }, isMobile ? 200 : 100);
    }
}, isMobile ? 2500 : 1500);
