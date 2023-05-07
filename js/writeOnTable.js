const populacao = document.getElementById('populacao');
const area = document.getElementById('area');
const catadoresLocais = document.getElementById('catadores-locais');
const demanda = document.getElementById('demanda');
const ultimaColeta = document.getElementById('ultima-coleta');

function write_on_table(bairro) {
    populacao.innerHTML = bairro.populacao
    area.innerHTML = bairro.area + " hectares"
    catadoresLocais.innerHTML = bairro.catadoresLocais
    demanda.innerHTML = bairro.demanda + " Kg"

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    var ultimaColetaDate = bairro.ultimaColeta
    ultimaColetaDate = new Date(ultimaColetaDate);
    const ultimaDays = Math.round(ultimaColetaDate.getTime() / day);

    const todayDate = new Date();
    const todayDays = Math.round(todayDate.getTime() / day);

    var daysDiff = Math.round(todayDays - ultimaDays) - 1;

    var label = daysDiff === 1 ? "dia" : "dias";
    ultimaColeta.innerHTML = "Há " + daysDiff + " " + label;
}

// JSON EXAMPLE:
// ultimaColeta = YYYY-MM-DD

/*
var data = {
  populacao: 100000,
  area: 50,
  catadoresLocais: 10,
  demanda: 20,
  ultimaColeta: "2022-05-01"
};

*/