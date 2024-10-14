const pro = document.getElementById('txt')
const add = document.getElementById("add")
const rem = document.getElementById("rem")
const ls = document.getElementById('ls')

add.addEventListener("click",()=>{
let d = pro.value;
const a = document.createElement("li")
a.textContent=d;
ls.appendChild(a);
pro.value="";
})

rem.addEventListener("click",()=>
{
    if(pro.value!="")
        {
            ls.removeChild(a)
            pro.value=""
        }
})

