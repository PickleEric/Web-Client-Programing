console.log('hello world')

let name = 'Eric'
let todayTemp = 71

console.log(`hello, my name is ${name}`)
console.log(`today's temp is: ${todayTemp}`)

function checkGPA(gpa) {
    if (gpa >= 0 && gpa <= 4 ){
        return true 
    }
    return false
}
console.log(checkGPA(5))
console.log(checkGPA(3))
console.log(checkGPA(7))

function cityState(city, state) {
    state = state.toUpperCase()
    address = `${city}, ${state}`
    return address
}
address = cityState('Minneapolis', 'mn')
console.log(address)
lengthOfName()
function lengthOfName(){
    let name = "eric"
    let letters = name.length
if (letters < 5){
    console.log(`${name} has less then 5 letters it has${letters} `)
}
else if (letters < 2) {
    console.log(`${name} is more then 2 letters`)
}
}

let animes = ['trigun', 'cowboybebop', 'naruto']
animes.forEach(function(element){
    console.log(element)
})
let maxVal = 100
let number = 1
while(number < maxVal) {
    number *= 2
    console.log('number = '+ number)
}