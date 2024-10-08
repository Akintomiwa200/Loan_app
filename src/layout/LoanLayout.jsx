import { Outlet } from "react-router-dom"
import LoanMap from "../components/dashboardtools/mininav/LoanMap"


const LoanLayout = () => {
    return (
        <div>
            <LoanMap />
            <Outlet />
        </div>
    )
}

export default LoanLayout
