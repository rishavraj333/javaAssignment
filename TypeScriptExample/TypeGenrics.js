function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push("Hi");
myStrArr.push(500);
function getArray1(items) {
    return new Array().concat(items);
}
var myNumArr1 = getArray1([100, 200, 300]);
var myStrArr1 = getArray1(["Hello", "World"]);
myNumArr1.push(400);
myStrArr1.push("Hello typeScript");
//myNumArr1.push("Hi");
//myStrArr1.push(500);
