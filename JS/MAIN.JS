// Typing Animation (Pro Version)
const text = "CCS";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 1000); // smoother
  }
}
window.onload = typeWriter;


// Dark/Light Mode Toggle
function toggleMode() {
  document.body.classList.toggle('light-mode');
}
