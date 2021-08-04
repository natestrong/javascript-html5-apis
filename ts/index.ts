import './assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;

console.log(window.navigator.geolocation);

if ('geolocation' in navigator) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported!');
}
