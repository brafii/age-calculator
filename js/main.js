let calulateAge = document.getElementById("calAge");
let dob = document.getElementById("dateOfBirth");
let showResult = document.getElementById("showAge");

const year = 2022;

calulateAge.addEventListener("click", function(){

    let getInput = dob.value;
    dob.value = "";

    let answer = year - getInput;

    showResult.value = "You are " + answer + " years";

    console.log(answer);

});