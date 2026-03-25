import { Telefone } from "../Domain/Telefone";
import { TelefoneRepositury } from "../infraestructure/TelefoneRepository";

export class inserirTelefone{

    constructor(private repository = new TelefoneRepositury())
    {}

    async execute(idTelefone: number, ddd: string, numeroTelefone: string, tipoTelefone: string, ativo: boolean){
        
        const telefone = new Telefone(idTelefone,ddd, numeroTelefone, tipoTelefone, ativo)

        await this.repository.inserirTelefone(telefone);

    }
}