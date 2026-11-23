
const now = new Date();

const dateElement = document.getElementById('today');
if (dateElement) {
  dateElement.textContent = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase();
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = now.getFullYear();
}

const stories = {
  winfo: {
    kicker: 'FEATURE 001 / WOMEN IN INFORMATICS',
    title: 'Creating Space for Women in Tech',
    body: 'As Director of Finance for Women in Informatics, I helped organize networking events, industry panels, and a hackathon that engaged more than 105 students. Working with fellow student leaders and corporate sponsors taught me how much planning and teamwork goes into creating opportunities for others. [ADD YOUR PERSONAL ANECDOTE HERE: a memorable challenge, favorite event, or moment of pride.]'
  },

  leadership: {
    kicker: 'FEATURE 002 / RESIDENTIAL LEADERSHIP',
    title: 'More Than a Resident Advisor',
    body: 'During my time as a Resident Advisor at the University of Washington, I supported a community of 115 residents, coordinated programs, and helped students navigate academic and interpersonal challenges. The role taught me to listen carefully, build trust, and balance empathy with responsibility. [ADD YOUR PERSONAL ANECDOTE HERE: a community event or meaningful lesson, without sharing confidential resident information.]'
  }
};

const dialog = document.getElementById('story-dialog');

if (dialog) {
  document.querySelectorAll('[data-story]').forEach(button => {
    button.addEventListener('click', () => {
      const story = stories[button.dataset.story];

      if (!story) return;

      document.getElementById('story-kicker').textContent = story.kicker;
      document.getElementById('story-title').textContent = story.title;
      document.getElementById('story-body').textContent = story.body;

      dialog.showModal();
    });
  });

  document.getElementById('close-story').addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', e => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}
