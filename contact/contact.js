

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
