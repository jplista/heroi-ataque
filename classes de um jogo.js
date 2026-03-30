/*/ ---- classes de um jogo ----
introdução: E um progama simples que tem uma classe de heroi e cada heroi tem um tipo de ataque diferente, o usuario escolhe um heroi e o programa mostra o ataque do heroi escolhido
nome:jp lista         data de criação: 30/03/2026
/*/

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else if (this.tipo === "arqueiro") {
            ataque = "arco e flecha";
        } else {
            ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Lista de heróis disponíveis
const herois = [
    new Heroi("Merlin", 60, "mago"),
    new Heroi("Pedro", 18, "guerreiro"),
    new Heroi("Enzo", 40, "monge"),
    new Heroi("Jack", 35, "ninja"),
    new Heroi("Robin", 25, "arqueiro")
];

// Simulando a escolha do usuário (por índice)
let escolhaDoUsuario = 3 // 0 = Merlin, 1 = Pedro, 2 = Enzo, etc.

const heroiEscolhido = herois[escolhaDoUsuario];
heroiEscolhido.atacar();