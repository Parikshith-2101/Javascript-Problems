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
function displayResult(res) 
{
    document.getElementById("result").textContent = res;
}