const time = document.querySelector('.localTime');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let myDate = new Date();

        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };

        let formattedTime = "";
        let flag = "";

        if (e.target.id === 'Pakistan') {
            formattedTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Karachi' }).format(myDate);
            flag = "url('https://flagcdn.com/pk.svg')";
        } else if (e.target.id === 'Turkey') {
            formattedTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Istanbul' }).format(myDate);
            flag = "url('https://flagcdn.com/tr.svg')";
        } else if (e.target.id === 'Russia') {
            formattedTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Moscow' }).format(myDate);
            flag = "url('https://flagcdn.com/ru.svg')";
        } else if (e.target.id === 'Canada') {
            formattedTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Toronto' }).format(myDate);
            flag = "url('https://flagcdn.com/ca.svg')";
        } else if (e.target.id === 'USA') {
            formattedTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(myDate);
            flag = "url('https://flagcdn.com/us.svg')";
        }

        time.innerHTML = `${e.target.id}: ${formattedTime}`;

        // Smooth background slide
        document.body.style.setProperty("--new-flag", flag);
        document.body.style.backgroundImage = flag;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });
});
