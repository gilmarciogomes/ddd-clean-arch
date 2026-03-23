import { DocumentoRepository } from "../Infraestructure/DocumentoRepository";

export class AtualizarDocumento{

   constructor (private repository = new DocumentoRepository()) 
   {}

   async execute(idDocumento: number, numeroDocumento: string, tipoDocumento: string){

        const doc = await this.repository.buscarDocumentoPorId(idDocumento);

        if(!doc){

            console.log('Documento não existe!');
        } else{
            doc.numeroDocumento = numeroDocumento;
            doc.tipoDocumento = tipoDocumento;
        }

        await this.repository.atualizarDocumeto(doc!);
   }
}