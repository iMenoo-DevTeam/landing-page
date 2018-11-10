window.onload = () => {
  sendInfo = (e, elem) => {
    e.preventDefault();
    const email = elem.parentNode.children[0].value;
    axios.post('https://imenoo-email-microservice.herokuapp.com/api/email', { email })
      .then((res) => {
        setTimeout(() => {
          console.log(res)
          elem.classList.remove('sending');
          elem.classList.add('send');
          elem.innerHTML = "¡Gracias por tu interes. Pronto nos pondremos en contacto contigo!";
        }, 2000)
      })
      .catch(() => {
        setTimeout(() => {
          elem.classList.remove('sending');
          elem.classList.add('error');
          elem.innerHTML = "¡Tuvimos un error procesando el envío. Intentalo más tarde!";
        }, 2000)
      });
    elem.classList.add('sending');
    elem.innerHTML = "Enviando...";
  }
  
  $('.carousel').carousel();
}