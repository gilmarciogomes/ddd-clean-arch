import { Endereco } from "../Domain/Endereco";

export class EnderecoRepositury{

    private static enderecos: Endereco[] = [];

    //LISTAR ENDEREÇO:
    async ListarEnderecos(){
        return EnderecoRepositury.enderecos;

    }

    //BUSCAR ENDEREÇO:
    async buscarEnderecoPorId(idEndereco: number){
        return EnderecoRepositury.enderecos.find(endereco => endereco.idEndereco ===idEndereco);
    }

    //INSERIR ENDEREÇO:
    async inserirEndereco(endereco: Endereco){
        EnderecoRepositury.enderecos.push(endereco);
    }

    //REMOVER ENDEREÇO:
    async removerEndereco(idEndereco: number){
        EnderecoRepositury.enderecos = EnderecoRepositury.enderecos.filter(endereco => endereco.idEndereco !== idEndereco);

    }

    
    //ATUALIZAR ENDEREÇO:
    async atualizarEndereco(endereco: Endereco){

         //BUSCANDO A POSIÇÃO EM QUE O DOCUMENTO SOLICITADO PARA ATUALIZAR ESTAR DENTRO DO ARRAY.
        const indice = EnderecoRepositury.enderecos.findIndex(doc => doc.idEndereco === endereco.idEndereco);

        if (indice !== -1){
            EnderecoRepositury.enderecos[indice] = endereco;
        }else{
            console.log('Endereço não encontrado!');
        }
    }
}