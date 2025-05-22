import { data } from "../src/data/dataBase"

export function buscarUsuario(email, password){
    let auth = data.find((item)=> item.correo == email && item.contrasena == password )
    return auth
}