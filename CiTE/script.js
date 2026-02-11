const messages = [
    "Ти — моє натхнення кожного дня. Я ціную твою посмішку понад усе на світі!",
    "Пам'ятаєш цей момент? Тут я зрозумів, що ти — та сама особлива людина.",
    "Твоя доброта не має меж. Дякую, що ти є в моєму житті!",
    "З тобою навіть звичайна прогулянка стає неймовірною пригодою.",
    "Я люблю тебе за твій сміх, за твої очі та за те, як ти мене розумієш.",
    "Ти — мій найкращий вибір у житті. Будьмо щасливі разом завжди!"
];

// Логіка кнопки "НІ"
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Перехід до сердечок
const yesBtn = document.getElementById('yes-btn');
yesBtn.addEventListener('click', () => {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    renderHearts();
});

// Рендер 6 сердечок
function renderHearts() {
    const grid = document.querySelector('.hearts-grid');
    for (let i = 1; i <= 6; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-item';
        heart.innerHTML = '❤️';
        heart.onclick = () => openValentine(i);
        grid.appendChild(heart);
    }
}

// Відкриття валентинки
function openValentine(id) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');
    
    modalImg.src = `photo${id}.jpg`;
    modalText.innerText = messages[id-1];
    
    modal.classList.remove('hidden');
}

// Закриття
document.querySelector('.close-btn').onclick = () => {
    document.getElementById('modal').classList.add('hidden');
};