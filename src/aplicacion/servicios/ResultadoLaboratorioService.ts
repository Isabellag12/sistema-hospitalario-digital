import { ResultadoLaboratorio } from "../../dominio/entidades/ResultadoLaboratorio";
import { ResultadoLaboratorioRepository } from "../../dominio/repositorios/ResultadoLaboratorioRepository";

export class ResultadoLaboratorioService {

    constructor(
        private resultadoRepository: ResultadoLaboratorioRepository
    ) {}

    async registrarResultado(
        id: number,
        ordenLaboratorioId: number,
        resultado: string,
        fechaResultado: Date
    ): Promise<ResultadoLaboratorio> {

        const nuevoResultado = new ResultadoLaboratorio(
            id,
            ordenLaboratorioId,
            resultado,
            fechaResultado
        );

        await this.resultadoRepository.guardar(nuevoResultado);

        return nuevoResultado;
    }

    async consultarPorOrden(
        ordenLaboratorioId: number
    ): Promise<ResultadoLaboratorio | null> {

        return this.resultadoRepository.buscarPorOrden(ordenLaboratorioId);
    }
}
