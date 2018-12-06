$(document).ready(
	function() 
	{
		$("#mouseover").mouseenter(
		function() 
		{
			$("#meow").css("opacity", 1);
			$("#mousehighlight").css("backgroundColor", "#cdd5d1");
		});
		
		$("#mouseover").mouseleave(
		function()
		{
			$("#meow").css("opacity", 0);
			$("#mousehighlight").css("backgroundColor", "");
		});

		expandDesc();
		
	}
);

function expandDesc()
{
	$("#expandbutton").click(
	function()
	{
		$("#expand").css("display", "block");
	}
	);
}
