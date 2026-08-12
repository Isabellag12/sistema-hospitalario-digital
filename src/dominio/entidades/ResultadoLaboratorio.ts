export class ResultadoLaboratorio {

    constructor(
        public id: number,
        public ordenLaboratorioId: number,
        public resultado: string,
        public fechaResultado: Date
    ) {}
}