export class Negociacao {
    constructor(
        private _data: Date, // <- aplicando a programação defensiva
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

/* 
    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }
*/
   
    get data(): Date { // <- aplicando a programação defensiva
        const data = new Date(this._data.getTime());
        return data;
    }
/*
    Para programar de forma defensiva foi preciso usar de uma lógica onde é feita uma
    copia da propriedade data. Qualqer modificação inapropriada sera feita na cópia
    e a data original será apresentada.
*/

    get volume(): number {
        return this.quantidade * this.valor;
    }
}

