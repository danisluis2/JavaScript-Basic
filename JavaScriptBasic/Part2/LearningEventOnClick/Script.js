function myFunc(){
    alert("You click me!");
}
var cont = true; // GOBAL
function myFuncx(){
    // var cont // LOCAL
    if(cont){
        document.getElementById("hello").innerHTML = "Trường Đại Học Bách Khoa Đà Nẵng".toUpperCase();
        cont = false;
    }else{
        document.getElementById("hello").innerHTML = "Nguyễn Văn Vương".toUpperCase();
        cont = true;
    }
}
function myParameter(owner,colorx){
    owner.style.color = colorx;
}