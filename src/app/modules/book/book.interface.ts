import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";

interface IPublisher {
  name: string;
  location: string;
}

interface IReview {
  user: string;
  comment: string;
}
export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: IPublisher;
  reviews: IReview[];
  rating: number;
  price: string | number;
}

//instance methods
// export interface IBookMethods {
//   fullName(): string;
// }

export interface BookModel extends Model<IBook, {}> {
  topRatedBooks(): Promise<HydratedDocument<IBook>>;
}
