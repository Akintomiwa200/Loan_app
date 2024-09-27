import router from "./router"
import { RouterProvider } from "react-router-dom"
// import { UserProvider } from "./context/UserContext"
import './App.css'


const App = () => {
  return (
    <div>
      {/* <UserProvider> */}
      <RouterProvider router={router} />
      {/* </UserProvider> */}
    </div>
  )
}

export default App
