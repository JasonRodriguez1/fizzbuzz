$(document).ready(function() {
function fizzbuzz(){
    elt = $('#fizzbuzz'); // find the element location
    elt.empty(); // clear out anything that's there already
    for (var i = 1; i < 101; i++){
        if ((i % 15) === 0) {
            elt.append('FizzBuzz'); // append text
            } else if ((i % 3) === 0){
            elt.append('Fizz');
            } else if ((i % 5) === 0){
            elt.append('Buzz');
            } else {
            elt.append(i);
            }
        elt.append(" "); // add a space
        }
    }

$("#results").click(function() { 
  fizzbuzz();
});
});
