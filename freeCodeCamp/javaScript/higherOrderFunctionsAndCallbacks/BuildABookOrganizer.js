const books = [
  {
    title: 'Lord of the rings',
    authorName: 'Tolkien',
    releaseYear: 1929,
  },
  {
    title: 'Garry Potter',
    authorName: 'lizabet',
    releaseYear: 1994,
  },
  {
    title: 'It',
    authorName: 'King',
    releaseYear: 1956,
  }
];

function sortByYear(book1, book2) {
  let answer;

  console.log()

  if(book1.releaseYear < book2.releaseYear) {
    answer = -1;
  } else if(book1.releaseYear > book2.releaseYear) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

console.log(filteredBooks.sort(sortByYear));