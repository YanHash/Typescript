"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
class Books {
    constructor(books) {
        if (books) {
            this._books = books;
        }
        else {
            this._books = [];
        }
    }
    equals(book1, book2) {
        return (book1.author == book2.author) && (book1.title == book2.title);
    }
    add(book, key) {
        if (typeof key === "number" && key >= 0) {
            this._books[key] = book;
            return key;
        }
        else {
            this._books.push(book);
            return this.size() - 1;
        }
    }
    keyOf(book) {
        for (let i = 0; i < this.size(); i++) {
            if (this.equals(this._books[i], book)) {
                return i;
            }
        }
        return -1;
    }
    remove(key) {
        if (key < 0 || key >= this.size()) {
            return false;
        }
        this._books.splice(key, 1);
        return true;
    }
    size() {
        return this._books.length;
    }
    at(key) {
        if (key < 0 || key >= this.size()) {
            return undefined;
        }
        return this._books[key];
    }
    all() {
        return [...this._books];
    }
}
exports.Books = Books;
