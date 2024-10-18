document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send POST request to login
    loginUser(username, password);
});

function loginUser(username, password) {
    fetch('https://json-with-auth.onrender.com/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.accessToken) {
            // Store accessToken and userId in local storage
            localStorage.setItem('localAccessToken', data.accessToken);
            localStorage.setItem('userId', data.user.id);
            // Display welcome message
            document.getElementById('welcomeMessage').textContent = `Hey ${username}, welcome back!`;
            // Show the Fetch Todos button
            document.getElementById('fetchTodos').style.display = 'block';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => console.error('Error:', error));
}
