import { AtencionMedica } from "../../dominio/entidades/AtencionMedica";
import { AtencionMedicaRepository } from "../../dominio/repositorios/AtencionMedicaRepository";

export class AtencionMedicaService {

    constructor(
        private atencionRepository: AtencionMedicaRepository
    ) {}

    async registrarAtencion(
        id: number,
        historiaClinicaId: number,
        medicoId: number,
        fecha: Date,
        motivoConsulta: string,
        diagnostico: string,
        observaciones: string
    ): Promise<AtencionMedica> {

        const atencion = new AtencionMedica(
            id,
            historiaClinicaId,
            medicoId,
            fecha,
            motivoConsulta,
            diagnostico,
            observaciones
        );

        await this.atencionRepository.guardar(atencion);

        return atencion;
    }

    async listarPorHistoria(
        historiaClinicaId: number
    ): Promise<AtencionMedica[]> {

        return this.atencionRepository.listarPorHistoria(historiaClinicaId);
    }
}
