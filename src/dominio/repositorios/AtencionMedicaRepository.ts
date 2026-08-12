import { AtencionMedica } from "../entidades/AtencionMedica";

export interface AtencionMedicaRepository {

    guardar(atencion: AtencionMedica): Promise<void>;

    buscarPorId(id: number): Promise<AtencionMedica | null>;

    listarPorHistoria(
        historiaClinicaId: number
    ): Promise<AtencionMedica[]>;

    listar(): Promise<AtencionMedica[]>;
}
