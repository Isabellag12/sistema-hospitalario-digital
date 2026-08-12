# ADR-002 - Persistencia en Memoria

## Estado

Aceptada para el prototipo.

## Contexto

El Sistema Hospitalario Digital necesita almacenar informacion relacionada con pacientes, citas medicas, historias clinicas, atenciones medicas, ordenes de laboratorio, resultados y usuarios.

Para esta primera version se necesita comprobar el funcionamiento de la arquitectura y la comunicacion entre las diferentes capas sin agregar inicialmente la complejidad de una base de datos.

## Decision

Se decide utilizar repositorios en memoria para el prototipo.

Cada modulo cuenta con una implementacion de repositorio que almacena temporalmente la informacion en arreglos.

Algunos ejemplos son:

- PacienteRepositoryMemoria
- CitaMedicaRepositoryMemoria
- HistoriaClinicaRepositoryMemoria
- AtencionMedicaRepositoryMemoria
- OrdenLaboratorioRepositoryMemoria
- ResultadoLaboratorioRepositoryMemoria
- UsuarioRepositoryMemoria

## Justificacion

La persistencia en memoria permite probar los casos de uso principales y comprobar la comunicacion entre servicios, repositorios y entidades sin depender de una base de datos.

Las interfaces de repositorio permiten que esta implementacion pueda ser reemplazada posteriormente.

## Consecuencias positivas

- Facilita las pruebas iniciales.
- No requiere configurar una base de datos.
- Permite comprobar rapidamente los casos de uso.
- Mantiene separada la infraestructura del dominio.
- Facilita cambiar la persistencia posteriormente.

## Consecuencias negativas

- Los datos se pierden al finalizar la ejecucion.
- No es adecuada para un sistema hospitalario en produccion.
- No permite persistencia permanente de la informacion.
- No permite trabajar con grandes cantidades de datos.

## Evolucion futura

En una version posterior los repositorios en memoria pueden ser reemplazados por repositorios conectados a una base de datos.

Las interfaces definidas en el dominio permiten realizar este cambio sin modificar las entidades principales.

## Resultado

Para el prototipo actual se utiliza persistencia en memoria como mecanismo temporal para demostrar el funcionamiento de la arquitectura.
