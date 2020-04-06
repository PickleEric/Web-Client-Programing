function Wall() {
    this.x; // creates a y variable for location
    this.y; // creates a x variable for location
    this.xSpeed = 0 // speed of x
    this.ySpeed = 0 // speed of y
    this.speed1 = 1 // speed increase 

    this.draw = function() {
        ctx.fillStyle = "gray"; // the color of the wall
        ctx.fillRect(this.x, this.y, scale, scale);// location and how large the rectangle is 
    }
    this.randomLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;// using the math functionand the amount of rows and scale to pick a random number for the x location
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;// using the math function and the amount of rows and scale to pick a random number for the y location
    }
    this.update = function() {
    this.x += this.xSpeed;// the speed of the wall along the x axis
    this.y += this.ySpeed;// the speed of the wall along the y axis 
    if ( this.x === canvas.width - scale || this.x === 0){// if the wall hits 0 or the total width of the canves 
        this.xSpeed = this.xSpeed * -1 // the wall will go in the opposite direction on the x axis
    }
    if (this.y === canvas.height - scale || this.y === 0) {// if the wall hits 0 or the total height of the canves
        this.ySpeed = this.ySpeed * -1// the wall will go in the opposite direction on the y axis
    }
    else{
        this.randomDirection()// else it will call the direction function
    }
}
    this.randomDirection = function(direction){//once a direction has been sent to the function a switch case handles what happens when each case is given
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = scale * this.speed1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = -scale * this.speed1;
                break;
            case 'Left':
                this.xSpeed = scale * this.speed1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = -scale * this.speed1;
                this.ySpeed = 0;
                break;
            } 
        
    }

}