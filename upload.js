const form = document.getElementById('uploadForm');

if (!form) {
  console.error("Elemento #uploadForm não encontrado no DOM.");
} else {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const input = document.getElementById('arquivo');
    const file = input.files[0];

    if (!file) {
      alert("Selecione um arquivo .xlsx antes de enviar.");
      return;
    }

    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension !== 'xlsx') {
      alert("Por favor, envie um arquivo com extensão .xlsx.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // nome do campo ajustado para 'file'

        // URL do endpoint

  //  const endpoint = 'https://emporiosaborrealapi-production.up.railway.app/api/v1/upload';

  const endpoint = 'http://localhost:8080/api/v1/upload';

    fetch(endpoint, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Arquivo .xlsx enviado com sucesso!');
        window.location.href = 'consultarTodos.html';
      } else {
        alert('Erro ao enviar o arquivo. Código: ' + response.status);
      }
    })
    .catch(error => {
      alert('Erro na requisição: ' + error.message);
    });
  });
}

