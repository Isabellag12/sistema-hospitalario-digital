import { CitaMedica } from "../entidades/CitaMedica";

export interface CitaMedicaRepository {

    guardar(cita: CitaMedica): Promise<void>;

    buscarPorId(id: number): Promise<CitaMedica | null>;

    listarPorPaciente(pacienteId: number): Promise<CitaMedica[]>;

    listar(): Promise<CitaMedica[]>;
}