const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggleButton.addEventListener('click', () => {
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});


function toggleCard(cardElement) {
    cardElement.classList.toggle('flipped');
  }
  
  function nextPart(event) {
    event.stopPropagation(); 
    const cardBack = event.target.closest('.card-back');
    const textParts = cardBack.querySelectorAll('.explanation-part');
  
    let currentPartIndex = Array.from(textParts).findIndex(part => part.style.display === 'block');
    if (currentPartIndex === -1) currentPartIndex = 0;
  
    if (currentPartIndex < textParts.length - 1) {
      textParts[currentPartIndex].style.display = 'none';
      textParts[currentPartIndex + 1].style.display = 'block';
    }
  
    updateButtons(cardBack, currentPartIndex + 1, textParts.length);
  }
  
  function prevPart(event) {
    event.stopPropagation(); 
    const cardBack = event.target.closest('.card-back');
    const textParts = cardBack.querySelectorAll('.explanation-part');
  
    let currentPartIndex = Array.from(textParts).findIndex(part => part.style.display === 'block');
    if (currentPartIndex === -1) currentPartIndex = 0;
  
    if (currentPartIndex > 0) {
      textParts[currentPartIndex].style.display = 'none';
      textParts[currentPartIndex - 1].style.display = 'block';
    }
  
    updateButtons(cardBack, currentPartIndex - 1, textParts.length);
  }
  
  function updateButtons(cardBack, currentIndex, totalParts) {
    const prevBtn = cardBack.querySelector('.prev-btn');
    const nextBtn = cardBack.querySelector('.next-btn');
  
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalParts - 1;
  }
  
  document.getElementById("info_adcionais").onclick = function() {
    window.location.href = "../info_adicionais.html";
    };