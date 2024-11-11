export {IBook, Books}

interface IBook 
{
    title: string;
    author: string;
}

class Books 
{
    private _books: Array<IBook>;

    constructor(books?: Array<IBook>) 
    {
        if (books)
        {
            this._books = books;
        }
        else
        {
            this._books = [];
        }
        
    }


    equals(book1: IBook, book2: IBook): boolean 
    {
        return (book1.author == book2.author) && (book1.title == book2.title);
    } 

    add(book: IBook, key?: number): number 
    {
        if(typeof key === "number" && key >= 0)
        {
            this._books[key] = book;
            return key;
        }
        else
        {
            this._books.push(book);
            return this.size() - 1;
        }
    }

    keyOf(book: IBook): number 
    {
        for (let i = 0; i < this.size(); i++)
        {
            if (this.equals(this._books[i], book))
            {
                return i;
            }
        }
        return -1;
    }

    remove(key: number): boolean {
        if (key < 0 || key >= this.size())
        {
            return false;
        }
        this._books.splice(key, 1);
        return true;
    }

    size(): number {
        return this._books.length;
    }

    at(key: number): IBook | undefined {
        if (key < 0 || key >= this.size())
        {
            return undefined;
        }
        return this._books[key];
    }

    all(): Array<IBook> {
        return [...this._books];
    }
}