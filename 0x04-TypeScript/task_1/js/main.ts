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