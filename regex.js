function highlight() {
	var form = document.getElementById("form");
	var regex = form.elements.namedItem("regex").value;
	regex = new RegExp(regex, "g");
	var text = "" + document.getElementById("text").value;
	var foo = text.match(regex);
	alert(foo);
}