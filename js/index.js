function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;

  axios
    .post(
      "https://back-web-page-financiera-production.up.railway.app/early-access/subscriptions",
      { email }
    )
    .then((response) => {
      /* console.log("Subscripcion mensaje:", response.data.message); */
      Swal.fire({
        title: `¡Registro exitoso!`,
        text: `Gracias por registrarte, ${email}. Te notificaremos pronto con más información.`,
        icon: "success",
      });
    })
    .catch((error) => {
      console.error("Error during subscription:", error);
    });
  document.getElementById("email").value = "";
}
