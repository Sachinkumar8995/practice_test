// console.log(a); // a not defined yet
// console.log(b);// b not defined yet
// var a = 10;
// let b = 20;
// function test() {
//   console.log(c);// c defined after the console log
//   var c = 30;
// }
// test();


var a = 10;// print correctly no error
let b = 20;// print correctly no error
console.log(a);
console.log(b);
function test() {
    var c = 30;
    console.log(c);// print correctly no error
}
test();

