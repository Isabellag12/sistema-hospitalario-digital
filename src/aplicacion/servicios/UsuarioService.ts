import { Usuario } from "../../dominio/entidades/Usuario";
import { UsuarioRepository } from "../../dominio/repositorios/UsuarioRepository";

export class UsuarioService {

    constructor(
        private usuarioRepository: UsuarioRepository
    ) {}

    async registrarUsuario(
        id: number,
        nombreUsuario: string,
        contrasena: string,
        rol: string
    ): Promise<Usuario> {

        const existente =
            await this.usuarioRepository.buscarPorNombreUsuario(nombreUsuario);

        if (existente) {
            throw new Error("El usuario ya existe");
        }

        const usuario = new Usuario(
            id,
            nombreUsuario,
            contrasena,
            rol,
            true
        );

        await this.usuarioRepository.guardar(usuario);

        return usuario;
    }

    async autenticar(
        nombreUsuario: string,
        contrasena: string
    ): Promise<Usuario> {

        const usuario =
            await this.usuarioRepository.buscarPorNombreUsuario(nombreUsuario);

        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }

        if (!usuario.estaActivo()) {
            throw new Error("Usuario inactivo");
        }

        if (usuario.contrasena !== contrasena) {
            throw new Error("Contrasena incorrecta");
        }

        return usuario;
    }
}