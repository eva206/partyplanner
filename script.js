let partyInfo = {};
let guestList = [];

const partyForm = document.getElementById('party-form');
const guestForm = document.getElementById('guest-form');
const invitationSection = document.getElementById('invitation');
const guestListSection = document.getElementById('guest-list-section');

partyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = document.getElementById('party-date').value;
  const description = document.getElementById('party-description').value;
  const message = document.getElementById('invite-message').value;

  partyInfo = { date, description, message };
  updateInviteView();
});

guestForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('guest-firstname').value.trim();
  const lastName = document.getElementById('guest-lastname').value.trim();

  if (firstName && lastName) {
    guestList.push({ firstName, lastName });
    updateGuestList();
    guestForm.reset();
  }
});

function updateInviteView() {
  document.getElementById('display-date').textContent = partyInfo.date;
  document.getElementById('display-description').textContent = partyInfo.description;
  document.getElementById('display-invite').textContent = partyInfo.message;

  invitationSection.classList.remove('hidden');
  guestListSection.classList.remove('hidden');
}

function updateGuestList() {
  const list = document.getElementById('guest-list');
  list.innerHTML = '';

  guestList.forEach(guest => {
    const li = document.createElement('li');
    li.textContent = `${guest.firstName} ${guest.lastName}`;
    list.appendChild(li);
  });
}
