
import {Student} from "./Student"

class Address extends Student{

    city:string="bengaluru";

    state:string="karnataka";

    street:string ="btm"

    display(){

        super.display();

        console.log(this.city);

        console.log(this.state);

        console.log(this.street);

    }



}

let e1=new  Address();

e1.display();

