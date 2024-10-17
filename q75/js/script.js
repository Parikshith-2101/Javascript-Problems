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
function displayResult(res) 
{
    document.getElementById("result").textContent = res;
}