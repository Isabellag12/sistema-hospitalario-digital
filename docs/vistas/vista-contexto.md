# Vista de Contexto

## Sistema Hospitalario Digital

La vista de contexto permite identificar el Sistema Hospitalario Digital y los principales actores externos que interactuan con el.

## Sistema principal

El Sistema Hospitalario Digital centraliza la informacion relacionada con pacientes, citas medicas, historias clinicas, atenciones medicas, ordenes de laboratorio, resultados y usuarios.

## Actores externos

### Paciente

Es la persona que recibe los servicios de salud y cuya informacion se registra en el sistema.

Se relaciona principalmente con:

- Datos personales.
- Citas medicas.
- Historia clinica.
- Ordenes y resultados de laboratorio.

### Medico

Es el profesional que realiza la atencion del paciente.

Puede participar en:

- Consulta de informacion del paciente.
- Consulta de historia clinica.
- Registro de atenciones medicas.
- Generacion de ordenes de laboratorio.
- Consulta de resultados.

### Personal administrativo

Se encarga principalmente de apoyar los procesos administrativos del sistema.

Puede realizar operaciones como:

- Registrar pacientes.
- Consultar pacientes.
- Programar citas.
- Modificar citas.
- Cancelar citas.

### Personal de laboratorio

Participa en el proceso relacionado con los examenes solicitados a los pacientes.

Puede realizar operaciones como:

- Consultar ordenes de laboratorio.
- Registrar resultados de laboratorio.

### Administrador del sistema

Se encarga de la gestion de usuarios y del control de acceso al sistema.

## Diagrama de contexto

Paciente
        |
        v
+-------------------------------+
|                               |
|   SISTEMA HOSPITALARIO        |
|          DIGITAL              |
|                               |
+-------------------------------+
   ^          ^           ^
   |          |           |
 Medico    Personal    Personal de
           administrativo laboratorio
                 ^
                 |
          Administrador

## Interacciones principales

El personal administrativo registra pacientes y gestiona las citas medicas.

El medico consulta la informacion clinica, registra las atenciones y genera ordenes de laboratorio.

El personal de laboratorio registra los resultados correspondientes a las ordenes generadas.

El administrador gestiona el acceso de los usuarios al sistema.

El paciente es la entidad central sobre la cual se relacionan los principales procesos de atencion.

## Objetivo de la vista

Esta vista permite establecer los limites del Sistema Hospitalario Digital e identificar los actores que interactuan con la solucion.