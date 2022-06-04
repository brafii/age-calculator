let calulateAge = document.getElementById("calAge");
let userInput = document.getElementById("dateOfBirth").value;
let dob = new Date(userInput);
let showResult = document.getElementById("showAge");


calulateAge.addEventListener("click", function(){

    // let getInput = dob.value;
    // dob.value = "";

    // let answer = year - getInput;

    // showResult.value = "You are " + answer + " years";

    // console.log(answer);

    if(userInput === null || userInput === "")
    {
        showResult.value = "Please select a date";
        return false;
    }
    else{

        let mdate = userInput.toString();  
        let dobYear = parseInt(mdate.substring(0,4), 10);  
        let dobMonth = parseInt(mdate.substring(5,7), 10);  
        let dobDate = parseInt(mdate.substring(8,10), 10); 

         //get the current date from system  
        let today = new Date();  
        //date string after broking  
        let birthday = new Date(dobYear, dobMonth-1, dobDate);  
        
        //calculate the difference of dates  
        let diffInMillisecond = today.valueOf() - birthday.valueOf();  
    
        //convert the difference in milliseconds and store in day and year variable          
        let year_age = Math.floor(diffInMillisecond / 31536000000);  
        let day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

        //when birth date and month is same as today's date        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
            alert("Happy Birthday!");  
        }  
        
        let month_age = Math.floor(day_age/30);          
        day_ageday_age = day_age % 30;  
            
        let tMnt= (month_age + (year_age*12));  
        let tDays =(tMnt*30) + day_age;
        
    }

    

});