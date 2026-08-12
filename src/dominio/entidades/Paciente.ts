export class Paciente {

    constructor(
        public id: number,
        public documento: string,
        public nombres: string,
        public apellidos: string,
        public fechaNacimiento: Date,
        public telefono: string,
        public correo: string
    ) {}

    obtenerNombreCompleto(): string {
        return `${this.nombres} ${this.apellidos}`;
    }
}
