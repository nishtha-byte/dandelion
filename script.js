document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');
    
    // smooth scrooll
    document.documentElement.style.scrollBehavior = 'smooth';

});


/* make videos clickable */ 
document.querySelectorAll('.project-images').forEach(project => {
  project.addEventListener('click', () => {
    window.open(project.dataset.link, '_blank', 'noopener');
  });
});

const reminderButton = document.querySelector('#reminder-button');
const reminderMessage = document.querySelector('#reminder-message');
const reminders = [
  'You do not have to have it all figured out today.',
  'Small steps still count. So does taking a pause.',
  'You deserve the same kindness you give your friends.',
  'It is okay to begin again, as many times as you need.',
  'Some days, showing up is more than enough.',
  'You are a person, not a to-do list.'
];
let previousReminder = -1;

reminderButton?.addEventListener('click', () => {
  let nextReminder = Math.floor(Math.random() * reminders.length);
  while (nextReminder === previousReminder) {
    nextReminder = Math.floor(Math.random() * reminders.length);
  }
  previousReminder = nextReminder;
  reminderMessage.textContent = reminders[nextReminder];
});