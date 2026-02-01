//Modal stuff
const pictures = document.querySelector('.pictures');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

pictures.addEventListener('click', openModal);

function openModal(e) { 
    const img = e.target;

    const src =img.getAttribute('src');
    const alt =img.getAttribute('src');

    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}


closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// menu button stuff
let btn = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hidden');
    btn.classList.toggle('change')
}