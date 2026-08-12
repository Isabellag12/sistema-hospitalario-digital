# Vista de Procesos

## Sistema Hospitalario Digital

La vista de procesos muestra como se ejecutan las operaciones principales del sistema y como se comunican los diferentes componentes durante cada proceso.

## Proceso 1. Registro de paciente

El flujo para registrar un paciente es el siguiente:

Usuario
  |
  v
PacienteService
  |
  v
PacienteRepository
  |
  v
PacienteRepositoryMemoria
  |
  v
Paciente registrado

El servicio recibe la informacion del paciente, valida que no exista otro paciente con el mismo documento y luego solicita al repositorio guardar la informacion.

## Proceso 2. Registro de cita medica

El flujo es:

Usuario
  |
  v
CitaMedicaService
  |
  v
CitaMedicaRepository
  |
  v
CitaMedicaRepositoryMemoria
  |
  v
Cita registrada

La cita queda relacionada con el paciente mediante pacienteId y con el profesional mediante medicoId.

## Proceso 3. Creacion de historia clinica

El flujo es:

Paciente
  |
  v
HistoriaClinicaService
  |
  v
HistoriaClinicaRepository
  |
  v
HistoriaClinicaRepositoryMemoria
  |
  v
Historia clinica creada

Antes de crear una nueva historia, el sistema consulta si el paciente ya tiene una historia clinica registrada.

## Proceso 4. Registro de atencion medica

El flujo es:

HistoriaClinica
  |
  v
AtencionMedicaService
  |
  v
AtencionMedicaRepository
  |
  v
AtencionMedicaRepositoryMemoria
  |
  v
Atencion registrada

La atencion medica incluye motivo de consulta, diagnostico, observaciones y fecha.

## Proceso 5. Orden de laboratorio

El flujo es:

Medico
  |
  v
OrdenLaboratorioService
  |
  v
OrdenLaboratorioRepository
  |
  v
OrdenLaboratorioRepositoryMemoria
  |
  v
Orden creada

La orden queda relacionada con un paciente y con el medico que la solicita.

## Proceso 6. Resultado de laboratorio

El flujo es:

OrdenLaboratorio
  |
  v
ResultadoLaboratorioService
  |
  v
ResultadoLaboratorioRepository
  |
  v
ResultadoLaboratorioRepositoryMemoria
  |
  v
Resultado registrado

El resultado se asocia a la orden de laboratorio mediante ordenLaboratorioId.

## Proceso 7. Autenticacion de usuario

El flujo es:

Usuario
  |
  v
UsuarioService
  |
  v
UsuarioRepository
  |
  v
UsuarioRepositoryMemoria
  |
  v
Validacion de usuario
  |
  v
Acceso permitido o error

El sistema valida que el usuario exista, que se encuentre activo y que la contrasena ingresada sea correcta.

## Flujo general del prototipo

El escenario completo implementado en main.ts sigue este orden:

1. Registro del paciente.
2. Registro de la cita medica.
3. Creacion de la historia clinica.
4. Registro de una atencion medica.
5. Creacion de una orden de laboratorio.
6. Registro del resultado de laboratorio.
7. Registro y autenticacion de un usuario.

## Objetivo de la vista

Esta vista permite observar la secuencia de operaciones y la forma en que los servicios, repositorios y entidades trabajan en conjunto durante la ejecucion del sistema.
