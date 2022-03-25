function validate(){
    console.log("working");
    let a=document.forms.form.email1.value;
    if(a==""){
        alert("Email feild cannot be empty")
        return false
    }
    var atPos=a.indexOf("@");
    var dotPos=a.lastIndexOf(".");
    if(atPos<1||dotPos<atPos+2||dotPos+2>=a.lenght){
        alert("Eter a valid Email")
    }
    let b=document.forms.form.password1.value;
    if(b==""){
        alert("Password cannot be empty")
        return false;
    }
    if(b.length<6){
        alert("Password should contain minimum of 6 characters")
        return false
    }
}