//#region Cadastrar Produto
// Cadastrar

function cadastrar() {
  // Obtém os valores dos campos de entrada
  const produto = document.getElementById('produto').value;
  const produtoDisponivel = document.getElementById('produto_disponivel').value;
  const quantidade = document.getElementById('quantidade').value;
  const validade = document.getElementById('validade').value;
  const categoria = document.getElementById('categoria').value;
  const dataCompra = document.getElementById('data_compra').value;
  const precoCompra = document.getElementById('preco_compra').value;
  const precoVenda = document.getElementById('preco_venda').value;
  const fornecedor = document.getElementById('fornecedor').value;
  const descricao = document.getElementById('descricao').value;

  // Objeto com os dados a serem enviados
  const data = {
    produto,
    produtoDisponivel,
    quantidade,
    validade,
    categoria,
    dataCompra,
    precoCompra,
    precoVenda,
    fornecedor,
    descricao,
  };

  // URL do endpoint

  // const endpoint =
  //   'https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque';

  const endpoint = 'http://localhost:8080/api/v1/estoque';

  // Envia a requisição para o endpoint
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }
      console.log('Produto cadastrado com sucesso');
      // Faça algo após o cadastro bem-sucedido, se necessário
      document.getElementById('mensagem').innerText =
        'Produto cadastrado com sucesso';
    })
    .catch(error => {
      console.error(error);
      // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
      document.getElementById('mensagem').innerText =
        'Erro ao cadastrar produto. Preencha todos os campos';
    });
}
//#endregion


//#region Consultar

//Consultar por ID

// Função para criar a estrutura da tabela
function criarEstruturaTabela(dados) {
  const table = document.createElement('table');
  table.border = '1';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  [
    'Produto',
    'Quantidade',
    'Validade',
    'Categoria',
    'Data de Compra',
    'Preço de Compra',
    'Preço de Venda',
    'Fornecedor',
    'Descrição',
    'Produto Disponível',
  ].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  const dataRow = document.createElement('tr');
  [
    'produto',
    'quantidade',
    'validade',
    'categoria',
    'dataCompra',
    'precoCompra',
    'precoVenda',
    'fornecedor',
    'descricao',
    'produtoDisponivel',
  ].forEach(key => {
    const td = document.createElement('td');
    td.textContent = dados[key] ? dados[key] : 'N/A';
    dataRow.appendChild(td);
  });
  tbody.appendChild(dataRow);
  table.appendChild(tbody);

  return table;
}

function consultar() {
  let id = document.getElementById('id_do_produto_consultar').value;
  const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque/id/${id}`;

  fetch(endpoint)
    .then(res => {
      if (!res.ok) {
        throw new Error('Erro ao consultar recurso');
      }
      return res.json();
    })
    .then(dados => {
      console.log(dados);

      const tabelaContainer = document.getElementById('tabela-container');
      tabelaContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior
      tabelaContainer.appendChild(criarEstruturaTabela(dados));

      document.getElementById('mensagem').innerText = ''; // Limpa mensagem de erro se houver
    })
    .catch(error => {
      console.error('Erro ao consultar recurso:', error);
      const tabelaContainer = document.getElementById('tabela-container');
      tabelaContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior
      document.getElementById('mensagem').innerText =
        'ID do produto não existe';
    });
}

// function consultar() {
//   let id = document.getElementById('id_do_produto_consultar').value;

//   const endpoint = `http://localhost:8080/api/v1/estoque/id/${id}`;

//   fetch(endpoint)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Erro ao consultar recurso');
//       }
//      return res.json();
//     })

//     .then(dados => {
//       console.log(dados);

//       const container = document.getElementById('dados-produto');
//       container.innerHTML = `
//       <h2>${dados.produto}</h2>
//       <p><strong>Quantidade:</strong> ${dados.quantidade}</p>
//       <p><strong>Validade:</strong> ${dados.validade}</p>
//       <p><strong>Categoria:</strong> ${dados.categoria}</p>
//       <p><strong>Data de Compra:</strong> ${dados.dataCompra}</p>
//       <p><strong>Preço de Compra:</strong> ${dados.precoCompra}</p>
//       <p><strong>Preço de Venda:</strong> ${dados.precoVenda}</p>
//       <p><strong>Fornecedor:</strong> ${dados.fornecedor}</p>
//       <p><strong>Descrição:</strong> ${
//         dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'
//       }</p>
//       <p><strong>Produto Disponível:</strong> ${
//         dados.produtoDisponivel ? 'Sim' : 'Não'
//       }</p>
//     `;

//     document.getElementById('mensagem').innerText = ''; // Limpa mensagem de erro se houver
//   })
//   .catch(error => {
//     console.error('Erro ao consultar recurso:', error);
//     document.getElementById('dados-produto').innerHTML = ''; // Limpa dados do produto
//     document.getElementById('mensagem').innerText = 'ID do produto não existe';

//     });
// }

// Consultar por Nome


// Função para criar a estrutura da tabela
function criarEstruturaTabela3(dados) {
  const table = document.createElement('table');
  table.border = '1';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  [
    'Produto',
    'Quantidade',
    'Validade',
    'Categoria',
    'Data de Compra',
    'Preço de Compra',
    'Preço de Venda',
    'Fornecedor',
    'Descrição',
    'Produto Disponível',
  ].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  const dataRow = document.createElement('tr');
  [
    'produto',
    'quantidade',
    'validade',
    'categoria',
    'dataCompra',
    'precoCompra',
    'precoVenda',
    'fornecedor',
    'descricao',
    'produtoDisponivel',
  ].forEach(key => {
    const td = document.createElement('td');
    td.textContent = dados[key] ? dados[key] : 'N/A';
    dataRow.appendChild(td);
  });
  tbody.appendChild(dataRow);
  table.appendChild(tbody);

  return table;
}

function consultar3() {
  let produto = document.getElementById('id_do_produto_consultar3').value;
  const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque/produto/${produto}`;

  fetch(endpoint)
    .then(res => {
      if (!res.ok) {
        throw new Error('Erro ao consultar recurso');
      }
      return res.json();
    })
    .then(dados => {
      console.log(dados);

      const tabelaContainer = document.getElementById('tabela-container3');
      tabelaContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior
      if (Array.isArray(dados)) {
        dados.forEach(dado => {
          tabelaContainer.appendChild(criarEstruturaTabela3(dado));
        });
      } else {
        tabelaContainer.appendChild(criarEstruturaTabela3(dados));
      }

      document.getElementById('mensagem3').innerText = ''; // Limpa mensagem de erro se houver
    })
    .catch(error => {
      console.error('Erro ao consultar recurso:', error);
      const tabelaContainer = document.getElementById('tabela-container3');
      tabelaContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior
      document.getElementById('mensagem3').innerText =
        'Não existe produto cadastrado com esse nome';
    });
}

// function consultar3() {
//   let produto = document.getElementById('id_do_produto_consultar3').value;

//   const endpoint = `http://localhost:8080/api/v1/estoque/produto/${produto}`;

//   fetch(endpoint)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Erro ao consultar recurso');
//       }
//       return res.json();
//     })
//     .then(dados => {
//       // Verifica se os dados são um array
//       if (Array.isArray(dados)) {
//         // Se for um array, retorna o primeiro elemento (supondo que apenas um objeto é retornado)
//         dados = dados[0]
//       };

//       console.log(dados);

//       const container = document.getElementById('dados-produto3');
//       container.innerHTML = `
//       <h2>${dados.produto}</h2>
//       <p><strong>Quantidade:</strong> ${dados.quantidade}</p>
//       <p><strong>Validade:</strong> ${dados.validade}</p>
//       <p><strong>Categoria:</strong> ${dados.categoria}</p>
//       <p><strong>Data de Compra:</strong> ${dados.dataCompra}</p>
//       <p><strong>Preço de Compra:</strong> ${dados.precoCompra}</p>
//       <p><strong>Preço de Venda:</strong> ${dados.precoVenda}</p>
//       <p><strong>Fornecedor:</strong> ${dados.fornecedor}</p>
//       <p><strong>Descrição:</strong> ${
//         dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'
//       }</p>
//       <p><strong>Produto Disponível:</strong> ${
//         dados.produtoDisponivel ? 'Sim' : 'Não'
//       }</p>
//     `;
//       document.getElementById('mensagem3').innerText = 'Consulta realizada com sucesso'; // Mensagem de sucesso
//     })
//     .catch(error => {
//       console.error('Erro ao consultar recurso:', error);
//       document.getElementById('dados-produto3').innerHTML = ''; // Limpa dados do produto
//       document.getElementById('mensagem3').innerText = 'Não existe produto cadastrado com esse nome';
//     });
// }

// Consultar por Categoria

// Função para criar a estrutura HTML para cada produto
function criarEstruturaProduto4(dados) {
  return `
     <tr>
       <td>${dados.produto}</td>
       <td>${dados.quantidade}</td>
       <td>${dados.validade}</td>
       <td>${dados.categoria}</td>
       <td>${dados.dataCompra}</td>
       <td>${dados.precoCompra}</td>
       <td>${dados.precoVenda}</td>
       <td>${dados.fornecedor}</td>
       <td>${
         dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'
       }</td>
       <td>${dados.produtoDisponivel ? 'Sim' : 'Não'}</td>
     </tr>
   `;
}

function consultar4() {
  let categoria = document.getElementById('id_do_produto_consultar4').value;

  const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque/categoria/${categoria}`;

  fetch(endpoint)
    .then(res => {
      if (!res.ok) {
        throw new Error('Erro ao consultar recurso');
      }
      return res.json();
    })
    .then(dados => {
      console.log(dados);

      const container = document.getElementById('dados-produtos4');
      const tabela = `
         <table border="1">
           <thead>
             <tr>
               <th>Produto</th>
               <th>Quantidade</th>
               <th>Validade</th>
               <th>Categoria</th>
               <th>Data de Compra</th>
               <th>Preço de Compra</th>
               <th>Preço de Venda</th>
               <th>Fornecedor</th>
               <th>Descrição</th>
               <th>Disponível</th>
             </tr>
           </thead>
           <tbody>
             ${dados.map(criarEstruturaProduto4).join('')}
           </tbody>
         </table>
       `;
      container.innerHTML = tabela;
      document.getElementById('mensagem4').innerText =
        'Consulta realizada com sucesso'; // Mensagem de sucesso
    })
    .catch(error => {
      console.error('Erro ao consultar recurso:', error);
      document.getElementById('dados-produtos4').innerHTML = ''; // Limpa dados dos produtos
      document.getElementById('mensagem4').innerText =
        'Não existe essa categoria cadastrada';
    });
}

// Consultar Todos os Produtos

// Função para criar a estrutura HTML para cada produto
function criarEstruturaProduto(dados) {
  return `
   <tr>
   <td>${dados.produto}</td>
   <td>${dados.quantidade}</td>
   <td>${dados.validade}</td>
   <td>${dados.categoria}</td>
   <td>${dados.dataCompra}</td>
   <td>${dados.precoCompra}</td>
   <td>${dados.precoVenda}</td>
   <td>${dados.fornecedor}</td>
   <td>${
     dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'
   }</td>
   <td>${dados.produtoDisponivel ? 'Sim' : 'Não'}</td>
 </tr>
   `;
}

function consultar2() {
  //const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque`;
  const endpoint = `http://localhost:8080/api/v1/estoque`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      const container = document.getElementById('dados-produtos2');
      // dados.forEach(produto => {
      //   const estruturaProduto = criarEstruturaProduto(produto);
      //   container.innerHTML += estruturaProduto;
      // });

      const tabela = `
     <table border="1">
       <thead>
         <tr>
           <th>Produto</th>
           <th>Quantidade</th>
           <th>Validade</th>
           <th>Categoria</th>
           <th>Data de Compra</th>
           <th>Preço de Compra</th>
           <th>Preço de Venda</th>
           <th>Fornecedor</th>
           <th>Descrição</th>
           <th>Disponível</th>
         </tr>
       </thead>
       <tbody>
         ${dados.map(criarEstruturaProduto).join('')}
       </tbody>
     </table>
   `;
      container.innerHTML = tabela;
    });
}
//#endregion


//#region Editar
// Editar por ID

function consultarParaEditar() {
  let id = document.getElementById('id_do_produto_editar').value;

  const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque/id/${id}`;

  fetch(endpoint)
    .then(res => {
      if (!res.ok) {
        throw new Error('Erro ao consultar recurso');
      }
      return res.json();
    })
    .then(dados => {
      console.log(dados);

      // Preenche o formulário de edição com os dados do produto
      document.getElementById('produto_editar').value = dados.produto;
      document.getElementById('quantidade_editar').value = dados.quantidade;
      document.getElementById('validade_editar').value = dados.validade;
      document.getElementById('categoria_editar').value = dados.categoria;
      document.getElementById('dataCompra_editar').value = dados.dataCompra;
      document.getElementById('precoCompra_editar').value = dados.precoCompra;
      document.getElementById('precoVenda_editar').value = dados.precoVenda;
      document.getElementById('fornecedor_editar').value = dados.fornecedor;
      document.getElementById('descricao_editar').value = dados.descricao;
      document.getElementById('produtoDisponivel_editar').checked =
        dados.produtoDisponivel;

      // Exibe o formulário de edição
      document.getElementById('form-edicao').style.display = 'block';
      document.getElementById('mensagem4').innerText = ''; // Limpa mensagem de erro se houver
    })
    .catch(error => {
      console.error('Erro ao consultar recurso:', error);
      document.getElementById('form-edicao').style.display = 'none'; // Esconde o formulário de edição
      document.getElementById('mensagem4').innerText =
        'ID do produto não existe';
    });
}

function editar() {
  let id = document.getElementById('id_do_produto_editar').value;

  const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque/${id}`;

  const data = {
    produto: document.getElementById('produto_editar').value,
    quantidade: document.getElementById('quantidade_editar').value,
    validade: document.getElementById('validade_editar').value,
    categoria: document.getElementById('categoria_editar').value,
    dataCompra: document.getElementById('dataCompra_editar').value,
    precoCompra: document.getElementById('precoCompra_editar').value,
    precoVenda: document.getElementById('precoVenda_editar').value,
    fornecedor: document.getElementById('fornecedor_editar').value,
    descricao: document.getElementById('descricao_editar').value,
    produtoDisponivel: document.getElementById('produtoDisponivel_editar')
      .checked,
  };

  fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao editar recurso');
      }
      document.getElementById('mensagem4').innerText =
        'Produto editado com sucesso';
      document.getElementById('form-edicao').style.display = 'none'; // Esconde o formulário de edição após o sucesso
    })
    .catch(error => {
      console.error('Erro ao editar recurso:', error);
      document.getElementById('mensagem4').innerText = 'Erro ao editar produto';
    });
}

// erro no front ao editar:

// Esse erro indica um problema de política de mesma origem (CORS). O navegador está bloqueando a solicitação devido à política de segurança que restringe como os recursos podem ser compartilhados entre diferentes origens.

// Para resolver esse problema, você precisará configurar o servidor para incluir os cabeçalhos CORS apropriados na resposta HTTP. Isso envolve adicionar o cabeçalho Access-Control-Allow-Origin com o valor * ou o domínio específico do qual você está fazendo a solicitação.

// function editar() {
//   let ano = document.getElementById('ano').value;
//   let pais = document.getElementById('pais').value;

//   const endpoint = `https://date.nager.at/api/v3/publicholidays/${ano}/${pais}`;

//   fetch(endpoint)
//     .then(res => res.json())
//     .then(dados => {
//       console.log(dados);

//       var lista = document.getElementById('repos');
//       for (i in dados) {
//         console.log(dados[i]);
//         var elemento = document.createElement('li');
//         elemento.innerHTML = JSON.stringify(dados[i].date);
//         lista.appendChild(elemento);
//       }

//       // p_texto.innerHTML=dados
//     });
// }

// // Editar por ID - Outra forma de fazer

// function atualizarEstoque(event) {
//   event.preventDefault(); // Impede o envio do formulário

//   // Obtém os valores dos campos de entrada
//   const produto = document.getElementById('produto').value;
//   const quantidade = document.getElementById('quantidade').value;
//   const validade = document.getElementById('validade').value;
//   const categoria = document.getElementById('categoria').value;
//   const dataCompra = document.getElementById('data_compra').value;
//   const precoCompra = document.getElementById('preco_compra').value;
//   const precoVenda = document.getElementById('preco_venda').value;
//   const fornecedor = document.getElementById('fornecedor').value;
//   const descricao = document.getElementById('descricao').value;

//   // Objeto com os dados a serem enviados
//   const data = {
//     produto,
//     quantidade,
//     validade,
//     categoria,
//     dataCompra,
//     precoCompra,
//     precoVenda,
//     fornecedor,
//     descricao
//   };

//   let id = document.getElementById('produto').value;

//   // URL do endpoint para atualizar o estoque
//   const endpoint = `http://localhost:8080/api/v1/estoque/${id}`;

//   // Envia a requisição PATCH para o endpoint
//   fetch(endpoint, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Erro ao atualizar estoque');
//       }
//       console.log('Estoque atualizado com sucesso');
//       // Faça algo após a atualização do estoque bem-sucedida, se necessário
//     })
//     .catch(error => {
//       console.error('Erro ao atualizar estoque:', error);
//       // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
//     });
// }

// // Adiciona um event listener para o evento submit do formulário
// document.getElementById('form_atualizar').addEventListener('submit', atualizarEstoque);

//#endregion


//#region Excluir Produto
// Excluir por ID

function excluir() {
  let id = document.getElementById('id_do_produto_excluir').value;

  const endpoint = `https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque/${id}`;

  fetch(endpoint, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao excluir recurso');
      }
      // return response.json();
    })
    .then(data => {
      console.log('Recurso excluído com sucesso:', data);
      // Faça algo após a exclusão bem-sucedida, se necessário
      document.getElementById('mensagem').innerText =
        'Produto excluído com sucesso';
    })
    .catch(error => {
      console.error('Erro ao excluir recurso:', error);
      // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
      document.getElementById('mensagem').innerText =
        'Erro ao excluir produto. ID não existe';
    });
}
//#endregion


//#region Cadastrar Usuário
// Cadastrar Usuário

function cadastrarUsuario() {
  // Obtém os valores dos campos de entrada
  const email = document.getElementById('e-mail_cadastrar').value;
  const password = document.getElementById('senha_cadastrar').value;

  // Objeto com os dados a serem enviados
  const data = {
    email,
    password,
  };

  // URL do endpoint

  // const endpoint =
  //   'https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque';

  const endpoint = 'http://localhost:8080/api/v1/credential';

  // Envia a requisição para o endpoint
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar o usuário');
      }
      console.log('Usuário cadastrado com sucesso');
      // Faça algo após o cadastro bem-sucedido, se necessário
      document.getElementById('mensagem').innerText =
        'Usuário cadastrado com sucesso. Volte para tela de login e insira seus dados';
      // Redirecionar para outra página ou mostrar uma mensagem de sucesso
      //window.location.href = 'login.html';
    })
    .catch(error => {
      console.error(error);
      // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
      document.getElementById('mensagem').innerText =
        'Erro ao cadastrar o usuário. Preencha todos os campos corretamente';
    });
}
//#endregion


//#region Login
// Logar Usuário

function logarUsuario() {
  // Obtém os valores dos campos de entrada
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Objeto com os dados a serem enviados
  const data = {
    email,
    password,
  };

  // URL do endpoint

  // const endpoint =
  //   'https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque';

  const endpoint = 'http://localhost:8080/api/v1/login';

  // Envia a requisição para o endpoint
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao logar o usuário');
      }
      console.log('Usuário logado com sucesso');
      // Faça algo após o cadastro bem-sucedido, se necessário
      document.getElementById('mensagem').innerText =
        'Usuário logado com sucesso';
      // Redirecionar para outra página ou mostrar uma mensagem de sucesso
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error(error);
      // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
      document.getElementById('mensagem').innerText =
        'Erro ao logar o usuário. Preencha todos os campos corretamente.';
    });
}
//#endregion


//#region Trocar Senha
// Trocar Senha

function trocarSenha() {
  // Obtém os valores dos campos de entrada
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const newPassword = document.getElementById('newpassword').value;

  // Objeto com os dados a serem enviados
  const data = {
    email,
    password,
    newPassword,
  };

  // URL do endpoint

  // const endpoint =
  //   'https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque';

  const endpoint = 'http://localhost:8080/api/v1/credential';

  // Envia a requisição para o endpoint
  fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao trocar a senha');
      }
      console.log('Senha trocada com sucesso');
      // Faça algo após o cadastro bem-sucedido, se necessário
      document.getElementById('mensagem').innerText =
        'Senha trocada com sucesso';
      // Redirecionar para outra página ou mostrar uma mensagem de sucesso
      //window.location.href = 'index.html';
    })
    .catch(error => {
      console.error(error);
      // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
      document.getElementById('mensagem').innerText =
        'Erro ao trocar a senha. Preencha todos os campos corretamente.';
    });
}
//#endregion


//#region Gerar Senha Temporária
// Senha Temporaria

function senhaTemporaria() {
  // Obtém os valores dos campos de entrada
  const email = document.getElementById('email').value;

  // Objeto com os dados a serem enviados
  const data = {
    email,
  };

  // URL do endpoint

  // const endpoint =
  //   'https://emporiosaborrealapi-production.up.railway.app/api/v1/estoque';

  const endpoint = 'http://localhost:8080/api/v1/credential/reset';

  // Envia a requisição para o endpoint
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao gerar nova senha');
      }
      return response.json(); // Retorna o JSON para o próximo .then()
    })
    .then(dados => {
      console.log(dados);

      // Verifica e exibe a senha correta
      const password = dados.response?.password;
      if (password) {
        document.getElementById('mensagem').innerText =
          'Senha gerada com sucesso';
        document.getElementById(
          'mensagem_2'
        ).innerText = `A senha gerada é: ${password}`;
        // Redirecionar para outra página ou mostrar uma mensagem de sucesso
        //window.location.href = 'login-senhaTemporaria.html';
      } else {
        throw new Error(
          'A propriedade "password" não foi encontrada na resposta'
        );
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById('mensagem').innerText =
        'Erro ao gerar a senha. Preencha o e-mail corretamente.';
    });
}
//#endregion
