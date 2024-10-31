AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timestampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timestampAtual = agora.getTime();

    const distancia = timestampEvento - timestampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const dias = Math.floor(distancia / (diaEmMs));
    const horas = Math.floor((distancia % diaEmMs) / horaEmMs);
    const minutos = Math.floor((distancia % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((distancia % minutoEmMs) / segundoEmMs);
    
    document.getElementById('contador').innerHTML = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}, 1000)