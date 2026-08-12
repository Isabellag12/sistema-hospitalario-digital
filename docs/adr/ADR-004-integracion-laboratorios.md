# ADR-004 - Integracion con Laboratorios

## Estado

Propuesta para evolucion futura.

## Contexto

El Sistema Hospitalario Digital debe permitir gestionar ordenes y resultados de laboratorio.

En el prototipo actual se implementaron las entidades, servicios y repositorios necesarios para registrar ordenes de laboratorio y sus resultados.

Sin embargo, actualmente no existe una conexion real con un sistema externo de laboratorio.

## Decision

Se decide mantener el modulo de laboratorio separado de los demas componentes del sistema.

El prototipo incluye:

- OrdenLaboratorio
- OrdenLaboratorioService
- OrdenLaboratorioRepository
- OrdenLaboratorioRepositoryMemoria
- ResultadoLaboratorio
- ResultadoLaboratorioService
- ResultadoLaboratorioRepository
- ResultadoLaboratorioRepositoryMemoria

Para una version futura se propone implementar una interfaz de integracion que permita comunicarse con sistemas externos de laboratorio.

## Flujo actual

Medico
  |
  v
OrdenLaboratorioService
  |
  v
OrdenLaboratorio
  |
  v
ResultadoLaboratorioService
  |
  v
ResultadoLaboratorio

En el prototipo las ordenes y resultados son registrados directamente en el sistema.

## Integracion futura

Una version posterior podria utilizar el siguiente flujo:

Sistema Hospitalario Digital
  |
  v
Servicio de Integracion
  |
  v
API
  |
  v
Sistema de Laboratorio Externo

El servicio de integracion seria responsable de enviar las ordenes y recibir los resultados provenientes del laboratorio.

## Justificacion

Mantener la integracion separada permite evitar que las reglas principales del sistema dependan directamente de un proveedor o tecnologia externa.

Tambien facilita modificar posteriormente el mecanismo de comunicacion sin cambiar las entidades principales del dominio.

## Consecuencias positivas

- Se mantiene separada la integracion externa.
- Facilita incorporar una API en el futuro.
- Reduce el acoplamiento con sistemas externos.
- Permite mantener las reglas del dominio independientes.

## Consecuencias negativas

- La integracion externa no esta implementada en el prototipo.
- Actualmente las ordenes y resultados se registran de manera local.
- Se necesitara implementar y probar la comunicacion con sistemas externos en una version posterior.

## Resultado

El prototipo demuestra la gestion interna de ordenes y resultados de laboratorio.

La conexion con un laboratorio externo queda definida como una evolucion futura de la arquitectura.
