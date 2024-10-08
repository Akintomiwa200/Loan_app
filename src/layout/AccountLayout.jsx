import { Outlet } from "react-router-dom"
import AccountMap from "../components/dashboardtools/mininav/AccountMap"
import Account from "../pages/dashboard/Account"


const AccountLayout = () => {
    return (
        <div>
            <div>
                <Account />
            </div>
            <AccountMap />
            <Outlet />
        </div>
    )
}

export default AccountLayout