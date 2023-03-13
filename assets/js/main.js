function btn() 
{
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML = szoveg.substring(0, 324)
    document.getElementById("jobb_oldal").innerHTML = szoveg.substring(325,649) 
}