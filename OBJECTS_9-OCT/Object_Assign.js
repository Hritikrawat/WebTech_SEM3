// Question 1

const car =
{
    make :"Swift",
    model :"Lxi",
    year :"2016"
}

car.color="red";
console.log(car);

delete car.year;
console.log(car);



// Question 2

var Student =
{
    name : "Ritik",
    age : 22,
    address : {
        street : "xyz",
        city : "Ghaziabad",
        zip : 201014
    }
}
console.log(Student);



// Question 3

const movie = 
{
    title : "phir hera pheri",
    director : "Neeraj Vora",
    reelaseYear : 2006
}


for (const key in movie) 
{
    console.log(movie[key]);
}