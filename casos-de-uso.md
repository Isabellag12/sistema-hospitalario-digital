# Casos de Uso - Sistema Hospitalario Digital

## CU-01 - Registrar paciente

Actor principal: Personal administrativo

Descripcion:

Permite registrar la informacion basica de un paciente en el sistema.

Flujo principal:

1. El personal administrativo ingresa los datos del paciente.
2. El sistema busca si existe un paciente con el mismo documento.
3. Si no existe, se crea el paciente.
4. El sistema guarda la informacion.
5. Se confirma el registro.

Resultado:

El paciente queda registrado en el sistema.

---

## CU-02 - Programar cita medica

Actor principal: Personal administrativo

Descripcion:

Permite programar una cita medica para un paciente.

Flujo principal:

1. Se identifica el paciente.
2. Se indica el medico.
3. Se registra la fecha de la cita.
4. Se registra el motivo.
5. El sistema crea la cita con estado PROGRAMADA.

Resultado:

La cita queda registrada y relacionada con el paciente.

---

## CU-03 - Cancelar cita medica

Actor principal: Personal administrativo

Descripcion:

Permite cancelar una cita que se encuentra registrada.

Flujo principal:

1. Se identifica la cita.
2. El sistema busca la cita por su identificador.
3. Si existe, cambia su estado a CANCELADA.
4. El sistema confirma la operacion.

Resultado:

La cita queda con estado CANCELADA.

---

## CU-04 - Crear historia clinica

Actor principal: Personal autorizado

Descripcion:

Permite crear la historia clinica correspondiente a un paciente.

Flujo principal:

1. Se identifica el paciente.
2. El sistema consulta si el paciente ya tiene una historia clinica.
3. Si no existe, se crea una nueva historia.
4. Se relaciona la historia con el paciente.

Resultado:

El paciente queda asociado a una historia clinica.

---

## CU-05 - Registrar atencion medica

Actor principal: Medico

Descripcion:

Permite registrar la informacion generada durante una atencion medica.

Flujo principal:

1. Se identifica la historia clinica.
2. El medico registra el motivo de consulta.
3. Registra el diagnostico.
4. Registra las observaciones.
5. El sistema almacena la atencion.

Resultado:

La atencion queda asociada a la historia clinica.

---

## CU-06 - Crear orden de laboratorio

Actor principal: Medico

Descripcion:

Permite generar una orden de laboratorio para un paciente.

Flujo principal:

1. Se identifica el paciente.
2. Se identifica el medico.
3. Se indica el examen solicitado.
4. El sistema crea la orden.
5. La orden queda con estado SOLICITADA.

Resultado:

La orden de laboratorio queda registrada.

---

## CU-07 - Registrar resultado de laboratorio

Actor principal: Personal de laboratorio

Descripcion:

Permite registrar el resultado correspondiente a una orden de laboratorio.

Flujo principal:

1. Se identifica la orden.
2. Se registra el resultado.
3. Se registra la fecha del resultado.
4. El sistema relaciona el resultado con la orden.

Resultado:

El resultado queda asociado a la orden de laboratorio.

---

## CU-08 - Registrar usuario

Actor principal: Administrador

Descripcion:

Permite crear un usuario para acceder al sistema.

Flujo principal:

1. Se ingresa el nombre de usuario.
2. El sistema verifica que el nombre no se encuentre registrado.
3. Se registra la contrasena.
4. Se asigna un rol.
5. El usuario queda activo.

Resultado:

El usuario queda registrado en el sistema.

---

## CU-09 - Autenticar usuario

Actor principal: Usuario

Descripcion:

Permite validar las credenciales de un usuario antes de permitir su acceso.

Flujo principal:

1. El usuario ingresa su nombre de usuario.
2. Ingresa su contrasena.
3. El sistema verifica que el usuario exista.
4. El sistema verifica que se encuentre activo.
5. Se valida la contrasena.
6. Si la informacion es correcta, la autenticacion es exitosa.

Flujos alternativos:

- Si el usuario no existe, el sistema genera un error.
- Si el usuario esta inactivo, el sistema genera un error.
- Si la contrasena es incorrecta, el sistema genera un error.

Resultado:

El usuario es autenticado correctamente.
