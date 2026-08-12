import { HistoriaClinica } from "../entidades/HistoriaClinica";

export interface HistoriaClinicaRepository {

    guardar(historia: HistoriaClinica): Promise<void>;

    buscarPorId(id: number): Promise<HistoriaClinica | null>;

    buscarPorPaciente(pacienteId: number): Promise<HistoriaClinica | null>;

    listar(): Promise<HistoriaClinica[]>;
}
