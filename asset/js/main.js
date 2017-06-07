var button = document.getElementsByClassName("hidden")[0];

button.addEventListener("click", function(){
	var show = document.getElementsByClassName("show")[0];
	show.classList.toggle("show");
})