var PersonImplement = /** @class */ (function () {
    function PersonImplement() {
    }
    PersonImplement.prototype.getFullName = function () {
        return this.first + this.last;
    };
    return PersonImplement;
}());
var p1 = new PersonImplement();
p1.first = "Rishav";
p1.last = "raj";
console.log(p1.getFullName());
