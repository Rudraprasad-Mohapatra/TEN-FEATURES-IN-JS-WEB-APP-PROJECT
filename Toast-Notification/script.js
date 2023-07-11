const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
});

const createNotification = () => {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    container.appendChild(notif);
    notif.innerText = "This challenge is crazy!"
    setTimeout(() => {
        notif.remove();
    }, 3000);

}