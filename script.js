document.addEventListener('DOMContentLoaded', function () {
    const students = [
      { id: "1", name: "Astha Choudhury", regno: "22BLC1326", contact: "9861365234", email: "asthachoudhury0910@gmail.com", dob: "09-oct-2004", course: "ECM", Programme: "B.tech", gpa: "9.26" },
      { id: "2", name: "Nia Susan", regno: "22BLC1325", contact: "9861365235", email: "niasusan@gmail.com", dob: "31-jan-2004", course: "ECM", Programme: "B.tech", gpa: "9.26" },
      { id: "3", name: "Rasagya Sharma", regno: "22BEC1389", contact: "9861365236", email: "rasagyasharma410@gmail.com", dob: "04-oct-2004", course: "ECE", Programme: "B.tech", gpa: "9.12" },
      { id: "4", name: "Pratibha Choudhury", regno: "22BLC1329", contact: "9861365238", email: "pratibhachoudhury114@gmail.com", dob: "01-aug-2004", course: "BRS", Programme: "B.tech", gpa: "9.8" },
      { id: "5", name: "Raghuveer Choudhury", regno: "22BLC1330", contact: "8280188849", email: "braghuveerchoudhury@gmail.com", dob: "20-oct-2004", course: "BAI", Programme: "B.tech", gpa: "10.00" }
    ];
  
    const studentTableBody = document.getElementById('studentTableBody');
  
    function displayStudents() {
      studentTableBody.innerHTML = '';
  
      students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.regno}</td>
          <td>${student.contact}</td>
          <td>${student.email}</td>
          <td>${student.course}</td>
          <td>${student.Programme}</td>
          <td>${student.dob}</td>
          <td>${student.gpa}</td>
        `;
        studentTableBody.appendChild(row);
      });
    }
  
    displayStudents();
  
    const addForm = document.getElementById('addForm');
    addForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('nameInput').value;
      const regno = document.getElementById('regnoInput').value;
      const contact = document.getElementById('contactInput').value;
      const email = document.getElementById('emailInput').value;
      const course = document.getElementById('courseInput').value;
      const programme = document.getElementById('programmeInput').value;
      const dob = document.getElementById('dobInput').value;
      const gpa = document.getElementById('gpaInput').value;
  
      const newStudent = {
        id: (students.length + 1).toString(),
        name,
        regno,
        contact,
        email,
        course,
        Programme: programme,
        dob,
        gpa
      };
  
      students.push(newStudent);
      displayStudents();
  
      addForm.reset();
    });
  });
  