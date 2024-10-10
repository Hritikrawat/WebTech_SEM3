const data =
{
    Fname : "Aman",
    Lname : "Tiwari",
    age : 25,
    profession: "Software Dev",
    com : "NIIT",
    Details : function(){
        return this.Fname +" "+this.Lname+" Age is "+this.age
    }
}

console.log(data);
console.log(data.Details());


