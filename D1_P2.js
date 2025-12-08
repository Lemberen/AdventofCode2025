const posicaoInicial = 50;
let posicaoAtual = posicaoInicial;
let contadorSenha = 0;

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
    const numeroRotacoes = Number(input.replace("L", "-").replace("R", "+"));

    if (Math.abs (numeroRotacoes) >= 100) {
        contadorSenha += Math.trunc (Math.abs(numeroRotacoes / 100));
    }


    posicaoAtual += numeroRotacoes % 100;

    if (posicaoAtual >= 100) {
        posicaoAtual = posicaoAtual % 100;
        contadorSenha++;
    }
    else if (posicaoAtual< 0) {
        if(posicaoAtual !== (numeroRotacoes % 100)) {
            contadorSenha++;
        }
        
        posicaoAtual = 100 + (posicaoAtual % 100);
    }
    else if (posicaoAtual === 0) {
        contadorSenha++;
    }
}