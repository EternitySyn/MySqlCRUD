import { db } from "./config.js"

const getUsers = async () => {
  const q = `SELECT * FROM users`
  const [response] = await db.query(q)
  return response
}

// declaración de funciónes
const createUser = async (username, email, password) => {
  // validaciones
  if (!username || !email || !password) {
    return "Data invalida, necesitas enviar username, email y password para registrar un usuario."
  }

  if (!email.endsWith("@gmail.com")) {
    return "El email debe terminar en gmail.com"
  }

  const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`
 // generacion de UUID
  const [response] = await db.query(q, [crypto.randomUUID(), username, email, password])

  if (response.serverStatus === 2) {
    return "Usuario creado con éxito."
  }
}

const updateUser = async (id, updates) => {
  if (!id) {
    return "ID requerido"
  }

  const q = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`
  const { username, email, password } = updates;
  const [response] = await db.query(q, [username, email, password, id])

  if (response.affectedRows === 0) {
    return "Usuario no encontrado";
  }
  return "Usuario actualizado exitosamente";
}

const deleteUser = async (id) => {
  const q = `DELETE from users WHERE id = ?;`
  const [response] = await db.query(q, [id]);

  if (response.serverStatus === 2) {
    return "Usuario/s eliminado/s"
  }
}

export { getUsers, createUser, updateUser, deleteUser }