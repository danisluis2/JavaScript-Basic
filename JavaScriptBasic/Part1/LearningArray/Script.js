/**  there are three way to intiatize element on the array **/
// First: you using declarating and setting value
var myfriends = new Array();
myfriends[0] = "Nguyễn Văn Vương";
myfriends[1] = "Trương Quân Bảo";
myfriends[2] = "Nguyễn Thị Như Hương";
// Second: you using initialize
var cars = ("Lamboghini", "Lexus", "Mercedes");
var citys = ["NewYork","DaNang","Duba"];
// Notice: almost of element in array not same as type of database.
// Third
var row = ["1",'Nguyễn Văn Vương',"26-07-1994","12T2","Trường Đại Học Bách Khoa Đà Nẵng"];

var fruits = ["Apple", "Oranges"];var meat = ["Pork", "Chicken"];var number = [11, 2.5, true];
var result1 = fruits.concat(meat);
alert("Học dùng concat: " + result1);
var result2 = fruits.concat(number);
alert("Học dùng concat: " + result2);

// Learning searching by array
var numbersarray = [2, 4, 5, -1, 34];
function isZeroAbove(element,index,array){
    return (element > 0);
}
if(numbersarray.every(isZeroAbove)){
    elert('Al elements inside array is above 0 in value !');                                                                                                            
}

// Learning join in javascript tutorials, this is method useful when you using or development
var points = [9, 7, 8, 4, 0, 9, 7, 8, 3];
var result3 = points.join; // this is a string tutorials
alert("Learning join in array javascript: " + result3);
var result4 = points.join("-");
alert("Learning join in array javascript: " + result4);

// Learning indexof tutorials
var rewards = [8.2,9.0,7.7,8.5,8.8,9.2,8.6];
alert("Learning indexof is: "+rewards.indexOf(9.2));

// Learning splice in array
var myarray = (13, 44, 32, 11, 59);
alert("Learning about splice: "+myarray.splice(2, 3, 4, 5));

// Learning about sort array
var mysort = ["Bob","Buddly","Amy"];
var mysortx = mysort.sort();
alert("Learning about splice: "+mysortx[0]);




