import router from "./router"
import { RouterProvider } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import { AuthProvider } from './context/AuthContext';
import './App.css'


const App = () => {
  return (
    <div>
      <AuthProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AuthProvider>
    </div>
  )
}

export default App
