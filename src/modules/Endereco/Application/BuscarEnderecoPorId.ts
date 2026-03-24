
import { EnderecoRepositury } from "../infrastructure/EnderecoRepository";

export class BbuscarEnderecoPorId{

    constructor(private repository = new EnderecoRepositury())
    {}

    async execute(idEndereco: number){
        return this.repository.buscarEnderecoPorId(idEndereco);

    }
}