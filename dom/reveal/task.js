// Функция для проверки видимости элемента
function isElementVisible(element) {
    const elementRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Элемент считается видимым, когда его верхняя граница выше нижней границы окна
    // и нижняя граница элемента ниже верхней границы окна
    return (
        elementRect.top <= windowHeight * 0.85 && // 85% от высоты окна для раннего появления
        elementRect.bottom >= 0
    );
}

// Функция для показа элементов при прокрутке
function handleScroll() {
    const revealElements = document.querySelectorAll('.reveal:not(.reveal_active)');
    
    revealElements.forEach(element => {
        if (isElementVisible(element)) {
            element.classList.add('reveal_active');
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем видимые элементы при загрузке
    handleScroll();
    
    // Добавляем обработчик прокрутки
    window.addEventListener('scroll', handleScroll);
    
    // Также проверяем при изменении размера окна
    window.addEventListener('resize', handleScroll);
});

// Оптимизация: throttle для частых событий прокрутки
/*
let isThrottled = false;
window.addEventListener('scroll', () => {
    if (!isThrottled) {
        isThrottled = true;
        handleScroll();
        setTimeout(() => {
            isThrottled = false;
        }, 100);
    }
});
*/
