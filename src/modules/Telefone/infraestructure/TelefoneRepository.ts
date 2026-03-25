import { Telefone } from "../Domain/Telefone";


export class TelefoneRepositury{

    private static telefones: Telefone[] = [];

    //LISTAR ENDEREÇO:
    async listarTelefones(){
        return TelefoneRepositury.telefones;

    }

    //BUSCAR ENDEREÇO:
    async buscarTelefonePorId(idTelefone: number){
        return TelefoneRepositury.telefones.find(telefone => telefone.idTelefone ===idTelefone);
    }


    //BUSCAR ENDEREÇO:
    async buscarTelefonePorNumero(numeroTelefone: string){
        return TelefoneRepositury.telefones.find(telefone => telefone.numeroTelefone ===numeroTelefone);
    }


    //INSERIR ENDEREÇO:
    async inserirTelefone(telefone: Telefone){
        TelefoneRepositury.telefones.push(telefone);
    }

    //REMOVER ENDEREÇO:
    async removerTelefone(idTelefone: number){
        TelefoneRepositury.telefones = TelefoneRepositury.telefones.filter(telefone => telefone.idTelefone !== idTelefone);

    }

    
    //ATUALIZAR ENDEREÇO:
    async atualizarTelefone(telefone: Telefone){

         //BUSCANDO A POSIÇÃO EM QUE O DOCUMENTO SOLICITADO PARA ATUALIZAR ESTAR DENTRO DO ARRAY.
        const indice = TelefoneRepositury.telefones.findIndex(telefone => telefone.idTelefone === telefone.idTelefone);

        if (indice !== -1){
            TelefoneRepositury.telefones[indice] = telefone;
        }else{
            console.log('Telefone não encontrado!');
        }
    }
}