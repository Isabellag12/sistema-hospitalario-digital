import { OrdenLaboratorio } from "../entidades/OrdenLaboratorio";

export interface OrdenLaboratorioRepository {

    guardar(orden: OrdenLaboratorio): Promise<void>;

    buscarPorId(id: number): Promise<OrdenLaboratorio | null>;

    listarPorPaciente(
        pacienteId: number
    ): Promise<OrdenLaboratorio[]>;

    listar(): Promise<OrdenLaboratorio[]>;
}