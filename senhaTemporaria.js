function senhaTemporaria() {
  const email = document.getElementById('email').value.trim();

  if (!email) {
    document.getElementById('mensagem').innerText = 'Por favor, informe o e-mail.';
    return;
  }


  const data = { email };

    // URL do endpoint

  //  const endpoint = 'https://emporiosaborrealapi-production.up.railway.app/api/v1/credential/reset';

  const endpoint = 'http://localhost:8080/api/v1/credential/reset';

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(async response => {
      // Verifica se a resposta foi OK
      if (!response.ok) {
        // Tenta pegar o JSON do erro, se houver
        let erroTexto = 'Erro ao gerar nova senha.';
        try {
          const erroJson = await response.json();
          erroTexto = erroJson.errors?.[0]?.message || erroTexto;
        } catch (err) {
          // Ignora erro de JSON vazio
        }
        throw new Error(erroTexto);
      }

      // Verifica se a resposta tem conteúdo antes de tentar .json()
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const dados = await response.json();
        console.log('Resposta JSON:', dados);
      }

      // Mostra mensagem de sucesso
      document.getElementById('mensagem').innerText =
        '✅ A senha temporária foi enviada. Verifique seu e-mail.';
      document.getElementById('mensagem').style.color = 'green';
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('mensagem').innerText = error.message;
      document.getElementById('mensagem').style.color = 'red';
    });
}
