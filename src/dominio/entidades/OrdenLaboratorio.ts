export class OrdenLaboratorio {

    constructor(
        public id: number,
        public pacienteId: number,
        public medicoId: number,
        public examen: string,
        public fecha: Date,
        public estado: string
    ) {}
}