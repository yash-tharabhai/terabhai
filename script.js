// Smooth scroll to booking section
function scrollToBooking() {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your booking request has been submitted.");
  this.reset();
});
