class Person {
     
    get name() {
        return this._name;
    } 
 
    set name(newName){
        if(newName){
            this._name = newName;
        }
    } 
 
}
 
var p1 = new Person();
p1.name = "Scott";


class Employee extends Person {
 
    get title() {
        return this._title;
    }
 
    set title(newTitle) {
        this._title = newTitle;
    }
}
 
var e1 = new Employee();
e1.name = "Scott"; // inherited from Person
e1.title = "Developer";