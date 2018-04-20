window.onload = function() {
    setValue();
};

function setValue(){
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

    console.log(maze);
    console.log(spaceOccurences);
    
    maze = setCharAt(maze, spaceOccurences[getRandomInt(0, spaceOccurences.length - 1)], '<i>O</i>');
    
    var formattedMaze = maze.replace(/\s/g, '&nbsp;');

    formattedMaze = formattedMaze.replace(/X/g, '<span class=\'exitPoint\'>X</span>');

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