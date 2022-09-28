var Bank = /** @class */ (function () {
    function Bank(anumber, aname, b) {
        this.accnumber = anumber;
        this.accname = aname;
        this.accbalance = b;
    }
    Bank.prototype.deposit = function (amt) {
        this.accbalance = amt + this.accbalance;
        return this.accbalance;
    };
    Bank.prototype.withdraw = function (amt) {
        this.accbalance = this.accbalance - amt;
        return this.accbalance;
    };
    Bank.prototype.display = function () {
        console.log(this.accname);
        console.log(this.accnumber);
        console.log(this.accbalance);
    };
    return Bank;
}());
var c1 = new Bank(123456, "SBI", 10000);
c1.deposit(1000);
c1.withdraw(500);
c1.display();
