document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация меню
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
  
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Активный фильтр
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
  
        // Фильтрация
        const category = this.dataset.category;
        menuItems.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    // Добавление в заказ (пример)
    const addButtons = document.querySelectorAll('.menu-item__btn');
    addButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const item = this.closest('.menu-item');
        const title = item.querySelector('.menu-item__title').textContent;
        alert(`Добавлено: ${title}`);
      });
    });
  });