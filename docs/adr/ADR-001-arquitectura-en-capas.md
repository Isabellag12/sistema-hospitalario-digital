# ADR-001 - Arquitectura en Capas

## Estado

Aceptada.

## Contexto

El Sistema Hospitalario Digital necesita manejar diferentes procesos como pacientes, citas medicas, historias clinicas, atenciones medicas, laboratorio y usuarios.

Se necesita una estructura que permita organizar el codigo y separar las responsabilidades de cada parte del sistema.

## Decision

Se decide utilizar una arquitectura en capas.

El sistema se divide en:

- Presentacion
- Aplicacion
- Dominio
- Infraestructura

La capa de dominio contiene las entidades y las interfaces de los repositorios.

La capa de aplicacion contiene los servicios que ejecutan las operaciones del sistema.

La capa de infraestructura contiene las implementaciones utilizadas para almacenar la informacion.

La capa de presentacion queda preparada para la interaccion con los usuarios.

## Justificacion

Esta arquitectura permite mantener separadas las responsabilidades y facilita la organizacion del proyecto.

Tambien permite cambiar elementos de infraestructura sin modificar directamente las entidades y servicios principales.

## Consecuencias positivas

- El codigo queda organizado.
- Existe separacion de responsabilidades.
- Facilita el mantenimiento.
- Permite cambiar la forma de persistencia.
- Facilita agregar nuevos modulos.

## Consecuencias negativas

- Se necesita una mayor cantidad de archivos.
- Es necesario mantener correctamente las dependencias entre las capas.
- La estructura puede parecer mas compleja para un prototipo pequeno.

## Resultado

La arquitectura en capas fue implementada en el proyecto mediante las carpetas dominio, aplicacion, infraestructura y presentacion.
