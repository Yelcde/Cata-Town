// import bairrosJSON from '../bairrosInfo.json';

const nomeBairro = document.getElementById('bairro');
const populacao = document.getElementById('populacao');
const area = document.getElementById('area');
const catadoresLocais = document.getElementById('catadores-locais');
const demanda = document.getElementById('demanda');
const ultimaColeta = document.getElementById('ultima-coleta');
let bairros = undefined

fetch('bairrosInfo.json')
    .then(response => response.json())
    .then(data => {
        bairros = data.bairros;
    })
    .catch(error => console.error(error));

function searchBairroById(id) {
    for (let i = 0; i < bairros.length; i++) {
        if (bairros[i].nome.toLowerCase() === id.toLowerCase()) {
            return bairros[i];
        }
    }
    return null;
}

function writeOnTable(id) {
    const bairroClicked = searchBairroById(id);

    var nomeBairroTemp = bairroClicked.nome.split('-');
    var nomeWrite = "";
    for (const i of nomeBairroTemp) { nomeWrite += i + " " };
    nomeWrite = nomeWrite.slice(0,-1);
    nomeBairro.innerHTML = nomeWrite

    populacao.innerHTML = bairroClicked.populacao;
    area.innerHTML = bairroClicked.area + " hectares";
    catadoresLocais.innerHTML = bairroClicked.catadoresLocais;
    demanda.innerHTML = bairroClicked.demanda + " Kg";

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    var ultimaColetaDate = bairroClicked.ultimaColeta;
    ultimaColetaDate = new Date(ultimaColetaDate);
    const ultimaDays = Math.round(ultimaColetaDate.getTime() / day);

    const todayDate = new Date();
    const todayDays = Math.round(todayDate.getTime() / day);

    var daysDiff = Math.round(todayDays - ultimaDays) - 1;
    var label = daysDiff === 1 ? "dia" : "dias";
    ultimaColeta.innerHTML = "Há " + daysDiff + " " + label;
};

export { writeOnTable };

// JSON EXAMPLE:
// ultimaColeta = YYYY-MM-DD

/*
var data = {
    nome: 'Local',
    populacao: 100000,
    area: 50,
    catadoresLocais: 10,
    demanda: 20,
    ultimaColeta: "2022-05-01"
};

*/