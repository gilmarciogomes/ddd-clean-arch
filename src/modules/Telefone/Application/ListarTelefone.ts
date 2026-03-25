import { TelefoneRepositury } from "../infraestructure/TelefoneRepository";

export class ListarTelefones{

    constructor(private repository = new TelefoneRepositury())
    {}

    async execute(){
        return this.repository.listarTelefones;
    }
}