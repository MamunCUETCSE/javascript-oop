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
    
    }

class Magazine extends Book{

    constructor(title,author,year,month)
    {
        super(title,author,year);
        this.month= month;
    }
}
const mag1= new Magazine('Dhaka times','Dhaka,bangladesh','1995', 'August');
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getAge());

