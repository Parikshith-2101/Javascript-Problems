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
function displayResult(res) 
{
    document.getElementById("result").textContent = res;
}