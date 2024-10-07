const xmlString = /* xml */ `
    <frota>
      <informacoes>
        <nomeEmpresa>Transportes Rapidez</nomeEmpresa>
        <sede>
          <rua>Rua da Logística, 456</rua>
          <cidade>Rio de Janeiro</cidade>
          <estado>RJ</estado>
          <cep>20000-000</cep>
        </sede>
        <telefone>(21) 9876-5432</telefone>
      </informacoes>
      <veiculos>
        <veiculo>
          <modelo>Mercedes-Benz Sprinter</modelo>
          <ano>2020</ano>
          <placa>XYZ-1234</placa>
          <disponivel>true</disponivel>
        </veiculo>
        <veiculo>
          <modelo>Volkswagen Delivery</modelo>
          <ano>2018</ano>
          <placa>ABC-5678</placa>
          <disponivel>false</disponivel>
        </veiculo>
        <veiculo>
          <modelo>Ford Cargo</modelo>
          <ano>2021</ano>
          <placa>DEF-9101</placa>
          <disponivel>true</disponivel>
        </veiculo>
      </veiculos>
    </frota>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

// elementos HTML
const elTitulo = document.querySelector('#titulo');
const elNomeEmpresa = document.querySelector('#empresa');
const elRua = document.querySelector('#rua');
const elCidade = document.querySelector('#cidade');
const elCep = document.querySelector('#cep');
const elTelefone = document.querySelector('#telefone');
const elTbody = document.querySelector('#tbody');

// elementos XML
const nomeEmpresa = xmlDoc.querySelector('nomeEmpresa').textContent;
const rua = xmlDoc.querySelector('rua').textContent;
const cidade = xmlDoc.querySelector('cidade').textContent;
const estado = xmlDoc.querySelector('estado').textContent;
const cep = xmlDoc.querySelector('cep').textContent;
const telefone = xmlDoc.querySelector('telefone').textContent;

const veiculos = xmlDoc.querySelectorAll('veiculo');

elTitulo.innerHTML = `Frota da empresa ${nomeEmpresa}`;
elNomeEmpresa.innerHTML = nomeEmpresa;
elRua.innerHTML = rua;
elCidade.innerHTML = `${cidade} - ${estado}`;
elCep.innerHTML = cep;
elTelefone.innerHTML = telefone;


elTbody.innerHTML = '';
for(let veiculo of veiculos) {
  const modelo = veiculo.querySelector('modelo').textContent;
  const ano = veiculo.querySelector('ano').textContent;
  const placa = veiculo.querySelector('placa').textContent;
  const disponivel = veiculo.querySelector('disponivel').textContent == 'true' ? 'Sim' : 'Não';

  const element = /* html */`
    <tr>
      <td>${modelo}</td>
      <td>${ano}</td>
      <td>${placa}</td>
      <td>${disponivel}</td>
    </tr>
  `;

  elTbody.innerHTML += element;
}