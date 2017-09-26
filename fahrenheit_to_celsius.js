// constant variable initialization get temp from user
const celsius = prompt('What is the celsius temperature today?')

// convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// round fahrenheit temp
fahrenheit = Math.floor(fahrenheit);

alert('The temperature is ' + fahrenheit + ' degrees fahrenheit.')
