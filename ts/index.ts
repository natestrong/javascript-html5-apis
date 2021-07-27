import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;

const init = async () => {
    const permission = await Notification.requestPermission();
};

if ('Notification' in window) {
    init();
}
