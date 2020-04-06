const canvas = document.querySelector('canvas'); // creates our canvas
console.log(canvas)
const ctx = canvas.getContext("2d"); // creates the context of our canvas
const scale = 10; // the scale the grid is laid out in
const rows = canvas.height / scale;// creates the rows depending on the height of the canvas
const columns = canvas.width/ scale;// creates the width depending on the width of the canvas
let interSpeed = 250 // the intervol speed
var snake

setup()// setup function is called
function setup(){
    
    wall = new Wall();// constructs the wall, stores it in a variable to be called
    snake = new Snake();// constructs the snake, stores it in a vairable to be called
    treat = new Treat();// constructs teh treat, stores it in a vairable to be called

    wall.randomLocation();// calls the walls function randomLocation and puts the wall in a random spot on the canvas 
    console.log(wall)
    treat.randomLocation();// calls the treats fucntion randomLocation and puts the treat in a random spot on the canvas
    console.log(treat)
   
     window.setInterval(() => { // our set interval function
        ctx.clearRect(0, 0, canvas.width, canvas.height)// clears the canvas 
        wall.draw()// calls the draw funciton in wall
        treat.draw()/ // calls the draw function in treat
        wall.update()// calls the update funciton in wall
        snake.update()// calls the update function in snake
        snake.draw()//calls the draw function in snake
        if (snake.eat(treat)) {// if the snake and the treat are in the same location it sends the treat to the eat function 
            treat.randomLocation()// call the treat to be in a new location
        }
        snake.wallCollision()// this is if the snake runs in to the wall
        snake.checkCollision()// this calls the collison function with the tail
        if(snake.total > 2){// i was trying to increase the interval speed as you got a higher total but it was not working
        interSpeed = interSpeed - 100
        }
        if(snake.total > 3){
        console.log(snake.total)
        interSpeed = interSpeed -150
        }
        document.querySelector('.score')
        .innerHTML = snake.total// writes the score to the score on the display html
    }, interSpeed );// the intervale speed

   
    
}
window.addEventListener('keydown', ( (evt) => {// the event listener for the key press
    const direction = evt.key.replace('Arrow', '');// repalces the word arrow with a blank space and stores that in the direction constant 
    snake.changeDirection(direction)// how the snake changes direction
    wall.randomDirection(direction)// how the wall changes direction

}))
window.addEventListener('keydown', function(){// key press function
    if(event.keycode === 80){// the P key for pause
        pauseGame()// calls the pause function
    }
})
function pauseGame() {// this does not work
    clearInterval(window)
}

    


