import { Usuario } from "../entidades/Usuario";

export interface UsuarioRepository {

    guardar(usuario: Usuario): Promise<void>;

    buscarPorId(id: number): Promise<Usuario | null>;

    buscarPorNombreUsuario(
        nombreUsuario: string
    ): Promise<Usuario | null>;

    listar(): Promise<Usuario[]>;
}
