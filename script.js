// Small utilities: smooth reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('active'); });
},{threshold:0.08});
revealEls.forEach(el=>io.observe(el));


function scrollToContact(){
document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
}


// Simple form handler (no backend) — shows a success message
function handleSubmit(e){
e.preventDefault();
const form = e.currentTarget;
const btn = form.querySelector('button');
btn.disabled = true; btn.innerText = 'Envoi...';
setTimeout(()=>{
btn.disabled = false; btn.innerText = 'Envoyer la demande';
alert('Merci — ta demande a bien été reçue. Je te réponds sous 24 h.');
form.reset();
},900);
}

document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
  });

const backToTopBtn = document.getElementById("backToTop");

// Affiche le bouton après avoir scrollé de 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll vers le haut au clic
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement de la page

    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
           // form.style.display = "none"; // cache le formulaire
            document.getElementById("confirmationMessage").style.display = "block"; // affiche le message
        } else {
            alert("Oups ! Une erreur est survenue, réessayez plus tard.");
        }
    }).catch(error => {
        alert("Oups ! Une erreur est survenue, réessayez plus tard.");
    });
});