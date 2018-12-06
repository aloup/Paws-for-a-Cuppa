

function confirmation ()
{
	var numGuests = document.getElementById("seats").value;
	var date = document.getElementById("date").value;
	var time = document.getElementById("time").value;
	
	var customer = document.getElementById("name").value;
	
	alert("We look forward to seeing you, " + customer + "!");
	
	var summary = document.createElement("p");
	summary.innerHTML = "You have booked a table for " + numGuests + " on " + date + " at " + time + ".";
	
	
	document.getElementById("summary").appendChild(summary);	

}

function removeConfirmation ()
{
	var element = document.getElementById("summary");
	element.parentNode.removeChild(element);
}

function insideOutside ()
{
	var inside = document.getElementById("insidepreferred").checked;
	if (inside == true)		
	{
		document.getElementById("in").style.fontWeight = "bold";
		document.getElementById("out").style.fontWeight = "normal";
		document.getElementById("inout").style.fontWeight = "normal";
	}
		
	var outside = document.getElementById("outsidepreferred").checked;
	if (outside == true)
	{
		document.getElementById("in").style.fontWeight = "normal";
		document.getElementById("out").style.fontWeight = "bold";
		document.getElementById("inout").style.fontWeight = "normal";
	}
	
	var insideoutside = document.getElementById("insideoutside").checked;
	if (insideoutside == true)
	{
		document.getElementById("in").style.fontWeight = "normal";
		document.getElementById("out").style.fontWeight = "normal";
		document.getElementById("inout").style.fontWeight = "bold";
	}
}

function contactMethods ()
{
	var phone = document.getElementById("phonepreferred").checked;
	var email = document.getElementById("emailpreferred").checked;
	
	if ((phone == true) && (email == true))
	{
		document.getElementById("contactchoice").style.display = "block";
	}
	
	if ((phone != true) || (email != true))
	{
		document.getElementById("contactchoice").style.display = "none";
	}
}