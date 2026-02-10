//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

// This function takes the attendee object as a parameter and logs the name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// This function takes the attendee object as a parameter and logs the ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

// This function takes the attendee object as a parameter and updates the ticket type to a new ticket type
function updateTicketType(attendee, ticketType) {
  return attendee.ticketType = ticketType;
}

// This function takes the attendee object as a parameter and updates the ticket price to a new ticket price
function updateTicketPrice(attendee, ticketPrice) {
  return attendee.ticketPrice = ticketPrice;
}

// This function takes the attendee object as a parameter and removes (i.e. deletes) the event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Create a function named addCheckedInProperty that takes the attendee object as a parameter
// and adds a new property checkedIn with the value true
function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};