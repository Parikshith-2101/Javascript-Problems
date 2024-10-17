/* 3 */
function sumAvg()
{
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    var op = n1+n2+n3;
    document.getElementById("result").value = op;
    var avg = op/3;
    document.getElementById("avgResult").value=avg;
}