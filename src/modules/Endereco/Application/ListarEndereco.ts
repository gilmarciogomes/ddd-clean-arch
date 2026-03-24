import { EnderecoRepositury } from "../infrastructure/EnderecoRepository";

export class ListarEnderecos{

    constructor(private repository = new EnderecoRepositury())
    {}

    async execute(){
        return this.repository.ListarEnderecos;
    }
}

