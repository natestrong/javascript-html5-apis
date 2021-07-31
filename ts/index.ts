import './assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript HTML5 APIs</h1>
  <div style="display: none;" data-cookie>
    <p>Would you like a cookie? 🍪</p>
    <button type="button" data-cookie-accept>Yes</button>
    <button type="button" data-cookie-reject>No</button>
  </div>
`;

const cookie = document.querySelector<HTMLElement>('[data-cookie]');
const accept = cookie.querySelector('[data-cookie-accept]');
const reject = cookie.querySelector('[data-cookie-reject]');

const showCookie = () => (cookie.style.display = 'block');
const hideCookie = () => (cookie.style.display = 'none');

setTimeout(showCookie, 2000);

accept.addEventListener('click', () => {
    hideCookie();
    setValue('cookies', true);
});

reject.addEventListener('click', () => {
    hideCookie();
    setValue('cookies', false);
});

const ls = window.localStorage;

const setValue = (key, value) => {
    ls.setItem(key, JSON.stringify(value));
};
