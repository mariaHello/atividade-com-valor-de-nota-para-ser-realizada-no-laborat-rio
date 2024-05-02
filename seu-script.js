const promoItems = document.querySelectorAll('.promo-item');
let currentPromoIndex = 0;

function showPromo(index) {
    promoItems.forEach(item => item.style.display = 'none');
    promoItems[index].style.display = 'block';
}

function changePromo(step) {
    currentPromoIndex += step;
    if (currentPromoIndex < 0) {
        currentPromoIndex = promoItems.length - 1;
    } else if (currentPromoIndex >= promoItems.length) {
        currentPromoIndex = 0;
    }
    showPromo(currentPromoIndex);
}

// Mostra a primeira promoção ao carregar a página
showPromo(currentPromoIndex);

// Adiciona event listeners para os botões de navegação
document.querySelector('.prev').addEventListener('click', () => changePromo(-1));
document.querySelector('.next').addEventListener('click', () => changePromo(1));
