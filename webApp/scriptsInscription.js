document.addEventListener('DOMContentLoaded', function() {
    
    const inscriptionForm = document.getElementById('inscriptionForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const motDePasse = document.getElementById('motDePasse');
    
    const nomError = document.getElementById('nomError');
    const prenomError = document.getElementById('prenomError');
    const emailError = document.getElementById('emailError');
    const motDePasseError = document.getElementById('motDePasseError');

    
    function validateNom() {
        if (nom.value.trim() === '') {
            nomError.textContent = 'Le nom est requis.';
            nom.style.borderColor = 'red';
        } else {
            nomError.textContent = '';
            nom.style.borderColor = 'green';
        }
    }

    
    function validatePrenom() {
        if (prenom.value.trim() === '') {
            prenomError.textContent = 'Le prénom est requis.';
            prenom.style.borderColor = 'red';
        } else {
            prenomError.textContent = '';
            prenom.style.borderColor = 'green';
        }
    }

    
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Veuillez entrer un email valide.';
            email.style.borderColor = 'red';
        } else {
            emailError.textContent = '';
            email.style.borderColor = 'green';
        }
    }

    
    function validateMotDePasse() {
        if (motDePasse.value.trim() === '') {
            motDePasseError.textContent = 'Le mot de passe est requis.';
            motDePasse.style.borderColor = 'red';
        } else {
            motDePasseError.textContent = '';
            motDePasse.style.borderColor = 'green';
        }
    }

    function handleInput(event) {
        const target = event.target;
        if (target === nom) {
            validateNom();
        } else if (target === prenom) {
            validatePrenom();
        } else if (target === email) {
            validateEmail();
        } else if (target === motDePasse) {
            validateMotDePasse();
        }
    }

    
    nom.addEventListener('input', handleInput);
    prenom.addEventListener('input', handleInput);
    email.addEventListener('input', handleInput);
    motDePasse.addEventListener('input', handleInput);

    // Validation du formulaire à la soumission
    inscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        validateNom();
        validatePrenom();
        validateEmail();
        validateMotDePasse();

        if (nom.style.borderColor === 'green' &&
            prenom.style.borderColor === 'green' &&
            email.style.borderColor === 'green' &&
            motDePasse.style.borderColor === 'green') {
            
            confirmationMessage.style.display = 'block';

            // Réinitialiser le formulaire après un délai
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
                inscriptionForm.reset();
                nom.style.borderColor = '';
                prenom.style.borderColor = '';
                email.style.borderColor = '';
                motDePasse.style.borderColor = '';
            }, 5000);
        }
    });
});
