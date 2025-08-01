// AOS Animation
if (window.AOS) AOS.init();

// Theme toggle with localStorage
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
  // Persist theme on load
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

// Chatbot interactivity
const showChatbotBtn = document.getElementById('show-chatbot');
const chatbot = document.getElementById('chatbot');
const hideChatbotBtn = document.getElementById('chatbot-toggle');
if (showChatbotBtn && chatbot && hideChatbotBtn) {
  showChatbotBtn.addEventListener('click', () => {
    chatbot.style.display = 'block';
    showChatbotBtn.style.display = 'none';
  });
  hideChatbotBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
    showChatbotBtn.style.display = 'inline-block';
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});
