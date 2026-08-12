# Sistema Hospitalario Digital

Proyecto integrador de la asignatura Arquitectura del Software.

## Descripcion

El Sistema Hospitalario Digital es un prototipo desarrollado para representar algunos de los procesos principales de una institucion de salud.

El sistema permite trabajar con pacientes, citas medicas, historias clinicas, atenciones medicas, ordenes y resultados de laboratorio, ademas del registro y autenticacion de usuarios.

El proyecto fue organizado utilizando una arquitectura en capas y documentado mediante un Software Architecture Document (SAD).

## Funcionalidades

El prototipo permite:

- Registrar pacientes.
- Programar citas medicas.
- Cancelar citas medicas.
- Crear historias clinicas.
- Registrar atenciones medicas.
- Crear ordenes de laboratorio.
- Registrar resultados de laboratorio.
- Registrar usuarios.
- Autenticar usuarios.

## Arquitectura

El sistema utiliza una arquitectura en capas dividida en:

- Presentacion
- Aplicacion
- Dominio
- Infraestructura

Esta organizacion permite separar las responsabilidades del sistema.

## Estructura del proyecto

sistema-hospitalario-digital/
  |
  |-- docs/
  |     |
  |     |-- adr/
  |     |-- vistas/
  |     |-- SAD.md
  |
  |-- src/
  |     |
  |     |-- aplicacion/
  |     |-- dominio/
  |     |-- infraestructura/
  |     |-- presentacion/
  |     |-- main.ts
  |
  |-- casos-de-uso.md
  |-- README.md
  |-- package.json
  |-- tsconfig.json

## Tecnologias utilizadas

- TypeScript
- Node.js
- Visual Studio Code
- Git
- GitHub

## Persistencia

Para esta version del proyecto se utiliza persistencia en memoria.

Los repositorios almacenan temporalmente la informacion mientras el programa se encuentra en ejecucion.

Esta implementacion puede ser reemplazada posteriormente por una base de datos.

## Modulos principales

### Pacientes

Gestiona la informacion basica de los pacientes.

### Citas medicas

Permite programar y cancelar citas.

### Historia clinica

Permite crear la historia clinica correspondiente a cada paciente.

### Atencion medica

Permite registrar motivo de consulta, diagnostico y observaciones.

### Laboratorio

Permite crear ordenes de laboratorio y registrar sus resultados.

### Usuarios

Permite registrar usuarios y realizar una autenticacion basica.

## Instalacion

Para instalar las dependencias del proyecto se debe ejecutar:

npm install

## Compilacion

Para compilar el proyecto:

npx tsc

## Ejecucion

Despues de compilar, ejecutar:

node dist/main.js

## Ejemplo del flujo implementado

El archivo main.ts ejecuta un escenario de prueba que realiza:

1. Registro de un paciente.
2. Programacion de una cita medica.
3. Creacion de la historia clinica.
4. Registro de una atencion medica.
5. Creacion de una orden de laboratorio.
6. Registro de un resultado de laboratorio.
7. Registro de un usuario.
8. Autenticacion del usuario.

## Documentacion

La documentacion arquitectonica se encuentra en la carpeta docs.

El archivo SAD.md contiene la descripcion general de la arquitectura.

La carpeta vistas contiene las diferentes vistas arquitectonicas.

La carpeta adr contiene las principales decisiones tomadas durante el desarrollo del proyecto.

## Estado del proyecto

El proyecto corresponde a un prototipo academico.

La persistencia en memoria, la autenticacion basica y la ejecucion mediante main.ts se utilizan para demostrar el funcionamiento de la arquitectura.

Elementos como una base de datos permanente, una interfaz grafica y la integracion real con sistemas externos pueden incorporarse en futuras versiones.
