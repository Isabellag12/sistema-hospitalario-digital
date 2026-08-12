import { HistoriaClinica } from "../../dominio/entidades/HistoriaClinica";
import { HistoriaClinicaRepository } from "../../dominio/repositorios/HistoriaClinicaRepository";

export class HistoriaClinicaService {

    constructor(
        private historiaRepository: HistoriaClinicaRepository
    ) {}

    async crearHistoriaClinica(
        id: number,
        pacienteId: number,
        fechaCreacion: Date
    ): Promise<HistoriaClinica> {

        const historiaExistente =
            await this.historiaRepository.buscarPorPaciente(pacienteId);

        if (historiaExistente) {
            throw new Error("El paciente ya tiene una historia clinica");
        }

        const historia = new HistoriaClinica(
            id,
            pacienteId,
            fechaCreacion
        );

        await this.historiaRepository.guardar(historia);

        return historia;
    }

    async consultarPorPaciente(
        pacienteId: number
    ): Promise<HistoriaClinica | null> {

        return this.historiaRepository.buscarPorPaciente(pacienteId);
    }
}