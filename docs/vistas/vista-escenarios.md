# Vista de Escenarios

## Sistema Hospitalario Digital

La vista de escenarios presenta los casos principales que permiten comprobar el funcionamiento de la arquitectura del sistema.

Estos escenarios relacionan las entidades, servicios y repositorios implementados en el prototipo.

## Escenario 1. Registrar paciente

Actor principal: Personal administrativo

Flujo:

1. El usuario ingresa los datos del paciente.
2. PacienteService recibe la informacion.
3. El sistema consulta si existe un paciente con el mismo documento.
4. Si el paciente no existe, se crea una nueva entidad Paciente.
5. PacienteRepository guarda la informacion.
6. El sistema confirma el registro.

Resultado esperado:

El paciente queda registrado en el sistema.

## Escenario 2. Programar cita medica

Actor principal: Personal administrativo

Flujo:

1. Se selecciona el paciente.
2. Se indican el medico, fecha y motivo de la cita.
3. CitaMedicaService crea la cita.
4. La cita inicia con estado PROGRAMADA.
5. CitaMedicaRepository almacena la informacion.

Resultado esperado:

La cita queda asociada al paciente y al medico.

## Escenario 3. Crear historia clinica

Actor principal: Personal autorizado

Flujo:

1. Se identifica el paciente.
2. HistoriaClinicaService consulta si ya existe una historia para el paciente.
3. Si no existe, se crea una nueva HistoriaClinica.
4. HistoriaClinicaRepository guarda la informacion.

Resultado esperado:

El paciente queda asociado a una historia clinica.

## Escenario 4. Registrar atencion medica

Actor principal: Medico

Flujo:

1. El medico identifica la historia clinica.
2. Registra el motivo de consulta.
3. Registra el diagnostico.
4. Registra las observaciones.
5. AtencionMedicaService crea la atencion.
6. AtencionMedicaRepository guarda la informacion.

Resultado esperado:

La atencion queda asociada a la historia clinica del paciente.

## Escenario 5. Solicitar examen de laboratorio

Actor principal: Medico

Flujo:

1. El medico selecciona el paciente.
2. Indica el examen solicitado.
3. OrdenLaboratorioService crea la orden.
4. La orden queda con estado SOLICITADA.
5. OrdenLaboratorioRepository almacena la orden.

Resultado esperado:

Se genera una orden de laboratorio asociada al paciente.

## Escenario 6. Registrar resultado de laboratorio

Actor principal: Personal de laboratorio

Flujo:

1. Se identifica la orden de laboratorio.
2. Se registra el resultado.
3. ResultadoLaboratorioService crea el resultado.
4. El resultado se relaciona con la orden mediante ordenLaboratorioId.
5. ResultadoLaboratorioRepository guarda la informacion.

Resultado esperado:

El resultado queda asociado a la orden correspondiente.

## Escenario 7. Autenticar usuario

Actor principal: Usuario

Flujo:

1. El usuario ingresa su nombre de usuario y contrasena.
2. UsuarioService busca el usuario registrado.
3. El sistema verifica que el usuario exista.
4. El sistema verifica que el usuario se encuentre activo.
5. Se valida la contrasena.
6. Si los datos son correctos, se permite la autenticacion.

Resultado esperado:

El usuario autorizado puede ingresar al sistema.

## Escenario principal integrado

El prototipo implementado en main.ts permite comprobar el siguiente flujo:

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

Adicionalmente se realiza el registro y autenticacion de un usuario con rol MEDICO.

Este escenario permite comprobar la comunicacion entre las diferentes capas y componentes implementados en el proyecto.

## Relacion con la arquitectura

Los escenarios permiten comprobar que las responsabilidades se encuentran separadas.

Las entidades representan la informacion principal del dominio.

Los servicios contienen las operaciones del sistema.

Los repositorios definen las operaciones necesarias para almacenar y consultar la informacion.

La infraestructura implementa temporalmente los repositorios mediante almacenamiento en memoria.
