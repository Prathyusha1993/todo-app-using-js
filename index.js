const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if(inputBox.value == ''){
        alert('Please enter a task');
    } else {
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML ='x';
        listItem.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTasks();