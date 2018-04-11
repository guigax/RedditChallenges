const plain = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cipher = 'XYZABCDEFGHIJKLMNOPQRSTUVW';

function encrypt(){
    let original = info.original.value;
    var result = '';

    for (var i = 0; i < original.length; i++) {
        result += cipher.charAt(plain.indexOf(original.charAt(i)));
    }

    info.encrypted.value = result;
}

function decrypt(){
    let encrypted = info.encrypted.value;
    var result = '';

    for (var i = 0; i < encrypted.length; i++) {
        result += plain.charAt(cipher.indexOf(encrypted.charAt(i)));
    }

    info.decrypted.value = result;
}

function allLetter(element){ 
    const regex = /^[A-Z]+$/;

    element.value = element.value.toUpperCase();

    if (!element.value.match(regex)) {
        element.value = element.value.substring(0, element.value.length - 1);
        return false;
    }
}