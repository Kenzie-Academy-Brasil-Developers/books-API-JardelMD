import { z } from "zod";
import { createBookBodySchema, editBookBodySchema } from "../schemas/books.schemas";
export interface IBook {
     id: number;
     name: string;
     pages: number;
     category?: string;
     createdAt: Date;
     updatedAt: Date;
};

export type TCreateBookBody = z.infer<typeof createBookBodySchema>;

export type TEditBookBody = z.infer<typeof editBookBodySchema>;

// export type TSearchBook = z.infer<typeof searchBookSchema>;