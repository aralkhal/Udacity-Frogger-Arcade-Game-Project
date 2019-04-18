/*
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    // ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.drawImage(Resources.get(this.sprite), 400, 400);
};

*/

var Enemy1 = {
    sprite: 'images/enemy-bug.png',
    x: 0,
    y: 230,

    update: function(dt){

        this.x += 2.5;
        if(this.x > 505){
            this.x = 0;
        }

        // if(this.x === Player.x && this.y === Player.y){
        //     playerLose();
        // }
        this.render();

    },
    render: function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

var Enemy2 = {
    sprite: 'images/enemy-bug.png',
    x: 0,
    y: 145,

    update: function(dt){

        this.x += 5;
        if(this.x > 505){
            this.x = 0;
        }

        if(this.x === Player.x && this.y === Player.y){
            console.log("Touched Enemy 02");
        }

        // if(this.x === Player.x && this.y === Player.y){
        //     playerLose();
        // }
        this.render();

    },
    render: function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

var Enemy3 = {
    sprite: 'images/enemy-bug.png',
    x: 0,
    y: 60,

    update: function(dt){

        this.x += 2.5;
        if(this.x > 505){
            this.x = 0;
        }

        if(this.x === Player.x && this.y === Player.y){
                console.log("Touched Enemy 03");
            }

        this.render();


    },
    render: function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = {

    boy: 'images/char-boy.png',
    x: 200,
    y: 400,

    update: function(){

        this.render();
        check();                              /// will call check all the time.
        // console.log(this.x);
        // console.log(this.y);
    },
    render: function(){
        ctx.drawImage(Resources.get(this.boy), this.x, this.y);
     
    },
    handleInput: function(key){

        // Move Player and Win Condition
        if(key === 'up' && this.y > -25){
            this.y = this.y - 85;

            if(this.y === -25){
                setTimeout(playerWin,250);
            }
        }
        if(key === 'left' && this.x > 0){
            this.x = this.x - 100;
        }
        if(key === 'right' && this.x < 400){
        
            this.x = this.x + 100;
            
        }
        if(key === 'down' && this.y < 400){
            this.y = this.y + 85;
        }

/*        // when player touches the enemy
        if(this.x === Enemy1.x && this.y === Enemy1.y){
            console.log('you have lost the game');
            playerLose();
        }

        if(this.x === Enemy2.x && this.y === Enemy2.y){
            console.log('you have lost the game 02');
            playerLose();
        }

        if(this.x === Enemy3.x && this.y === Enemy3.y){
            console.log('you have lost the game 03');
            playerLose();
        }
*/    
        // reset the game when this.y = -25 which means he reached to the sea. 
        // Pop-up then make this.x = 200 and this.y = 400 to start the game again.
        // Pop-up code from Memory Game Project.
        // if(this.y === -25){
        //     alert(`You won the game 
        //            Do you want to play again ?`);
        // }

            
    }
    
};

var playerWin = function(){
    Player.x = 200;
    Player.y = 400;
    Player.render();
    alert(`You won the game 
    Do you want to play again ?`);
}

var playerLose = function(){
    Player.x = 200;
    Player.y = 400;
    Player.render();

/*  Enemy1.x = 0;
    Enemy1.y = 230;

    Enemy2.x = 0;
    Enemy2.y = 145;

    Enemy3.x = 0;
    Enemy3.y = 60;
*/
}


var check = function(){

    if((Player.x === Enemy1.x+40 || Player.x === Enemy1.x) && Player.y === Enemy1.y){
        console.log('you have lost the game 01');
        playerLose();
    }

    if(Player.x === Enemy2.x && Player.y === Enemy2.y){
        console.log('you have lost the game 02');
        playerLose();
    }

    // if(Player.x === Enemy3.x && Player.y === Enemy3.y){
    if((Player.x === Enemy3.x+40 || Player.x === Enemy3.x) && Player.y === Enemy3.y){
        console.log('you have lost the game 03');
        playerLose();
    }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [Enemy1, Enemy2, Enemy3];
//allEnemies.push(Enemy.sprite);
// Place the player object in a variable called player
var player = Player;




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
