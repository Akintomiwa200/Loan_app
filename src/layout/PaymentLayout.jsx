import { Outlet } from "react-router-dom"
import FundMap from "../components/dashboardtools/mininav/FundMap"


const PaymentLayout = () => {
    return (
        <div>
            <FundMap />
            <Outlet />
        </div>
    )
}

export default PaymentLayout
