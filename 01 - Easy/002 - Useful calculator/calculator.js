window.onload = function() {
    addListeners();
};

function readOnlyCorrespondingField(element){
    var inputs = document.querySelectorAll("input[type=number]");

    inputs.forEach(function(input, index){
        input.removeAttribute('readonly');
    });

    document.getElementsByName(element.value)[0].setAttribute('readonly', 'readOnly');
}

function addListeners(){
    let radios = document.querySelectorAll('input[type=radio]');

    radios.forEach(function(input, index){
        input.onclick = function(){
            clearAllTextFields();
            readOnlyCorrespondingField(input);
        };
    });
}

function clearAllTextFields(){
    var inputs = document.querySelectorAll("input[type=number]");

    inputs.forEach(function(input, index){
        input.value = '';
    });    
}

function returnCalculatedValue(){
    if (info.choice.value === 'acceleration'){
        info.acceleration.value = info.force.value / info.mass.value;
    } else if (info.choice.value === 'force') {
        info.force.value = info.mass.value * info.acceleration.value;
    } else {
        info.mass.value = info.force.value * info.acceleration.value;
    }
}