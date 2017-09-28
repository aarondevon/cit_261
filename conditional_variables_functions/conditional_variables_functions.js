// I am a function with no parameter
function byuGood() {
  // I am a variable
    var answer = document.getElementById('answer').value.toUpperCase();
    console.log(answer);
    // I am a conditional
    if (answer == 'Y') {
      document.getElementById("response").innerHTML = 'I agree!';
      condition = false;
    } else if (answer === 'N') {
      document.getElementById("response").innerHTML = 'I disagree :-\(';
      condition = false;
    } else {
      document.getElementById("response").innerHTML = 'Sorry, please enter a valid response. T for true and F for false';
    }
}  
