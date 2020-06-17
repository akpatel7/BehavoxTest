export class Name {
    name: {
      first: string,
      last: string
    };

    constructor(firstName: string, lastName) {
        this.name.first = firstName;
        this.name.last = lastName;
    }

    getFirstName() {
        return this.name.first;
    }

    getLastName() {
        return this.name.last;
    }
}
