function playSoundAndMusic() {
  // Получаем элементы аудио
  const sound = document.getElementById('sound');
  const music = document.getElementById('music');

  // Воспроизводим звук
  sound.play();

  // Ждём окончания звука перед воспроизведением музыки
  sound.onended = function() {
      music.play();
  };
}

// Получаем сохраненные голоса из localStorage
let harrisVotes = parseInt(localStorage.getItem('harrisVotes')) || 0;
let trumpVotes = parseInt(localStorage.getItem('trumpVotes')) || 0;

// Функция для расчета процента голосов
function calculatePercentage(votes, totalVotes) {
    return totalVotes ? Math.round((votes / totalVotes) * 100) : 0;
}

// Обновляем и отображаем результаты на странице
function updateResults() {
    let totalVotes = harrisVotes + trumpVotes;
    let harrisPercentage = calculatePercentage(harrisVotes, totalVotes);
    let trumpPercentage = 100 - harrisPercentage;

    document.getElementById('harris-votes').textContent = `${harrisPercentage}%`;
    document.getElementById('trump-votes').textContent = `${trumpPercentage}%`;

    // Устанавливаем процент для прогресс-бара
    document.getElementById('progress-fill').style.setProperty('--harris-percentage', `${harrisPercentage}%`);
}

// Функция для рандомного добавления голосов
function addRandomVotes() {
    // Добавляем случайное количество голосов (от 0 до 2) для каждого кандидата
    let randomHarrisVotes = Math.floor(Math.random() * 3);
    let randomTrumpVotes = Math.floor(Math.random() * 3);

    // Обновляем голоса и сохраняем в localStorage
    harrisVotes += randomHarrisVotes;
    trumpVotes += randomTrumpVotes;
    localStorage.setItem('harrisVotes', harrisVotes);
    localStorage.setItem('trumpVotes', trumpVotes);

    // Обновляем результаты
    updateResults();
}

// Обновляем результаты при загрузке страницы
updateResults();

// Устанавливаем интервал для рандомного добавления голосов (каждые 5-10 секунд)
setInterval(addRandomVotes, 50);

// Привязываем обработчики событий к кнопкам
document.querySelector('.blue-btn').addEventListener('click', function() {
    harrisVotes++;
    localStorage.setItem('harrisVotes', harrisVotes);
    updateResults();
});

document.querySelector('.red-btn').addEventListener('click', function() {
    trumpVotes++;
    localStorage.setItem('trumpVotes', trumpVotes);
    updateResults();
});
       // Получаем элементы для первого модального окна
       const openModal1 = document.getElementById('openModal1');
       const modalOverlay1 = document.getElementById('modalOverlay1');
       const closeModal1 = document.getElementById('closeModal1');


       // Получаем элементы для второго модального окна
       const openModal2 = document.getElementById('openModal2');
       const modalOverlay2 = document.getElementById('modalOverlay2');
       const closeModal2 = document.getElementById('closeModal2');

// Показать первое модальное окно
openModal1.addEventListener('click', () => {
    modalOverlay1.style.display = 'flex';
    setTimeout(() => {
        modalOverlay1.classList.add('show'); // Добавляем класс 'show' с задержкой
    }, 10);
});

// Закрыть первое модальное окно
closeModal1.addEventListener('click', () => {
    modalOverlay1.classList.remove('show'); // Убираем класс 'show'
    setTimeout(() => {
        modalOverlay1.style.display = 'none'; // Скрываем окно после анимации
    }, 300);
});

// Показать второе модальное окно
openModal2.addEventListener('click', () => {
    modalOverlay2.style.display = 'flex';
    setTimeout(() => {
        modalOverlay2.classList.add('show'); // Добавляем класс 'show' с задержкой
    }, 10);
});

// Закрыть второе модальное окно
closeModal2.addEventListener('click', () => {
    modalOverlay2.classList.remove('show'); // Убираем класс 'show'
    setTimeout(() => {
        modalOverlay2.style.display = 'none'; // Скрываем окно после анимации
    }, 300);
});
