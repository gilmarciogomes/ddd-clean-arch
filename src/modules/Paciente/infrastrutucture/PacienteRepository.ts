import { Paciente } from "../Domain/Paciente";

export class PacienteRepository{

    private static pacientes: Paciente[] = [];

    //LISTAR DOCUMENTOS:
    async listarPacientes(){
        return PacienteRepository.pacientes;
    }

    //INSERIR DOCUMENTO:
    async inserirPaciente(paciente: Paciente){
        PacienteRepository.pacientes.push(paciente);
    }

    //BUSCAR POR ID:
    async buscarPacientePorId(idPaciente: number){
        return PacienteRepository.pacientes.find(pac => pac.id === idPaciente);
    }

    //REMOVER DOCUMENTO:
    async removerPaciente(idPaciente: number){
        PacienteRepository.pacientes = PacienteRepository.pacientes.filter(pac => pac.id !== idPaciente);
    }

    //ATUALIZAR DOCUMENTO:
    async atualizarPaciente(paciente: Paciente){

        //BUSCANDO A POSIÇÃO EM QUE O DOCUMENTO SOLICITADO PARA ATUALIZAR ESTAR DENTRO DO ARRAY.
        const indice = PacienteRepository.pacientes.findIndex(pac => pac.id === paciente.id)
        
        if(indice !== -1){
            PacienteRepository.pacientes[indice] = paciente;
        } else{
            console.log('Paciente não encontrado!');
        }
    }

}