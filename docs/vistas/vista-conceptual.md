# Vista Conceptual

## Sistema Hospitalario Digital

La vista conceptual muestra los conceptos principales del sistema, sus responsabilidades y las relaciones que existen entre ellos.

## Conceptos principales

### Paciente

Representa a la persona que recibe los servicios de salud.

Se relaciona con las citas medicas, la historia clinica y las ordenes de laboratorio.

### ProfesionalSalud

Representa al profesional encargado de atender al paciente.

Puede estar relacionado con citas medicas, atenciones medicas y ordenes de laboratorio.

### CitaMedica

Representa la programacion de una consulta entre un paciente y un profesional de salud.

Una cita contiene informacion como fecha, motivo y estado.

### HistoriaClinica

Representa el registro clinico asociado a un paciente.

Permite relacionar al paciente con las diferentes atenciones medicas realizadas.

### AtencionMedica

Representa una atencion realizada a un paciente.

Contiene informacion como:

- Motivo de consulta
- Diagnostico
- Observaciones
- Fecha

### OrdenLaboratorio

Representa una solicitud de examen realizada para un paciente.

La orden se relaciona con el paciente y con el medico que solicita el examen.

### ResultadoLaboratorio

Representa el resultado obtenido de una orden de laboratorio.

Cada resultado se encuentra asociado a una orden.

### Usuario

Representa una cuenta utilizada para acceder al sistema.

El usuario contiene informacion relacionada con:

- Nombre de usuario
- Contrasena
- Rol
- Estado

## Relaciones conceptuales

Paciente
  |
  |-- tiene --> CitaMedica
  |
  |-- tiene --> HistoriaClinica
  |                |
  |                |-- contiene --> AtencionMedica
  |
  |-- tiene --> OrdenLaboratorio
                    |
                    |-- genera --> ResultadoLaboratorio

ProfesionalSalud
  |
  |-- atiende --> CitaMedica
  |
  |-- registra --> AtencionMedica
  |
  |-- solicita --> OrdenLaboratorio

Usuario
  |
  |-- accede al --> Sistema Hospitalario Digital
  |
  |-- tiene --> Rol

## Responsabilidades generales

Paciente mantiene la informacion basica de las personas atendidas.

CitaMedica administra la programacion de las consultas.

HistoriaClinica organiza la informacion clinica del paciente.

AtencionMedica registra la informacion generada durante una consulta.

OrdenLaboratorio permite solicitar examenes.

ResultadoLaboratorio almacena los resultados relacionados con una orden.

Usuario permite representar el acceso al sistema.

ProfesionalSalud representa a los profesionales encargados de la atencion de los pacientes.

## Objetivo de la vista

Esta vista permite comprender los conceptos principales del dominio antes de analizar los detalles tecnicos de la implementacion.
