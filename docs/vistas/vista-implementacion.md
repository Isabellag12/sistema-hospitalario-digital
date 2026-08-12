# Vista de Implementacion

## Sistema Hospitalario Digital

La vista de implementacion muestra los principales componentes del sistema y las dependencias que existen entre ellos.

La implementacion se encuentra organizada en capas para mantener separadas las diferentes responsabilidades.

## Componentes principales

### Componente de Pacientes

Esta compuesto por:

- Paciente
- PacienteService
- PacienteRepository
- PacienteRepositoryMemoria

Su responsabilidad es registrar y consultar la informacion de los pacientes.

### Componente de Citas Medicas

Esta compuesto por:

- CitaMedica
- CitaMedicaService
- CitaMedicaRepository
- CitaMedicaRepositoryMemoria

Su responsabilidad es gestionar las citas medicas de los pacientes.

### Componente de Historia Clinica

Esta compuesto por:

- HistoriaClinica
- HistoriaClinicaService
- HistoriaClinicaRepository
- HistoriaClinicaRepositoryMemoria

Su responsabilidad es crear y consultar la historia clinica asociada a cada paciente.

### Componente de Atencion Medica

Esta compuesto por:

- AtencionMedica
- AtencionMedicaService
- AtencionMedicaRepository
- AtencionMedicaRepositoryMemoria

Su responsabilidad es registrar las atenciones realizadas a los pacientes.

### Componente de Laboratorio

Esta compuesto por:

- OrdenLaboratorio
- OrdenLaboratorioService
- OrdenLaboratorioRepository
- OrdenLaboratorioRepositoryMemoria
- ResultadoLaboratorio
- ResultadoLaboratorioService
- ResultadoLaboratorioRepository
- ResultadoLaboratorioRepositoryMemoria

Su responsabilidad es gestionar las ordenes y resultados de laboratorio.

### Componente de Seguridad

Esta compuesto por:

- Usuario
- UsuarioService
- UsuarioRepository
- UsuarioRepositoryMemoria

Su responsabilidad es gestionar los usuarios y realizar la autenticacion.

## Dependencias entre componentes

La comunicacion general sigue la siguiente estructura:

main.ts
   |
   v
Servicios de Aplicacion
   |
   v
Interfaces de Repositorios
   |
   v
Implementaciones de Persistencia
   |
   v
Entidades del Dominio

Los servicios dependen de las interfaces de repositorios y no directamente de una tecnologia de almacenamiento.

Las implementaciones en memoria cumplen las interfaces definidas en el dominio.

## Diagrama de componentes

El sistema puede representarse mediante los siguientes componentes:

+--------------------------+
|       Presentacion       |
|         main.ts          |
+------------+-------------+
             |
             v
+--------------------------+
|        Aplicacion        |
|                          |
| PacienteService          |
| CitaMedicaService        |
| HistoriaClinicaService   |
| AtencionMedicaService    |
| OrdenLaboratorioService  |
| ResultadoLaboratorio     |
| Service                  |
| UsuarioService           |
+------------+-------------+
             |
             v
+--------------------------+
|          Dominio         |
|                          |
| Entidades                |
| Interfaces Repositorios  |
+------------+-------------+
             ^
             |
+------------+-------------+
|      Infraestructura     |
|                          |
| Repositorios en Memoria  |
+--------------------------+

## Interfaces

Las principales interfaces utilizadas son:

- PacienteRepository
- CitaMedicaRepository
- HistoriaClinicaRepository
- AtencionMedicaRepository
- OrdenLaboratorioRepository
- ResultadoLaboratorioRepository
- UsuarioRepository

Estas interfaces permiten separar las reglas del sistema de la forma en que se almacenan los datos.

## Objetivo de la vista

Esta vista permite observar como los elementos desarrollados se organizan en componentes y como se comunican entre ellos.

La separacion mediante interfaces permite reemplazar posteriormente los repositorios en memoria por implementaciones conectadas a una base de datos.
