import { TBook } from "../interfaces/books.interfaces";

export const booksDatabase: TBook[] = [];

let id: number = 0;
export const generateId = () => {
    id++;
    return id;
}
