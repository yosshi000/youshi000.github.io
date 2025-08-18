document.addEventListener('DOMContentLoaded', () => {
    const timeMessageElement = document.getElementById('time-message');
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        timeMessageElement.textContent = 'おはようございます！';
    } else if (currentHour >= 12 && currentHour < 18) {
        timeMessageElement.textContent = 'こんにちは！';
    } else {
        timeMessageElement.textContent = 'こんばんは！';
    }
});
