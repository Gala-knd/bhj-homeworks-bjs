document.addEventListener('DOMContentLoaded', function() {
    // Находим все выпадающие списки
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        
        // Клик по значению - открыть/закрыть список
        value.addEventListener('click', function() {
            list.classList.toggle('dropdown__list_active');
        });
        
        // Клик по пункту меню
        const items = dropdown.querySelectorAll('.dropdown__item');
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); // отменяем переход по ссылке
                
                // Устанавливаем новое значение
                const link = this.querySelector('.dropdown__link');
                value.textContent = link.textContent;
                
                // Закрываем список
                list.classList.remove('dropdown__list_active');
            });
        });
        
        // Закрытие при клике вне dropdown
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});
