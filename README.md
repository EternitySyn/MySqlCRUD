# CLI de Gestión de Usuarios

Aplicación de línea de comandos (CLI) para gestionar usuarios con operaciones CRUD mediante una interfaz de terminal.

---

## 🚀 Requisitos previos

- **Node.js** v16 o superior

---

## 📦 Instalación

1. Cloná el repositorio o descargá los archivos.
2. Instalá las dependencias:

```bash
npm install
```

---

## 🛠️ Uso

La estructura básica del comando es:

```bash
node <archivo>.js <operacion> [argumentos...]
```

### Comandos disponibles

#### Obtener todos los usuarios

Lista todos los usuarios registrados.

```bash
node app.js get
```

---

#### Crear un usuario

```bash
node app.js add <nombre> <email> <password>
```

**Ejemplo:**

```bash
node app.js add juancito juan@gmail.com aguanteelddl
```

---

#### Actualizar un usuario

Actualiza los datos de un usuario existente buscando por su ID.

```bash
node app.js update <nombre> <email> <password> <id>
```

**Ejemplo:**

```bash
node app.js update juan_nuevo juan@email.com nueva_clave 1
```

---

#### Eliminar un usuario

```bash
node app.js delete <id>
```

**Ejemplo:**

```bash
node app.js delete 1
```

---

## 📝 Notas importantes

- Los controladores en `controllers.js` deben estar correctamente configurados para manejar promesas, ya que el archivo principal utiliza `await`.
- Si la operación ingresada no existe, el programa responde con: `"Operación invalida."`.

> **💡 Sugerencia:** Para mayor robustez, envolvé las llamadas a funciones en un bloque `try/catch` dentro del `switch` o en la función `main`. Esto evita que la aplicación se cierre abruptamente ante errores de base de datos o de lógica en los controladores.
