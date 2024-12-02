// Typed from https://github.com/joakimskoog/AnApiOfIceAndFire/wiki/Books

export type Book = {
  url: string; // The hypermedia URL of this resource
  name: string; // The name of this book
  isbn: string; // The International Standard Book Number (ISBN-13)
  authors: string[]; // An array of names of the authors
  numberOfPages: number; // The number of pages in this book
  publisher: string; // The company that published this book
  country: string; // The country that this book was published in
  mediaType: string; // The type of media this book was released in
  released: string; // The date (ISO 8601) when this book was released
  characters: string[]; // An array of Character resource URLs
  povCharacters: string[]; // An array of Character resource URLs with POV-chapters
};
