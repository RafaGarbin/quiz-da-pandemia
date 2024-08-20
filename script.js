const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Um vírus está deixando muitos doentes e a organização de saúde indica que para minimizar o contágio seja necessário diminuir o contato entre as pessoas. O que você faz ao ouvir estas recomendaçãoes?",
        alternativas: [
            {
                texto: "Evito ao máximo contato com pessoas, me restringindo ao contato somente com os familiares que moram em minha casa.",
                afirmacao: " O isolamento social logo no surgimento do vírus pode diminuir ou atrasar o contágio entre a população."
            },

            {
                texto: "Acredito que isso não é nada sério afinal não tem nada comprovado e me reuno com diversas pessoas em local público",
                afirmacao : " O não isolamento social logo no surgimento do vírus pode ter agilizado o contágio entre a população"
            }   
            
        ]
    },
    {
        enunciado: "Assim que o primeiro caso desse vírus é detectado em seu estado, a organização de saúde recomenda o uso de máscara para minimizar o contágio. O que você faria neste caso?",
        alternativas: [
            {
                texto: "Uso máscara sempre que tenha mais alguem comigo no mesmo ambiente para evitar contágio.",
                afirmacao: "O uso correto de mascara diminuiu o cantágio fazendo com que o numero de casos infectados não cresçam tão rápidamente."
            },
            {
                texto: "Continuaria me reunindo sem preocupações pois só estou com pessoas que confio e conheço.",
                afirmacao: " O não uso correto de mascara fez crescer o numero de casos infectados causando um grande numero de passiente procurando as unidades de saúde e aumentanto ainda mais os casos da cidade."
            }
            
        ]
    }, 
    {
        enunciado: "O vírus já matou muitas pessoas e os cientistas após pesquisas desenvolveram uma vacina para protejer as pessoas do vírus e assim diminuir o numero de mortes causadas por eles. Neste caso o que você faria?",
        alternativas: [
            {
                texto: "Iria me vacinar e divulgaria para que todos meus conhecidos também buscassem a vacina.",
                afirmacao: " Com a ampla aceitação da vacina, em pouco tempo o numero de casos de risco e de mortes pelo vírus foi diminuindo e em alguns meses a situação começou a voltar ao normal. As nossas ações influenciam diretamente em nossas vidas!"
            },
            {
                texto: "Teria medo e não me vacinaria, tambem iria aconcelhar meus conhecidos a não vacinar pois acredito que a vacina é mais perigosa do que o vírus.",
                afirmacao: "  A não aceitação da vacina fez com que o numero de casos de mortes e pacientes com quadros de risco aumentassem cada vez mais e assim demorou-se bastante tempo até que a situação voltasse ao normal. As nossas ações influenciam diretamente em nossas vidas!"
            }
        ]
    }
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
    caixaPerguntas.textContent = "Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();