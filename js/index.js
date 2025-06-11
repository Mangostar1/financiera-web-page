function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;

  axios
    .post(
      "https://back-web-page-financiera-production.up.railway.app/early-access/subscriptions",
      { email }
    )
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Failed to subscribe");
      }

      if (response.status === 400) {
        Swal.fire({
          title: "Error",
          text: response.data.error,
          icon: "error",
        });
        throw new Error(response.data.error);
        
      }

      if (response.status === 500) {
        Swal.fire({
          title: "Error del servidor",
          text: "Por favor, inténtalo de nuevo más tarde.",
          icon: "error",
        });
        throw new Error("Server error");
      }

      if (response.status === 201) {
        Swal.fire({
          title: `¡Registro exitoso!`,
          text: `Gracias por registrarte, ${email}. Te notificaremos pronto con más información.`,
          icon: "success",
        });
      }
    })
    .catch((error) => {
      console.error("Error during subscription:", error);
    });
  document.getElementById("email").value = "";
}
