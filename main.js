const items = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItems = document.createElement('li');
    const listSpan = document.createElement('span');
    const listBtn = document.createElement('button')

    listBtn.textContent = 'Delete'
    listItems.textContent = myItem

    listItems.appendChild(listSpan);
    listItems.appendChild(listBtn);
    items.appendChild(listItems);

    listBtn.addEventListener('click', () => {
        items.removeChild(listItems);
    });
});
