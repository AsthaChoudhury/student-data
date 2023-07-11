const express = require('express');
const app = express();
app.use(express.json());

var students = [
  { id: "1", name: "Astha Choudhury", regno: "22BLC1326", contact: "9861365234", email: "asthachoudhury0910@gmail.com", dob: "09-oct-2004", course: "ECM", Programme: "B.tech", gpa: "9.26" },
  { id: "2", name: "Nia Susan", regno: "22BLC1325", contact: "9861365235", email: "niasusan@gmail.com", dob: "31-jan-2004", course: "ECM", Programme: "B.tech", gpa: "9.26" },
  { id: "3", name: "idk", regno: "22BLC1389", contact: "9861365236", email: "idk@gmail.com", dob: "30-feb-2004", course: "ECE", Programme: "B.tech", gpa: "9.12" },
  { id: "4", name: "Pratibha Choudhury", regno: "22BLC1329", contact: "9861365238", email: "pratibhachoudhury114@gmail.com", dob: "01-aug-2004", course: "BRS", Programme: "B.tech", gpa: "9.8" },
  { id: "5", name: "Raghuveer Choudhury", regno: "22BLC1330", contact: "8280188849", email: "braghuveerchoudhury@gmail.com", dob: "20-oct-2004", course: "BAI", Programme: "B.tech", gpa: "10.00" }
];

app.get('/student', (req, res) => {
  res.send({
    success:true,
    message:"Data fetched successfully",
    data:students
  });
});

app.post('/student',(req,res)=>{
  var name=req.body.name;
  var regno=req.regno.regno;
  var contact=req.body.contact;
  var email=req.regno.email;
  var course=req.body.course;
  var Programme=req.regno.Programme;
  var dob=req.body.dob;
  var gpa=req.regno.gpa;

  if(name && regno && contact && email && course && Programme && dob && gpa){
    students.push({
      id:(students.length+1).toString(),
      name:name,
      regno:regno,
      contact:contact,
      Programme:Programme,
      course:course,
      gpa:gpa,
      dob:dob,
      email:email
    })
    res.send({
      success:true,
      message:"data added"
  
    })
  }
  else{
    res.send({
      success:false,
      message:"Validation errors",
      message:"Field can not be null"
    })
  }
})

app.delete('/student/:id',(req,res)=>{
  var id=req.params.id
  var news = students.filter(el => el.id != id)
  students = news
  res.send({
    success:true,
    message:"Data deleted successfully"
  })
})

app.put('/contact/:id',(req,res)=>{
  var id = req.params.id
  var name=req.body.name;
  var regno=req.regno.regno;
  var contact=req.body.contact;
  var email=req.regno.email;
  var course=req.body.course;
  var Programme=req.regno.Programme;
  var dob=req.body.dob;
  var gpa=req.regno.gpa;
 
  if(name && regno && contact && email && course && Programme && dob && gpa){
    var index = students.findIndex(el => el.id ==id)

  students[index] = {
    ...students[index],
    name:name,
    regno:regno,
    contact:contact,
    Programme:Programme,
    course:course,
    gpa:gpa,
    dob:dob,
    email:email
  }
  
  res.send({
    success:true,
    message:"Data updated successfully",
    data:students
  });
  }
  else{
    res.send({
      success:false,
      message:"Validation errors",
      message:"Field can not be null"
    })
  }
})

app.listen(7000, () => {
  console.log(`Node API is running on port 7000`);
});
