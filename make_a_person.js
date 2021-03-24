var Person = function(firstAndLast) {
    let [firstName, lastName] = firstAndLast.split(" ");

    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    };

    this.setFirstName = function(first) {
        firstName = first;
        return firstName;
    };

    this.setLastName = function(last) {
        lastName = last;
        return lastName;
    }

    this.setFullName = function(firstAndLast) {
        [firstName, lastName] = firstAndLast.split(" ");
        return `${firstName} ${lastName}`;
    }
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
