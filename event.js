let count = 0;
let value = document.getElementById('value');
let btn = document.getElementById('btn');

btn.addEventListener('dblclick', function(){
    let result = count++
    value.textContent = result;
})

del.addEventListener('dblclick', function(){
    let result = count--
    value.textContent = result;
})


function increment(){
    // ++count 
   let result =  count++;
   value.innerHTML = result;
}