import { ResultadoLaboratorio } from "../entidades/ResultadoLaboratorio";

export interface ResultadoLaboratorioRepository {

    guardar(resultado: ResultadoLaboratorio): Promise<void>;

    buscarPorId(id: number): Promise<ResultadoLaboratorio | null>;

    buscarPorOrden(
        ordenLaboratorioId: number
    ): Promise<ResultadoLaboratorio | null>;

    listar(): Promise<ResultadoLaboratorio[]>;
}
