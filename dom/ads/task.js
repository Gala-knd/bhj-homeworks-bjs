document.addEventListener('DOMContentLoaded', function() {
    // Находим все ротаторы на странице
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
        // Находим все варианты текстов внутри ротатора
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let currentIndex = 0;
        
        // Функция для переключения текстов
        function switchCase() {
            // Убираем активный класс у текущего элемента
            cases[currentIndex].classList.remove('rotator__case_active');
            
            // Переходим к следующему элементу
            // Если достигли конца массива - возвращаемся к началу
            currentIndex++;
            if (currentIndex >= cases.length) {
                currentIndex = 0;
            }
            
            // Добавляем активный класс новому элементу
            cases[currentIndex].classList.add('rotator__case_active');
        }
        
        // Запускаем смену текстов каждую секунду
        setInterval(switchCase, 1000);
    });
});
