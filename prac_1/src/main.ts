import {Books, IBook} from './books';


const booksList: IBook[] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Moby Dick", author: "Herman Melville" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Divine Comedy", author: "Dante Alighieri" }
];

const myBooks = new Books();

console.log("Ajout des livres:");
booksList.forEach((book, index) => {
    const key = myBooks.add(book);
    console.log(`Livre ajouté avec la clé ${key}:`, book);
});

console.log("\nNombre total de livres dans la collection:", myBooks.size());

console.log("\nTous les livres dans la collection:", myBooks.all());

console.log("\nTest de la méthode at() pour la clé 2:");
const bookAt2 = myBooks.at(2);
console.log("Livre à l'index 2:", bookAt2);

console.log("\nTest de la méthode equals() entre le premier et le deuxième livre:");
const areEqual = myBooks.equals(booksList[0], booksList[1]);
console.log("Les livres sont égaux ?", areEqual);

console.log("\nTest de la méthode keyOf() pour retrouver la clé d'un livre existant:");
const keyOfBook = myBooks.keyOf(booksList[3]);
console.log("La clé du livre 'The Catcher in the Rye' est:", keyOfBook);

console.log("\nTest de la méthode remove() pour supprimer le livre avec la clé 4:");
const removeSuccess = myBooks.remove(4);
console.log("Suppression réussie ?", removeSuccess);
console.log("Nombre de livres après suppression:", myBooks.size());
console.log("Tous les livres après suppression:", myBooks.all());

console.log("\nTest de la méthode at() pour vérifier le livre à la nouvelle clé 4:");
const bookAtNew4 = myBooks.at(4);
console.log("Livre à l'index 4 après suppression:", bookAtNew4);

console.log("\nÉtat final de la collection de livres:");
console.log(myBooks.all());