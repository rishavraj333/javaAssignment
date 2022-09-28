"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Student_1 = require("./Student");
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.city = "bengaluru";
        _this.state = "karnataka";
        _this.street = "btm";
        return _this;
    }
    Address.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.city);
        console.log(this.state);
        console.log(this.street);
    };
    return Address;
}(Student_1.Student));
var e1 = new Address();
e1.display();
