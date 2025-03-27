AOS.init();

const dataDoEvento = new Date("May 18, 2025 19:00:00"); // Adapte a data e hora do aniversário
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById(
        "contador"
    ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Festa encerrada!"; // Mensagem adaptada
    }
}, 1000);