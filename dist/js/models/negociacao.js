export class Negociacao {
    constructor(_data, // <- aplicando a programação defensiva
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /*
        get quantidade(): number{
            return this._quantidade;
        }
    
        get valor(): number{
            return this._valor;
        }
    */
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    /*
        Para programar de forma defensiva foi preciso usar de uma lógica onde é feita uma
        copia da propriedade data. Qualqer modificação inapropriada sera feita na cópia
        e a data original será apresentada.
    */
    get volume() {
        return this.quantidade * this.valor;
    }
}
