var op;

function displayResult(op) 
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
    displayResult(op);   
}
/* 3 */
function sumAvg()
{
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    var op = n1+n2+n3;
    displayResult(op);
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