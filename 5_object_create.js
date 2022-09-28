//Es5 object of potos
const bookPotos={
getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
},
getAge:function()
{
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
}
}

//create object
/*const book1 = Object.create(bookPotos);
book1.title = 'The vinci code';
book1.author = 'Dan brown';
book1.year = '2018';
*/
//another way of creating object
const book1=Object.create(bookPotos,{
    title:{ value:'The power of Havit'},
    author:{ value:'george vindi'},
    year:{ value:'2019'}
});
console.log(book1);