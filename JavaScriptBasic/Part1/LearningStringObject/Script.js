var name = "Nguyen Van Vuong";
document.writeln("Learning about toUpperCase: "+name.toUpperCase()+"<br>");

var name2 = "Đại Học Bách Khoa Đà Nẵng";
document.writeln("Learning about slice: "+name.slice(3,12)+"<br>");

var name3 = "Trường Đại Học Bách Khoa Đà Nẵng - Khoa Công Nghệ Thông Tin";
document.writeln("Learning about substr: " + name.substr(4,10));

var name4 = "Nguyễn Văn Vương Lớp 12T2 Đại Học Bách Khoa Đà Nẵng";
document.writeln("<br>Learning about substring: " + name4.substring(3, 33));

var txt = "Hello World";
document.writeln("<p>Learning about atribute Big: " + txt.big() + "</p>");
document.writeln("<p>Learning about atribute Small: " + txt.small() + "</p>");
document.writeln("<p>Learning about atribute Bold: " + txt.bold() + "</p>");
document.writeln("<p>Learning about atribute Italic: " + txt.italics() + "</p>");
document.writeln("<p>Learning about atribute Blink: " + txt.blink() + "</p>");
document.writeln("<p>Learning about atribute fixed: " + txt.fixed() + "</p>");
document.writeln("<p>Learning about atribute Strike: " + txt.strike() + "</p>");
document.writeln("<p>Learning about atribute Font Color: " + txt.fontcolor("red") + "</p>");
document.writeln("<p>Learning about atribute Font Size: " + txt.fontsize(14) + "</p>");
document.writeln("<p>Link:" + txt.link("https://www.google.com.vn/") + "</p>");

document.writeln("<h1>Learning about String Object</h1>");
var number = "One;Two;Three;Four;Five;Six;Seven;Eight;Nine;Ten";
var numberx = number.split(";");
for(i=0;i<numberx.length;i++){
    document.write(numberx[i].toString());
    document.write("<br>");
}

document.write("Tìm kiếm một chuỗi con bên trong chuỗi: ");
var str = "Hello World";
document.write("Learning about indexOf: "+str.indexOf("Hello") + "<br>");
document.write("Learning about indexOf: "+str.indexOf("hello") + "<br>");
document.write("Learning about indexOf: "+str.indexOf("World") + "<br>");



