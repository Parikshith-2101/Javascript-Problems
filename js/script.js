var op;

function display(op) 
{
    document.getElementById("result").value = op;
}
function displayResult(res) 
{
    document.getElementById("result").textContent = res;
}

/* 1 */
function hello()
{
    alert("Hello World");
}
/* 2 */
function add()
{
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    var op = n1+n2;
    display(op);   
}
/* 3 */
function sumAvg()
{
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    var op = n1+n2+n3;
    display(op);
    var avg = op/3;
    document.getElementById("avgResult").value=avg;
}
/* 4 */
function simpleInterest()
{
    let amt = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    var res = (amt*rate*time)/100;
    displayResult(res);
}
/* 5 */
function compoundInterest()
{
    let amt = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    var res = (amt*(1+rate)**time);
    displayResult(res);
}
/* 6 */
function areaofCircle()
{
    let radius = (document.getElementById("num1").value);
    var res = 3.14*(radius*radius);
    displayResult(res);
}
/* 7 */
function floatNumbers()
{
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("add").textContent=parseFloat(n1+n2);
    document.getElementById("sub").textContent=parseFloat(n1-n2);
    document.getElementById("mul").textContent=parseFloat(n1*n2);
    document.getElementById("divi").textContent=parseFloat(n1/n2);
}
/* 8 */
function cube()
{
    let n1 = (document.getElementById("num1").value);
    var res = n1*n1*n1;
    displayResult(res);
}
/* 9 */
function oddEven()
{
    let n = (document.getElementById("num1").value);
    if(n%2==0)
    {
 	res="Even";
    }
    else
    {
        res="Odd";
    }
    displayResult(res);
}
/* 10 */
function leapYear()
{
    let n = (document.getElementById("num1").value);
    if(n%4==0 || n%400==0 && n%100!=0)
    {
 	res="Leap Year";
    }
    else
    {
        res="Not a Leap Year";
    }
    displayResult(res);
}
/* 11 */
function swap()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let temp = n1;
    n1=n2;
    n2=temp;
    document.getElementById("result1").textContent = n1;
    document.getElementById("result2").textContent = n2;
}
/* 12 */
function Mathpow()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    var res = n1**n2;
    displayResult(res);
}
/* 13 */
function sumofDigits()
{
    let res = 0;
    let n1 = document.getElementById("num1").value;
    while(n1!=0){
    	res = res + parseInt(n1)%10;
	n1 = parseInt(n1)/10;
    }    
    displayResult(res);
}
/* 14 */
function numberReverse()
{
    let res = 0;
    let n1 = document.getElementById("num1").value;
    while(n1!=0){
    	res = res*10 + n1 % 10;
	n1 = Math.floor(n1/10);
    }    
    displayResult(res);
}
/* 15 */
function smallestGreatest()
{
    document.getElementById("result1").textContent = "";
    document.getElementById("result2").textContent = "";	
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    if(n1<n2 && n1<n3)
    {
	document.getElementById("result1").textContent = n1;
    }
    else if(n2<n1 && n2<n3)
    {
 	document.getElementById("result1").textContent = n2;
    }
    else
    {
    	document.getElementById("result1").textContent = n3; 
    }

    if(n1>n2 && n1>n3)
    {
	document.getElementById("result2").textContent = n1;
    }
    else if(n2>n1 && n2>n3)
    {
	document.getElementById("result2").textContent = n2;
    } 
    else
    {
   	document.getElementById("result2").textContent = n3;
    }   
}
/* 16 */
function primeNum()
{
    let n = document.getElementById("num1").value;
    let count=0;
    for(i=0;i<n;i++)
    {
	if(n%i==0)
     	{	  
            count++;
	}
    }
    if(count<2)
    {
	res="Prime number";
    }
    else
    {	
	res="Not a prime number";
    }
    displayResult(res);
}
/* 17 */
function Admission()
{
    let phy = Number(document.getElementById("num1").value);
    let chem = Number(document.getElementById("num2").value);
    let mat = Number(document.getElementById("num3").value);
    totalAll = phy+chem+mat;
    totMP = mat+phy;
    document.getElementById("result1").textContent = totalAll;
    document.getElementById("result2").textContent = totMP;
    if(mat>=65 && phy>=55 && chem>=50 && (totalAll>=190 || totMP>=140))
    {
   	res="Congratulation..You are Eligible!";
    }
    else
    {
  	res="Sorry!..You are Not Eligibile";
    }
    displayResult(res);
}
/* 19 */
function dayWeek()
{
    let n = Number(document.getElementById("num1").value);
    switch(n)
    {
	case 1:
		res="Sunday";
		break;
	case 2:
		res="Monday";
		break;
	case 3:
		res="Tuesday";
		break;
	case 4:
		res="Wednesday";
		break;
	case 5:
		res="Thursday";
		break;
	case 6:
		res="Friday";
		break;
	case 7:
		res="Saturday";
		break;
	default:
		res="Invalid day number";
    }
    displayResult(res);
}
/* 20 */
function calculatorSimple()
{
    let opt1 = document.getElementById("Opt1").checked;
    let opt2 = document.getElementById("Opt2").checked;
    let opt3 = document.getElementById("Opt3").checked;
    let opt4 = document.getElementById("Opt4").checked;
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    if(opt1)
    {
	res = n1+n2;
    }
    else if(opt2)
    {
	res = n1-n2;
    }
    else if(opt3)
    {
	res = n1*n2;
    }
    else if(opt4)
    {
	res = n1/n2;
    }
    else
    {
	res = "Please select an operation";
    }
    displayResult(res);
}
/* 21 */
function print100()
{
    res="1 to 100";
    displayResult(res);
}