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
 //another constructor
 function magazine(title, author, year, month)
 {
    Book.call(this, title, author, year);
    this.month = month;
 }
 //inheritance
 magazine.prototype = Object.create(Book.prototype);
 //instantiate magazine object
 const mag1 = new magazine('indian times','india','2020','february');
 //use magazine constructor
 magazine.prototype.constructor = magazine;
 
 console.log(mag1.getSummary());
 console.log(mag1);