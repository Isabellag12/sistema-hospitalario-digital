# Vista Logica

## Sistema Hospitalario Digital

La vista logica muestra los principales elementos que forman parte del sistema y la relacion que existe entre ellos.

## Entidades principales

### Paciente

Representa a una persona registrada en el sistema hospitalario.

Datos principales:

- Id
- Documento
- Nombres
- Apellidos
- Fecha de nacimiento
- Telefono
- Correo

### CitaMedica

Representa una cita programada para un paciente con un profesional de salud.

Datos principales:

- Id
- Paciente
- Medico
- Fecha
- Motivo
- Estado

### HistoriaClinica

Contiene la informacion clinica asociada a un paciente.

Cada paciente puede tener una historia clinica.

### AtencionMedica

Representa una atencion realizada por un medico y asociada a la historia clinica del paciente.

Incluye:

- Motivo de consulta
- Diagnostico
- Observaciones
- Fecha de atencion

### OrdenLaboratorio

Representa una solicitud de examen realizada por un medico para un paciente.

### ResultadoLaboratorio

Representa el resultado obtenido de una orden de laboratorio.

### Usuario

Representa una persona que puede acceder al sistema.

El usuario cuenta con un rol y un estado que permite controlar su acceso.

### ProfesionalSalud

Representa al profesional encargado de prestar servicios de salud.

## Relaciones principales

Paciente
  |
  |-- CitaMedica
  |
  |-- HistoriaClinica
  |      |
  |      |-- AtencionMedica
  |
  |-- OrdenLaboratorio
         |
         |-- ResultadoLaboratorio

Usuario
  |
  |-- Rol
  |
  |-- Acceso al sistema

ProfesionalSalud
  |
  |-- CitaMedica
  |
  |-- AtencionMedica
  |
  |-- OrdenLaboratorio

## Objetivo de la vista

Esta vista permite identificar las entidades principales del Sistema Hospitalario Digital y comprender como se relacionan para realizar los procesos del sistema.