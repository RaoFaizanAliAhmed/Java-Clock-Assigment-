function updateClock() {
    // Get the current time and date
    const now = new Date();
    
    // Extract hours, minutes, seconds, AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12; // If 0, make it 12

    // Format time to always have two digits
    const formattedTime = 
        `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;

    // Get formatted date
    const options = { month: 'short', weekday: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Update the HTML content
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('ampm').textContent = ampm;
    document.getElementById('date').textContent = formattedDate;
}

// Run updateClock every second
setInterval(updateClock, 1000);

// Initial call to set the clock instantly when page loads
updateClock();
