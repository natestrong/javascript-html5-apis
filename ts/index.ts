import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;

const init = async () => {
    const permission = await Notification.requestPermission();

    switch (permission) {
        case 'default':
            console.log('Neither granted nor denied');
            break;
        case 'denied':
            console.log('Permission granted!');
            break;
        case 'granted':
            alert('Coolio!');
            break;
    }
};

if ('Notification' in window) {
    init();
}
