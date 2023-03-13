var oldalszam=1
function btn() 
{
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML = szoveg.substring(0, 324)
    document.getElementById("jobb_oldal").innerHTML = szoveg.substring(325,649) 
}

function lapoz_r()
{
    document.getElementById("bal_oldal").innerHTML ="" 
    document.getElementById("jobb_oldal").innerHTML ="" 
}

function lapoz_l()
{
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML ="" 
    document.getElementById("jobb_oldal").innerHTML ="" 
    
}