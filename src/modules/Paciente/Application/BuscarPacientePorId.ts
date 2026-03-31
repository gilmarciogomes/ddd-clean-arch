import { PacienteRepository } from "../infrastrutucture/PacienteRepository";


export class BbuscarPacientePorId{

    constructor(private repository = new PacienteRepository())
    {}

    async execute(id: number){
        return this.repository.buscarPacientePorId(id);

    }
}