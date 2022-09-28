"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.stdid = 123;
        this.stdname = "Rishav";
        this.stdstandard = "12th Std";
    }
    Student.prototype.display = function () {
        console.log(this.stdid);
        console.log(this.stdname);
        console.log(this.stdstandard);
    };
    return Student;
}());
exports.Student = Student;
