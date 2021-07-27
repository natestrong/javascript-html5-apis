import './assets/css/style.css';
const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;
const init = () => {
    console.log('Yay Notifications!');
};
if ('Notification' in window) {
    init();
}
