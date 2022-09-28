//constructor
function Book(title,author,year){
   // console.log('Book initialized..');
   this.title=title;
   this.author=author;
   this.year=year;

   this.getSummary=function()
   {
    return `${this.title} was written by ${this.author} in ${this.year}`;
   };
}

//instantiate an object
const book1= new Book('Book one','mamun abdullah','2013');
const book2 = new Book('Book2','mahedi hasan','2018');
//console.log(book1);
//console.log(book1.author);
console.log(book1.getSummary());