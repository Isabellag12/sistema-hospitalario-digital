export class AtencionMedica {

    constructor(
        public id: number,
        public historiaClinicaId: number,
        public medicoId: number,
        public fecha: Date,
        public motivoConsulta: string,
        public diagnostico: string,
        public observaciones: string
    ) {}
}