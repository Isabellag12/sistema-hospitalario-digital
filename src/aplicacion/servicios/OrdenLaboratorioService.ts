import { OrdenLaboratorio } from "../../dominio/entidades/OrdenLaboratorio";
import { OrdenLaboratorioRepository } from "../../dominio/repositorios/OrdenLaboratorioRepository";

export class OrdenLaboratorioService {

    constructor(
        private ordenRepository: OrdenLaboratorioRepository
    ) {}

    async crearOrden(
        id: number,
        pacienteId: number,
        medicoId: number,
        examen: string,
        fecha: Date
    ): Promise<OrdenLaboratorio> {

        const orden = new OrdenLaboratorio(
            id,
            pacienteId,
            medicoId,
            examen,
            fecha,
            "SOLICITADA"
        );

        await this.ordenRepository.guardar(orden);

        return orden;
    }

    async listarPorPaciente(
        pacienteId: number
    ): Promise<OrdenLaboratorio[]> {

        return this.ordenRepository.listarPorPaciente(pacienteId);
    }
}
