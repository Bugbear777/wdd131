// Get references to the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// Declare chaptersArray and assign it to the results of getChapterList() or an empty array if missing
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));

// Add Chapter button click event listener
button.addEventListener('click', () => {
  if(input.value =! ''){
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});
// Function to build and display a list item with delete button
function displayList(item) {
  const li = document.createElement('li');
  li.textContent = item;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  // Add click event to delete button
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(item);
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
}


// Function to delete chapter from array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// Get chapter list from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('chapters')) || [];
}

// Save updated chapter list to localStorage
function setChapterList() {
  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

