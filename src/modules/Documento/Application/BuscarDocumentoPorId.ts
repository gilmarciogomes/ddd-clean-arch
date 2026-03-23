
import { DocumentoRepository } from "../Infraestructure/DocumentoRepository";

export class buscarDocumentoPorId{

    constructor(private repository = new DocumentoRepository())
    {}

    async executte (idDocumento: number){

        return this.repository.buscarDocumentoPorId(idDocumento);
        

    }
}