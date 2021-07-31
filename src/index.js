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
const removeItem = (key) => {
    ls.removeItem(key);
};
const empty = () => {
    ls.clear();
};
setValue('cookies', true);
const choice = getValue('cookies');
console.log(choice);
setTimeout(() => removeItem('cookies'), 2000);
setValue('name', 'Todd Motto');
setTimeout(() => empty(), 4000);
