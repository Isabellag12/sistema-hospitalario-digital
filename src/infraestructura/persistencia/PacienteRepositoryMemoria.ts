import { Paciente } from "../../dominio/entidades/Paciente";
import { PacienteRepository } from "../../dominio/repositorios/PacienteRepository";

export class PacienteRepositoryMemoria implements PacienteRepository {

    private pacientes: Paciente[] = [];

    async guardar(paciente: Paciente): Promise<void> {
        this.pacientes.push(paciente);
    }

    async buscarPorId(id: number): Promise<Paciente | null> {
        return this.pacientes.find(
            paciente => paciente.id === id
        ) || null;
    }

    async buscarPorDocumento(documento: string): Promise<Paciente | null> {
        return this.pacientes.find(
            paciente => paciente.documento === documento
        ) || null;
    }

    async listar(): Promise<Paciente[]> {
        return this.pacientes;
    }
}