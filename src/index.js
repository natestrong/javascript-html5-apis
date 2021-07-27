import '../assets/css/style.css';
const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;
const init = () => {
    Notification.requestPermission().then(console.log);
};
if ('Notification' in window) {
    init();
}
