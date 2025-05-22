import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ proteger }) => {
  let token = localStorage.getItem("token")
  return token ? proteger : <Navigate to="/" />
}

export default ProtectedRoute