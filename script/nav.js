const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
if (bar){
    bar.addEventListener('click', () => {
        menu.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}