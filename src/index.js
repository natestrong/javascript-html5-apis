import '../assets/css/style.css';
const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript HTML5 APIs</h1>';
console.log(window.localStorage.constructor === Storage);
console.log(window.sessionStorage.constructor === Storage);
console.log(typeof Storage === 'function');
console.log(!!(typeof Storage === 'function' && window.localStorage));
