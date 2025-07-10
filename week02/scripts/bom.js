// Get references to the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter button click event listener
button.addEventListener('click', () => {
  const chapter = input.value.trim();

  // If input is not blank
  if (chapter !== '') {
    // Create the list item and delete button
    const li = document.createElement('li');
    li.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Append delete button to the list item
    li.appendChild(deleteButton);
    // Append list item to the unordered list
    list.appendChild(li);

    // Clear the input field
    input.value = '';
  }

  // Focus the input field either way
  input.focus();
});

// Event delegation on the parent list to handle delete button clicks
list.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

