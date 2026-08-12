import { CitaMedica } from "../../dominio/entidades/CitaMedica";
import { CitaMedicaRepository } from "../../dominio/repositorios/CitaMedicaRepository";

export class CitaMedicaService {

    constructor(
        private citaRepository: CitaMedicaRepository
    ) {}

    async registrarCita(
        id: number,
        pacienteId: number,
        medicoId: number,
        fecha: Date,
        motivo: string
    ): Promise<CitaMedica> {

        const cita = new CitaMedica(
            id,
            pacienteId,
            medicoId,
            fecha,
            motivo,
            "PROGRAMADA"
        );

        await this.citaRepository.guardar(cita);

        return cita;
    }

    async cancelarCita(id: number): Promise<CitaMedica> {

        const cita = await this.citaRepository.buscarPorId(id);

        if (!cita) {
            throw new Error("La cita no existe");
        }

        cita.cancelar();

        return cita;
    }
}