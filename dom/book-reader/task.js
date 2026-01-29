document.addEventListener('DOMContentLoaded', function() {
    // Находим контейнер управления размером шрифта
    const fontSizeControl = document.querySelector('.book__control_font-size');
    
    if (!fontSizeControl) return;
    
    // Находим все кнопки изменения размера шрифта
    const fontSizeButtons = fontSizeControl.querySelectorAll('.font-size');
    
    // Находим элемент книги
    const bookElement = document.getElementById('book');
    
    // Добавляем обработчики событий для каждой кнопки
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Предотвращаем переход по ссылке
            event.preventDefault();
            
            // Снимаем класс активности со всех кнопок
            fontSizeButtons.forEach(btn => {
                btn.classList.remove('font-size_active');
            });
            
            // Добавляем класс активности нажатой кнопке
            this.classList.add('font-size_active');
            
            // Получаем требуемый размер из data-атрибута
            const targetSize = this.dataset.size;
            
            // Удаляем все классы размера шрифта у книги
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
            
            // Добавляем соответствующий класс
            if (targetSize === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (targetSize === 'big') {
                bookElement.classList.add('book_fs-big');
            }
            // Если targetSize не определен (средний размер) - ничего не добавляем
        });
    });
});
