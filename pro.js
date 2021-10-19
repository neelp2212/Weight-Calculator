function poundTokg()
{
    var a = parseInt(document.getElementById("poundInputId").value);
    var b = convertPoundtoKg(a);
    document.getElementById("result").innerHTML = b;
    
}
function convertPoundtoKg(x)
{
    var z = x*0.453592;
    return z;
}

function kgTopound()
{
    var c = parseInt(document.getElementById("kgInputId").value);
    var d = convertKgtoPound(c);
    document.getElementById("resultKg").innerHTML = d;
}
function convertKgtoPound(y)
{
    var q = y*2.20462262;
    return q;
}

function radiocheck()
{

    
if (document.getElementById("poundstokg").checked)
{
    document.getElementById("poundsTokg_divId").style.display = "block";
    document.getElementById("kgtopounds_divId").style.display = "none";
}
 else if (document.getElementById("kgtopound").checked)
{
   document.getElementById("kgtopounds_divId").style.display = "block";
   document.getElementById("poundsTokg_divId").style.display = "none";
}


}