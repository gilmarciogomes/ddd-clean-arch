import { PacienteRepository } from "./infrastrutucture/PacienteRepository";

export class listarPacientes{

    constructor(private repository = new PacienteRepository())
    {}

    async execute(){
        return this.repository.listarPacientes;
    }
}
