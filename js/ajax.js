function loadChanges() {
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("content").innerHtml = this.responseText;
		}
	};
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
	xhttp.send();
}