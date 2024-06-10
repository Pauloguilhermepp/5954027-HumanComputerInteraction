const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function searchImage() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.pro');
    products.forEach(product => {
        const productName = product.querySelector('.des h5').innerText.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function showAlert() {
    alert("Item adicionado ao carrinho");
}

function showGoToThePaymentAlert() {
    alert("Sua compra foi concluída com sucesso!");
}
