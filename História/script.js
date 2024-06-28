const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pedro estava em um relacionamento com Cleuza há quase dois anos. Eles se conheceram na faculdade e, desde então, compartilharam muitos momentos felizes. No entanto, ultimamente, Pedro sentia que algo estava faltando. Foi então que ele conheceu Roberta, uma nova colega de trabalho. Roberta era carismática, inteligente e tinha um sorriso que iluminava qualquer ambiente, qual das duas pedro ira escolher para ter um relacionamrneto no futuro.",
        alternativas: [
            {
                texto: "Cleuza",
                afirmacao: "No início ficou com medo de dar tudo errado com Cleuza, mas acreditou no futuro de voces juntos."
            },
            {
                texto: "Roberta",
                afirmacao: "Você no fim da tudo certo com ela"
            }
        ]
    },
    {
        enunciado: "Pedro decidiu ficar com Cleuza, acreditando que a estabilidade e a história que tinham juntos eram mais importantes do que a nova paixão por Roberta. Ele conversou com Cleuza sobre seus sentimentos confusos.",
        alternativas: [
            {
                texto: "Você decidiu dedicar-se totalmente ao relacionamento com Cleuza para melorar.",
                afirmacao: "Cleuza ficou confusa de primeira, mas ainda assim confiou na sua palavra."
            },
            {
                texto: "voce tentou tirar tempo para voces dois, mas ainda assim você pensava na Roberta.",
                afirmacao: "Cleuza viu que você tava estranho sobre esse relacionamnte."
            }
        ]
    },
    {
        enunciado: "Por um tempo, as coisas pareciam melhorar. Pedro e Cleuza começaram a passar mais tempo juntos e a se reconectar. No entanto, a sombra de Roberta nunca desapareceu completamente da mente de Pedro. Ele continuava pensando nela, e esses pensamentos gradualmente afetaram seu relacionamento com Cleuza, mas mesmo assim você acreditava que daria certo com Cleuza ainda e não desistiu.",
        alternativas: [
            {
                texto: "Voce decidiu que Cleuza tava se tornando a mulher perfeita para sua vida e você esqueceu de Roberta.",
                afirmacao: "Voces estão melhores que nunca e estão se entendendo super bem"
            },
            {
                texto: "Você decidiu que quer largar Cleuza pois você e ela não estão mais bem juntos, e quer focar Só na roberta",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Eventualmente, a tensão acumulada chegou ao ponto de ruptura. Cleuza, cansada de lutar por um amor que parecia perdido, decidiu terminar o relacionamento. Pedro se jogou no colo de Roberta e no fim deu tudo certo, pois como ele esperava ela era a mulher certa para ele.",
 
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
