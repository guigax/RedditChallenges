function returnChallenge001Phrase(){
    let name = info.name.value;
    let age = info.age.value;
    let redditUsername = info.redditUsername.value;

    let result = 'Your name is ' + name + ', you are ' + age + ' years old, and your username is ' + redditUsername;
    
    console.log(result);

    document.getElementById('resultPhrase').innerHTML = result;
}