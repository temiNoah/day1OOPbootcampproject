'use strict';
class Phone {
  // A static abstract method.
  static MakeCall() {
    if (this === Abstract) {
      // Error Type 2. Abstract methods can not be called directly.
      throw new TypeError("Can not call static abstract method MakeCall.");
    } else if (this.MakeCall === Phone.MakeCall) {
      // Error Type 3. The child has not implemented this method.
      throw new TypeError("Please implement static abstract method MakeCall.");
    } else {
      // Error Type 5. The child has implemented this method but also called `super.foo()`.
      throw new TypeError("Do not call static abstract method MakeCall from child.");
    }
  }
  constructor() {
    if (this.constructor === Phone) {
      // Error Type 1. Abstract class can not be constructed.
      throw new TypeError("Can not construct abstract class.");
    }
    //else (called from child)
    // Check if all instance methods are implemented.
    if (this.MakeCall === Phone.prototype.MakeCall) {
      // Error Type 4. Child has not implemented this abstract method.
      throw new TypeError("Please implement abstract method MakeCall.");
    }
  }
  // An abstract method.
  MakeCall() {
    // Error Type 6. The child has implemented this method but also called `super.foo()`.
    throw new TypeError("Do not call abstract method MakeCall from child.");
  }
}

// Error Type 1.
//let bar = new Abstract(); // Throws because abstract class can not be constructed.

// Error Type 2.
//Abstract.foo(); // Throws because static abstract methods can not be called.

class Tecno extends Phone{}

// Error Type 3.
//ChildA.foo(); // Throws because ChildA does not implement static abstract method foo.

// Error Type 4.
//let bar = new ChildA(); // Throws because ChildA does not implement abstract method foo.

class Nokia extends Phone{
  static MakeCall() {
    // Calls Abstract.foo();
    super.MakeCall();
  }
  MakeCall() {
    // Calls Abstract.prototype.foo();
    super.MakeCall();
  }
}

// Error Type 5.
//ChildB.foo(); // Throws because in ChildB the implementation calls the static abstract method foo.

// Error Type 6.
//(new ChildB()).foo(); // Throws because in ChildB the implementation calls the abstract method foo.

class Samsung extends Phone {
  static MakeCall() {
    // Implementation of abstract static method.
    console.log('Samsung.MakeCall');
  }
  constructor() {
    super();
    // Implementation of constructor.
  }
  MakeCall() {
    // Implementation of abstract method.
    console.log('Samsung.prototype.MakeCall');
  }
}

// Success.
Samsung.MakeCall();
let bar = new Samsung();
bar.MakeCall();