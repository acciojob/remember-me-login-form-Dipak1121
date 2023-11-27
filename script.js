// document.addEventListener("DOMContentLoaded", function(event){
// 	event.preventDefault();
// 	let body = document.querySelector("body");
// 	if(localStorage.getItem("username") && localStorage.getItem("password")){
// 		let existingBtn = document.createElement("button");
// 		existingBtn.id = "existing";
// 		existingBtn.innerText = "Login as existing user";
// 		existingBtn.addEventListener("click", function(){
// 			alert(`Logged in as ${localStorage.getItem("username")}`);
// 		});
// 		body.appendChild(existingBtn);
// 	}

// 	document.getElementById("login-form").addEventListener("submit", function(){
// 		let username = document.getElementById("username").value;
// 		let password = document.getElementById("password").value;
// 		let checkbox = document.getElementById("checkbox").checked;
// 		if(checkbox){
// 			localStorage.setItem("username", username);
// 			localStorage.setItem("password", password);
// 		}
// 		else{
// 			localStorage.removeItem(username);
// 			localStorage.removeItem(password);
// 		}
// 		alert(`Logged in as ${username}`);
// 	});
// });

document.addEventListener('DOMContentLoaded', function () {
    // Check if there are saved details
    if (localStorage.getItem('rememberedUser')) {
        // Show the "Login as existing user" button
        var existingUserButton = document.createElement('button');
        existingUserButton.setAttribute('id', 'existing');
        existingUserButton.textContent = 'Login as existing user';

        // Append the button to the form
        document.getElementById('loginForm').appendChild(existingUserButton);

        existingUserButton.addEventListener('click', function () {
            // Retrieve and display the saved username
            var savedUsername = localStorage.getItem('rememberedUser');
            alert('Logged in as ' + savedUsername);
        });
    }

    // Add event listener to the login form
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var rememberCheckbox = document.getElementById('checkbox');

        // Save details to local storage if the checkbox is checked
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedUser', username);
            localStorage.setItem('rememberedPassword', password);
        } else {
            // Remove stored details if the checkbox is not checked
            localStorage.removeItem('rememberedUser');
            localStorage.removeItem('rememberedPassword');
        }
        alert('Logged in as ' + username);
    });
});