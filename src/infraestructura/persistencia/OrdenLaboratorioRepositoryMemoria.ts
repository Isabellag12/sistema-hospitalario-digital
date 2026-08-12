import { OrdenLaboratorio } from "../../dominio/entidades/OrdenLaboratorio";
import { OrdenLaboratorioRepository } from "../../dominio/repositorios/OrdenLaboratorioRepository";

export class OrdenLaboratorioRepositoryMemoria implements OrdenLaboratorioRepository {

    private ordenes: OrdenLaboratorio[] = [];

    async guardar(orden: OrdenLaboratorio): Promise<void> {
        this.ordenes.push(orden);
    }

    async buscarPorId(id: number): Promise<OrdenLaboratorio | null> {
        return this.ordenes.find(
            orden => orden.id === id
        ) || null;
    }

    async listarPorPaciente(
        pacienteId: number
    ): Promise<OrdenLaboratorio[]> {

        return this.ordenes.filter(
            orden => orden.pacienteId === pacienteId
        );
    }

    async listar(): Promise<OrdenLaboratorio[]> {
        return this.ordenes;
    }
}
