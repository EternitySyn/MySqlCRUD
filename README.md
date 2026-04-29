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
npm install mysql2
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
node index.js get
```

---

#### Crear un usuario

```bash
node index.js add <nombre> <email> <password>
```

**Ejemplo:**

```bash
node index.js add juancito juan@gmail.com aguanteelddl
```

---

#### Actualizar un usuario

Actualiza los datos de un usuario existente buscando por su ID.

```bash
node index.js update <nombre> <email> <password> <id>
```

**Ejemplo:**

```bash
node index.js update juan_nuevo juan@email.com nueva_clave 1
```

---

#### Eliminar un usuario

```bash
node index.js delete <id>
```

**Ejemplo:**

```bash
node index.js delete 1
```

---

## 📝 Notas importantes

- Los controladores en `controllers.js` deben estar correctamente configurados para manejar promesas, ya que el archivo principal utiliza `await`.
- Si la operación ingresada no existe, el programa responde con: `"Operación invalida."`.