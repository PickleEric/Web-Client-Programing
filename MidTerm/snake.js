function Snake() {
    this.x = 200; // start location x access
    this.y = 200; // start location y access
    this.speed0 = 1; // speed multiplier
    this.xSpeed = 0; // controls x access speed
    this.ySpeed = 0; // controls y access speed
    this.total = 0; // game total
    this.tail = []; // arrey for the tail

    this.draw = function() {// draw function
        ctx.fillStyle = "purple";// fill style for the snake
        for (let i = 0; i < this.tail.length; i++){// creates the tail by incramenting i in the tail arrey
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);// this fills the snake tail depending on the length of the arrey in the tail
        }
        ctx.fillRect(this.x, this.y, scale, scale);// the size and location of the snake head
        
    }
    this.update = function() {// creates the update function
        for (let i = 0; i < this.tail.length - 1; i++) {// as long as the length of the tail is greater then i, it will incroment the tail
            this.tail[i] = this.tail[i+1];
        }
    this.tail[this.total - 1] = { x: this.x, y: this.y }// to add location to the tail as it grows 

    this.x += this.xSpeed;//gives the x a speed 
    this.y += this.ySpeed;// give the y a  speed
        if(this.x > canvas.width ){ // right
            this.x = canvas.width - scale;
        }
        if (this.x < 0 ) { // left
            this.x = this.x + scale;
        }
        if (this.y > canvas.height) { //top
            this.y = canvas.height - scale;
        }
        if (this.y < 0 ) { // bottom 
            this.y = this.y + scale;
        }
}
this.changeDirection = function(direction) {// change in direction function
    switch(direction){// simple switch case is given a direction and depeding on the direction depends on what case happens 
        case 'Up':
            this.xSpeed = 0;
            this.ySpeed = -scale * this.speed0;
            break;
        case 'Down':
            this.xSpeed = 0;
            this.ySpeed = scale * this.speed0;
            break;
        case 'Left':
            this.xSpeed = -scale * this.speed0;
            this.ySpeed = 0;
            break;
        case 'Right':
            this.xSpeed = scale * this.speed0;
            this.ySpeed = 0;
            break;
        } 
        
        
    }
    this.eat = function(treat) {// the eat function that passes the treat to the function
        if(this.x === treat.x && this.y === treat.y) {// if the x and y of the treat equal the the x and y of the snake
            this.total++;// the total will increase
            return true;
        }
        return false;
    }
    this.wallCollision = function() {//wall collision function
        if( this.x > wall.x - scale && this.x < wall.x + scale && this.y > wall.y - scale && this.y < wall.y + scale){// if the snake x and y hit the wall x an y plus the scale
            this.xSpeed = this.xSpeed * -1;// makes the snake bounce off the wall
            this.ySpeed = this.ySpeed * -1;
            this.total = 0;// resets the total
            this.tail = [];//// resets the tail array
        }
        for (var i = 0; i<this.tail.length; i++)// for the length of the incrimented tail
            if(wall.x === this.tail[i].x && wall.y === this.tail[i].y) {// if the length of the tail is hit by the wall
                this.total = 0// total goes back to 0
                this.tail = []// resets the tail array
            }
        else {
            this.changeDirection()
        }
    }
    this.checkCollision = function() {
        for (var i = 0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y) {// if the tail hits itself 
                this.total = 0// total resets
                this.tail = []// array resets
            }
            if (this.total >= 2){// when total equals 2 
                if ( this.x === canvas.width - scale || this.x === 0){// if the x is 0 or the canvas width - scale
                    this.xSpeed = this.xSpeed * -1 // snake will bounce off
                    this.total = 0// clears total
                    this.tail= []//clears array
                }
                if (this.y === canvas.height - scale || this.y === 0) {// if the x is 0 or the canvas width - scale
                    this.ySpeed = this.ySpeed * -1// snake will bounce off
                    this.total = 0//clears total
                    this.tail = []//clears array
                }
                else{
                    this.changeDirection()
                }
            }
        }
    }
}


