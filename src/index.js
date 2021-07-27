import '../assets/css/style.css';
const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;
const init = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
    }
    new Notification('Hi frand', {
        body: 'Hello my dear good frand🦄.',
        icon: 'https://cdn.dribbble.com/users/719060/screenshots/4785335/messi.jpg?compress=1&resize=400x300',
    });
};
if ('Notification' in window) {
    init();
}
