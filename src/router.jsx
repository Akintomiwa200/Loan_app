import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/dashboard/Profile'
import Account from './pages/dashboard/Account'
import Loan from './pages/dashboard/Loan'
import Branches from './pages/dashboard/Branches'
import Home from "./pages/Home"
import Login from "./pages/login/Login"
import SignUp from './pages/signup/Signup'
import Upload from './pages/upload/Upload'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/Login',
        element: < Login />
    },
    {
        path: '/SignUp',
        element: < SignUp />
    },
    {
        path: '/Upload',
        element: < Upload />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/dashboard/profile",
                element: <Profile />
            },
            {
                path: "/dashboard/account",
                element: <Account />
            },
            {
                path: "/dashboard/loan",
                element: <Loan />
            },
            {
                path: "/dashboard/branches",
                element: <Branches />
            }
        ]
    }
])

export default router