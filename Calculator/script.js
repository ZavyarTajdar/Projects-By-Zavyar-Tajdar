document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('clear')) {
                display.textContent = '0';
            } else if (button.classList.contains('equal')) {
                try {
                    display.textContent = eval(display.textContent);
                } catch (e) {
                    display.textContent = 'I Love You';
                }
            } else {
                if (display.textContent === '0') {
                    display.textContent = button.textContent;
                } else {
                    display.textContent += button.textContent;
                }
            }
        });
    });
});
