
const character = newImage('right.png')


let direction = null;
let x = 100;
let y = 250;



setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 0) 
                            
document.addEventListener('keydown', function(e){   //key press
    if(e.repeat) return 
    
    if(e.key === 'a' ){
        direction = 'west'
    }

    if(e.key === 'w'  ){ 
        direction = 'north'
       
    }
    if(e.key === 'd' ){ 
        direction = 'east'
    }
    if(e.key === 's' ){
        direction = 'south'
    }

   
    if(e.key === 'ArrowLeft' ){
        direction = 'west'
    }

    if(e.key === 'ArrowUp'  ){ 
        direction = 'north'
       
    }
    if(e.key === 'ArrowRight' ){ 
        direction = 'east'
    }
    if(e.key === 'ArrowDown' ){
        direction = 'south'
    }

    

if(direction === 'west'){
    character.src = 'left.png'
}
if(direction === 'north'){
    character.src = 'up.png'
}
if(direction === 'east'){
    character.src = 'right.png'
}
if(direction === 'south'){
    character.src = 'down.png'
}




})

document.addEventListener('keyup', function(e){  //key leave
    direction = 0
    
    if(direction === 'west'){
        character.src = 'left.png'
    }
    if(direction === 'north'){
        character.src = 'up.png'
    }
    if(direction === 'east'){
        character.src = 'right.png'
    }
    if(direction === 'south'){
        character.src = 'down.png'
    }
})









