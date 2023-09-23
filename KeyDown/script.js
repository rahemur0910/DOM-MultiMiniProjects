const nameInput = document.getElementById('nme');
const messageTextarea = document.getElementById('msg');
const outputName = document.getElementById('outputName');
const outputMessage = document.getElementById('outputMessage');

// Add keydown event listener to the name input
nameInput.addEventListener('keydown', function(event) {
    outputName.textContent = `Keydown event for name input: ${event.key}`;
});

// Add keyup event listener to the message textarea
messageTextarea.addEventListener('keyup', function(event) {
    outputMessage.textContent = `Keyup event for message textarea: ${event.key}`;
});