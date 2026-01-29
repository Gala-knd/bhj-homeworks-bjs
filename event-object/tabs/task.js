document.addEventListener('DOMContentLoaded', function() {
    // Находим все контейнеры с вкладками
    const tabNavigations = document.querySelectorAll('.tab__navigation');
    
    tabNavigations.forEach(navigation => {
        const tabs = navigation.querySelectorAll('.tab');
        const contents = navigation.nextElementSibling.querySelectorAll('.tab__content');
        
        // Добавляем обработчики для каждой вкладки
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Снимаем активность со всех вкладок и содержимого
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));
                
                // Активируем выбранную вкладку и её содержимое
                tab.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});
