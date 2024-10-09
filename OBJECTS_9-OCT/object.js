// objects are collection of properties having key and values

const student = {
    name: "Ritik",
    sec: 12 ,
    subject: 'JavaScript' 
}

//accessign values from ojects.

console.log(student.name);
// console.log(student["name"]);

console.log(student);




// object inside object
const Emp ={
    name : "Harshit",
    id : 101,
    c_no : {pno :987678,sno:12324}

}
console.log(Emp["name"]+" "+Emp.c_no.pno);
console.log(Emp);

//removing number form emp
delete Emp.c_no;
console.log("Removing phoner number",Emp);


//adding object(or any property) inside object.
student.p_no= {
    Pr_no : 123456,
    S_no : 999999
}
console.log("Student after adding object ",student)
// console.log(student.name+" "+student.p_no.Pr_no)