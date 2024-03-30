window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const url = link.getAttribute('href');

      fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content-page-current').innerHTML = html;
      })
      .catch(error => console.error('Ooops...Erro ao carregar a página: ', error))
    })
  })
})