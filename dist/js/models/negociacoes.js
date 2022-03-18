export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Faltou inicializar a tipagem do atributo!
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao); // Estava dando o seguinte erro:
        // negociacoes.js:3 Uncaught TypeError: 
        // Cannot read properties of undefined (reading 'push')
    }
    lista() {
        return this.negociacoes;
        // o tipo ReadonlyArray é identico ao tipo Array, porém exclui os metodos que 
        //permitem alterar o arraye mantem apenas os que metodos de leitura.
    }
}
