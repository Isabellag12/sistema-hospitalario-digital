# ADR-003 - Seguridad y Autenticacion

## Estado

Aceptada para el prototipo.

## Contexto

El Sistema Hospitalario Digital maneja informacion relacionada con pacientes, historias clinicas, atenciones medicas y resultados de laboratorio.

Por esta razon se requiere controlar el acceso de los usuarios al sistema.

## Decision

Se implementa un modulo basico de usuarios y autenticacion.

Cada usuario contiene:

- Id
- Nombre de usuario
- Contrasena
- Rol
- Estado

El servicio UsuarioService permite registrar usuarios y validar el acceso al sistema.

Durante la autenticacion se verifica:

1. Que el usuario exista.
2. Que el usuario se encuentre activo.
3. Que la contrasena ingresada sea correcta.

## Roles

El sistema permite asociar un rol a cada usuario.

Para la demostracion del prototipo se utiliza el rol:

MEDICO

La arquitectura permite agregar posteriormente otros roles como:

- ADMINISTRADOR
- PERSONAL_ADMINISTRATIVO
- LABORATORIO

## Justificacion

La informacion manejada por un sistema hospitalario requiere mecanismos que permitan controlar el acceso.

La implementacion actual permite demostrar el proceso basico de autenticacion y deja preparada la arquitectura para agregar controles de autorizacion segun el rol.

## Limitaciones del prototipo

En esta version la contrasena se utiliza directamente como texto para simplificar la demostracion academica.

Este mecanismo no debe utilizarse en un sistema real.

En una implementacion de produccion las contrasenas deben almacenarse mediante mecanismos seguros y no como texto plano.

Tambien se deben implementar controles adicionales de autorizacion, sesiones y proteccion de la informacion.

## Consecuencias positivas

- Permite demostrar la autenticacion de usuarios.
- Permite asociar roles.
- Permite validar si un usuario esta activo.
- Prepara el sistema para implementar autorizacion.

## Consecuencias negativas

- La seguridad implementada es basica.
- No existe manejo de sesiones.
- No se implementa cifrado de contrasenas en el prototipo.
- Los roles todavia no restringen operaciones especificas.

## Evolucion futura

Una version posterior puede incorporar:

- Almacenamiento seguro de contrasenas.
- Autorizacion basada en roles.
- Manejo de sesiones o tokens.
- Registro de accesos.
- Auditoria de operaciones.
- Proteccion de informacion sensible.

## Resultado

El prototipo permite registrar y autenticar usuarios y demuestra la necesidad de controlar el acceso a la informacion del Sistema Hospitalario Digital.
