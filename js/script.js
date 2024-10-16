var op;

function display(op) 
{
    document.getElementById("result").value = op;
}
function displayResult(res) 
{
    document.getElementById("result").textContent = res;
}
function displayResult1(res)
{
    document.getElementById("result1").textContent = res;
}
function displayResult2(res)
{
    document.getElementById("result2").textContent = res;
} 
function displayResult3(res)
{
    document.getElementById("result3").textContent = res;
} 
function displayResult4(res)
{
    document.getElementById("result4").textContent = res;
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
    displayResult1(n1);
    displayResult2(n2);
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
    displayResult1(" ");
    displayResult2(" ");	
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    if(n1<n2 && n1<n3)
    {
	displayResult1(n1);
    }
    else if(n2<n1 && n2<n3)
    {
 	displayResult1(n2);
    }
    else
    {
    	displayResult1(n3);
    }

    if(n1>n2 && n1>n3)
    {
	displayResult2(n1);
    }
    else if(n2>n1 && n2>n3)
    {
	displayResult2(n2);
    } 
    else
    {
   	displayResult2(n3);
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
function print100(n) 
{
    if (n > 100) 
    {
        return;
    }
    document.getElementById("result").textContent += n + " ";
    return print100(n + 1);
}
/* 22 */
function printloop() 
{
    var n = 100;
    for (i = 1; i <= n; i++) 
    {
        document.getElementById("result").textContent = document.getElementById("result").textContent + i + " ";
    }
}
/* 23 */
function factors() 
{
    let n = Number(document.getElementById("num1").value);
    for (i = 1; i <= n; i++) 
    {
        if(n%i==0){
            document.getElementById("result").textContent += i + " ";
        }
    }
}
/* 24 */
function factorial() 
{
    let n = Number(document.getElementById("num1").value);
    let fact = 1;
    for (i = 1; i <= n; i++) 
    {
        fact = fact * i;
    }
    displayResult(fact);
}
/* 25 */
function firstLast() 
{
    let n = Number(document.getElementById("num1").value);
    displayResult2(n%10);
    while(n>=10)
    {
        n = Math.floor(n/10);
    }
    displayResult1(n);
}
/* 26 */
function multiplicationTab()
{
    let n = Number(document.getElementById("num1").value);
    document.getElementById("result").textContent = "";
    for(i=1;i<=10;i++)
    {
        document.getElementById("result").innerHTML += (i + " x " + n + " = " + (i*n)) + "<br>";
    }
}
/* 27 */
function naturalNum()
{
    let n = Number(document.getElementById("num1").value);
    for(i=1;i<=n;i++)
    {
        document.getElementById("result").textContent += i + " ";
    }
}
/* 28 */
function naturalNumReverse()
{
    let n = Number(document.getElementById("num1").value);
    for(i=n;i>=1;i--)
    {
        document.getElementById("result").textContent += i + " ";
    }
}
/* 29 */
function nBy5And11()
{
    document.getElementById("result").textContent = "";
    let n = Number(document.getElementById("num1").value);
    temp=0;
    for(i=1;i<=n;i++)
    {
        if(i%5==0 && i%11==0)
	{
            document.getElementById("result").textContent += i + " ";
	    temp=1;
        }
    }
    if(temp==0)
    {
 	alert("No numbers");
    }
}
/* 30 */
function oddN()
{
    document.getElementById("result").textContent = "";
    let n = Number(document.getElementById("num1").value);
    temp = 0;
    for(i=0;i<=n;i++)
    {
	if(i%2!=0)
	{
	    document.getElementById("result").textContent += i + " ";
	    temp = 1;
	}
    }
    if(temp == 0)
    {
	displayResult("No");
    }
}
/* 31 */
function pdtofDigits()
{ 
    let n =document.getElementById("num1").value;
    let pdt = 1;
    let num = Array.from(String(n),Number);
    for(i=0;i<num.length;i++)
    {
	pdt = pdt * num[i];
    }
    displayResult(pdt);
}
/* 32 */
function palString()
{
    let name = document.getElementById("num1").value;
    let Str = "";
    for(i=name.length-1;i>=0;i--)
    {
	Str += name[i];
    }
    if(name.toLowerCase()==Str.toLowerCase())
    {
	displayResult("Palindrome");
    }
    else
    {
	displayResult("Not a Palindrome");
    }
}
/* 33 */
function perfectNum()
{
    let n = document.getElementById("num1").value;
    let num = 0;
    for(i=1;i<n;i++)
    {
  	if(n%i==0)
  	{
	    num += i;
   	}
    }
    if(n==num)
    {
	displayResult("Perfect number");
    }
    else
    {
 	displayResult("Not a perfect number");
    }
}
/* 35 */
function positiveNegative()
{
    let n = document.getElementById("num1").value;
    if(n>0)
    {
  	displayResult("Positive number");
    }
    else if(n<0)
    {
	displayResult("Negative number");
    }
    else
    {
	displayResult("Zero is neither positive nor negative");
    }
}
/* 36 */
function NotesInAmount()
{
    let amount = Number(document.getElementById("num1").value);
    let notes = [500,200,100,50,20,10,5,2,1];
    let note = {};
    for(let i in notes)
    {
        count=0;
    	while(amount>=notes[i])
        {
            amount = amount - notes[i];
            count++;
            console.log(note);
        }
        note[notes[i]] =  count;

    }
   let div=document.getElementById("result");
   for(let char in note){
	console.log(char);
	if(note[char]>0){
            let element=document.createElement('div');
	    element.textContent=char+":"+note[char];
            div.appendChild(element);
	}
    }
}
/* 37 */
function evenN()
{
    let n = document.getElementById("num1").value;
    let temp = 0;
    for(i=1;i<=n;i++)
    {
	if(i%2==0)
	{
	    document.getElementById("result").textContent += i + " ";
	    temp = 1;
        }
    }
    if(temp==0)
    {
	displayResult("No number is Even");
    }
}
/* 38 */
function sumAvgofN()
{
    let n = document.getElementById("num1").value;
    let sum = 0;
    for(let i = 1;i<=n;i++)
    {
 	sum += i;
    }
    displayResult1(sum);
    let avg = sum/n;
    displayResult2(avg);
}
/* 39 */
function sumofEven()
{
    let n = document.getElementById("num1").value;
    let sum = 0;
    for(let i = 1;i<=n;i++)
    {
 	if(i%2==0)
	{
	    document.getElementById("result1").textContent += i + " ";
   	    sum = sum+i;
	}
    }
    displayResult2(sum);
}
/* 40 */
function sumofEvenOdd()
{
    let n = document.getElementById("num1").value;
    let sumOdd=0;
    let sumEven=0;
    for(let i = 1;i<=n;i++)
    {
   	if(i%2==0)
    	{
 	    sumEven += i;
   	}
	else
        {
	    sumOdd += i;
 	}
    }
    displayResult1(sumEven);
    displayResult2(sumOdd);
}
/* 41 */
function electricityBill()
{
    let n = Number(document.getElementById("num1").value);
    let charges=0;
    if(n<=50)
    {
	charges = n*2.6;
    }
    else if(n<=100)
    {
	charges = 50*2.6 + (n-50)*3.25;
    }
    else if(n<=200) 
    {
	charges = 50*2.6 + 50*3.25 + (n-100)*5.65;
    }
    else
    {
	charges = 50*2.6 + 50*3.25 + 100*5.65 + (n-200)*7.25;
    }
    if(n>700)
    {
 	charges = charges + (0.5/100)*charges;
    }
    displayResult(charges.toFixed(2) + " Rs/-");
}
/* 42 */
function employeeSalary()
{
    displayResult("");
    let n = Number(document.getElementById("num1").value);
    let hra,da,gross;
    if(n<=10000)
    {
  	hra = (8/100)*n;
	da = (10/100)*n;
    }
    else if(n>10000 && n<=20000)
    {
	hra = (16/100)*n;
    	da = (20/100)*n;
    }
    else
    {
 	hra = (24/100)*n;
  	da = (30/100)*n;
    }
    gross = n + hra + da;
    displayResult(gross+"/-");
}
/* 43 */
function cone()
{
    let l = Number(document.getElementById("num1").value);
    let r = Number(document.getElementById("num2").value);
    let h = Number(document.getElementById("num3").value);
    let SurfaceArea = (3.14*r*l)+3.14*(r**2);
    let Volume = (1/3)*3.14*(r**2)*h;
    let LateralSArea = 3.14*r*l;
    displayResult1(SurfaceArea);
    displayResult2(Volume);
    displayResult3(LateralSArea);
}
/* 44 */
function cube()
{
    let l = Number(document.getElementById("num1").value);
    let SurfaceArea = 6*(l**2);
    let Volume = l**3;
    let LateralSArea = 4*(l**2);
    displayResult1(SurfaceArea);
    displayResult2(Volume);
    displayResult3(LateralSArea);
}
/* 45 */
function cuboid()
{
    let l = Number(document.getElementById("num1").value);
    let w = Number(document.getElementById("num2").value);
    let h = Number(document.getElementById("num3").value);
    let SurfaceArea = (2*l*w)+(2*l*h)+(2*w*h);
    let Volume = l*w*h;
    let LateralSArea = 2*h*(l+w);
    displayResult1(SurfaceArea);
    displayResult2(Volume);
    displayResult3(LateralSArea);
}
/* 46 */
function cylinder()
{
    let r = Number(document.getElementById("num1").value);
    let h = Number(document.getElementById("num2").value);
    let SurfaceArea = (2*3.14*(r**2))+(2*3.14*r*h);
    let Volume = 3.14*(r**2)*h;
    let LateralSArea = 2*3.14*r*h;
    let TopBottomArea = 3.14*(r**2);
    displayResult1(SurfaceArea);
    displayResult2(Volume);
    displayResult3(LateralSArea);
    displayResult4(TopBottomArea);
}
/* 47 */
function sphere()
{
    let r = Number(document.getElementById("num1").value);
    let SurfaceArea = 4*3.14*(r**2);
    let Volume = 4*3.14*(r**3);
    displayResult1(SurfaceArea);
    displayResult2(Volume);
}
/* 48 */
function countofDigits()
{
    let n = Number(document.getElementById("num1").value);
    let count = 0;
    while(n!=0)
    {
	count++;
    	n = Math.floor(n/10);
    }
    displayResult(count);
}
/* 49 */
function fibonacciSeries()
{
    let n = Number(document.getElementById("num1").value);
    let n1 = 0;
    let n2 = 1;
    for(let i = 1;i<=n;i++)
    {
	document.getElementById("result").textContent += n1 + " , ";
	sum = n1+n2;
        n1=n2;
  	n2=sum;
    }
    
}
/* 50 */
function menuBased()
{
    let menu = Number(document.getElementById("menu").value);
    document.getElementById("InputNum").classList.add("d-none");
    if(menu >=1 & menu<=4 )
    {
  	document.getElementById("InputNum").classList.remove("d-none");
	let n1 = Number(document.getElementById("num1").value);
	let n2 = Number(document.getElementById("num2").value);
	let operation;
	switch(menu)
	{
	    case 1:
		operation = n1+n2;
	   	break;
	    case 2:
		operation = n1-n2;
          	break;
	    case 3:
		operation = n1*n2;
          	break;
	    case 4:
		operation = n1/n2;
	}	
	displayResult(operation);
    }
    else if(menu==5)
    {
	displayResult("Operation Exited!");
	
    }
    else
    {
	displayResult("Invalid Number");
    }
}
/* 51 */
function palNum()
{
    let n = document.getElementById("num1").value;
    let temp = n;
    let rev = 0;
    while(n!=0)
    {
 	rev = rev*10 + n%10;
   	n = Math.floor(n/10);
    }
    if(temp==rev)
    {
	displayResult("Palindrome");
    }
    else
    {
 	displayResult("Not Palindrome");
    }
}
/* 52 */
function concat()
{
    let name1 = document.getElementById("num1").value;
    let name2 = document.getElementById("num2").value;
    let concatinated = name1+name2;
    displayResult(concatinated);
}
/* 53 */
function ASCII()
{
    displayResult("");
    let name = document.getElementById("num1").value;
    for(let i = 0;i<name.length;i++)
    {
 	document.getElementById("result").textContent += name.charCodeAt(i) + " ";
    }
}
/* 54 */
function concatMethod()
{
    let name1 = document.getElementById("num1").value;
    let name2 = document.getElementById("num2").value;
    displayResult(name1.concat(name2));
}
/* 55 */
function byteToString()
{
    /*let byte = document.getElementById("num1").value;*/
    let byte = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
    for(let i in byte)
    {
	document.getElementById("result").textContent += String.fromCharCode(byte[i]) + " ";
    }
}
/* 56 */
function firstChar()
{
    let string = document.getElementById("num1").value;
    displayResult(string[0]);
}
/* 57 */
function lastChar()
{
    let string = document.getElementById("num1").value;
    displayResult(string[string.length-1]);
}
/* 58 */
function middleChar()
{
    let string = document.getElementById("num1").value;
    let mid = string[(string.length-1)/2];
    if((string.length-1)%2!=0)
    {
	displayResult("There is no Perfect middle for "+string);
    }
    else
    {
 	displayResult(mid);
    }
}
/* 59 */
function toCharArray()
{
    let string = document.getElementById("num1").value;
    for(let i = 0; i<string.length ; i++)
    {
	document.getElementById("result").textContent += string[i]+",";
    }
}
/* 60 */
function length()
{
    let string = document.getElementById("num1").value;
    displayResult1(string.length);
    let length = 0;
    while(string[length]!= undefined)
    {
	length++;
    }
    displayResult2(length);
}
/* 61 */
function index()
{
    let string = document.getElementById("num1").value;
    let ch = document.getElementById("num2").value;
    for(let i = 0; i < string.length; i++)
    {
	if(ch==string[i])
	{
	    displayResult(i+"th index");
	}
    }
}
/* 62 */
function occurance()
{
    let string = document.getElementById("num1").value;
    let ch = document.getElementById("num2").value;
    let count=0;
    for(let i = 0; i < string.length; i++)
    {
	if(ch==string[i])
	{
	    count++;
	}
    }
    if(count>0)
    {
	displayResult(ch+" occurs "+count+" times");
    }
    else
    {
	displayResult(ch+" not present here");
    }
}
/* 63 */
function checkPrefix()
{
    let string = document.getElementById("num1").value;
    let prefix = document.getElementById("num2").value;
    if(prefix === string.slice(0,prefix.length))
    {
 	displayResult("Yes,..."+prefix+" is the prefix of "+string);
    }
    else
    {
	displayResult("No..prefix check FAILED!");
    }
}
/* 64 */
function replaceString()
{
    let String = document.getElementById("num1").value;
    let String1 = document.getElementById("num2").value;
    let String2 = document.getElementById("num3").value;
    let replaced = String.replace(String1,String2);
    displayResult(replaced);
}
/* 65 */
function reverseTheCase()
{
    let string = document.getElementById("num1").value;
    let temp = "";
    for(let i in string)
    {
	if(string[i] == string[i].toLowerCase())
	{
	    temp += (string[i].toUpperCase());
	}
        else
        {
 	    temp += (string[i].toLowerCase());
        }
    }
    displayResult(temp);
}
/* 66 */
function reverseVowels()
{
    let string = document.getElementById("num1").value;
    string = string.toLowerCase();
    let vowels = "aeiou";
    let newString = "";
    let vowelArr = [];
    for(let i in string)
    {
 	if(vowels.includes(string[i]))
	{
	    vowelArr.unshift(string[i]);
	}
    }
    for(let i in string)
    {
	let temp = string[i];
        if(vowels.includes(string[i]))
	{
	    temp = vowelArr[0];
  	    newString += temp;
            vowelArr.shift();
	}
	else
	{
	    newString += temp;
	}
    }
    displayResult(newString);
     
}
/* 67 */
function countofAll()
{
    let string = document.getElementById("num1").value;
    let alphaPattern = /[A-Za-z]/;
    let digPattern = /[0-9]/;
    let alphabets = 0;
    let digits = 0;
    let specialChar = 0;
    for(let i in string)
    {
	if(alphaPattern.test(string[i]))
	{
	    alphabets++;
	}
	else if(digPattern.test(string[i]))
   	{
 	     digits++;   
   	}
	else
  	{
	    specialChar++;
  	}
    }
    displayResult1("Alphabets : "+ alphabets);
    displayResult2("Digits : "+ digits);
    displayResult3("Special Characters : "+ specialChar);

}
/* 68 */
function countofVowelsCons()
{
    let string = document.getElementById("num1").value;
    let vowels =0;
    let cons = 0;
    string = string.toLowerCase();
    for(let i in string)
    {
	if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u')
	{
	    vowels++;
	}
	else
	{
	    cons++;
	}
    }
    displayResult1("Count of Vowels : "+vowels);
    displayResult2("Count of Consonents : "+cons);
}
/* 69 */
function bracketsCheck()
{
    let string = document.getElementById("num1").value;
    let open = ['(','[','{'];
    let close = [')',']','}'];
    let arr = [];
    let flag=0,last;
    for(let i in string){
    	if(open.includes(string[i])){
            arr.push(string[i]);
            console.log(arr);
    	}
    	else if(close.includes(string[i])){
            last = [];
            last = arr.pop();   
       	    if(open.indexOf(last)==close.indexOf(string[i])){
            	flag=1;
            }
    	}
    }
    if(flag==1&&arr.length==0){
    	displayResult("is valid");
    }
    else
    {
    	displayResult("not valid");
    }
}
/* 70 */
function smallestLargestWord()
{  
    let string = document.getElementById("num1").value;
    let words = string.split(" ");
    let smallest = words[0];
    let largest = words[0];
    for (let word of words) {
        if (word.length < smallest.length) {
            smallest = word;
        }
        if (word.length > largest.length) {
            largest = word;
        }
    }
    displayResult1("Smallest Word : " + smallest);
    displayResult2("Largest Word : " + largest);
}
/* 71 */
function changeEveryLetter()
{
    let string = document.getElementById("num1").value;
    let charcode;
    let replaced="";
    for(let i in string)
    {
	if(string[i]=='z')
	{
	    charcode = 97;
	}
	else if(string[i]=='Z')
	{
 	    charcode = 65;
 	}
	else
	{
 	    charcode = string.charCodeAt(i)+1;
	}
	replaced += String.fromCharCode(charcode);
    }
    displayResult(replaced);
}
/* 72 */
function missingLetters()
{
    displayResult("");
    let string = document.getElementById("num1").value;
    string = string.toLowerCase();
    let first = string.charCodeAt(0);
    let last = string.charCodeAt(string.length-1);
    let j = 0;
    for (let i = first; i <= last; i++)
    {
 	if(string.charCodeAt(j)==i)
	{
	    j++;
 	}
	else
	{
	    document.getElementById("result").textContent += String.fromCharCode(i) + " ";
	}
    }
}

/* 73 */
function deleteAllCons()
{
    displayResult("");
    let string = document.getElementById("num1").value;
    let vow = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/;
    for(let i in string)
    {
	if(vow.test(string[i]))
	{
	}
	else
	{
	    document.getElementById("result").textContent += string[i];
  	}
    }
}
/* 74 */
function noOfOccurrence()
{
    displayResult1("");
    displayResult2("");
    let string = document.getElementById("num1").value;
    string = string.toUpperCase();
    let charArr = string.split("");
    let max=0;
    let maxChar="";
    for(let i=0;i<string.length;i++)
    {
	let count = 1;
	for(let j = i+1; j<string.length;j++)
	{
	    if(charArr[i]==charArr[j])
	    {
		count++;
	 	charArr[j] = 1;
  	    }
	}
	if(charArr[i]!=1)
	{           
	    document.getElementById("result1").innerHTML += charArr[i]+" : "+count+" , ";
	    if(count>max){
            	max=count;
            	maxChar=charArr[i];
 	    }
	}
    }
    displayResult2(maxChar+" : "+max);
}
/* 75 */

function replacePalindromeSubstrings() {
    let string = document.getElementById("num1").value;
    string = string.toLowerCase();
    let stringArr = string.split(" ");
    let result = [];

    for (let i in stringArr) {
        result.push(palindromeCheck(stringArr[i]));
    }

    displayResult(result.join(" "));
}

function palindromeCheck(word) {
    let rev = "";
    for (let j = word.length - 1; j >= 0; j--) {
        rev += word[j];
    }
    if (rev === word) {
        if(word.length>1){
            for(let char in word)
	    {
	    	word=word.replace(word[char],"*");
	    }
	    return word;
	}
	else {
	    return word;
	}
    } else {
        return word;
    }
}