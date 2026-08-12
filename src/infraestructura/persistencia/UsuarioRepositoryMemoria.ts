import { Usuario } from "../../dominio/entidades/Usuario";
import { UsuarioRepository } from "../../dominio/repositorios/UsuarioRepository";

export class UsuarioRepositoryMemoria implements UsuarioRepository {

    private usuarios: Usuario[] = [];

    async guardar(usuario: Usuario): Promise<void> {
        this.usuarios.push(usuario);
    }

    async buscarPorId(id: number): Promise<Usuario | null> {
        return this.usuarios.find(
            usuario => usuario.id === id
        ) || null;
    }

    async buscarPorNombreUsuario(
        nombreUsuario: string
    ): Promise<Usuario | null> {

        return this.usuarios.find(
            usuario => usuario.nombreUsuario === nombreUsuario
        ) || null;
    }

    async listar(): Promise<Usuario[]> {
        return this.usuarios;
    }
}
