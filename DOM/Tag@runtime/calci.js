const n1 =document.getElementById('n1')
const n2 =document.getElementById('n2')

const btn = document.getElementById('submit')

btn.addEventListener("click",()=>{
    const res = parseInt(n1.value) + parseInt(n2.value);
    const p = document.createElement("p")
    p.innerHTML=res;
    document.body.appendChild(p);
})
