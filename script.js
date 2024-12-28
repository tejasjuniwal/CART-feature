let i = JSON.parse(localStorage.getItem('qty')) || 0;

const save = function(){
localStorage.setItem('qty' , JSON.stringify(i))
}
// show Quantity 
const Quantity = function() {
    console.log(`cart Quantity ${i}`);
}
document.getElementById("show").onclick = Quantity ;



// added to cart 
const added = function() {
    i++ ;
    save()
    console.log(`added to cart ${i}`); 
}
document.getElementById("cart").onclick = added ; 



// added twice 
const twice = function() {
    i = i+2;
    save()
    console.log(`added to cart ${i}`);
}
document.getElementById("two").onclick = twice ;



// added thrice 
const thrice = function() {
    i = i+3 ;
    save()
    console.log(`added to cart ${i}`);
}

document.getElementById("three").onclick = thrice



const reset = function() {
    i = 0;
    save()
    console.log(`reset items ${i}`);
}
document.getElementById("zero").onclick = reset ;