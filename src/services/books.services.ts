import { generateId, booksDatabase } from "../database/database";
import { TBook, TCreateBookBody, TEditBookBody } from "../interfaces/books.interfaces";

export class BooksServices {
    createBook(data: TCreateBookBody) {
        const newBook: TBook = {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        booksDatabase.push(newBook);
        return newBook;
    }

    getBooks(search?: any) {
        if (search) {         
            const findBook = booksDatabase.filter(book => book.name.toLowerCase().includes(search));     
            return findBook;
        }
        return booksDatabase;
    }

    getOneBook(id: string) {
        const findBook = booksDatabase.find(book => book.id === Number(id));
        return findBook;
    }

    updateBook(id: string, data: TEditBookBody) {
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