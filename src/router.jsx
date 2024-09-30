import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/dashboard/Profile'
// import Account from './pages/dashboard/Account'
import Loan from './pages/dashboard/Loan'
import Branches from './pages/dashboard/Branches'
import HomePage from "./pages/HomePage"
import SignUp from './pages/signup/SignUp'
import Upload from './pages/upload/Upload'
import Transfer from './pages/dashboard/Transfer'
import Login from './pages/login/Login'
import Pin from './pages/pin/Pin'
import Forget from './pages/forgetpassword/Forget'
import OtpVerify from './pages/otpverify/OtpVerify'
import ApplicationoSummary from './pages/dashboard/ApplicationSummary'
import Decline from './pages/decline/Decline'
import Success from './pages/success/Success'
import PaymentLayout from './layout/PaymentLayout'
import Withdrawal from './pages/dashboard/Withdrawal'
import LoanLayout from './layout/LoanLayout'
import ApplyForLoan from './pages/dashboard/ApplyForLoan'
import CalculateLoan from './pages/dashboard/CalculateLoan'
import UploadDocumentLoan from './pages/dashboard/UploadDocumentLoan'
import PayLoan from './pages/dashboard/PayLoan'
import TransactionHistory from './pages/dashboard/TransactionHistory'
import ContactLoan from './pages/dashboard/ContactLoan'
import Repayment from './pages/dashboard/Repayment'
import AccountLayout from './layout/AccountLayout'
import AccountStatement from './pages/dashboard/AccountStatement'
import Balance from './pages/dashboard/Balance'
import Services from './pages/dashboard/Services'
import Alltransaction from './pages/dashboard/Alltransaction'
import Loading from './pages/loading/Loading'


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: '/load',
        element:<Loading/>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "/forget",
        element: <Forget />
    },
    {
        path: '/pin',
        element: <Pin />
    },
    {
        path: '/summary',
        element: <ApplicationoSummary />
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
        path: '/decline',
        element: < Decline />
    },
    {
        path: '/success',
        element: < Success />
    }
    ,
    {
        path: '/otp',
        element: < OtpVerify />
    },
    {
        path: '/application',
        element: < ApplicationoSummary />
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
                path: '/dashboard/loan',
                element: <Loan />
            },
            {
                path: '/dashboard/account',
                element: <AccountLayout />,
                children: [
                    {
                        index: true,
                        element: <TransactionHistory />
                    },
                    {
                        path: '/dashboard/account/balance',
                        element: <Balance />
                    },
                    {
                        path: '/dashboard/account/statement',
                        element: <AccountStatement />
                    },
                    {
                        path: '/dashboard/account/service',
                        element: <Services />
                    }
                ]
            },
            {
                path: '/dashboard/trans',
                element: <Alltransaction />
            },

            {
                path: "/dashboard/loan/s",
                element: <LoanLayout />,
                children: [
                    {
                        index: true,
                        element: <PayLoan />
                    },
                    {
                        path: '/dashboard/loan/s/apply',
                        element: <ApplyForLoan />
                    },
                    {
                        path: '/dashboard/loan/s/calculate',
                        element: <CalculateLoan />
                    },
                    {
                        path: '/dashboard/loan/s/upload',
                        element: <UploadDocumentLoan />
                    },
                    {
                        path: '/dashboard/loan/s/contact',
                        element: <ContactLoan />
                    },
                    {
                        path: '/dashboard/loan/s/repay',
                        element: <Repayment />
                    }
                ]
            },
            {
                path: "/dashboard/branches",
                element: <Branches />
            },
            {
                path: "/dashboard/transfer",
                element: <PaymentLayout />,
                children: [
                    {
                        index: true,
                        element: <Transfer />
                    },
                    {
                        path: '/dashboard/transfer/withdraw',
                        element: <Withdrawal />
                    }
                ]
            }
        ]
    }
])

export default router