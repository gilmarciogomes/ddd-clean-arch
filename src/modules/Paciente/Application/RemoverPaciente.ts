import { PacienteRepository } from "../infrastrutucture/PacienteRepository";

export class removerPaciente{

    constructor(private repository = new PacienteRepository())
    {}

    async execute(id: number){
        await this.repository.removerPaciente(id);
    }
}