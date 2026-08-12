import { PacienteService } from "./aplicacion/servicios/PacienteService";
import { PacienteRepositoryMemoria } from "./infraestructura/persistencia/PacienteRepositoryMemoria";

import { CitaMedicaService } from "./aplicacion/servicios/CitaMedicaService";
import { CitaMedicaRepositoryMemoria } from "./infraestructura/persistencia/CitaMedicaRepositoryMemoria";

import { HistoriaClinicaService } from "./aplicacion/servicios/HistoriaClinicaService";
import { HistoriaClinicaRepositoryMemoria } from "./infraestructura/persistencia/HistoriaClinicaRepositoryMemoria";

import { AtencionMedicaService } from "./aplicacion/servicios/AtencionMedicaService";
import { AtencionMedicaRepositoryMemoria } from "./infraestructura/persistencia/AtencionMedicaRepositoryMemoria";

import { OrdenLaboratorioService } from "./aplicacion/servicios/OrdenLaboratorioService";
import { OrdenLaboratorioRepositoryMemoria } from "./infraestructura/persistencia/OrdenLaboratorioRepositoryMemoria";

import { ResultadoLaboratorioService } from "./aplicacion/servicios/ResultadoLaboratorioService";
import { ResultadoLaboratorioRepositoryMemoria } from "./infraestructura/persistencia/ResultadoLaboratorioRepositoryMemoria";

import { UsuarioService } from "./aplicacion/servicios/UsuarioService";
import { UsuarioRepositoryMemoria } from "./infraestructura/persistencia/UsuarioRepositoryMemoria";

async function main() {

    const pacienteRepository = new PacienteRepositoryMemoria();
    const pacienteService = new PacienteService(pacienteRepository);

    const citaRepository = new CitaMedicaRepositoryMemoria();
    const citaService = new CitaMedicaService(citaRepository);

    const historiaRepository = new HistoriaClinicaRepositoryMemoria();
    const historiaService = new HistoriaClinicaService(historiaRepository);

    const atencionRepository = new AtencionMedicaRepositoryMemoria();
    const atencionService = new AtencionMedicaService(atencionRepository);

    const ordenRepository = new OrdenLaboratorioRepositoryMemoria();
    const ordenService = new OrdenLaboratorioService(ordenRepository);

    const resultadoRepository = new ResultadoLaboratorioRepositoryMemoria();
    const resultadoService = new ResultadoLaboratorioService(resultadoRepository);

    const usuarioRepository = new UsuarioRepositoryMemoria();
    const usuarioService = new UsuarioService(usuarioRepository);

    const paciente = await pacienteService.registrarPaciente(
        1,
        "123456789",
        "Maria",
        "Ramirez",
        new Date("1990-05-10"),
        "3001234567",
        "maria@email.com"
    );

    console.log("Paciente registrado:");
    console.log(paciente);

    const cita = await citaService.registrarCita(
        1,
        paciente.id,
        10,
        new Date("2026-08-20T09:00:00"),
        "Consulta general"
    );

    console.log("Cita registrada:");
    console.log(cita);

    const historia = await historiaService.crearHistoriaClinica(
        1,
        paciente.id,
        new Date()
    );

    console.log("Historia clinica creada:");
    console.log(historia);

    const atencion = await atencionService.registrarAtencion(
        1,
        historia.id,
        10,
        new Date(),
        "Dolor de cabeza",
        "Cefalea tensional",
        "Se recomienda reposo y control"
    );

    console.log("Atencion medica registrada:");
    console.log(atencion);

    const orden = await ordenService.crearOrden(
        1,
        paciente.id,
        10,
        "Hemograma",
        new Date()
    );

    console.log("Orden de laboratorio creada:");
    console.log(orden);

    const resultado = await resultadoService.registrarResultado(
        1,
        orden.id,
        "Resultados dentro de valores normales",
        new Date()
    );

    console.log("Resultado de laboratorio registrado:");
    console.log(resultado);

    const usuario = await usuarioService.registrarUsuario(
    1,
    "medico01",
    "12345",
    "MEDICO"
);

console.log("Usuario registrado:");
console.log(usuario);

const usuarioAutenticado = await usuarioService.autenticar(
    "medico01",
    "12345"
);

console.log("Usuario autenticado:");
console.log(usuarioAutenticado);

}

main();