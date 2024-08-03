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
