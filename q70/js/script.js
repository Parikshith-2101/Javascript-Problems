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
function displayResult1(res)
{
    document.getElementById("result1").textContent = res;
}
function displayResult2(res)
{
    document.getElementById("result2").textContent = res;
}