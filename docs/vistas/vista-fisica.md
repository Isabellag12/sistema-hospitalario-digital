# Vista Fisica

## Sistema Hospitalario Digital

La vista fisica muestra donde se ejecutan los componentes del sistema y la infraestructura utilizada para el prototipo.

## Infraestructura actual

En esta primera version, el Sistema Hospitalario Digital se ejecuta de manera local en un computador.

Los principales elementos son:

- Equipo local del usuario.
- Visual Studio Code como entorno de desarrollo.
- Node.js como entorno de ejecucion.
- TypeScript como lenguaje utilizado para desarrollar el prototipo.
- Persistencia temporal en memoria.

## Distribucion actual

Equipo local
  |
  |-- Visual Studio Code
  |
  |-- Sistema Hospitalario Digital
  |       |
  |       |-- Presentacion
  |       |-- Aplicacion
  |       |-- Dominio
  |       |-- Infraestructura
  |
  |-- Node.js
  |
  |-- Persistencia en memoria

## Ejecucion

El codigo fuente se encuentra en la carpeta src.

El proyecto TypeScript se compila mediante:

npx.cmd tsc

Luego, la aplicacion compilada se ejecuta mediante:

node dist/main.js

La compilacion genera la carpeta dist, que contiene el codigo JavaScript utilizado por Node.js.

## Persistencia

Actualmente los datos se almacenan temporalmente en memoria mediante las implementaciones de los repositorios.

Esto significa que la informacion existe solamente durante la ejecucion del programa.

Al finalizar la aplicacion, los datos almacenados en memoria se pierden.

## Evolucion futura

La arquitectura permite que posteriormente la persistencia en memoria sea reemplazada por una base de datos.

Tambien se puede implementar una interfaz web que permita el acceso de pacientes, medicos y personal administrativo.

Una posible infraestructura futura seria:

Cliente web
  |
  v
Aplicacion / API
  |
  v
Servicios del sistema
  |
  v
Base de datos

La integracion con laboratorios externos tambien podria realizarse mediante una API.

## Objetivo de la vista

Esta vista permite identificar la infraestructura utilizada actualmente y mostrar como la arquitectura puede evolucionar hacia una solucion con base de datos, interfaz web e integracion con servicios externos.
    