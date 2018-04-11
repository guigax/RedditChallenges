const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';
const special = '<>/?][}{!@#$%&*()-_=+';

function randomPasswordList(){
    var resultArray = [];
    var arraySize;
    var resultWord;
    var possibleOutput = '';
    
    possibleOutput += lowercase;

    if (info.uppercase.checked) {
        possibleOutput += uppercase;
    }

    if (info.number.checked) {
        possibleOutput += number;
    }

    if (info.special.checked) {
        possibleOutput += special;
    }

    arraySize = possibleOutput.length;

    for (var i = 0; i < info.amount.value; i++) {
        resultWord = '';
        for (var j = 0; j < info.size.value; j++) {
            resultWord += possibleOutput.charAt(getRandomInt(1, arraySize));
        }

        resultArray.push(resultWord);
    }

    document.getElementsByName('results')[0].value = resultArray.join('\n');
   
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}