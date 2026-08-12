import { CitaMedica } from "../../dominio/entidades/CitaMedica";
import { CitaMedicaRepository } from "../../dominio/repositorios/CitaMedicaRepository";

export class CitaMedicaRepositoryMemoria implements CitaMedicaRepository {

    private citas: CitaMedica[] = [];

    async guardar(cita: CitaMedica): Promise<void> {
        this.citas.push(cita);
    }

    async buscarPorId(id: number): Promise<CitaMedica | null> {
        return this.citas.find(
            cita => cita.id === id
        ) || null;
    }

    async listarPorPaciente(pacienteId: number): Promise<CitaMedica[]> {
        return this.citas.filter(
            cita => cita.pacienteId === pacienteId
        );
    }

    async listar(): Promise<CitaMedica[]> {
        return this.citas;
    }
}
