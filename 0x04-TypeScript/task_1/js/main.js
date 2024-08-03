var teacher3 = {
    firstName: "john",
    lastName: "smith",
    fullTimeEmployee: false,
    yearsOfExperience: 20,
    location: "San Francisco-",
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return (this.firstName);
    };
    return StudentClass;
}());
var student = new StudentClass("Aya", "Anwar");
console.log(student.workOnHomework());
console.log(student.displayName());
