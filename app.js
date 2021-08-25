function getvalue(num)
{
var res= document.getElementById("result");
res.value+=num;


}
function clr()
{
    var foo=document.getElementById("result");
    foo.value="";
}


function getresult()
{
    var resultvalue=document.getElementById("result");
    resultvalue.value=eval(resultvalue.value);
}