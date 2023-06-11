const getTheTitles = function(books) {

  const title = (book) => {
    return book.title
  }

  return books.map(title)
};

// Do not edit below this line
module.exports = getTheTitles;
