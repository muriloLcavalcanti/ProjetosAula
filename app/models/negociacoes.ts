import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[];

    adiciona(negocicao: Negociacao){
        this.negociacoes.push(negocicao);
    }

    lista(): readonly Negociacao[]{ 
        return this.negociacoes;
        // o tipo ReadonlyArray é identico ao tipo Array, porém exclui os metodos que 
        //permitem alterar o arraye mantem apenas os que metodos de leitura.
    }

}
