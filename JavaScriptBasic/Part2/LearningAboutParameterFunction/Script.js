function mySum(owner,a,b){
    var result = Math.round(a + b);
    owner.innerHTML = "Kết quả phép cộng: "+result;
}
function myCopy(){
    var data1 = document.getElementById("field1").value;
    document.getElementById("field2").value = data1;
}
function myBackgroundColor(){
    document.getElementsByClassName("container")[0].style.backgroundColor = "yellow";
    document.getElementsByTagName("SECTION")[0].style.backgroundColor = "black";
    document.getElementsByTagName("SECTION")[0].style.color = "white";
}