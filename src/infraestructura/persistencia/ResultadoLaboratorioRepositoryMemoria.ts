import { ResultadoLaboratorio } from "../../dominio/entidades/ResultadoLaboratorio";
import { ResultadoLaboratorioRepository } from "../../dominio/repositorios/ResultadoLaboratorioRepository";

export class ResultadoLaboratorioRepositoryMemoria implements ResultadoLaboratorioRepository {

    private resultados: ResultadoLaboratorio[] = [];

    async guardar(resultado: ResultadoLaboratorio): Promise<void> {
        this.resultados.push(resultado);
    }

    async buscarPorId(id: number): Promise<ResultadoLaboratorio | null> {
        return this.resultados.find(
            resultado => resultado.id === id
        ) || null;
    }

    async buscarPorOrden(
        ordenLaboratorioId: number
    ): Promise<ResultadoLaboratorio | null> {

        return this.resultados.find(
            resultado => resultado.ordenLaboratorioId === ordenLaboratorioId
        ) || null;
    }

    async listar(): Promise<ResultadoLaboratorio[]> {
        return this.resultados;
    }
}
