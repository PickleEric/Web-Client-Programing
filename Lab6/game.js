let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playAgainButton = document.querySelector("#playAgain")
// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.
let countryCode = []// Creates an arrey to store our random country code
let countryName = []// Creates an arrey to store our random country name 
console.log(countryCode)
onload = refresh()// when the page loads it calls the refresh function
// TODO when the page loads, select an element at random from the countriesAndCodes array

// TODO display the country's name in the randomCountryElement 
function refresh(){
    let randomCountryEl = countriesAndCodes[Math.floor(Math.random()*countriesAndCodes.length)]// Using Math this will randomize the country from the array 
    console.log(randomCountryEl)
    let randomCountry = randomCountryEl.name // this pulls out just the country name from the array value and stores it in a variable
    console.log(randomCountry)
    randomCountryElement.innerHTML = randomCountry// This writes the name of the capital to the random country element 
    countryCode.push(randomCountryEl['alpha-2'])// This pushes our element country code in to the array countryCode
    countryName.push(randomCountryEl.name)// This pushes our elements country name in to the countryName array
}
submitButton.addEventListener('click', function (){

    let userAnswer = userAnswerElement.value //This turns our users element in to a value 
    if(!userAnswer){// Our validation if nothing is entered in the user input (this for some reason wont trigger)
            alert('Please enter a capital name')
    }
    else{
    let url = `https://api.worldbank.org/v2/country/${countryCode}?format=json` // The url for the web page with an arrey of were we are getting the capital from
      fetch(url)//Fetch function that calls our url
    .then( (res) => res.json())// this calls for a response 
    .then( rcc => {
        console.log(rcc)
        let capitalCity = rcc[1][0]['capitalCity']// using indexing this stores a value in to capitalCity
        console.log(userAnswer)
        console.log(capitalCity)
        if(userAnswer.trim().toLowerCase() != capitalCity.toLowerCase())// Validation if the user enters the incorrect capital
            resultTextElement.innerHTML = `Incorrect, the capital of ${countryName} is not ${userAnswer} it is ${capitalCity}`
        if(userAnswer.trim().toLowerCase() === capitalCity.toLowerCase())// Validation if the user enters in the correct capital name 
            resultTextElement.innerHTML = `Nice Job, you are correct! ${capitalCity} is the capital of ${countryName}`
    })
    .catch ( err => { // if no response console logs error message
        console.log(err)
    })
}})
playAgainButton.addEventListener('click', function(){
userAnswerElement.value = ''// resets user answer element
countryCode = []//clears the countryCode array
countryName = []//clears the countryName array
refresh()// calls the refresh function
resultTextElement.innerHTML = 'What is the correct capital?'// resets the result text element
})

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 