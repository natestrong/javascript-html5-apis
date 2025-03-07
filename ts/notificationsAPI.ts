import '../assets/css/style.css';

const ICON = 'https://cdn.dribbble.com/users/719060/screenshots/4785335/messi.jpg?compress=1&resize=400x300';

const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;

const init = async () => {
    await Notification.requestPermission();

    notify('hi frands', 'coolio', onNotificationClick);
};

function notify(title:string, body:string, onClickCb):Notification {
    if (Notification.permission !== 'granted') return;
    const notification = new Notification(title, {body, icon:ICON});
    notification.onclick = onClickCb;
    return notification;
}

function onNotificationClick(notificationEvent:Event) {
    console.log(notificationEvent);
    (notificationEvent.target as Notification).close();
    window.parent.focus();
}


if ('Notification' in window) {
    init();
}
