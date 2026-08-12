# Software Architecture Document - SAD

## Sistema Hospitalario Digital

### Universidad de Manizales
**Asignatura:** Arquitectura de Software

**Integrantes:**
- Maria Isabella Ramirez Giraldo
- Mariana Manrique Martinez
- Mateo Bedoya Castillo
- Juan Sebastian Garcia

**Año:** 2026


### 1. Introduccion

Este documento presenta la arquitectura propuesta para el Sistema Hospitalario Digital.

El sistema busca organizar en una sola solucion los principales procesos relacionados con la atencion de pacientes, citas medicas, historias clinicas, atenciones medicas, ordenes y resultados de laboratorio.

Tambien se considera el acceso de usuarios al sistema mediante autenticacion y asignacion de roles.

La arquitectura se organiza por capas con el fin de separar las responsabilidades del sistema y facilitar su mantenimiento y crecimiento.

### 2. Objetivo

Definir la arquitectura del Sistema Hospitalario Digital y establecer la forma en que se organizan sus componentes principales.

La solucion debe permitir:

- Registrar y consultar pacientes.
- Gestionar citas medicas.
- Crear y consultar historias clinicas.
- Registrar atenciones medicas.
- Crear ordenes de laboratorio.
- Registrar resultados de laboratorio.
- Gestionar usuarios y autenticacion.
- Mantener separadas las responsabilidades del dominio, aplicacion, infraestructura y presentacion.

### 3. Alcance

El proyecto presenta un prototipo funcional del Sistema Hospitalario Digital.

La implementacion actual utiliza TypeScript y una arquitectura organizada por capas.

Para demostrar el funcionamiento del sistema, la persistencia de los datos se realiza temporalmente en memoria.

El proyecto incluye los siguientes modulos:

- Pacientes.
- Citas medicas.
- Historias clinicas.
- Atenciones medicas.
- Ordenes de laboratorio.
- Resultados de laboratorio.
- Usuarios y autenticacion.

### 3.1 Descripcion del problema

Las instituciones de salud manejan informacion relacionada con pacientes, citas medicas, historias clinicas, atenciones y resultados de laboratorio.

Cuando estos procesos se encuentran separados o se gestionan mediante diferentes medios, pueden presentarse dificultades para consultar la informacion de manera oportuna, mantener la relacion entre los datos del paciente y controlar el acceso a la informacion clinica.

El Sistema Hospitalario Digital busca centralizar estos procesos dentro de una misma solucion, permitiendo organizar la informacion del paciente y facilitar las operaciones realizadas por el personal autorizado.

### 3.2 Stakeholders

Los principales interesados en el Sistema Hospitalario Digital son:

- Paciente: persona que recibe los servicios de salud y cuya informacion se administra en el sistema.
- Medico: profesional que consulta informacion clinica, registra atenciones y genera ordenes de laboratorio.
- Personal administrativo: encargado del registro de pacientes y la gestion de citas medicas.
- Personal de laboratorio: encargado de registrar los resultados relacionados con las ordenes de laboratorio.
- Administrador del sistema: encargado de gestionar los usuarios y el acceso al sistema.
- Institucion de salud: organizacion responsable de utilizar y administrar el sistema.

### 3.3 Modulos funcionales

El Sistema Hospitalario Digital se organiza en los siguientes modulos:

- Gestion de pacientes.
- Gestion de citas medicas.
- Gestion de historias clinicas.
- Gestion de atenciones medicas.
- Gestion de laboratorio.
- Gestion de usuarios y autenticacion.

### 4. Organizacion de la arquitectura

El sistema se divide en cuatro capas principales:

#### 4.1 Dominio

Contiene las entidades principales y las interfaces de los repositorios.

#### 4.2 Aplicacion

Contiene los servicios encargados de ejecutar los casos de uso del sistema.

#### 4.3 Infraestructura

Contiene las implementaciones de persistencia utilizadas por el sistema.

En el prototipo actual los datos se almacenan en memoria.

#### 4.4 Presentacion

Esta capa esta destinada a la interaccion entre los usuarios y el sistema. En esta primera version se deja preparada para una futura interfaz de usuario.
### 5. Modelo de vistas 4+1

Para describir la arquitectura del Sistema Hospitalario Digital se utiliza el modelo 4+1. Este permite observar el sistema desde diferentes puntos de vista y relacionar la arquitectura con los casos de uso principales.

#### 5.1 Vista logica

La vista logica representa los principales elementos del dominio y sus relaciones.

Las entidades principales del sistema son:

- Paciente
- CitaMedica
- HistoriaClinica
- AtencionMedica
- OrdenLaboratorio
- ResultadoLaboratorio
- Usuario
- ProfesionalSalud

Las relaciones principales se pueden representar de la siguiente manera:

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

Usuario permite representar el acceso al sistema y el rol correspondiente.

#### 5.2 Vista de desarrollo

El codigo fuente se organiza en capas para separar las responsabilidades.

src/
  |
  |-- dominio/
  |     |-- entidades/
  |     |-- repositorios/
  |
  |-- aplicacion/
  |     |-- servicios/
  |
  |-- infraestructura/
  |     |-- persistencia/
  |
  |-- presentacion/
  |
  |-- main.ts

La capa dominio contiene las reglas y conceptos principales.

La capa aplicacion contiene los servicios que ejecutan las operaciones del sistema.

La capa infraestructura implementa los mecanismos utilizados para almacenar la informacion.

La capa presentacion queda disponible para implementar posteriormente una interfaz de usuario.

#### 5.3 Vista de procesos

El sistema ejecuta sus operaciones mediante servicios de aplicacion.

Un ejemplo del flujo para registrar un paciente es:

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

Otro flujo importante corresponde a la atencion medica:

Paciente
  |
  v
CitaMedica
  |
  v
HistoriaClinica
  |
  v
AtencionMedica
  |
  v
OrdenLaboratorio
  |
  v
ResultadoLaboratorio

#### 5.4 Vista fisica

En el prototipo actual la aplicacion se ejecuta localmente utilizando Node.js.

Los componentes utilizados son:

- Aplicacion desarrollada en TypeScript.
- Node.js como entorno de ejecucion.
- Persistencia temporal en memoria.
- Equipo local para ejecutar el prototipo.

En una version posterior la persistencia en memoria puede ser reemplazada por una base de datos sin modificar las entidades principales del dominio.

#### 5.5 Vista de escenarios

Los escenarios permiten comprobar el funcionamiento conjunto de las diferentes capas.

Escenario principal:

1. Se registra un paciente.
2. Se programa una cita medica.
3. Se crea la historia clinica del paciente.
4. Se registra una atencion medica.
5. El medico genera una orden de laboratorio.
6. Se registra el resultado del laboratorio.
7. Un usuario autorizado accede al sistema mediante autenticacion.

Este escenario fue utilizado en el prototipo para comprobar la comunicacion entre los servicios, repositorios y entidades.
### 6. Requisitos funcionales

Los requisitos funcionales describen las operaciones principales que debe permitir el Sistema Hospitalario Digital.

#### RF-01 - Registrar paciente

El sistema debe permitir registrar un paciente con sus datos basicos.

#### RF-02 - Consultar paciente

El sistema debe permitir consultar la informacion de un paciente registrado.

#### RF-03 - Programar cita medica

El sistema debe permitir programar una cita medica relacionada con un paciente y un profesional de salud.

#### RF-04 - Cancelar cita medica

El sistema debe permitir cambiar el estado de una cita a CANCELADA.

#### RF-05 - Crear historia clinica

El sistema debe permitir crear una historia clinica para un paciente que no tenga una registrada.

#### RF-06 - Registrar atencion medica

El medico debe poder registrar una atencion relacionada con una historia clinica.

#### RF-07 - Crear orden de laboratorio

El medico debe poder generar una orden de laboratorio para un paciente.

#### RF-08 - Registrar resultado de laboratorio

El sistema debe permitir registrar un resultado relacionado con una orden de laboratorio.

#### RF-09 - Registrar usuario

El sistema debe permitir registrar usuarios con nombre de usuario, contrasena, rol y estado.

#### RF-10 - Autenticar usuario

El sistema debe validar el nombre de usuario, contrasena y estado antes de permitir la autenticacion.

### 7. Requisitos no funcionales

#### RNF-01 - Seguridad

El sistema debe controlar el acceso mediante autenticacion de usuarios.

#### RNF-02 - Confidencialidad

La informacion clinica debe estar disponible solamente para usuarios autorizados.

#### RNF-03 - Mantenibilidad

El codigo debe mantener separadas las responsabilidades de dominio, aplicacion, infraestructura y presentacion.

#### RNF-04 - Integridad

La informacion debe ser modificada solamente mediante las operaciones definidas por el sistema.

#### RNF-05 - Interoperabilidad

La arquitectura debe permitir incorporar posteriormente una integracion con sistemas externos de laboratorio.

#### RNF-06 - Escalabilidad

La arquitectura debe permitir agregar nuevos modulos y reemplazar componentes de infraestructura sin modificar las entidades principales.

#### RNF-07 - Trazabilidad

Una version futura debe permitir registrar las operaciones importantes realizadas por los usuarios.

### 8. Restricciones tecnicas y organizacionales

El prototipo presenta las siguientes restricciones:

- El codigo se desarrolla utilizando TypeScript.
- La ejecucion se realiza mediante Node.js.
- La persistencia actual se realiza en memoria.
- No se utiliza una base de datos permanente en esta version.
- No se implementa una interfaz grafica.
- La autenticacion implementada es basica.
- Las contrasenas se utilizan en texto directo solamente para fines demostrativos.
- La integracion real con un laboratorio externo no se encuentra implementada.
- El proyecto debe mantener una organizacion por capas.
- La documentacion arquitectonica se mantiene dentro de la carpeta docs.

### 9. Decisiones arquitectonicas

Durante el desarrollo del Sistema Hospitalario Digital se tomaron decisiones orientadas a mantener una estructura organizada y facilitar la evolucion del sistema.

Las principales decisiones se encuentran documentadas mediante registros ADR dentro de la carpeta docs/adr.

#### ADR-001 - Arquitectura en capas

Se selecciono una arquitectura en capas para separar las responsabilidades de presentacion, aplicacion, dominio e infraestructura.

#### ADR-002 - Persistencia en memoria

Para el prototipo se utiliza almacenamiento temporal en memoria con el objetivo de comprobar el funcionamiento de la arquitectura sin depender inicialmente de una base de datos.

#### ADR-003 - Seguridad y autenticacion

Se implementa un mecanismo basico de usuarios, roles y autenticacion.

La implementacion actual tiene fines demostrativos y requiere mecanismos adicionales de seguridad para un ambiente real.

#### ADR-004 - Integracion con laboratorios

El modulo de laboratorio se mantiene separado para facilitar una futura integracion con sistemas externos mediante servicios o API.

### 10. Trazabilidad entre requisitos y componentes

Los requisitos principales se relacionan con los componentes de la siguiente manera:

| Requisito | Componente principal |
| --- | --- |
| RF-01 Registrar paciente | PacienteService |
| RF-02 Consultar paciente | PacienteRepository |
| RF-03 Programar cita | CitaMedicaService |
| RF-04 Cancelar cita | CitaMedicaService |
| RF-05 Crear historia clinica | HistoriaClinicaService |
| RF-06 Registrar atencion | AtencionMedicaService |
| RF-07 Crear orden de laboratorio | OrdenLaboratorioService |
| RF-08 Registrar resultado | ResultadoLaboratorioService |
| RF-09 Registrar usuario | UsuarioService |
| RF-10 Autenticar usuario | UsuarioService |

### 11. Evolucion de la arquitectura

La arquitectura propuesta permite continuar el desarrollo del sistema sin modificar completamente su estructura.

Como evolucion futura se plantea:

- Implementar una base de datos permanente.
- Desarrollar una interfaz web.
- Implementar una API para exponer las funcionalidades del sistema.
- Integrar sistemas externos de laboratorio.
- Mejorar los mecanismos de autenticacion.
- Implementar autorizacion basada en roles.
- Incorporar auditoria de operaciones.
- Implementar mecanismos adicionales para proteger la informacion clinica.

### 12. Conclusiones

El desarrollo del Sistema Hospitalario Digital permitio definir una arquitectura organizada para manejar los procesos principales relacionados con pacientes, citas medicas, historias clinicas, atenciones, laboratorio y usuarios.

La arquitectura en capas permite separar las responsabilidades y facilita el mantenimiento y la evolucion del sistema.

El uso de interfaces de repositorio permite mantener el dominio separado de los mecanismos de persistencia. Para el prototipo se utiliza almacenamiento en memoria, pero esta implementacion puede ser reemplazada posteriormente por una base de datos.

La documentacion mediante vistas arquitectonicas permite analizar el sistema desde diferentes perspectivas y relacionar las decisiones de arquitectura con los requisitos y casos de uso.

El prototipo desarrollado permite comprobar el funcionamiento conjunto de las entidades, servicios y repositorios mediante un escenario integrado ejecutado desde main.ts.

### 13. Referencias

- Documentacion oficial de TypeScript.
- Documentacion oficial de Node.js.
- Material de estudio de la asignatura Arquitectura del Software.
- Modelo de vistas 4+1.
- Documentacion del proyecto Sistema Hospitalario Digital.
