const number1 = document.getElementById('numberCaracteres');
const number2 = document.getElementById('lowerCase');
const number3 = document.getElementById('upperCase');

function lower(x){
    return x.toLowerCase()
}
function upper(x){
    return x.toUpperCase()
}
function lengths(x){
    return x.length
}

const text = document.getElementById('myText');
text.addEventListener("keyup" , ()=> {
    number1.textContent = lengths(text.value);
    number2.textContent = lower(text.value);
    number3.textContent = upper(text.value)

})

