import express from "express";
import { getBooksByGenre, getBooksByGenreAndPublisher, getTopRatedBooks, updatePriceToInt } from "./book.controller";

const router = express.Router();

router.get("/top-rated", getTopRatedBooks)
router.get("/convert-price-to-int", updatePriceToInt);
router.get("/:genre", getBooksByGenre);
router.get("/:genre/:publisher", getBooksByGenreAndPublisher);

export default router;