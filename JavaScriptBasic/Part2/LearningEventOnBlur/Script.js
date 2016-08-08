function myFunc(owner){
    alert(document.getElementById("name").value.toString());
}
function checkUser(){
    if(document.getElementById("username").value == ""){
        alert("Please enter your username!");
    }else{
        document.getElementById("information").innerHTML = "Username " + document.getElementById("username").value;
    }
}
function checkLeft(){
    document.getElementById("text").style.backgroundColor = "red";
}
function checkVisible(){
    document.getElementById("text").style.backgroundColor = "yellow";
}