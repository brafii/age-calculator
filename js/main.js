let calulateAge = document.getElementById("calAge");
let dob = document.getElementById("dateOfBirth");

const year = 2022;

calulateAge.addEventListener("click", function(){

    let getInput = dob.value;
    dob.value = "";

    console.log(getInput);

});