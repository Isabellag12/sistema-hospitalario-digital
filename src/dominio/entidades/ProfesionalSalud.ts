export class ProfesionalSalud {

    constructor(
        public id: number,
        public nombres: string,
        public apellidos: string,
        public especialidad: string,
        public registroProfesional: string
    ) {}

    obtenerNombreCompleto(): string {
        return `${this.nombres} ${this.apellidos}`;
    }
}
