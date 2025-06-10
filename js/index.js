function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  axios.post('https://back-web-page-financiera-production.up.railway.app/early-access/subscriptions', { email })
    .then(response => {
      console.log('Subscription successful:', response.data);
      console.log('Subscripcion mensaje:', response.data.message);
      console.log('Subscripcion email:', response.data.subscriber.email);
      alert(`¡Gracias por registrarte, ${response.data.subscriber.email}! Te avisaremos pronto.`);
    })
    .catch(error => {
      console.error('Error during subscription:', error);
    });
  document.getElementById('email').value = '';
}