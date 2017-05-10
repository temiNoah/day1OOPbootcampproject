/** This is our Person class */
       Person = function (id, name, age) {
           this.id = id;
           this.name = name;
           this.age = age;
          // alert('A new person has been accepted');
       }
       /* definition of our Person class */
       Person.prototype = {
           /** wake person up */
           wake_up: function () {
               alert('A person is awake');
           },
           /** retrieve person's age */
           get_age: function () {
               return this.age;
           }
       }

       Inheritance_Manager = {};

       Inheritance_Manager.extend = function (subClass, baseClass) {
           function inheritance() { }
           inheritance.prototype = baseClass.prototype;
           subClass.prototype = new inheritance();
           subClass.prototype.constructor = subClass;
           subClass.baseConstructor = baseClass;
           subClass.superClass = baseClass.prototype;
       }

       Manager = function (id, name, age, salary) {
           Manager.baseConstructor.call(this, id, name, age);
           this.salary = salary;
          // alert('A manager has been registered.');
       }

       Inheritance_Manager.extend(Manager, Person);

       Manager.prototype = {
           wake_up: function () {
               alert('I am in control');
           }
       }

       var arrPeople = new Array();
       arrPeople[0] = new Person(1, 'Joe Tester', 26);
       arrPeople[1] = new Manager(1, 'Joe Tester', 26, '20.000');

       for (var i in arrPeople) {
           arrPeople[i].wake_up();
           alert(arrPeople[i].get_age());
       }