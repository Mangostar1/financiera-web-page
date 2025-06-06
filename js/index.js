function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  alert(`¡Gracias por registrarte, ${email}! Te avisaremos pronto.`);
  document.getElementById('email').value = '';
}