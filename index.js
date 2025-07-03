function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data); // assuming you want to render the books here
      return data;       // return data to allow chaining in tests
    });
}
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data;
    });
}
fetchBooks().then(() => {
  // assertions here
});
await fetchBooks();
// assertions here
