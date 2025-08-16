// Add any JavaScript you need for interactivity here.
// For example, you could add click event listeners to the boxes.

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        alert(`You clicked on ${box.querySelector('span').textContent}`);
    });
});

document.querySelectorAll('.foot-box').forEach(box => {
    box.addEventListener('click', () => {
        alert(`You clicked on ${box.querySelector('span').textContent}`);
    });
});

document.querySelectorAll('.head-box').forEach(box => {
    box.addEventListener('click', () => {
        alert(`You clicked on ${box.querySelector('span').textContent}`);
    });
});