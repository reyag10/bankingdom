document.getElementById("loginbutton").addEventListener('click', function(){
    // default admin access 

    const userGmail = "admin@gmail.com";
    const userPass = "1234";
   
    // Get user email
    const loginEmail = document.getElementById("loginemail");
    const givenEmail = loginEmail.value; 
    

    // Get user password 
    const loginPass = document.getElementById("loginpass");
    const givenPass = loginPass.value;
       

    // // Get chllenge key
    // const chllengeKey = document.getElementById("chllengekey");
    // const givenChllengeKey = chllengeKey.value;
    

    if(givenEmail === userGmail && givenPass === userPass){
        window.location.href = "home.html";
    }
    else{
        alert("User access denied !");
    }
    
})