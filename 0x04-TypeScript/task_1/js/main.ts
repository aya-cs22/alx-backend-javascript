interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "john",
    lastName: "smith",
    fullTimeEmployee: false,
    yearsOfExperience: 20,
    location: "San Francisco-",
    contract: false,
}
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number,
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

function printTeacher(firstName:string , lastName: string) : string{
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

interface classInterface{
    firstName :string;
	lastName: string;
	workOnHomework ():string
	displayName(): string
}
class StudentClass implements classInterface{
    firstName : string;
    lastName : string;
    constructor(firstName : string ,lastName : string){
        this.firstName = firstName;
        this.lastName = lastName
    }
    workOnHomework(){
        return "Currently working";
    }

    displayName(){
        return(this.firstName);
    }
}
const student = new StudentClass("Aya", "Anwar");
console.log(student.workOnHomework());
console.log(student.displayName());