import { TelefoneRepositury } from "../infraestructure/TelefoneRepository";

export class BbuscarTelefonePorId{

    constructor(private repository = new TelefoneRepositury())
    {}

    async execute(idTelefone: number){
        return this.repository.buscarTelefonePorId(idTelefone);

    }
}