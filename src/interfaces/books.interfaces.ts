export interface IBook {
     id: number;
     name: string;
     pages: number;
     category?: string;
     createdAt: Date;
     updatedAt: Date;
};

export type Types = Pick<IBook, 'name' | 'pages' | 'category'>;

export type Data = Partial<Types>;