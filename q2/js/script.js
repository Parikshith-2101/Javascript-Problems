/* 2 */
function add()
{
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    var op = n1+n2;
    document.getElementById("result").value = op;
}