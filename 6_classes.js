class Book{
    constructor(title, author, year)
    {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge()
    {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;

    }
    revise(newYear)
    {
        this.year = newYear;
        this.revised = true; 
     }
     static bestSellingBook()
     {
        return 'The alchemist';
     }
    }



//instantiate object
const book1 = new Book('the vinci code','Dan brown', '2018');
console.log(book1);
book1.revise('2020');
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
//calling static function using class name
console.log(Book.bestSellingBook());