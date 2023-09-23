document.querySelector('form').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // Prevent the form from submitting when Enter is pressed
        event.preventDefault();
        
        // Trigger the button click
        document.getElementById('submitButton').click();
    }
});

// Add a click event listener to the button
document.getElementById('submitButton').addEventListener('click', function () {
    alert('Button clicked!');
});