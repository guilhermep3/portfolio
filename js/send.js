document.querySelector('.form').addEventListener('submit', handlecheckForm);

function handlecheckForm(event){
   event.preventDefault();

   const nameElement = document.querySelector('#name');
   const emailElement = document.querySelector('#email');
   const messageElement = document.querySelector('#textarea');
   const name = nameElement.value.trim();
   const email = emailElement.value.trim();
   const message = messageElement.value.trim();

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   qs('.error-name').textContent = '';
   qs('.error-email').textContent = '';
   qs('.error-textarea').textContent = '';

   let hasError = false;

      if(!name){
         qs('.error-name').textContent = 'Digite seu nome corretamente';
         hasError = true;
      }
      if(!email){
         qs('.error-email').textContent = 'Digite seu email corretamente';
         hasError = true;
      } else if(!emailRegex.test(email)){
         qs('.error-email').textContent = 'Email inválido';
         hasError = true;
      }
      if(!message){
         qs('.error-textarea').textContent = 'Digite sua mensagem';
         hasError = true;
      }

      if(hasError) return;

   const phoneNumber = "5514998946158";
   const whatsAppMessage = `Olá, meu nome é ${name}.\nMeu email: ${email}\n\n${message}`;
   const whatsAppLink = `https://wa.me//${phoneNumber}?text=${encodeURI(whatsAppMessage)}`;

   window.open(whatsAppLink, '_blank')
}

qs('.submit-btn').addEventListener('click', () => {
   qs('.form').dispatchEvent(new Event('submit', {cancelable: true}));
})

qs('.form input').forEach(input => {
   input.addEventListener('change', handlecheckForm)
})