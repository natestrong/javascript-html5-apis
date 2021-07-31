import './assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript HTML5 APIs</h1>';

const ls = window.localStorage;

const setValue = (key, value) => {
    ls.setItem(key, JSON.stringify(value));
};

const getValue = (key) => {
    return JSON.parse(ls.getItem(key));
};

setValue('cookies', true);

const choice = getValue('cookies');
console.log(choice);
