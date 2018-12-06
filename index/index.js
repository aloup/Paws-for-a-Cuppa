function slideshow1 ()
{
	document.getElementById("slide1").style.display = "block";
	document.getElementById("slide2").style.display = "none";
	document.getElementById("slide3").style.display = "none";
	setTimeout(slideshow2, 5000);
}

function slideshow2 ()
{
	document.getElementById("slide1").style.display = "none";
	document.getElementById("slide2").style.display = "block";
	document.getElementById("slide3").style.display = "none";
	setTimeout(slideshow3, 5000);
}

function slideshow3 ()
{
	document.getElementById("slide1").style.display = "none";
	document.getElementById("slide2").style.display = "none";
	document.getElementById("slide3").style.display = "block";
	setTimeout(slideshow1, 5000);
}

$(document).ready(function() {
    $('#promolink').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});