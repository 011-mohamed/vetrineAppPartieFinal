document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'red';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    const nom = document.querySelector('input[name="nom"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    const nomError = document.getElementById('nomError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    function validateName() {
        if (nom.value.trim() === '') {
            nomError.textContent = 'Le nom est requis.';
            nomError.style.display = 'block';
            nom.style.borderColor = 'red';
        } else {
            nomError.textContent = '';
            nomError.style.display = 'none';
            nom.style.borderColor = 'green';
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Veuillez entrer un email valide.';
            emailError.style.display = 'block';
            email.style.borderColor = 'red';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
            email.style.borderColor = 'green';
        }
    }

    function validateMessage() {
        if (message.value.trim() === '') {
            messageError.textContent = 'Le message est requis.';
            messageError.style.display = 'block';
            message.style.borderColor = 'red';
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
            message.style.borderColor = 'green';
        }
    }

    nom.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    message.addEventListener('input', validateMessage);

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        validateName();
        validateEmail();
        validateMessage();

        
        if (nom.style.borderColor === 'green' &&
            email.style.borderColor === 'green' &&
            message.style.borderColor === 'green') {
            
            formMessage.style.display = 'block';

            
            setTimeout(() => {
                formMessage.style.display = 'none';
                contactForm.reset();
                nom.style.borderColor = '';
                email.style.borderColor = '';
                message.style.borderColor = '';
            }, 5000);
        }
    });
});
