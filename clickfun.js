function onclickFunction(){
	document.getElementById('first').innerHTML="This is onclick function";
}  
function ondblclickFunction(){
	document.getElementById('second').innerHTML="This is on double click function";
}
function onkeydownFunction(){
	document.getElementById('third').style.backgroundColor="red";
}
function onkeyupFunction(){
	document.getElementById('fourth').style.backgroundColor="yellow";
}
function onkeypressFunction(){
	alert("you pressed a key inside input");
}
function onfocusFunction(){
	document.getElementById('sixth').style.backgroundColor="black";
}
function onblurFunction(){
	document.getElementById('seventh').style.backgroundColor="black";
}
//--------while loop
var text="";
var i=0;
while (i<15){
	text +="<br> the number is"+ i;
	i++;
}
document.getElementById('while').innerHTML=text;
//------do while loop
var text="";
var i=0;
do {
	text +="<br> the number is"+ i;
	i++;
}
while(i<7)
document.getElementById('dowhile').innerHTML=text;