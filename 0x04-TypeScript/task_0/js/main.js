var studentOne = { firstName: "Doe", lastName: "smith", age: 20, location: "New York" };
var studentTwo = { firstName: "john", lastName: "Doe", age: 16, location: "San Francisco-" };
var studentsList = [studentOne, studentTwo];
function rendetTable() {
    var table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    var headrRow = document.createElement('tr');
    headrRow.innerHTML = "<th>First Name</th> <th>Location</ht>";
    table.appendChild(headrRow);
    studentsList.forEach(function (student) {
        var row = document.createElement('td');
        row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
        table.appendChild(row);
    });
    document.body.appendChild(table);
}
rendetTable();
