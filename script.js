

function setSrc(x)
{
    document.getElementById("preview").setAttribute("src", x);
    
    if (x=='')
    {
        document.getElementById("preview").style.pointerEvents = "none";
        document.getElementById("preview").style.boxShadow = "none";
        document.getElementById("AA").style.display = "none";
    }
    else
    {
        document.getElementById("preview").style.pointerEvents = "all";
        document.getElementById("preview").style.boxShadow = "0px 0px 5px 5px white";
        document.getElementById("AA").style.display = "";
    }
}