//Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

var things = ["Chair", "MouSe", "VitaMins", "ComputeR"] 

//iterate over each element in the array
//change each uppercase letter to lowercase-toLowerCase()

for (var i = 0; i < things.length; i++) {
    console.log(things[i].toLowerCase())
      
    }

    //Given an array of strings, return only the words that begin with the letter "t".

    var household = ["table", "Chair", "CloseT", "toilet" "STove"]

    //iterate over each element in the array
    //change any letter t to lowercase

    for (var i = 0; i < household.length; i++) {
        if (household[i].startsWith("t")) {
          console.log(household[i])
        } 
      }

    //Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
    
    var sentence = ["I love tacos everyday, not just on Tuesday!"]

    //iterate over each word
    //change every first letter of the word to a capital letter

var sentence2 = sentence.split(" ");
for (var i = 0; i < sentence2.length; i++) {
  sentence2[i] = sentence2[i].charAt(0).toUpperCase() + sentence2[i].slice(1)
}
var together = sentence2.join(" ")
console.log(together)