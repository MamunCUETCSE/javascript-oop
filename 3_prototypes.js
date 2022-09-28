//constructor
function Book(title,author,year){
    // console.log('Book initialized..');
    this.title=title;
    this.author=author;
    this.year=year;
 }
//constructor prototype
 Book.prototype.getSummary=function(){
    
    return `${this.title} was written by ${this.author} in ${this.year}`;

 };
 Book.prototype.getAge=function()
 {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
 };
 //change constructor literals
 Book.prototype.revise= function(newYear)
 {
    this.year = newYear;
    this.revised = true; 
 }
 //instantiate an object
 const book1= new Book('Book one','mamun abdullah','2013');
 const book2 = new Book('Book two ','mahedi hasan','2018');
 //console.log(book1);
 //console.log(book1.author);
 //console.log(book2.getSummary());
 console.log(book2.getAge());
 book2.revise('2020');
 console.log(book2)