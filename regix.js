document.getElementById('btn').addEventListener('click',function(){



   //fisrtname
    var firstname = document.getElementById('firstname').value;
    var regex = /^[a-z]{1,30}$/ig;
    if(firstname === '') {
        document.getElementById('name').innerHTML = 'Nome is required.';

    } else if (regex.test(firstname)) {
        document.getElementById('name').innerHTML = '';
        document.getElementById('firstname').style.borderColor="green";

       
    } else if (firstname.length>30){
        document.getElementById('name').innerHTML = 'where are u goin';
        
    } else {
        document.getElementById('name').innerHTML = 'dont use numers or chifre';
        document.getElementById('firstname').style.borderColor="red";

       
    }

    //lastname
    var lastname = document.getElementById('lastname').value;
    var regex = /^[a-z]{1,30}$/ig;
    if(lastname === '') {
        document.getElementById('namelast').innerHTML = 'Nome is required.';

    } else if (regex.test(lastname)) {
        document.getElementById('namelast').innerHTML = '';
        document.getElementById('lastname').style.borderColor="green";

       
    } else if (lastname.length>30){
        document.getElementById('namelast').innerHTML = 'where are u goin';
        
    } else {
        document.getElementById('namelast').innerHTML = 'dont use numers or chifre';
        document.getElementById('lastname').style.borderColor="red";

       
    }
    
    //email
    var email = document.getElementById('email').value;
    var regex = /^[a-z]+\.[a-z]+\@ofppt.ma$/ig;
    if(email === '') {
        document.getElementById('paraemail').innerHTML = 'Email is required.';

    } else if (regex.test(email)) {
        document.getElementById('paraemail').innerHTML = '';
        document.getElementById('email').style.borderColor="green";

    } else {
        document.getElementById('paraemail').innerHTML = 'Email Non Valid.';
        document.getElementById('email').style.borderColor="red";
         
     
    }
    // telephone 
    var telephone = document.getElementById('telephone').value;
    var regex = /^[0]+[5-7]+\d{8}$/ig;
    if(telephone === '') {
        document.getElementById('paratele').innerHTML = 'Telephone is required.';
    } else if (regex.test(telephone)) {
        document.getElementById('paratele').innerHTML = '';
        document.getElementById('telephone').style.borderColor="green";

        
    } else if (telephone.length>10){
        document.getElementById('paratele').innerHTML = 'just 10 chiffres.';
    }
    else {
        document.getElementById('paratele').innerHTML = 'Telephone Non Valid.';
        document.getElementById('telephone').style.borderColor="red";

        
    }
        


});

