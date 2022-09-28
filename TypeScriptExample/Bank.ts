class Bank{

    accnumber:number;

    accname:string;

    accbalance:number;

    constructor(anumber:number,aname:string,b:number){
        this.accnumber = anumber;
        this.accname = aname;
        this.accbalance = b;
    }
    deposit(amt:number):number{

       this.accbalance=amt+this.accbalance;

       return this.accbalance;

    }
    withdraw(amt:number):number{

        this.accbalance=this.accbalance-amt;

        return this.accbalance;
        
    } display(){

        console.log(this.accname);

        console.log(this.accnumber);

        console.log(this.accbalance);

    }

}

let c1=new Bank(123456,"SBI",10000);

c1.deposit(1000);

c1.withdraw(500);

c1.display();