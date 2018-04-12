const username = 'guigax';
const password = '123456';

function verifyLogin(){
    if (info.username.value === username && info.password.value === password) {
        document.getElementsByClassName('resultP')[0].innerHTML = 'You did it';
    } else {
        document.getElementsByClassName('resultP')[0].innerHTML = 'You did not';
    }
   
}