export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negocicao) {
        this.negociacoes.push(negocicao);
    }
    lista() {
        return this.negociacoes;
        // o tipo ReadonlyArray é identico ao tipo Array, porém exclui os metodos que permitem alterar o arraye mantem apenas os que metodos de leitura.
    }
}
