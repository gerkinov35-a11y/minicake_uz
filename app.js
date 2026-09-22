document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cat-btn');
    const grids = document.querySelectorAll('.product-grid');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) return;

            // 1. Tugma active holatini almashtirish
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            // 2. Gridlarni almashtirish va animatsiyani qayta ishga tushirish
            grids.forEach(grid => {
                if (grid.getAttribute('data-content') === category) {
                    grid.style.display = 'flex';
                    // Animatsiyani noldan boshlash uchun reflow
                    const cards = grid.querySelectorAll('.product-card');
                    cards.forEach(card => {
                        card.style.animation = 'none';
                        card.offsetHeight; 
                        card.style.animation = '';
                    });
                    grid.classList.add('active-grid');
                } else {
                    grid.classList.remove('active-grid');
                    setTimeout(() => {
                        if (!grid.classList.contains('active-grid')) {
                            grid.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
});