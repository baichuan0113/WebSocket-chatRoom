const socket = new WebSocket('ws://localhost:3000')

function sendMessage(e) {
    e.preventDefault() // Prevent the default form submission behavior
    const input = document.querySelector('input')
    // If input not empty, send the input value to the server
    if (input.value) {
        socket.send(input.value)
        input.value = ""
    }
    input.focus()
}

// Set the notification text
function showNotification(message) {
    notificationsDiv.textContent = message;
    notificationsDiv.classList.add('show');
    setTimeout(() => {
        notificationsDiv.classList.remove('show');
    }, 5000);
}

// Set the list text content 
function setText(message, li) {
    if (length(message) == 0) {
        return;
    }
    li.textContent = message
}
// Add an event listener to the form for submitting messages
document.querySelector('form').addEventListener('submit', sendMessage)
const input = document.querySelector('input')
var notificationsDiv = document.getElementById('notifications');
var button = document.querySelector('button')

// Show a notification when the connection is successfully established
socket.addEventListener("open", function() {
    showNotification("Successfully Connected!")
})

// Show a notification when the connection is closed
socket.addEventListener("close", function() {
    showNotification("Session Closed!")
})

//Handling messages
socket.addEventListener("message", ({ data }) => {
    const li = document.createElement('li')
    const parts = data.split(':');
    userName = parts[0];
    if (data.includes('joined')) { // Show notification when new user joined
        const parts = data.split(' ');
        userName = parts[0];  
        showNotification(`${userName} joined`)
    } else if (data.includes('left')) { // Show notification when a user left
        showNotification(`${userName} left`)
    }

    else if (!userName.startsWith("User") || userName == ""){ // Handling current user case
        userName = "Me"
        li.textContent = `${userName}: ${data}`
        
    } else {
        msg = `${userName}: ${parts[1]}`
        li.textContent = `${userName}: ${parts[1]}`

    }
    if (li.innerHTML.length != 0) { // Handling empty list 
        document.querySelector('ul').appendChild(li)
    }
    

    if (data.includes('joined') || data.includes('left')) {
        notificationsDiv.innerHTML = data;
        showNotification(data)
    }
 
})






