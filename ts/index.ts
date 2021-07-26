import '../assets/css/style.css';
import fp from 'lodash/fp';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript HTML5 APIs</h1>';

app.innerHTML = `
  <h1>JavaScript HTML5 APIs</h1>
  <div class='uploader'>
    <h2>Upload Your Files 🦄</h2>
    <div class='dropzone'>📂 Drop GIFs here..</div>
    <div class='list' id='preview-list'></div>
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

const ALLOWED_FILE_TYPES = ['image/gif'];

function init() {
    const dropzone = document.querySelector('.dropzone');

    document.addEventListener('dragover', fp.pipe(preventDefault, stopPropagation));
    document.addEventListener('drop', fp.pipe(preventDefault, stopPropagation));

    dropzone.addEventListener('dragenter', addActiveStyle);
    dropzone.addEventListener('dragleave', removeActiveStyle);
    dropzone.addEventListener('dragover', fp.pipe(preventDefault, onDragOver));
    dropzone.addEventListener('drop', fp.pipe(
        preventDefault,
        stopPropagation,
        removeActiveStyle,
        filterByAllowed,
        showFilesPreview,
    ));
}

function showFilesPreview(files:File[]) {
    if (!files.length) alert('No gifs detected');

    files.forEach(showFilePreview);
}

function showFilePreview(file:File) {
    const reader = new FileReader();
    reader.addEventListener('load', displayImage);
    reader.readAsDataURL(file);
}

const displayImage = fp.curry(displayImageOnElement)(document.getElementById('preview-list'));

function displayImageOnElement(listEl:HTMLElement, progressEvent:ProgressEvent) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div style='display: flex'>
        <img
            src='${progressEvent.target.result}'
            style='width: 120px; margin: 10px; border-radius: 10px'>
    </div>
    `;
    listEl.append(div);
}

const filterByAllowed = fp.curry(filterByFileType)(ALLOWED_FILE_TYPES);

function filterByFileType(allowedFileTypes:string[], event:DragEvent):File[] {
    return [...event.dataTransfer.files].filter(file => allowedFileTypes.includes(file.type));
}

function addActiveStyle({target}:MouseEvent) {
    (target as HTMLElement).classList.add('active');
}

function removeActiveStyle(event:MouseEvent) {
    (event.target as HTMLElement).classList.remove('active');
    return event;
}

function preventDefault(event:Event) {
    event.preventDefault();
    return event;
}

function stopPropagation(event:Event) {
    event.stopPropagation();
    return event;
}

function onDragOver(event:DragEvent) {
    event.dataTransfer.dropEffect = 'copy';
}

// if div element has the draggable property, it is supported by the browser
if ('draggable' in document.createElement('div')) {
    init();
}

