import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { BookValidation } from "../middlewares/books.middlewares";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", BookValidation.isBookNameValid, booksControllers.createBook);

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id", BookValidation.isBookIdValid, booksControllers.getOneBook);

booksRouter.patch("/:id", BookValidation.isBookIdValid, BookValidation.isBookNameValid, booksControllers.updateBook);

booksRouter.delete("/:id", BookValidation.isBookIdValid, booksControllers.deleteBook);