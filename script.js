const partyForm = document.getElementById('partyForm');
const guestForm = document.getElementById('guestForm');

const inviteSection = document.getElementById('inviteSection');
const registrationSection = document.getElementById('registrationSection');

const displayDate = document.getElementById('displayDate');
const displayDescription = document.getElementById('displayDescription');
const displayMessage = document.getElementById('displayMessage');

const guestList = document.getElementById('guestList');

let guests = [];

partyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const partyDate = document.getElementById('partyDate').value;
  const description = document.getElementById('partyDescription').value;
  const message = document.getElementById('inviteMessage').value;

  displayDate.textContent = `📅 Date: ${partyDate}`;
  displayDescription.textContent = `📃 ${description}`;
  displayMessage.textContent = message;

  inviteSection.style.display = 'block';
  registrationSection.style.display = 'block';

  // Reset guest list
  guests = [];
  guestList.innerHTML = '';
});

guestForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();

  if (firstName && lastName) {
    guests.push({ firstName, lastName });
    updateGuestList();
    guestForm.reset();
  }
});

function updateGuestList() {
  guestList.innerHTML = '';
  guests.forEach((guest, index) => {
    const li = document.createElement('li');
    li.textContent = `${guest.firstName} ${guest.lastName}`;
    guestList.appendChild(li);
  });
}