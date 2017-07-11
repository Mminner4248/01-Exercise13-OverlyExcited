// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    let mes="";
   for (let i = 0; i < theWordArray.length; i++){
        mes+=" "+theWordArray[i];
       console.log(mes);
   }
}

// Invoke the function and pass in the array
addExcitement(sentence);

// The addExcitement function should accept the array as the sole argument
function addExclamation (theWordArray) {
    let mes="";
   for (let i = 0; i < theWordArray.length; i++){
        mes+=" "+theWordArray[i];
        if (((i+1) % 3) === 0){
            mes+="!";
        }
       console.log(mes);
   }
}

// Invoke the function and pass in the array
addExclamation(sentence);

// The addExcitement function should accept the array as the sole argument
function addExclamations (theWordArray) {
    let mes="";
   for (let i = 0; i < theWordArray.length; i++){
        mes+=" "+theWordArray[i];
        if (((i+1) % 3) === 0){
            for (let exclaim = 0; exclaim < i/3; exclaim++){
            mes+="!";
            }
        }
       console.log(mes);
   }
}

// Invoke the function and pass in the array
addExclamations(sentence);