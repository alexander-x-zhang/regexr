function highlight() {
	var form = document.getElementById("form");
	var regex = form.elements.namedItem("regex").value;
	regex = new RegExp(regex, "g");
	var text = "" + document.getElementById("text").value;
	var foo = text.match(regex);
	var split = text.split(regex);
	var result = "";
	for(var i = 0; foo !== null && i < foo.length; ++i) {
		result = result + split[i] + '<span class = "bright">' + foo[i] + "</span>"
	}
	result += split[split.length-1];
	//alert(split.length + " " + split[split.length-1])
	document.getElementById("output").innerHTML = result;
	//alert(result);
}