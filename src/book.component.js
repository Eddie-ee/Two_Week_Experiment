import react from "react";

const Book = ({ bookProperty }) => {
  console.log(bookProperty);
  return (
    <>
      <img src="https://i.postimg.cc/nzZjM1zF/dunebook.jpg" alt="book" />
      <h2>{bookProperty.title}</h2>
          <h2>{bookProperty.author}</h2>
          <h2>{bookProperty.cover}</h2>
    </>
  );
};

export default Book;
