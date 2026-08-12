import { Paciente } from "../entidades/Paciente";

export interface PacienteRepository {

    guardar(paciente: Paciente): Promise<void>;

    buscarPorId(id: number): Promise<Paciente | null>;

    buscarPorDocumento(documento: string): Promise<Paciente | null>;

    listar(): Promise<Paciente[]>;
}
