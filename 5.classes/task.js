class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
 this.name = name;
 this.releaseDate =releaseDate;
 this.pagesCount = pagesCount;
 this.state = state;
 this.type = type;
}
fix() {
    this.state *= 1.5; 
    }

  
  set state(newState) {
    
  if (newState < 0) {
      this.state = 0;
  } else if (newState > 100) {
    this.state = 100;
  } else 
      this._state = newState;
  
}
  get state() {
    return this._state;
  }
}

const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);


class Magazine extends PrintEditionItem{
  constructor(name, releaseDate, pagesCount, state, type = "magazine"){
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount, state, type = "book"){
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = "novel"){
    super(author, name, releaseDate, pagesCount, state, type);
  }
} 
class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state, type = "fantastic"){
    super(author, name, releaseDate, pagesCount, state, type);
  }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type = "detective"){
      super(author, name, releaseDate, pagesCount, state, type);
    }
  }

class Library {
    constructor(name){
    this.name = name,
    this.books = []
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book)
        }
    }
    findBookBy(type, value){
      for(let i = 0; i < this.books.length; i++){
        if(this.books[i][type] === value){
          return this.books[i]
        }
      }
      return null
      
    }

  giveBookByName(bookName){
    
      for(let i = 0; i <this.books.length; i++){
        if(this.books[i] === bookName ){

          let deletBook = this.books.findIndex(bookName);
          this.books.splice(deletBook, 1)
        }
      }
    
    return null ;
  }
}
