import { EnderecoRepositury } from "../infrastructure/EnderecoRepository";

export class RemoverEndereco{

    constructor(private repository = new EnderecoRepositury())
    {}

    async execute(idEndereco: number){
        await this.repository.removerEndereco(idEndereco);
    }
}