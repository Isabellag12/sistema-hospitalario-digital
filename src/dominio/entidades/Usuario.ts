export class Usuario {

    constructor(
        public id: number,
        public nombreUsuario: string,
        public contrasena: string,
        public rol: string,
        public activo: boolean
    ) {}

    estaActivo(): boolean {
        return this.activo;
    }
}