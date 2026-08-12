export class CitaMedica {

    constructor(
        public id: number,
        public pacienteId: number,
        public medicoId: number,
        public fecha: Date,
        public motivo: string,
        public estado: string
    ) {}

    cancelar(): void {
        this.estado = "CANCELADA";
    }
}
