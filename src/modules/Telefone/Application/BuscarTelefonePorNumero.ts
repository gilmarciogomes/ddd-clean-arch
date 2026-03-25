import { TelefoneRepositury } from "../infraestructure/TelefoneRepository";

export class BbuscarTelefonePorNumero{

    constructor(private repository = new TelefoneRepositury())
    {}

    async execute(numeroTelefone: string){
        return this.repository.buscarTelefonePorNumero(numeroTelefone);

    }
}