import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers {
    createBook(req: Request, res: Response): Response {
        const booksService = new BooksServices();
        const response = booksService.createBook(req.body);
        return res.status(201).json(response);
    }

    getBooks(req: Request, res: Response): Response {
        const booksService = new BooksServices();
        const response = booksService.getBooks(req.query.search);
        console.log(req.query.search)
        return res.status(200).json(response);
    }

    getOneBook(req: Request, res: Response): Response {
        const booksService = new BooksServices();
        const response = booksService.getOneBook(req.params.id);
        return res.status(200).json(response);
    }

    updateBook(req: Request, res: Response): Response {
        const booksService = new BooksServices();
        const response = booksService.updateBook(req.params.id, req.body);
        return res.status(200).json(response);
    }

    deleteBook(req: Request, res: Response): Response {
        const booksService = new BooksServices();
        booksService.deleteBook(req.params.id);
        return res.status(204).json();
    }
}