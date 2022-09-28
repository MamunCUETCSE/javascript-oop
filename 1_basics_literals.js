/*const s1 ='hello';
console.log(typeof s1);
const s2 = new String('hellow');
console.log(typeof s2);
*/
//console.log(window);
//alert(2);
//console.log(navigator.appVersion);

//object literals given bellow
const  book1={
    title:'book one',
    author:'john doe',
    year:'2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

};
const  book2={
    title:'book two',
    author:'mamun doe',
    year:'2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}
//console.log(book1);
//console.log(book1.title);
//console.log(book1.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book1));
