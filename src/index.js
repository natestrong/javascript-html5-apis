import '../assets/css/style.css';
import fp from 'lodash/fp';
const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript HTML5 APIs</h1>';
app.innerHTML = `
  <h1>JavaScript HTML5 APIs</h1>
  <div class='uploader'>
    <div class='dragme' draggable='true' id='dragEl'></div>
    <div class='dropzone'>🎯 Drag Here!</div>
  </div>
  <style>
  .uploader {
    box-sizing: border-box;
    max-width: 90%;
    border-radius: 10px;
    border-bottom: 3px solid #d2d5da;
    margin: 25px auto;
    padding: 25px;
    background: #fff;
  }
  .dragme {
    background: #ce1f99;
    border-radius: 5px;
    width: 50px;
    height: 50px;
  }
  .dropzone {
    border-radius: 5px;
    margin-top: 25px;
    padding: 25px;
    border: 2px dashed #d2d5da;
    background: #f1f2f5;
  }
  .active {
    background: #ebfff6;
    border-color: #24b373;
  }
  </style>
`;
function init() {
    const dragme = document.querySelector('.dragme');
    const dropzone = document.querySelector('.dropzone');
    dragme.addEventListener('dragstart', fp.pipe(setDragData));
    dropzone.addEventListener('dragenter', addActiveStyle);
    dropzone.addEventListener('dragleave', removeActiveStyle);
    dropzone.addEventListener('dragover', fp.pipe(preventDefault, onDragOver));
    dropzone.addEventListener('drop', fp.pipe(preventDefault, stopPropagation, removeActiveStyle, appendDroppedElement));
}
function setDragData(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    return event;
}
function appendDroppedElement(event) {
    const id = event.dataTransfer.getData('text/plain');
    const el = document.getElementById(id);
    event.target.append(el);
}
function addActiveStyle({ target }) {
    target.classList.add('active');
}
function removeActiveStyle(event) {
    event.target.classList.remove('active');
    return event;
}
function preventDefault(event) {
    event.preventDefault();
    return event;
}
function stopPropagation(event) {
    event.stopPropagation();
    return event;
}
function onDragOver(event) {
    event.dataTransfer.dropEffect = 'copy';
}
// if div element has the draggable property, it is supported by the browser
if ('draggable' in document.createElement('div')) {
    init();
}
