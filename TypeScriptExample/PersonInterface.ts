interface PersonInterface{
    first:string;
    last:string;
    getFullName():string;

}
class PersonImplement implements PersonInterface{
    first:string;
    last:string;

    getFullName():string{
        return this.first+this.last;
    }
}
let p1 = new PersonImplement();
p1.first ="Rishav";
p1.last ="raj";
console.log(p1.getFullName());