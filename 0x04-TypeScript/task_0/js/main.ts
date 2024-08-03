interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}
let studentOne: Student = {firstName : "Doe", lastName : "smith", age : 20, location : "New York"};
let studentTwo: Student = {firstName : "john", lastName : "Doe", age : 16, location : "San Francisco-"};
let studentsList: Student[] = [studentOne, studentTwo]
function rendetTable(): void {
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    const headrRow = document.createElement('tr');
    headrRow.innerHTML = "<th>First Name</th> <th>Location</ht>";
    table.appendChild(headrRow);
    studentsList.forEach(student => {
        const row = document.createElement('td');
        row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
        table.appendChild(row);
    });
    document.body.appendChild(table);
}
rendetTable();

