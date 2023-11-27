document.addEventListener("DOMContentLoaded", function(event){
	event.preventDefault();
	let body = document.querySelector("body");
	if(localStorage.getItem("username") && localStorage.getItem("password")){
		let existingBtn = document.createElement("button");
		existingBtn.id = "existing";
		existingBtn.innerText = "Login as existing user";
		existingBtn.addEventListener("click", function(){
			alert(`Logged in as ${localStorage.getItem("username")}`);
		});
		body.appendChild(existingBtn);
	}

	document.getElementById("login-form").addEventListener("submit", function(){
		let username = document.getElementById("username").value;
		let password = document.getElementById("password").value;
		let checkbox = document.getElementById("checkbox").checked;
		if(checkbox){
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
		}
		else{
			localStorage.removeItem(username);
			localStorage.removeItem(password);
		}
		alert(`Logged in as ${username}`);
	});
});