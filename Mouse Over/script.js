const normalbg = document.getElementById('normalbg');
const hoverImage = document.getElementById('hoverImage');

normalbg.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
    normalbg.style.display = 'none';
});

normalbg.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    normalbg.style.display = 'block';
})