import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript HTML5 APIs</h1>';

if ('draggable' in document.createElement('div')) {
    init();
}

function init() {

}
