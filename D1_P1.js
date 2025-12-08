/*
    Dia 1, parte 1:
    Imagine um disco, como o de um cofre, contendo 100 posições, de 0 a 99.
    Dentro dos inputs, rotações prefixadas com um "L" significam rotações para a esquerda, e aquelas prefixadas com um "R", rotações para a direita.
    O objetivo é rodar o disco desse cofre seguindo os inputs, e a senha final será exatamente a quantidade de vezes que o disco parar exatamente em 0.
*/

const posicaoInicial = 50;
let posicaoAtual = posicaoInicial;
let senha = 0;

/* Inputs criados como exemplo */
const inputs = `L50
L782
R20
R99
R57
R21
L34
L68
R40
L947
R67
R59
R420
L12
L43
R3
L24
R82
R58
L33
R22
L5
R100
R101
L1`
    .split("\n");

for(const input of inputs) {
    const voltaCompleta = 100;
    const rotacoes = Number(input.replace("L", "-").replace("R", "+"));

    posicaoAtual += (rotacoes % voltaCompleta);

    if(posicaoAtual >= 100) {
        posicaoAtual = posicaoAtual % voltaCompleta;
    }
    else if (posicaoAtual < 0) {
        posicaoAtual = 100 + posicaoAtual;
    }

    if(posicaoAtual === 0) {
        senha++;
    }
}

console.log(senha);