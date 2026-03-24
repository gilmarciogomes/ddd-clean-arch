
import { Endereco } from "../Domain/Endereco";
import { EnderecoRepositury } from "../infrastructure/EnderecoRepository";

export class inserirEndereco{

    constructor(private repository = new EnderecoRepositury())
    {}

    async execute(idEndereco: number, logradouro: string, numero: number, bairro: string, cidade: string, estado: string){
        const endereco = new Endereco(idEndereco, logradouro, numero, bairro, cidade, estado)

        await this.repository.inserirEndereco(endereco);

    }
}