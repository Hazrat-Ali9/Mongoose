import { IBook } from "./book.interface";
import Book from "./book.model";

export const getBooksByGenreFromDB = async (
  genre: string
): Promise<IBook[]> => {
  const books = await Book.find({ genre });
  return books;
};

export const getBooksByGenreAndPublisherFromDB = async (
  genre: string,
  publisher: string
): Promise<IBook[]> => {
  const books = await Book.find({ genre, "publisher.name": publisher });
  return books;
};

export const getTopRatedBooksFromDB = async (): Promise<IBook> => {
  const books = await Book.topRatedBooks();
  return books;
};

export const updatePriceToIntToDB = async () => {
  const books = await Book.updateMany(
    {},
    [{ $set: { price: { $toInt: "$price" } } }],
    { multi: true }
  );

  return books;
};
