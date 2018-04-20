window.onload = function() {
    setValue();
};

function setValue(){
    
    // create maze
    var maze = '#########################################################################<br/>'+
               '#   #               #               #           #                   #   #<br/>'+
               '#   #   #########   #   #####   #########   #####   #####   #####   #   #<br/>'+
               '#               #       #   #           #           #   #   #       #   #<br/>'+
               '#########   #   #########   #########   #####   #   #   #   #########   #<br/>'+
               '#       #   #               #           #   #   #   #   #           #   #<br/>'+
               '#   #   #############   #   #   #########   #####   #   #########   #   #<br/>'+
               '#   #               #   #   #       #           #           #       #   #<br/>'+
               '#   #############   #####   #####   #   #####   #########   #   #####   #<br/>'+
               '#           #       #   #       #   #       #           #   #           #<br/>'+
               '#   #####   #####   #   #####   #   #########   #   #   #   #############<br/>'+
               '#       #       #   #   #       #       #       #   #   #       #       #<br/>'+
               '#############   #   #   #   #########   #   #####   #   #####   #####   #<br/>'+
               '#           #   #           #       #   #       #   #       #           #<br/>'+
               '#   #####   #   #########   #####   #   #####   #####   #############   #<br/>'+
               '#   #       #           #           #       #   #   #               #   #<br/>'+
               '#   #   #########   #   #####   #########   #   #   #############   #   #<br/>'+
               '#   #           #   #   #   #   #           #               #   #       #<br/>'+
               '#   #########   #   #   #   #####   #########   #########   #   #########<br/>'+
               '#   #       #   #   #           #           #   #       #               #<br/>'+
               '#   #   #####   #####   #####   #########   #####   #   #########   #   #<br/>'+
               '#   #                   #           #               #               #   #<br/>'+
               '# X #####################################################################<br/>';

    var spaceOccurences = [];
    spaceOccurences = getPositionsOfCharInString(maze, ' ');

    // set the hero to a random space on the maze
    maze = setCharAt(maze, spaceOccurences[getRandomInt(0, spaceOccurences.length - 1)], '●');
    
    // change space to html to fit editable div content
    var formattedMaze = maze.replace(/\s/g, '&nbsp;');

    // add css class to exit point
    formattedMaze = formattedMaze.replace(/X/g, '<span class=\'exitBlink exitPoint\'>X</span>');

    // add css class to hero
    formattedMaze = formattedMaze.replace(/●/g, '<span class=\'heroBlink hero\'>●</span>');

    document.getElementsByName('maze')[0].innerHTML = formattedMaze;
}

function getPositionsOfCharInString(string, char){
    var indices = [];

    for(var i = 0; i < string.length; i++) {
        if (string[i] === char){
            indices.push(i);
        }
    }
    
    return indices;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function setCharAt(string, index, char) {
    if (index > string.length-1){
        return string;
    }
    return string.substr(0,index) + char + string.substr(index+1);
}