import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { BookValidation } from "../middlewares/books.middlewares";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createBookBodySchema, editBookBodySchema } from "../schemas/books.schemas";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", ValidateRequest.execute({ body: createBookBodySchema }),
    BookValidation.isBookNameValid,
    booksControllers.createBook);

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id", BookValidation.isBookIdValid,
    booksControllers.getOneBook);

booksRouter.patch("/:id", ValidateRequest.execute({ body: editBookBodySchema }),
    BookValidation.isBookIdValid,
    BookValidation.isBookNameValid,
    booksControllers.updateBook);

booksRouter.delete("/:id", BookValidation.isBookIdValid,
    booksControllers.deleteBook);