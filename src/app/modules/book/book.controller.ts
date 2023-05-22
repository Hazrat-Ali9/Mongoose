import { Request, Response } from "express";
import { getBooksByGenreAndPublisherFromDB, getBooksByGenreFromDB, getTopRatedBooksFromDB, updatePriceToIntToDB } from "./book.service";

export const getBooksByGenre = async (req: Request, res: Response) => {
  const { genre } = req.params;
  const books = await getBooksByGenreFromDB(genre);
  res.status(200).json({ books });
};

export const getBooksByGenreAndPublisher= async (req: Request, res: Response) => {
  const { genre, publisher } = req.params;
  const books = await getBooksByGenreAndPublisherFromDB(genre, publisher);
  res.status(200).json({ books });
}

export const getTopRatedBooks = async (req: Request, res: Response) => {
  const books = await getTopRatedBooksFromDB();
  res.status(200).json({ books });
}

export const updatePriceToInt = async (req: Request, res: Response) => {
  const books = await updatePriceToIntToDB();
  res.status(200).json({ books });
}