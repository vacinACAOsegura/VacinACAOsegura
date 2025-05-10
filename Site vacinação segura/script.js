const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggleButton.addEventListener('click', () => {
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});



document.getElementById("calendario-card").onclick = function() {
    window.location.href = "calendario.html";
};


document.getElementById("tecnicas-card").onclick = function() {
    window.location.href = "tecnicas_vacinacao.html";
};


document.getElementById("quiz-card").onclick = function() {
    window.location.href = "quiz/quiz.html";
};


document.getElementById("registro-card").onclick = function() {
    window.location.href = "sistema_info.html";
};


document.getElementById("esavi-card").onclick = function() {
    window.location.href = "esavi.html";
};

document.getElementById("informativo-card").onclick = function() {
    window.location.href = "informativos.html";
};


document.querySelector('a[href="#contact-info"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact-info').scrollIntoView({ behavior: 'smooth' });
});

