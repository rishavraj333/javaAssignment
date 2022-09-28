import {Dept} from "./Dept"

class Employee extends Dept{
    id:number = 123;
    name:string ="Rishav"
    sal:number = 567.89;

    display(){
        super.display();
        console.log(this.id);
        console.log(this.name);
        console.log(this.sal);
    }
}
let e1 = new Employee();
e1.display();

