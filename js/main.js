let calulateAge = document.getElementById("calAge");

calulateAge.addEventListener("click", function(){

    //collect input from HTML form and convert into date format
    let userinput = document.getElementById("dateOfBirth").value;
    let dob = new Date(userinput);
    let showResult = document.getElementById("showAge");
    
    //check user provide input or not
    if(userinput==null || userinput==''){
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } 
    
    //execute if user entered a date 
    else {
        //extract and collect only date from date-time string
        let mdate = userinput.toString();
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
        day_age = day_age % 30;
            
        let tMnt= (month_age + (year_age*12));
        let tDays =(tMnt*30) + day_age;
     
    //DOB is greater than today?s date, generate an error: Invalid date  
     if (dob>today) {
        showResult.value = "Invalid date input - Please try again!";
      }
      else {
        showResult.value = year_age + " years " + month_age + " months " + day_age + " days"
      }
   }

    

});