// Select the button and div element by its id
const button = document.getElementById('toggle-schedule');
const table = document.getElementById('schedule-container');

// Add an event listener to change the text when the button is clicked
button.addEventListener('click', function() {
 if (table.style.display === "none") {
    table.style.display = "block";
    button.textContent = 'Hide Schedule';
 } else {
    table.style.display = "none";
    button.textContent = 'Show Schedule';
 }

});


