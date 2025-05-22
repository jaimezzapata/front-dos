import { usuarios } from "../src/data/dataBase"

export function buscarUsuario(email, password){
    let auth = usuarios.find((item)=> item.correo == email && item.contrasena == password )
    return auth
}