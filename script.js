const artikelWrapper = document.querySelector('.artikel-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    artikelWrapper.scrollLeft -= 300;
});

nextBtn.addEventListener('click', () => {
    artikelWrapper.scrollLeft += 300;
});

let isDragging = false;
let startX, scrollLeft;

artikelWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - artikelWrapper.offsetLeft;
    scrollLeft = artikelWrapper.scrollLeft;
});

artikelWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
});

artikelWrapper.addEventListener('mouseup', () => {
    isDragging = false;
});

artikelWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - artikelWrapper.offsetLeft;
    const walk = (x - startX) * 1.5;
    artikelWrapper.scrollLeft = scrollLeft - walk;
});
