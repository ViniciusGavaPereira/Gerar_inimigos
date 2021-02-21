var inimigos = ['Lobo', 'Rato',  'Esqueleto', 'Zumbi', 'Soldado']

var skills = {
    'Lobo': {
        vida: 6,
        força: 5,
        velocidade: 10,
    },

    'Rato': {
        vida: 2,
        força: 1,
        velocidade: 4,
    },

    'Esqueleto': {
        vida: 8,
        força: 5,
        velocidade: 6,
    },

    'Zumbi': {
        vida: 6,
        força: 15,
        velocidade: 2,
    },

    'Soldado': {
        vida: 16,
        força: 11,
        velocidade: 9,
    },

}



function numeroRandomico(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function retornar_inimigo(){

    var aleatório = numeroRandomico(0,inimigos.length - 1);
    let inimigo = inimigos[aleatório];
    let status = skills[inimigo]
    console.log(inimigo);
    console.log(status)

    $("#monstro").html(inimigo);
    $("#vida").html(status.vida);
    $("#força").html(status.força);
    $("#velocidade").html(status.velocidade);

    
}

retornar_inimigo()

$(".monstro").html("Teste")