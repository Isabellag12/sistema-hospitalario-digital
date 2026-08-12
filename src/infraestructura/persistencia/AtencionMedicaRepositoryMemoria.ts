import { AtencionMedica } from "../../dominio/entidades/AtencionMedica";
import { AtencionMedicaRepository } from "../../dominio/repositorios/AtencionMedicaRepository";

export class AtencionMedicaRepositoryMemoria implements AtencionMedicaRepository {

    private atenciones: AtencionMedica[] = [];

    async guardar(atencion: AtencionMedica): Promise<void> {
        this.atenciones.push(atencion);
    }

    async buscarPorId(id: number): Promise<AtencionMedica | null> {
        return this.atenciones.find(
            atencion => atencion.id === id
        ) || null;
    }

    async listarPorHistoria(
        historiaClinicaId: number
    ): Promise<AtencionMedica[]> {

        return this.atenciones.filter(
            atencion => atencion.historiaClinicaId === historiaClinicaId
        );
    }

    async listar(): Promise<AtencionMedica[]> {
        return this.atenciones;
    }
}
