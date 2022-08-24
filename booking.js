var name_regex= /^[a-z A-Z]+$/;
var email_regex= /\S+@\S+\.com/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var phone_regex = /^[0-9]+$/;
const items={ 'fname':0, 'lname':0, 'age':0, 'email':0, 'phone':0};

function valid(element)
{
    element.style.borderColor='green';
    items[element.id]=1;
    enablebutton();
}

function invalid(element)
{
    element.style.borderColor="red";
    items[element.id]=0;
    document.getElementById("submit").setAttribute("disabled","true");
}

function enablebutton()
{
    for(const item in items)
    {
        if(items[item]==0)
        {
            console.log(items[item]);
            return;
        }
    }
    document.getElementById("submit").removeAttribute("disabled");
}

//First Name Validation

function validation_FirstName(element)
{
    var msg=document.getElementById("s_fname");
    if(element.value.length==0)
    {
        invalid(element);
        msg.innerHTML="Please enter first name";
        return;
    }
    if(element.value.length>20)
    {
        invalid(element);
        msg.innerHTML="First name should be less than 20 characters";
        return;
    }
    if(name_regex.test(element.value))
    {
        valid(element);
        msg.innerHTML="";
    }
    else
    {
        invalid(element);
        msg.innerHTML="First name can only be alphabets";
    }
}

//Last Name Validation

function validation_LastName(element)
{
    var msg=document.getElementById("s_lname");
    if(element.value.length==0)
    {
        invalid(element);
        msg.innerHTML="Please enter last name";
        return;
    }
    if(element.value.length>20)
    {
        invalid(element);
        msg.innerHTML="Last name should be less than 20 characters";
        return;
    }
    if(name_regex.test(element.value))
    {
        valid(element);
        msg.innerHTML="";
    }
    else
    {
        invalid(element);
        msg.innerHTML="Last name can only be alphabets";
    }
}

//Age Validation

function validation_Age(element)
{
    var msg=document.getElementById("s_age");
    if(element.value.length==0)
    {
        invalid(element);
        msg.innerHTML="Age cannot be empty";
        return;
    }
    if(age_regex.test(element.value))
    {
        valid(element);
        msg.innerHTML="";
        console.log(element);
    }
    else
    {
        invalid(element);
        msg.innerHTML="Enter proper age";
    }
}

//Email Validation

function validation_Email(element)
{
    var msg=document.getElementById("s_email");
    if(element.value.length==0)
    {
        invalid(element);
        msg.innerHTML="Email cannot be empty";
        return;
    }
    if(email_regex.test(element.value))
    {
        valid(element);
        msg.innerHTML="";
    }
    else
    {
        invalid(element);
        msg.innerHTML="Enter proper mail id";
    }
}

//Phone Number Validation

function validation_Phone(element)
{
    var msg=document.getElementById("s_phone");
    if(element.value.length==0)
    {
        invalid(element);
        msg.innerHTML="Phone number cannot be empty";
        return;
    }
    if(element.value.length>10)
    {
        invalid(element);
        msg.innerHTML="Phone number should be less than 10 digits";
        return;
    }
    if(phone_regex.test(element.value))
    {
        valid(element);
        msg.innerHTML="";
    }
    else
    {
        invalid(element);
        msg.innerHTML="Phone number can only be numbers";
    }

}


//Storing first passenger details to local storage

function fp_submit()
        {
            localStorage.setItem("flag",0);
            var fname=document.getElementById("fname").value;
            localStorage.setItem("mykey",fname); 
            var lname=document.getElementById("lname").value;
            localStorage.setItem("mykey1",lname);
            var a=document.getElementById("age").value;
            localStorage.setItem("mykey2",a);
            var e=document.getElementById("email").value;
            localStorage.setItem("mykey3",e);
            var p=document.getElementById("phone").value;
            localStorage.setItem("mykey4",p);
            window.location.href = "confirmation.html";
            return false;
        }

       
//Storing second passenger details to local storage

function sp_submit()
{   

    fp_submit();  
    localStorage.setItem("flag",1);
    var sp_fname=document.getElementById("fname1").value;
    localStorage.setItem("mykey5",sp_fname); 
    var sp_lname=document.getElementById("lname1").value;
    localStorage.setItem("mykey6",sp_lname);
    var sp_a=document.getElementById("age1").value;
    localStorage.setItem("mykey7",sp_a);
    var sp_e=document.getElementById("email1").value;
    localStorage.setItem("mykey8",sp_e);
    var sp_p=document.getElementById("phone1").value;
    localStorage.setItem("mykey9",sp_p);
    window.location.href = "confirmation.html";
    return false;   
    
}


//Displaying form for second passenger on clicking Add Passenger button

function form2()
{
    
    document.getElementById("submit").style.display = "none";
    document.getElementById("booking2").style.display = "block";
    document.getElementById("firstName2").style.display = "block";
    document.getElementById("lastName2").style.display = "block";
    document.getElementById("age2").style.display = "block";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("email2").style.display = "block";
    document.getElementById("phone2").style.display = "block";
}