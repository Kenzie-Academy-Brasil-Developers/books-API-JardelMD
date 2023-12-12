import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { bookValidation } from "../middlewares/books.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", bookValidation.isBookNameValid, booksControllers.createBooks);

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id", bookValidation.isBookIdValid, booksControllers.getOneBook);

booksRouter.patch("/:id", bookValidation.isBookIdValid, bookValidation.isBookNameValid, booksControllers.updateBook);

booksRouter.delete("/:id", bookValidation.isBookIdValid, booksControllers.deleteBook);