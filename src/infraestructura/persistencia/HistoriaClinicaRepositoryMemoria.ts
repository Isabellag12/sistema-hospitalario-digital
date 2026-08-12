import { HistoriaClinica } from "../../dominio/entidades/HistoriaClinica";
import { HistoriaClinicaRepository } from "../../dominio/repositorios/HistoriaClinicaRepository";

export class HistoriaClinicaRepositoryMemoria implements HistoriaClinicaRepository {

    private historias: HistoriaClinica[] = [];

    async guardar(historia: HistoriaClinica): Promise<void> {
        this.historias.push(historia);
    }

    async buscarPorId(id: number): Promise<HistoriaClinica | null> {
        return this.historias.find(
            historia => historia.id === id
        ) || null;
    }

    async buscarPorPaciente(pacienteId: number): Promise<HistoriaClinica | null> {
        return this.historias.find(
            historia => historia.pacienteId === pacienteId
        ) || null;
    }

    async listar(): Promise<HistoriaClinica[]> {
        return this.historias;
    }
}