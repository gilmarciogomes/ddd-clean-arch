import { TelefoneRepositury } from "../infraestructure/TelefoneRepository";

export class RemoverTelefone{

    constructor(private repository = new TelefoneRepositury())
    {}

    async execute(idTelefone: number){
        await this.repository.removerTelefone(idTelefone);
    }
}