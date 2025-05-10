const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggleButton.addEventListener('click', () => {
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});


function toggleCard(element) {
    const faqContent = element.nextElementSibling;
    const icon = element.querySelector(".icon"); 
  
    if (faqContent.style.display === "block") {
      faqContent.style.display = "none";
      icon.textContent = "+"; 
    } else {
      faqContent.style.display = "block";
      icon.textContent = "-";
      initializeTextNavigation(faqContent);
    }
}
  

function initializeTextNavigation(faqContent) {
    const parts = faqContent.querySelectorAll(".explanation-part");
    if (parts.length > 0) {
      parts.forEach(part => (part.style.display = "none")); 
      parts[0].style.display = "block"; 
  
      const prevBtn = faqContent.querySelector(".prev-btn");
      const nextBtn = faqContent.querySelector(".next-btn");
  
      prevBtn.disabled = true; 
      nextBtn.disabled = parts.length === 1; 
    }
}
  
  
function nextPart(event) {
    const card = event.target.closest(".faq-content"); 
    const parts = card.querySelectorAll(".explanation-part");
    let currentIndex = [...parts].findIndex(part => part.style.display === "block");
  
    if (currentIndex < parts.length - 1) {
      parts[currentIndex].style.display = "none";
      parts[currentIndex + 1].style.display = "block";
      toggleButtons(card, currentIndex + 1, parts.length);
    }
}
  
 
function prevPart(event) {
    const card = event.target.closest(".faq-content"); 
    const parts = card.querySelectorAll(".explanation-part");
    let currentIndex = [...parts].findIndex(part => part.style.display === "block");
  
    if (currentIndex > 0) {
      parts[currentIndex].style.display = "none";
      parts[currentIndex - 1].style.display = "block";
      toggleButtons(card, currentIndex - 1, parts.length);
    }
}
  
  
function toggleButtons(card, currentIndex, totalParts) {
    const prevBtn = card.querySelector(".prev-btn");
    const nextBtn = card.querySelector(".next-btn");
  
    prevBtn.disabled = currentIndex === 0; 
    nextBtn.disabled = currentIndex === totalParts - 1; 
}
  