import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppErrors";

export class BookValidation {
    static isBookIdValid(req: Request, res: Response, next: NextFunction) {
        if (!booksDatabase.some(book => book.id === Number(req.params.id))) {
            throw new AppError(404, "Book not found.");
        }
        return next();
    }

    static isBookNameValid(req: Request, res: Response, next: NextFunction) {
        if (booksDatabase.some(book => book.name === req.body.name)) {
            throw new AppError(409, "Book already registered.");
        }
        return next();
    }
}