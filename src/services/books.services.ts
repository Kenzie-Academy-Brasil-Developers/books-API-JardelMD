import { generateId, booksDatabase } from "../database/database";
import { IBook, Data, Types } from "../interfaces/books.interfaces";

export class BooksServices {
    createBook(data:Types) {
        const newBook: IBook = {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        booksDatabase.push(newBook);
        return newBook;
    }

    getBooks() {
        return booksDatabase;
    }

    getOneBook(id: string) {
        const findBook = booksDatabase.find(book => book.id === Number(id));
        return findBook;
    }

    updateBook(id: string, data:Data) {
        const index = booksDatabase.findIndex(book => book.id === Number(id));
        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date()
        };
        booksDatabase.splice(index, 1, booksDatabase[index]);
        return booksDatabase[index];
    }

    deleteBook(id: string) {
        const index = booksDatabase.findIndex(book => book.id === Number(id));
        booksDatabase.splice(index, 1);
    }
}