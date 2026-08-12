import { Paciente } from "../../dominio/entidades/Paciente";
import { PacienteRepository } from "../../dominio/repositorios/PacienteRepository";

export class PacienteService {

    constructor(
        private pacienteRepository: PacienteRepository
    ) {}

    async registrarPaciente(
        id: number,
        documento: string,
        nombres: string,
        apellidos: string,
        fechaNacimiento: Date,
        telefono: string,
        correo: string
    ): Promise<Paciente> {

        const pacienteExistente =
            await this.pacienteRepository.buscarPorDocumento(documento);

        if (pacienteExistente) {
            throw new Error("El paciente ya se encuentra registrado");
        }

        const paciente = new Paciente(
            id,
            documento,
            nombres,
            apellidos,
            fechaNacimiento,
            telefono,
            correo
        );

        await this.pacienteRepository.guardar(paciente);

        return paciente;
    }
}