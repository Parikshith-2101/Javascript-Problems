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

function displayResult1(res)
{
    document.getElementById("result1").textContent = res;
}
function displayResult2(res)
{
    document.getElementById("result2").textContent = res;
} 