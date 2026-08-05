import { Outlet } from "react-router-dom"
import TopNav from "./TopNav"

const MainLayout = () => {
    return (
        <div className='h-screen w-full flex flex-col'>
            <div className="h-15 bg-slate-100">
                <TopNav />
            </div>
            <div className="flex-1 overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
