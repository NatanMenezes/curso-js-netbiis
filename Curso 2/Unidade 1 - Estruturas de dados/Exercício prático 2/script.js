// Agora é com você! Comece com o mesmo script do exercício prático 1
const candidatos = [
    {nome: 'Guilherme Boulos', votos:0},
    {nome: 'Ricardo Nunes', votos:0},
    {nome: 'Pablo Marçal', votos:0}
];

const ulCandidatos = document.getElementById('candidatos');


function renderizarCandidatos() {
    ulCandidatos.innerHTML = '';
    candidatos.sort((a, b) => b.votos - a.votos);
    candidatos.forEach(candidato => {
        ulCandidatos.innerHTML += `
            <li>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
            </li>
        `;
    })
}

function votaCandidato(nomeCandidato) {
    const candidatoIndex = candidatos.findIndex(el => el.nome == nomeCandidato)
    candidatos[candidatoIndex].votos++
    renderizarCandidatos();
}

renderizarCandidatos();