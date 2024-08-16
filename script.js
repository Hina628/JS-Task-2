
// Chapter : 04

// Q: Declare 3 variables in one statement.

myName = "name,fatherName,age"

var name = " hina";
 var fatherName = " fahimAhmed";
 var age =  26;

//  document.write( (name) + (fatherName) +  (age));

//  Q:Declare 5 legal & 5 illegal variable names.

 //LEGAL: 05

myName = "hinaFahim";
fatherName = "fahimAhmed";
age = 26;
city = "karachi";
hobby = "reading";

//ILLEGAL : 05

//@Myname = (Symbol is not allowed in starting of varaible name);
//father name = (space is not allowed in varaible name);
//1number = (num can't be written in the first of varaible name);
//City = (capital latter is not allowed in the starting of variable name);
//else = (reserved or keyword is not allowed);

//Q:3. Display this in your browser

//a) A heading stating “Rules for naming JS variables”.

document.write("<h1>Rules for naming JS variables</h1>");

// b) Variable names can only contain ______, ______,
// ______ and ______.

$my_1stVariable = " Variable names can only contain , numbers, $ and_ . For example : $my_1stVariable";

document.write("<br/>" + ($my_1stVariable)); 

// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name.


$name_2ndVariable = "Variables must begin with a letter, $ or_. For exampe : $name,_name or name";



document.write("<br/>" + ($name_2ndVariable));

//d) Variable names are case.

caseVariable ="Variable names are case sensitive";

document.write("<br/>" + (caseVariable));

//e) Variable names should not be JS.

js_variable ="Variable names should not be JS Keywords";

document.write("<br/>" + (js_variable));

// -------------------------------------------------------