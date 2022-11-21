document.getElementById('btn').addEventListener('click',function(){



   //fisrtname
    var firstname = document.getElementById('firstname').value;
    var regex = /^[a-z]{1,30}$/ig;
    if(firstname === '') {
        document.getElementById('name').innerHTML = 'Nome is required.';

    } else if (regex.test(firstname)) {
        document.getElementById('name').innerHTML = '';
       
    } else if (firstname.length>30){
        document.getElementById('name').innerHTML = 'where are u goin';
        
    } else {
        document.getElementById('name').innerHTML = 'dont use numers or chifre';
       
    }

    //lastname
    var lastname = document.getElementById('lastname').value;
    var regex = /^[a-z]{1,30}$/ig;
    if(lastname === '') {
        document.getElementById('name').innerHTML = 'Nome is required.';

    } else if (regex.test(lastname)) {
        document.getElementById('namelast').innerHTML = '';
       
    } else if (lastname.length>30){
        document.getElementById('namelast').innerHTML = 'where are u goin';
        
    } else {
        document.getElementById('namelast').innerHTML = 'dont use numers or chifre';
       
    }
    
    //email
    var email = document.getElementById('email').value;
    var regex = /^[a-z]+\.[a-z]+\@ofppt.ma$/ig;
    if(email === '') {
        document.getElementById('paraemail').innerHTML = 'Email is required.';
        document.getElementById('input').style.border = "2px solid #09c372";
    } else if (regex.test(email)) {
        document.getElementById('paraemail').innerHTML = '';
    } else {
        document.getElementById('paraemail').innerHTML = 'Email Non Valid.';
     
    }


});

