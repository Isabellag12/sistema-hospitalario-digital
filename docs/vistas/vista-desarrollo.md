# Vista de Desarrollo

## Sistema Hospitalario Digital

La vista de desarrollo muestra como se encuentra organizado el codigo fuente del sistema y como se distribuyen las responsabilidades entre las diferentes capas.

## Estructura del proyecto

sistema-hospitalario-digital/
  |
  |-- docs/
  |
  |-- src/
  |     |
  |     |-- dominio/
  |     |     |-- entidades/
  |     |     |-- repositorios/
  |     |
  |     |-- aplicacion/
  |     |     |-- servicios/
  |     |
  |     |-- infraestructura/
  |     |     |-- persistencia/
  |     |
  |     |-- presentacion/
  |     |
  |     |-- main.ts
  |
  |-- README.md
  |-- package.json
  |-- tsconfig.json

## Capa de dominio

La capa de dominio contiene las entidades principales del sistema y las interfaces de los repositorios.

Entre las entidades se encuentran:

- Paciente
- CitaMedica
- HistoriaClinica
- AtencionMedica
- OrdenLaboratorio
- ResultadoLaboratorio
- Usuario
- ProfesionalSalud

Esta capa no depende de los mecanismos utilizados para almacenar la informacion.

## Capa de aplicacion

La capa de aplicacion contiene los servicios que representan las operaciones principales del sistema.

Entre los servicios implementados se encuentran:

- PacienteService
- CitaMedicaService
- HistoriaClinicaService
- AtencionMedicaService
- OrdenLaboratorioService
- ResultadoLaboratorioService
- UsuarioService

Los servicios utilizan las interfaces definidas en la capa de dominio.

## Capa de infraestructura

La capa de infraestructura contiene las implementaciones concretas de los repositorios.

Para este prototipo se utiliza persistencia en memoria.

Ejemplos:

- PacienteRepositoryMemoria
- CitaMedicaRepositoryMemoria
- HistoriaClinicaRepositoryMemoria
- AtencionMedicaRepositoryMemoria
- OrdenLaboratorioRepositoryMemoria
- ResultadoLaboratorioRepositoryMemoria
- UsuarioRepositoryMemoria

Esta organizacion permite que posteriormente la persistencia en memoria pueda ser reemplazada por una base de datos.

## Capa de presentacion

La capa de presentacion esta destinada a contener los elementos que permiten la interaccion entre los usuarios y el sistema.

En el prototipo actual no se implementa una interfaz grafica. La ejecucion y comprobacion de los casos principales se realiza desde main.ts.

## Dependencias

Las dependencias principales siguen la siguiente direccion:

Presentacion
      |
      v
Aplicacion
      |
      v
Dominio
      ^
      |
Infraestructura

El dominio contiene las abstracciones principales y la infraestructura implementa los repositorios definidos por el dominio.

## Objetivo de la vista

Esta organizacion permite separar responsabilidades, facilitar el mantenimiento del codigo y permitir cambios futuros en elementos como la persistencia o la interfaz de usuario.
